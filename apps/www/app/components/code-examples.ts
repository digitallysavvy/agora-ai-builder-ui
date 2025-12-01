export const codeExamples = {
  agentVisualizer: `import { AgentVisualizer } from "@agora/ai-agent-uikit"

export function MyComponent() {
  return (
    <AgentVisualizer 
      state="listening" 
      size="md" 
    />
  )
}

// Available states:
// - not-joined, joining, ambient
// - listening, analyzing, talking
// - disconnected

// Available sizes:
// - sm (128px), md (192px), lg (256px)`,

  micSelector: `import { MicSelector } from "@agora/ai-agent-uikit"
import { useState } from "react"

export function MyComponent() {
  const [device, setDevice] = useState<string>()
  const [muted, setMuted] = useState(false)

  return (
    <MicSelector
      value={device}
      onValueChange={setDevice}
      muted={muted}
      onMutedChange={setMuted}
    />
  )
}

// Features:
// - Auto-detects audio devices
// - Mute/unmute toggle
// - Waveform preview`,

  iconButton: `import { IconButton } from "@agora/ai-agent-uikit"
import { Copy } from "lucide-react"

export function MyComponent() {
  return (
    <>
      {/* Filled variant (default) */}
      <IconButton shape="round" variant="filled">
        <Copy className="size-5" />
      </IconButton>

      {/* Outlined variant */}
      <IconButton shape="square" variant="outlined">
        <Copy className="size-5" />
      </IconButton>

      {/* Standard variant */}
      <IconButton variant="standard">
        <Copy className="size-5" />
      </IconButton>
    </>
  )
}`,

  button: `import { Button } from "@agora/ai-agent-uikit"
import { Mic } from "lucide-react"

export function MyComponent() {
  return (
    <>
      {/* Variants */}
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>

      {/* With Icon */}
      <Button>
        <Mic className="size-4" />
        Record
      </Button>

      {/* With Label */}
      <Button label="Click to submit">
        Submit
      </Button>

      {/* Disabled */}
      <Button disabled>Disabled</Button>
    </>
  )
}`,

  card: `import { Card, CardTitle, CardContent } from "@agora/ai-agent-uikit"

export function MyComponent() {
  return (
    <>
      {/* Basic Card */}
      <Card />

      {/* Card with Title */}
      <Card>
        <CardTitle>Card Title</CardTitle>
      </Card>

      {/* Full Card */}
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardContent>
          <p className="text-sm">
            Cards are flexible containers 
            for grouping content and actions.
          </p>
        </CardContent>
      </Card>
    </>
  )
}`,

  chip: `import { Chip } from "@agora/ai-agent-uikit"
import { IconButton } from "@agora/ai-agent-uikit"
import { Mic, MicOff } from "lucide-react"

export function MyComponent() {
  return (
    <Chip>
      <IconButton>
        <Mic className="size-5" />
      </IconButton>
      <IconButton>
        <MicOff className="size-5" />
      </IconButton>
    </Chip>
  )
}

// Chip is a wrapper component with 
// rounded pill-shaped background`,

  valuePicker: `import { ValuePicker, type Item } from "@agora/ai-agent-uikit"
import { useState } from "react"

// Item Structure:
// interface Item {
//   id: string    // Unique identifier
//   name: string  // Display name
// }

const items: Item[] = [
  { id: "apple", name: "Apple" },
  { id: "banana", name: "Banana" },
  { id: "orange", name: "Orange" },
]

export function MyComponent() {
  const [value, setValue] = useState("")

  return (
    <ValuePicker
      value={value}
      onValueChange={setValue}
      items={items}
      placeholder="Select a fruit"
    />
  )
}`,

  audioVisualizer: [
    {
      label: "Agora",
      code: `import { AudioVisualizer } from "@agora/ai-agent-uikit"
import { useLocalMicrophoneTrack } from "agora-rtc-react"

export function MyComponent() {
  const { localMicrophoneTrack } = useLocalMicrophoneTrack()
  
  return (
    <AudioVisualizer 
      track={localMicrophoneTrack}
      gradientColors={["#A0FAFF", "#FCF9F8", "#C46FFB"]}
    />
  )
}

// Features:
// - 9-bar frequency visualization
// - Configurable gradient colors
// - Supports Agora audio tracks`,
    },
    {
      label: "WebRTC",
      code: `import { AudioVisualizer } from "@agora/ai-agent-uikit"
import { useState, useEffect } from "react"

export function MyComponent() {
  const [micStream, setMicStream] = useState<MediaStream>()
  
  const startMic = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ 
      audio: true 
    })
    setMicStream(stream)
  }
  
  useEffect(() => {
    return () => {
      micStream?.getTracks().forEach(track => track.stop())
    }
  }, [micStream])
  
  return (
    <>
      <button onClick={startMic}>Enable Microphone</button>
      <AudioVisualizer 
        track={micStream}
        gradientColors={["#3b82f6", "#60a5fa", "#93c5fd"]}
      />
    </>
  )
}

// Works with standard MediaStream objects`,
    },
  ],

  micButtonWithVisualizer: [
    {
      label: "Agora",
      code: `import { MicButtonWithVisualizer } from "@agora/ai-agent-uikit"
import { AgoraRTCProvider, useLocalMicrophoneTrack } from "agora-rtc-react"
import AgoraRTC from "agora-rtc-sdk-ng"
import { useState } from "react"

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" })

export function MyComponent() {
  const [micEnabled, setMicEnabled] = useState(false)
  const { localMicrophoneTrack } = useLocalMicrophoneTrack()
  
  return (
    <AgoraRTCProvider client={client}>
      <MicButtonWithVisualizer
        isEnabled={micEnabled}
        setIsEnabled={setMicEnabled}
        track={localMicrophoneTrack}
        enabledColor="#A0FAFF"
        disabledColor="#DE344A"
      />
    </AgoraRTCProvider>
  )
}

// Features:
// - 5-bar audio visualization
// - Auto publish/unpublish
// - Customizable colors
// - Requires Agora RTC context`,
    },
    {
      label: "WebRTC",
      code: `import { MicButtonWithVisualizer } from "@agora/ai-agent-uikit"
import { useState, useEffect } from "react"

export function MyComponent() {
  const [micEnabled, setMicEnabled] = useState(false)
  const [micStream, setMicStream] = useState<MediaStream>()
  
  const toggleMic = async () => {
    if (micEnabled && micStream) {
      micStream.getTracks().forEach(track => track.stop())
      setMicStream(undefined)
      setMicEnabled(false)
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: true 
      })
      setMicStream(stream)
      setMicEnabled(true)
    }
  }
  
  useEffect(() => {
    return () => {
      micStream?.getTracks().forEach(track => track.stop())
    }
  }, [micStream])
  
  return (
    <MicButtonWithVisualizer
      isEnabled={micEnabled}
      setIsEnabled={setMicEnabled}
      track={micStream || null}
      enabledColor="#3b82f6"
      disabledColor="#ef4444"
      onToggle={toggleMic}
    />
  )
}

// Works with standard MediaStream
// Custom onToggle for manual control`,
    },
  ],

  convoTextStream: [
    {
      label: "RTC",
      code: `import { 
  ConvoTextStream, 
  MessageEngine,
  EMessageEngineMode,
  EMessageStatus
} from "@agora/ai-agent-uikit"
import "@agora/ai-agent-uikit/styles/convo-text-stream.css"
import { useState, useEffect } from "react"

export function MyComponent() {
  const [messages, setMessages] = useState([])
  const [inProgressMsg, setInProgressMsg] = useState(null)
  
  // Initialize MessageEngine with RTC client
  useEffect(() => {
    const engine = new MessageEngine({
      rtcEngine: rtcClient,
      renderMode: EMessageEngineMode.TEXT,
      callback: (messageList) => {
        const completed = messageList.filter(
          m => m.status !== EMessageStatus.IN_PROGRESS
        )
        const inProgress = messageList.find(
          m => m.status === EMessageStatus.IN_PROGRESS
        )
        setMessages(completed)
        setInProgressMsg(inProgress || null)
      }
    })
    
    return () => engine.cleanup()
  }, [])
  
  return (
    <ConvoTextStream
      messageList={messages}
      currentInProgressMessage={inProgressMsg}
      agentUID="0"
    />
  )
}

// RTC Datastream implementation`,
    },
    {
      label: "RTM",
      code: `import { 
  ConvoTextStream, 
  MessageEngine,
  EMessageStatus
} from "@agora/ai-agent-uikit"
import "@agora/ai-agent-uikit/styles/convo-text-stream.css"
import { useState, useEffect } from "react"

export function MyComponent() {
  const [messages, setMessages] = useState([])
  const [inProgressMsg, setInProgressMsg] = useState(null)
  
  // Initialize MessageEngine with RTM client
  useEffect(() => {
    const engine = new MessageEngine({
      rtmClient: rtmClient,
      channelName: "my-channel",
      callback: (messageList) => {
        const completed = messageList.filter(
          m => m.status !== EMessageStatus.IN_PROGRESS
        )
        const inProgress = messageList.find(
          m => m.status === EMessageStatus.IN_PROGRESS
        )
        setMessages(completed)
        setInProgressMsg(inProgress || null)
      }
    })
    
    return () => engine.cleanup()
  }, [])
  
  return (
    <ConvoTextStream
      messageList={messages}
      currentInProgressMessage={inProgressMsg}
      agentUID="0"
    />
  )
}

// RTM/Signaling implementation`,
    },
  ],
}
