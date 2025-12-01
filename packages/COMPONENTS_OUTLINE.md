# Components & Widgets Outline

## @agora/ai-agent-uikit

A comprehensive React component library for building AI agents with real-time voice and video communication capabilities.

---

## Table of Contents

1. [Core UI Components](#core-ui-components)
2. [Agora-Specific Components](#agora-specific-components)
3. [Conversation Components](#conversation-components)
4. [Audio Components](#audio-components)
5. [Hooks](#hooks)
6. [Icons](#icons)
7. [Utilities](#utilities)
8. [Theme Utilities](#theme-utilities)

---

## Core UI Components

### Button

- **Component**: `Button`
- **Variants**: `buttonVariants`
- **Description**: Standard button component with variant support
- **Location**: `./components/button`

### IconButton

- **Component**: `IconButton`
- **Description**: Button component optimized for icon-only interactions
- **Location**: `./components/icon-button`

### Card

- **Components**: `Card`, `CardTitle`, `CardContent`
- **Description**: Container component for grouping related content
- **Location**: `./components/card`

### Chip

- **Component**: `Chip`
- **Type**: `ChipProps`
- **Description**: Small badge/chip component for labels and tags
- **Location**: `./components/chip`

### Avatar

- **Component**: `Avatar`
- **Types**: `AvatarProps`, `AvatarSize`
- **Description**: User avatar component with size variants
- **Location**: `./components/avatar`

### Command

- **Components**: `Command`, `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`
- **Description**: Command palette/search interface component
- **Location**: `./components/command`

### DropdownMenu

- **Components**:
  - `DropdownMenu`
  - `DropdownMenuTrigger`
  - `DropdownMenuContent`
  - `DropdownMenuItem`
  - `DropdownMenuCheckboxItem`
  - `DropdownMenuSeparator`
- **Description**: Dropdown menu component built on Radix UI
- **Location**: `./components/dropdown-menu`

### Popover

- **Components**: `Popover`, `PopoverTrigger`, `PopoverContent`
- **Description**: Popover component for floating content
- **Location**: `./components/popover`

### ValuePicker

- **Component**: `ValuePicker`
- **Type**: `Item`
- **Description**: Component for selecting values from a list
- **Location**: `./components/value-picker`

### HelloWorld

- **Component**: `HelloWorld`
- **Type**: `HelloWorldProps`
- **Description**: Example/placeholder component
- **Location**: `./components/hello-world`

---

## Agora-Specific Components

### AgentVisualizer

- **Component**: `AgentVisualizer`
- **Types**: `AgentVisualizerProps`, `AgentVisualizerSize`, `AgentVisualizerState`
- **Description**: Visual component that displays agent state using Lottie animations
- **States**:
  - `not-joined`
  - `joining`
  - `ambient`
  - `listening`
  - `analyzing`
  - `talking`
  - `disconnected`
- **Sizes**: `sm`, `md`, `lg`
- **Features**:
  - Customizable Lottie file paths
  - Base path configuration
  - Per-state path overrides
- **Location**: `./components/agent-visualizer`

### AudioVisualizer

- **Component**: `AudioVisualizer`
- **Type**: `AudioVisualizerProps`
- **Description**: Real-time audio waveform visualization component
- **Location**: `./components/audio-visualizer`

### MicButton

- **Component**: `MicButton`
- **Types**: `MicButtonProps`, `MicButtonState`
- **Description**: Microphone button component for audio input control
- **Location**: `./components/mic-button`

### MicButtonWithVisualizer

- **Component**: `MicButtonWithVisualizer`
- **Type**: `MicButtonWithVisualizerProps`
- **Description**: Combined microphone button with integrated audio visualizer
- **Location**: `./components/mic-button-with-visualizer`

### MicSelector

- **Component**: `MicSelector`
- **Type**: `MicSelectorProps`
- **Description**: Dropdown component for selecting audio input devices
- **Location**: `./components/mic-selector`

### LiveWaveform

- **Component**: `LiveWaveform`
- **Type**: `LiveWaveformProps`
- **Description**: Live audio waveform visualization component
- **Location**: `./components/live-waveform`

---

## Conversation Components

### Conversation

- **Components**: `Conversation`, `ConversationContent`, `ConversationScrollButton`
- **Type**: `ConversationProps`
- **Description**: Container component for conversation/message threads
- **Features**:
  - Auto-scroll functionality
  - Scroll-to-bottom button
  - Customizable height
  - Context API for child components
- **Location**: `./components/conversation`

### Message

- **Components**: `Message`, `MessageContent`
- **Type**: `MessageProps`
- **Description**: Individual message component for displaying chat messages
- **Location**: `./components/message`

### Response

- **Component**: `Response`
- **Type**: `ResponseProps`
- **Description**: Component for displaying agent responses
- **Location**: `./components/response`

### ConvoTextStream

- **Component**: `ConvoTextStream`
- **Types**: `ConvoTextStreamProps`, `IMessageListItem`
- **Enum**: `EMessageStatus`
- **Description**: Advanced conversation text streaming component with real-time message updates
- **Features**:
  - Message list management
  - In-progress message handling
  - Agent UID filtering
  - Multiple message sources (RTC, RTM, auto)
  - Mobile-responsive
  - Auto-scroll with manual override
  - Markdown rendering
- **Location**: `./components/convo-text-stream`

---

## Audio Components

### useAudioDevices Hook

- **Hook**: `useAudioDevices`
- **Types**: `AudioDevice`, `UseAudioDevicesReturn`
- **Description**: React hook for managing audio input/output devices
- **Features**:
  - Device enumeration
  - Permission handling
  - Loading states
  - Error handling
- **Location**: `./hooks/use-audio-devices`

---

## Hooks

### useIsMobile

- **Hook**: `useIsMobile`
- **Description**: React hook to detect mobile device viewport
- **Location**: `./hooks/use-is-mobile`

### useAudioDevices

- **Hook**: `useAudioDevices`
- **Description**: See [Audio Components](#audio-components) section above
- **Location**: `./hooks/use-audio-devices`

---

## Icons

### PhoneReceiver

- **Component**: `PhoneReceiver`
- **Description**: Phone receiver icon component
- **Location**: `./icons/PhoneReceiver`

---

## Utilities

### Utility Functions

- **Functions**:
  - `cn` - Class name utility (combines clsx and tailwind-merge)
  - `renderMarkdownToHtml` - Markdown to HTML renderer
  - `decodeStreamMessage` - Stream message decoder
- **Location**: `./lib/utils`

---

## Theme Utilities

### getCurrentTheme

- **Function**: `getCurrentTheme`
- **Type**: `RemoteThemeConfig`
- **Description**: Utility for applying and managing remote themes
- **Location**: `./lib/theme/apply-theme`

---

## Message Engine Types

### Enums

- **EMessageEngineMode**: Message engine operation modes

### Types

- **IUserTranscription**: User transcription data structure
- **IAgentTranscription**: Agent transcription data structure
- **IMessageInterrupt**: Message interrupt event structure

**Location**: `./lib/message-engine`

---

## Assets

### Lottie Animations

- **Path**: `./assets/lottie/`
- **Files**:
  - `Dark Mode - 340p - 01 - Not Joined.lottie`
  - `Dark Mode - 340p - 02 - Joining.lottie`
  - `Dark Mode - 340p - 03 - Ambient.lottie`
  - `Dark Mode - 340p - 04 - Listening v3.2.lottie`
  - `Dark Mode - 340p - 05 - Analyzing - Scale Down Once.lottie`
  - `Dark Mode - 340p - 06 - Talking v3.lottie`
  - `Dark Mode - 340p - 07 - Disconnected.lottie`

### Styles

- **Path**: `./styles/convo-text-stream.css`
- **Description**: CSS stylesheet for conversation text stream component

---

## Package Information

- **Package Name**: `@agora/ai-agent-uikit`
- **Version**: `0.1.0`
- **Description**: AI Agent UIKit for React - A comprehensive component library for building AI agents that use real-time voice and video communication

### Peer Dependencies

- `react`: ^18.0.0 || ^19.0.0
- `react-dom`: ^18.0.0 || ^19.0.0
- `agora-rtc-react`: >=2.0.0
- `agora-rtm-sdk`: >=2.0.0 (optional)

### Key Dependencies

- `@lottiefiles/dotlottie-react`: Lottie animation support
- `@radix-ui/*`: UI primitives (dropdown-menu, popover, select, slot)
- `cmdk`: Command palette functionality
- `lucide-react`: Icon library
- `tailwind-merge`, `clsx`: Styling utilities

---

## Export Structure

All components, hooks, utilities, and types are exported from the main entry point:

```typescript
import { ComponentName } from "@agora/ai-agent-uikit"
```

### Asset Exports

- `@agora/ai-agent-uikit/assets/*` - Lottie animation files
- `@agora/ai-agent-uikit/styles/*` - CSS stylesheets

---

## Usage Categories

### Voice & Audio

- `MicButton`, `MicButtonWithVisualizer`
- `MicSelector`
- `AudioVisualizer`, `LiveWaveform`
- `useAudioDevices`

### Agent Visualization

- `AgentVisualizer`

### Conversation & Messaging

- `Conversation`, `ConversationContent`, `ConversationScrollButton`
- `Message`, `MessageContent`
- `Response`
- `ConvoTextStream`

### UI Primitives

- `Button`, `IconButton`
- `Card`, `CardTitle`, `CardContent`
- `Chip`
- `Avatar`
- `Command` (and sub-components)
- `DropdownMenu` (and sub-components)
- `Popover` (and sub-components)
- `ValuePicker`

### Utilities & Helpers

- `cn`, `renderMarkdownToHtml`, `decodeStreamMessage`
- `getCurrentTheme`
- `useIsMobile`
- `PhoneReceiver` icon

