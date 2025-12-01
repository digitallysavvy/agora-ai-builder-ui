// Components
export { AgentVisualizer } from "./components/agent-visualizer"
export type {
  AgentVisualizerProps,
  AgentVisualizerSize,
  AgentVisualizerState,
} from "./components/agent-visualizer"

export { Avatar } from "./components/avatar"
export type { AvatarProps, AvatarSize } from "./components/avatar"

export { Button, buttonVariants } from "./components/button"

export { Card, CardTitle, CardContent } from "./components/card"

export { Chip } from "./components/chip"
export type { ChipProps } from "./components/chip"

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "./components/command"

export {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "./components/conversation"
export type { ConversationProps } from "./components/conversation"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
} from "./components/dropdown-menu"

export { HelloWorld } from "./components/hello-world"
export type { HelloWorldProps } from "./components/hello-world"

export { IconButton } from "./components/icon-button"

export { LiveWaveform } from "./components/live-waveform"
export type { LiveWaveformProps } from "./components/live-waveform"

export { Message, MessageContent } from "./components/message"
export type { MessageProps } from "./components/message"

export { MicButton } from "./components/mic-button"
export type { MicButtonProps, MicButtonState } from "./components/mic-button"

export { MicSelector } from "./components/mic-selector"
export type { MicSelectorProps } from "./components/mic-selector"

export { Popover, PopoverTrigger, PopoverContent } from "./components/popover"

export { Response } from "./components/response"
export type { ResponseProps } from "./components/response"

export { ValuePicker } from "./components/value-picker"
export type { Item } from "./components/value-picker"

// Agora-specific components
export { AudioVisualizer } from "./components/audio-visualizer"
export type { AudioVisualizerProps } from "./components/audio-visualizer"

export { MicButtonWithVisualizer } from "./components/mic-button-with-visualizer"
export type { MicButtonWithVisualizerProps } from "./components/mic-button-with-visualizer"

export { ConvoTextStream, EMessageStatus } from "./components/convo-text-stream"
export type {
  ConvoTextStreamProps,
  IMessageListItem,
} from "./components/convo-text-stream"

// Message Engine types (for consumers using MessageEngine)
export { EMessageEngineMode } from "./lib/message-engine"
export type {
  IUserTranscription,
  IAgentTranscription,
  IMessageInterrupt,
} from "./lib/message-engine"

// Hooks
export { useAudioDevices } from "./hooks/use-audio-devices"
export type {
  AudioDevice,
  UseAudioDevicesReturn,
} from "./hooks/use-audio-devices"

export { useIsMobile } from "./hooks/use-is-mobile"

// Icons
export { PhoneReceiver } from "./icons/PhoneReceiver"

// Utilities
export { cn, renderMarkdownToHtml, decodeStreamMessage } from "./lib/utils"

// Theme utilities
export { getCurrentTheme } from "./lib/theme/apply-theme"
export type { RemoteThemeConfig } from "./lib/theme/apply-theme"
