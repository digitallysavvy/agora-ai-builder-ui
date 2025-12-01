# Agora AI Agent UIKit

A comprehensive component library built on top of [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/), specifically designed for building AI-powered voice and video agent applications with real-time communication.

## Overview

Agora AI Agent UIKit (`@agora/ai-agent-uikit`) provides pre-built, customizable React components specifically designed for AI agents, voice conversations, and real-time interactions. This is a specialized subset of Agora's RTC offerings, focused on AI agent use cases.

The library features:

- **Voice & Audio Components** - Microphone controls, audio device management, waveform visualizations
- **Conversation UI** - Chat interfaces for AI agent interactions
- **Avatar Components** - Support for voice and video AI agents (video avatars coming soon)
- **Full TypeScript Support** - Type-safe component APIs
- **Dark Mode** - Built-in theme support with CSS variables

## Installation

### Option 1: NPM Package (Recommended)

Install the package directly from npm:

```bash
npm install @agora/ai-agent-uikit
# or
pnpm add @agora/ai-agent-uikit
# or
yarn add @agora/ai-agent-uikit
```

Then import components in your React application:

```tsx
import {
  AgentVisualizer,
  Conversation,
  MicSelector,
} from "@agora/ai-agent-uikit"
```

### Option 2: CLI Installation

You can also use the [Agora App Builder CLI](https://www.npmjs.com/package/agora-app-builder-cli) to install individual components:

```bash
# Install all components
npx agora-app-builder-cli@latest components add all

# Install specific components
npx agora-app-builder-cli@latest components add agent-visualizer
```

## Prerequisites

Before using Agora AI Agent UIKit, ensure your React project meets these requirements:

- **Node.js 18** or later
- **React 18+** or React 19+
- **Tailwind CSS** configured in your project

## Local Development & Testing

Want to test the playground or contribute? Follow these steps:

### Quick Start (TL;DR)

```bash
# Clone and setup
git clone https://github.com/agora/agora-ai-agent-uikit.git
cd agora-ai-agent-uikit
pnpm install

# Build the package and start the playground
pnpm build
pnpm --filter www dev

# Visit http://localhost:4000
```

### Detailed Steps

### 1. Clone the Repository

```bash
git clone https://github.com/agora/agora-ai-agent-uikit.git
cd agora-ai-builder-ui
```

### 2. Install Dependencies

This project uses pnpm workspaces. Install dependencies for all packages:

```bash
pnpm install
```

### 3. Build the UIKit Package

Build the `@agora/ai-agent-uikit` package first:

```bash
cd packages/uikit
pnpm build
```

Or build from the root:

```bash
pnpm --filter @agora/ai-agent-uikit build
```

### 4. Run the Playground/Demo

Start the demo app in development mode:

```bash
cd apps/www
pnpm dev
```

Or from the root:

```bash
pnpm --filter www dev
```

The playground will be available at `http://localhost:4000`

### 5. Development Workflow

When making changes to the UIKit package:

**Option A: Manual rebuild**

```bash
# Make changes to packages/uikit/src/*
cd packages/uikit
pnpm build

# The demo app will hot-reload with the new changes
```

**Option B: Watch mode** (recommended)

```bash
# Terminal 1: Build UIKit in watch mode
cd packages/uikit
pnpm dev

# Terminal 2: Run the demo app
cd apps/www
pnpm dev
```

### 6. Build Everything

To build both the package and demo app:

```bash
# From root
pnpm build
```

This uses Turbo to build all packages in the correct order.

### Project Structure

```
agora-ai-builder-ui/
├── packages/
│   └── uikit/              # @agora/ai-agent-uikit package
│       ├── src/
│       │   ├── components/ # UI components
│       │   ├── hooks/      # React hooks
│       │   ├── icons/      # Icon components
│       │   ├── lib/        # Utilities
│       │   ├── assets/     # Lottie animations
│       │   └── index.ts    # Main exports
│       ├── dist/           # Built files (after pnpm build)
│       ├── tsup.config.ts  # Build configuration
│       └── package.json
│
└── apps/
    └── www/                # Demo/Playground app
        ├── app/            # Next.js app
        ├── registry/       # Component registry (for CLI)
        └── public/         # Static assets (including lottie files)
```

### Troubleshooting

**Issue: "Cannot find module '@agora/ai-agent-uikit'"**

```bash
# Make sure you've built the package first
cd packages/uikit
pnpm build
```

**Issue: Changes not reflecting in the demo**

```bash
# Rebuild the package and restart the demo
cd packages/uikit
pnpm build
cd ../apps/www
# Stop and restart the dev server (Ctrl+C, then pnpm dev)
```

**Issue: Lottie animations not showing**

```bash
# Make sure lottie files are in the public folder
ls apps/www/public/agora-uikit/lottie/
# Should show 7 .lottie files
```

**Issue: pnpm install fails**

```bash
# Make sure you have pnpm installed
npm install -g pnpm

# Try with the correct pnpm version
pnpm --version  # Should be 9.0.6 or compatible
```

**Issue: "Module not found: Can't resolve '@agora/ai-agent-uikit'" in production build**

```bash
# Make sure the package is built first
cd packages/uikit
pnpm build

# Clear Next.js cache and rebuild
cd ../../apps/www
rm -rf .next
pnpm build
```

This is resolved by the `experimental.externalDir` setting in `next.config.mjs`.

### Verify Your Setup

To verify everything is working correctly:

```bash
# 1. Build the package
cd packages/uikit
pnpm build

# 2. Check the build output
ls dist/  # Should show index.js, index.mjs, index.d.ts, and assets/

# 3. Start the playground
cd ../apps/www
pnpm dev

# 4. Visit http://localhost:4000
# You should see the demo page with components
```

## Contributing

Contributions are welcome! We'd love your help making this library better.

**Quick Start for Contributors:**

1. Fork and clone the repository
2. Follow the [Local Development](#local-development--testing) guide
3. Read the detailed [CONTRIBUTING.md](./CONTRIBUTING.md) guide
4. Make your changes and open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on:

- Development workflow
- Adding new components
- Code style and best practices
- Testing your changes
- Submitting pull requests

#### Component Contribution Guide

```
1. Create Component
   └─ Add to: apps/www/registry/agora-ui/ui/my-component.tsx

2. Build Registry
   └─ Run: pnpm registry:build
   └─ Generates: apps/www/registry.json

3. Deploy to Vercel
   └─ Push to main branch
   └─ Registry published to CDN

4. Users Install via CLI
   └─ Run: npx agora-app-builder-cli@latest components add my-component
   └─ CLI fetches from Vercel registry
   └─ Component installed in user's project
```

#### What Happens When You Run `pnpm registry:build`

The registry build script:

1. Scans all components in `apps/www/registry/agora-ui/ui/`
2. Scans all examples in `apps/www/registry/agora-ui/examples/`
3. Creates JSON metadata for each component
4. Generates `registry.json` (for all components)
5. Generates individual component files (for CLI distribution)
6. Deploys to Vercel when code is pushed

#### Scripts Reference

**Package Level Scripts (packages/uikit)**

- `pnpm build` - Build the UIKit package
- `pnpm dev` - Build in watch mode
- `pnpm typecheck` - Type check the package

**Demo App Scripts (apps/www)**

- `pnpm dev` - Start Next.js dev server with Turbopack
- `pnpm build` - Build Next.js application
- `pnpm start` - Start production server
- `pnpm registry:build` - Rebuild component registry (for CLI distribution)

## Support

### Reporting Issues

We use GitHub issue templates to help organize and track issues:

- 🐛 **[Bug Report](./.github/ISSUE_TEMPLATE/bug_report.yml)** - Report bugs or issues with components
- ✨ **[Feature Request](./.github/ISSUE_TEMPLATE/feature_request.yml)** - Suggest new features or enhancements

### Getting Help

- 📖 Check the [documentation](./packages/uikit/README.md) and [examples](./apps/www)
- 💬 Join [GitHub Discussions](../../discussions) for questions and community support
- 🔍 Search [existing issues](../../issues) to see if your question has been answered

### Contributing

This is an **Agora Community Project**. We welcome contributions from the community!

- 📖 Read [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines
- 🤝 Follow our [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
- 🔒 Review our [Security Policy](./.github/SECURITY.md) for vulnerability reporting

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## About Agora

This is an official Agora community project. [Agora](https://www.agora.io) provides building blocks for AI agents using real-time voice and video.
