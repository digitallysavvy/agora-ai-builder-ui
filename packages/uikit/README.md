# @agora/ai-agent-uikit

An AI Agent UIKit for React developers. A comprehensive component library for building AI-powered voice and video agent applications with real-time communication.

## Installation

```bash
npm install @agora/ai-agent-uikit
# or
pnpm add @agora/ai-agent-uikit
# or
yarn add @agora/ai-agent-uikit
```

## Prerequisites

- React 18+ or React 19+
- Tailwind CSS configured in your project

## Usage

### Basic Example

```tsx
import { AgentVisualizer, Button, HelloWorld } from "@agora/ai-agent-uikit"

function App() {
  return (
    <div>
      <HelloWorld message="Welcome to Agora AI Agent UIKit!" />
      <Button>Click me</Button>
      <AgentVisualizer state="listening" size="md" />
    </div>
  )
}
```

### Available Components

#### Voice & Audio Components

- **AgentVisualizer** - Animated agent visualizer with Lottie animations for different agent states
- **LiveWaveform** - Animated waveform visualization for audio feedback
- **MicButton** - Microphone button with states (idle, listening, processing, error)
- **MicSelector** - Microphone selector with automatic device detection and mute toggle

#### Conversation & Messaging

- **Conversation** - Scrollable conversation container for chat interfaces
- **Message** - Chat message component for user and assistant messages
- **Response** - Message content text component

#### UI Elements

- **Avatar** - Flexible avatar component (images, icons, or initials)
- **Button** - Button component with multiple variants
- **Card** - Composable card component for grouping content
- **Chip** - Pill-shaped wrapper component
- **IconButton** - Icon button with shape and style variants
- **ValuePicker** - Generic dropdown component for selections

#### Utility Components

- **Command** - Combobox component for searchable dropdowns
- **DropdownMenu** - Dropdown menu built with Radix UI
- **Popover** - Popover component

### Lottie Assets

The AgentVisualizer component uses Lottie animations. You have two options:

#### Option 1: Copy assets to your public folder

Copy the lottie files from `node_modules/@agora/ai-agent-uikit/dist/assets/lottie` to your public folder at `/public/agora-uikit/lottie/`.

```tsx
<AgentVisualizer state="listening" />
```

#### Option 2: Use a CDN or custom path

```tsx
<AgentVisualizer
  state="listening"
  lottieBasePath="https://cdn.example.com/lottie"
/>
```

Or override individual states:

```tsx
<AgentVisualizer
  state="listening"
  lottiePaths={{
    listening: "https://cdn.example.com/custom-listening.lottie",
  }}
/>
```

### Hooks

```tsx
import { useAudioDevices } from "@agora/ai-agent-uikit"

function MyComponent() {
  const { devices, loading, error, hasPermission } = useAudioDevices()

  // Use audio devices...
}
```

### Utilities

```tsx
import { cn, getCurrentTheme } from "@agora/ai-agent-uikit"

// Merge class names
const className = cn("base-class", condition && "conditional-class")

// Get current theme variables
const theme = getCurrentTheme()
```

### TypeScript

The package includes full TypeScript definitions. Import types alongside components:

```tsx
import type {
  AgentVisualizerProps,
  MicButtonState,
} from "@agora/ai-agent-uikit"
```

## Tailwind Configuration

Ensure your Tailwind CSS configuration extends the proper theme values. The components use CSS variables for theming.

## Features

- 🎤 **Voice AI Components** - Microphone controls, waveform visualizations, and audio device management
- 💬 **Conversation UI** - Ready-to-use chat interfaces for AI agent interactions
- 🎨 **Customizable** - Built with Tailwind CSS for easy theming
- 📦 **Tree-shakeable** - Import only what you need
- 🔒 **Type-safe** - Full TypeScript support
- ⚡ **Modern** - Built for React 18+ with ESM and CJS support

## Use Cases

- Voice AI assistants and chatbots
- Real-time voice/video agent applications
- AI-powered customer service interfaces
- Interactive voice response (IVR) systems
- Video AI agents and avatars (coming soon)

## Development

This package is built with:

- tsup (for bundling)
- TypeScript
- React 19
- Tailwind CSS 4

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
