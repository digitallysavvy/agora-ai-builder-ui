import * as React from 'react';
import React__default, { HTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { Command as Command$1 } from 'cmdk';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { IMicrophoneAudioTrack } from 'agora-rtc-react';
import { ClassValue } from 'clsx';

type AgentVisualizerState = "not-joined" | "joining" | "ambient" | "listening" | "analyzing" | "talking" | "disconnected";
type AgentVisualizerSize = "sm" | "md" | "lg";
interface AgentVisualizerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Current state of the agent visualizer
     */
    state: AgentVisualizerState;
    /**
     * Size of the visualizer
     * @default "md"
     */
    size?: AgentVisualizerSize;
    /**
     * Base path for lottie files.
     * @default "/agora-uikit/lottie"
     * @example "https://cdn.example.com/lottie"
     * @example "/custom-path/lottie"
     */
    lottieBasePath?: string;
    /**
     * Custom paths for specific states. Overrides lottieBasePath for specified states.
     * @example { "listening": "https://cdn.example.com/custom-listening.lottie" }
     */
    lottiePaths?: Partial<Record<AgentVisualizerState, string>>;
}
declare const AgentVisualizer: React.ForwardRefExoticComponent<AgentVisualizerProps & React.RefAttributes<HTMLDivElement>>;

type AvatarSize = "sm" | "md" | "lg";
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Image URL for the avatar
     */
    src?: string;
    /**
     * Icon to display (takes precedence over initials if no image)
     */
    icon?: React.ReactNode;
    /**
     * Custom initials to display (takes precedence over name)
     */
    initials?: string;
    /**
     * Full name (used to generate initials if initials not provided)
     */
    name?: string;
    /**
     * Size of the avatar
     * @default "md"
     */
    size?: AvatarSize;
    /**
     * Background color for the avatar
     * @default "bg-gradient-to-br from-blue-500 to-blue-600"
     */
    bgColor?: string;
    /**
     * Alt text for image
     */
    alt?: string;
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "secondary" | "ghost" | null | undefined;
    size?: "icon" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    label?: string;
    labelClassName?: string;
}
declare function Button({ className, variant, size, asChild, label, labelClassName, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

declare function Card({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLDivElement>>;

declare function Command({ className, ...props }: React.ComponentProps<typeof Command$1>): react_jsx_runtime.JSX.Element;
declare function CommandInput({ className, ...props }: React.ComponentProps<typeof Command$1.Input>): react_jsx_runtime.JSX.Element;
declare function CommandList({ className, ...props }: React.ComponentProps<typeof Command$1.List>): react_jsx_runtime.JSX.Element;
declare function CommandEmpty({ ...props }: React.ComponentProps<typeof Command$1.Empty>): react_jsx_runtime.JSX.Element;
declare function CommandGroup({ className, ...props }: React.ComponentProps<typeof Command$1.Group>): react_jsx_runtime.JSX.Element;
declare function CommandItem({ className, ...props }: React.ComponentProps<typeof Command$1.Item>): react_jsx_runtime.JSX.Element;

interface ConversationProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Height of the conversation container
     * @default "h-[400px]"
     */
    height?: string;
}
declare const Conversation: React.ForwardRefExoticComponent<ConversationProps & React.RefAttributes<HTMLDivElement>>;
interface ConversationContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Padding class
     * @default "p-4"
     */
    padding?: string;
}
declare const ConversationContent: React.ForwardRefExoticComponent<ConversationContentProps & React.RefAttributes<HTMLDivElement>>;
interface ConversationScrollButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const ConversationScrollButton: React.ForwardRefExoticComponent<ConversationScrollButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>): react_jsx_runtime.JSX.Element;

interface HelloWorldProps extends React.HTMLAttributes<HTMLDivElement> {
    message?: string;
}
declare function HelloWorld({ className, message, ...props }: HelloWorldProps): react_jsx_runtime.JSX.Element;

declare const iconButtonVariants: (props?: ({
    shape?: "round" | "square" | null | undefined;
    variant?: "filled" | "outlined" | "standard" | null | undefined;
    size?: "sm" | "md" | "lg" | "default" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface IconButtonProps extends React.ComponentProps<"button">, VariantProps<typeof iconButtonVariants> {
}
declare function IconButton({ className, shape, variant, size, ...props }: IconButtonProps): react_jsx_runtime.JSX.Element;

type LiveWaveformProps = HTMLAttributes<HTMLDivElement> & {
    active?: boolean;
    data?: number[];
    deviceId?: string;
    fftSize?: number;
    smoothingTimeConstant?: number;
    sensitivity?: number;
    barWidth?: number;
    barGap?: number;
    barRadius?: number;
    barColor?: string;
    fadeEdges?: boolean;
    fadeWidth?: number;
    height?: string | number;
    onError?: (error: Error) => void;
};
declare const LiveWaveform: ({ active, data: externalData, deviceId, fftSize, smoothingTimeConstant, sensitivity, barWidth, barGap, barRadius, barColor, fadeEdges, fadeWidth, height, onError, className, ...props }: LiveWaveformProps) => react_jsx_runtime.JSX.Element;

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Who is sending the message
     */
    from: "user" | "assistant";
    /**
     * Optional avatar component to display
     */
    avatar?: React.ReactNode;
}
declare const Message: React.ForwardRefExoticComponent<MessageProps & React.RefAttributes<HTMLDivElement>>;
interface MessageContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const MessageContent: React.ForwardRefExoticComponent<MessageContentProps & React.RefAttributes<HTMLDivElement>>;

type MicButtonState = "idle" | "listening" | "processing" | "error";
interface MicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Current state of the mic button
     * @default "idle"
     */
    state?: MicButtonState;
    /**
     * Icon to display (defaults to Mic icon)
     */
    icon?: React.ReactNode;
    /**
     * Show error badge (orange circle with exclamation) when in error state
     * Indicates permission denied or device access error
     * @default false
     */
    showErrorBadge?: boolean;
}
declare const MicButton: React.ForwardRefExoticComponent<MicButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface MicSelectorProps {
    value?: string;
    onValueChange?: (deviceId: string) => void;
    muted?: boolean;
    onMutedChange?: (muted: boolean) => void;
    disabled?: boolean;
    className?: string;
    /**
     * Current state of the mic selector (idle, listening, processing, error)
     * @default "idle"
     */
    state?: MicButtonState;
}
declare function MicSelector({ value, onValueChange, muted, onMutedChange, disabled, className, }: MicSelectorProps): react_jsx_runtime.JSX.Element;

declare function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: React.ComponentProps<typeof PopoverPrimitive.Content>): react_jsx_runtime.JSX.Element;

interface ResponseProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const Response: React.ForwardRefExoticComponent<ResponseProps & React.RefAttributes<HTMLDivElement>>;

interface Item {
    id: string;
    name: string;
}
interface ValuePickerProps {
    items: Item[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
declare const ValuePicker: React.ForwardRefExoticComponent<ValuePickerProps & React.RefAttributes<HTMLButtonElement>>;

type ILocalAudioTrack = {
    getMediaStreamTrack: () => MediaStreamTrack;
};
type IRemoteAudioTrack = {
    getMediaStreamTrack: () => MediaStreamTrack;
};
interface AudioVisualizerProps {
    track: ILocalAudioTrack | IRemoteAudioTrack | MediaStream | undefined;
    gradientColors?: string[];
    className?: string;
}
declare const AudioVisualizer: React__default.FC<AudioVisualizerProps>;

interface MicButtonWithVisualizerProps {
    isEnabled: boolean;
    setIsEnabled: (enabled: boolean) => void;
    track: IMicrophoneAudioTrack | MediaStream | null;
    enabledColor?: string;
    disabledColor?: string;
    onToggle?: () => void | Promise<void>;
    className?: string;
    /**
     * @deprecated Use `track` instead. Will be removed in next major version.
     */
    localMicrophoneTrack?: IMicrophoneAudioTrack | null;
}
declare function MicButtonWithVisualizer({ isEnabled, setIsEnabled, track, enabledColor, disabledColor, onToggle, className, localMicrophoneTrack, }: MicButtonWithVisualizerProps): react_jsx_runtime.JSX.Element;

type TDataChunkMessageWord = {
    word: string;
    start_ms: number;
    duration_ms: number;
    stable: boolean;
};
/**
 * Represents the current status of a message in the system
 *
 * IN_PROGRESS (0): Message is still being processed/streamed
 * END (1): Message has completed normally
 * INTERRUPTED (2): Message was interrupted before completion
 */
declare enum EMessageStatus {
    IN_PROGRESS = 0,
    END = 1,
    INTERRUPTED = 2
}
declare enum ETranscriptionObjectType {
    USER_TRANSCRIPTION = "user.transcription",
    AGENT_TRANSCRIPTION = "assistant.transcription",
    MSG_INTERRUPTED = "message.interrupt"
}
/**
 * Defines different modes for message rendering
 *
 * TEXT: Processes messages as complete text blocks without word-by-word processing.
 * Messages are handled as entire units.
 *
 * WORD: Processes messages word by word, enabling granular control.
 * Suitable for real-time word-by-word display or analysis.
 *
 * AUTO: Automatically determines the most suitable processing mode (TEXT or WORD)
 * based on context or message characteristics.
 */
declare enum EMessageEngineMode {
    TEXT = "text",
    WORD = "word",
    AUTO = "auto"
}
interface ITranscriptionBase {
    object: ETranscriptionObjectType;
    text: string;
    start_ms: number;
    duration_ms: number;
    language: string;
    turn_id: number;
    stream_id: number;
    user_id: string;
    words: TDataChunkMessageWord[] | null;
}
interface IUserTranscription extends ITranscriptionBase {
    object: ETranscriptionObjectType.USER_TRANSCRIPTION;
    final: boolean;
}
interface IAgentTranscription extends ITranscriptionBase {
    object: ETranscriptionObjectType.AGENT_TRANSCRIPTION;
    quiet: boolean;
    turn_seq_id: number;
    turn_status: EMessageStatus;
}
interface IMessageInterrupt {
    object: ETranscriptionObjectType.MSG_INTERRUPTED;
    message_id: string;
    data_type: "message";
    turn_id: number;
    start_ms: number;
    send_ts: number;
}
/**
 * Represents a message item in the chat history
 * @property uid - Unique identifier for the message sender
 * @property turn_id - ID representing the turn/sequence in the conversation
 * @property text - The actual message content/transcript
 * @property status - Current status of the message (e.g. in progress, completed, interrupted)
 */
interface IMessageListItem {
    uid: number;
    turn_id: number;
    text: string;
    status: EMessageStatus;
}

interface ConvoTextStreamProps {
    messageList: IMessageListItem[];
    currentInProgressMessage?: IMessageListItem | null;
    agentUID: string | undefined;
    messageSource?: "rtc" | "rtm" | "auto";
    className?: string;
}
declare function ConvoTextStream({ messageList, currentInProgressMessage, agentUID, messageSource, className, }: ConvoTextStreamProps): react_jsx_runtime.JSX.Element;

interface AudioDevice {
    deviceId: string;
    label: string;
    groupId: string;
}
interface UseAudioDevicesReturn {
    devices: AudioDevice[];
    loading: boolean;
    error: string | null;
    hasPermission: boolean;
    loadDevices: () => Promise<void>;
}
declare function useAudioDevices(): UseAudioDevicesReturn;

declare function useIsMobile(): boolean;

interface PhoneReceiverProps extends React.SVGAttributes<SVGSVGElement> {
    className?: string;
}
declare function PhoneReceiver({ className, ...props }: PhoneReceiverProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;
declare function decodeStreamMessage(stream: Uint8Array): string;
/**
 * Renders simple markdown to HTML for streaming text
 * Handles:
 * - **bold** -> <strong>bold</strong>
 * - [text](url) -> clickable links
 * - Headers: ## and ### -> styled headings
 * - Numbered lists (1. item, 2. item, etc.)
 * - Bullet lists (- item)
 * - Indented sub-items
 */
declare function renderMarkdownToHtml(text: string): string;

/**
 * Theme Configuration Type
 * Maps to API config fields that can be customized by users
 * Only includes fields that the API returns - other design tokens use defaults
 */
type RemoteThemeConfig = {
    PRIMARY_COLOR?: string;
    PRIMARY_ACTION_BRAND_COLOR?: string;
    FONT_COLOR?: string;
    PRIMARY_FONT_COLOR?: string;
    SECONDARY_FONT_COLOR?: string;
    BACKGROUND_COLOR?: string;
    ICON_BG_COLOR?: string;
    TOOLBAR_COLOR?: string;
    INPUT_FIELD_BACKGROUND_COLOR?: string;
    INPUT_FIELD_BORDER_COLOR?: string;
    CARD_LAYER_1_COLOR?: string;
    CARD_LAYER_2_COLOR?: string;
    CARD_LAYER_3_COLOR?: string;
    CARD_LAYER_4_COLOR?: string;
    CARD_LAYER_5_COLOR?: string;
    VIDEO_AUDIO_TILE_COLOR?: string;
    VIDEO_AUDIO_TILE_OVERLAY_COLOR?: string;
    VIDEO_AUDIO_TILE_TEXT_COLOR?: string;
    VIDEO_AUDIO_TILE_AVATAR_COLOR?: string;
    SEMANTIC_ERROR?: string;
    SEMANTIC_SUCCESS?: string;
    SEMANTIC_WARNING?: string;
    SEMANTIC_NEUTRAL?: string;
};
/**
 * Get all current theme variables
 * Useful for debugging or displaying current theme
 */
declare function getCurrentTheme(): Record<string, string>;

export { AgentVisualizer, type AgentVisualizerProps, type AgentVisualizerSize, type AgentVisualizerState, type AudioDevice, AudioVisualizer, type AudioVisualizerProps, Avatar, type AvatarProps, type AvatarSize, Button, Card, CardContent, CardTitle, Chip, type ChipProps, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Conversation, ConversationContent, type ConversationProps, ConversationScrollButton, ConvoTextStream, type ConvoTextStreamProps, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, EMessageEngineMode, EMessageStatus, HelloWorld, type HelloWorldProps, type IAgentTranscription, type IMessageInterrupt, type IMessageListItem, type IUserTranscription, IconButton, type Item, LiveWaveform, type LiveWaveformProps, Message, MessageContent, type MessageProps, MicButton, type MicButtonProps, type MicButtonState, MicButtonWithVisualizer, type MicButtonWithVisualizerProps, MicSelector, type MicSelectorProps, PhoneReceiver, Popover, PopoverContent, PopoverTrigger, type RemoteThemeConfig, Response, type ResponseProps, type UseAudioDevicesReturn, ValuePicker, buttonVariants, cn, decodeStreamMessage, getCurrentTheme, renderMarkdownToHtml, useAudioDevices, useIsMobile };
