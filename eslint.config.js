import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "prettier"),
  {
    settings: {
      next: {
        rootDir: ["apps/*/"],
      },
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    ignores: [
      "**/fixtures/**",
      "**/dist/**",
      "**/out/**",
      "**/node_modules/**",
    ],
  },
]

export default eslintConfig
