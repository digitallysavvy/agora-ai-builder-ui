# Contributing to Agora AI Agent UIKit

Thank you for your interest in contributing to the Agora AI Agent UIKit! This guide will help you get started.

## Development Setup

### Prerequisites

- Node.js 18 or later
- pnpm 9.0.6 or later
- Git

### Getting Started

1. **Fork the repository** on GitHub

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/agora-ai-builder-ui.git
   cd agora-ai-builder-ui
   ```

3. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/agora/agora-ai-builder-ui.git
   ```

4. **Install dependencies**

   ```bash
   pnpm install
   ```

5. **Build the package**

   ```bash
   cd packages/uikit
   pnpm build
   ```

6. **Start the playground**

   ```bash
   cd apps/www
   pnpm dev
   ```

   Visit `http://localhost:4000` to see the playground.

## Development Workflow

### Making Changes

1. **Create a new branch** from `main`

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in `packages/uikit/src/`

3. **Test your changes** in the playground (`apps/www`)

   For the best development experience, run the package in watch mode:

   ```bash
   # Terminal 1
   cd packages/uikit
   pnpm dev

   # Terminal 2
   cd apps/www
   pnpm dev
   ```

4. **Ensure builds succeed**

   ```bash
   pnpm build
   ```

5. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

   We follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

6. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request** on GitHub

## Adding New Components

### Component Structure

Components should follow this structure:

```tsx
"use client"

import * as React from "react"

// Other imports...

import { cn } from "../lib/utils"

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Description of the prop
   * @default "default-value"
   */
  myProp?: string
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, myProp = "default-value", ...props }, ref) => {
    return (
      <div ref={ref} className={cn("base-classes", className)} {...props}>
        {/* Component content */}
      </div>
    )
  }
)

MyComponent.displayName = "MyComponent"
```

### Steps to Add a Component

1. **Create the component file** in `packages/uikit/src/components/my-component.tsx`

2. **Export from barrel file** in `packages/uikit/src/index.ts`:

   ```ts
   export { MyComponent } from "./components/my-component"
   export type { MyComponentProps } from "./components/my-component"
   ```

3. **Create a demo** in `apps/www/registry/agora-ui/examples/my-component-demo.tsx`

4. **Register in registry** (if distributing via CLI) in `apps/www/registry/registry-ui.ts`

5. **Test the component** in the playground

6. **Build and verify**
   ```bash
   cd packages/uikit
   pnpm build
   ```

## Code Style

- Use TypeScript for all files
- Use functional components with hooks
- Export types alongside components
- Follow the existing code style (Prettier will format automatically)
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

## Testing Your Changes

### Manual Testing

1. Build the package: `cd packages/uikit && pnpm build`
2. Start the playground: `cd apps/www && pnpm dev`
3. Test all component states and variations
4. Test on different browsers (Chrome, Firefox, Safari)
5. Test responsive behavior

### Type Checking

```bash
cd packages/uikit
pnpm typecheck
```

## Component Guidelines

### Accessibility

- Use semantic HTML elements
- Include ARIA labels where appropriate
- Ensure keyboard navigation works
- Test with screen readers when possible

### Styling

- Use Tailwind CSS classes
- Use CSS variables for theme colors
- Support dark mode
- Keep styles consistent with existing components

### Props

- Use TypeScript for type safety
- Extend appropriate HTML element props
- Document all props with JSDoc comments
- Use sensible defaults
- Support className override

### Performance

- Use React.memo() for expensive components
- Avoid unnecessary re-renders
- Keep bundle size small

## Documentation

When adding a new component:

1. Add JSDoc comments to the component and its props
2. Create a demo in the playground
3. Update the README if it's a major component

## Pull Request Process

1. Update documentation if needed
2. Ensure all builds pass: `pnpm build`
3. Write a clear PR description explaining your changes
4. Link any related issues
5. Request review from maintainers
6. Address feedback and update your PR

## Need Help?

- Open an issue for bugs or feature requests
- Join discussions in existing issues
- Ask questions in your PR

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
