import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-popover",
    "@radix-ui/react-select",
    "@radix-ui/react-slot",
    "lucide-react",
    "@lottiefiles/dotlottie-react",
    "cmdk",
    "agora-rtc-react",
    "agora-rtm-sdk",
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
  // Copy lottie assets and CSS styles to dist
  onSuccess: async () => {
    const fs = await import("fs/promises")
    const path = await import("path")
    
    // Copy assets
    const srcAssets = path.join(process.cwd(), "src/assets")
    const distAssets = path.join(process.cwd(), "dist/assets")
    
    try {
      await fs.cp(srcAssets, distAssets, { recursive: true })
      console.log("✓ Copied assets to dist/")
    } catch (error) {
      console.error("Failed to copy assets:", error)
    }

    // Copy styles
    const srcStyles = path.join(process.cwd(), "src/styles")
    const distStyles = path.join(process.cwd(), "dist/styles")
    
    try {
      await fs.cp(srcStyles, distStyles, { recursive: true })
      console.log("✓ Copied styles to dist/")
    } catch (error) {
      console.error("Failed to copy styles:", error)
    }
  },
})

