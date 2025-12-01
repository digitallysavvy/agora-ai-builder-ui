/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export for both Vercel and GitHub Pages
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["@agora/ai-agent-uikit"],
  // Fix workspace resolution in production builds
  experimental: {
    externalDir: true,
  },
  // Silence multiple lockfile warnings
  outputFileTracingRoot: new URL("../../", import.meta.url).pathname,
  // GitHub Pages configuration - set basePath for repo deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
}

export default nextConfig
