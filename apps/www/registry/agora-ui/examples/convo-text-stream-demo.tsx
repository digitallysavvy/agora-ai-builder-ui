"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/agora-ui/ui/button"
import {
  ConvoTextStream,
  EMessageStatus,
  type IMessageListItem,
} from "@/registry/agora-ui/ui/convo-text-stream"

export default function ConvoTextStreamDemo() {
  // Mock messages for demo
  const [messageList] = useState<IMessageListItem[]>([
    {
      uid: 0,
      turn_id: 1,
      text: "Hello! How can I assist you today?",
      status: EMessageStatus.END,
    },
    {
      uid: 1,
      turn_id: 2,
      text: "I need help with my Agora integration",
      status: EMessageStatus.END,
    },
    {
      uid: 0,
      turn_id: 3,
      text: "I'd be happy to help! What specific aspect of the integration are you working on?",
      status: EMessageStatus.END,
    },
    {
      uid: 1,
      turn_id: 4,
      text: "I'm trying to implement **real-time transcription** with the conversational AI",
      status: EMessageStatus.END,
    },
    {
      uid: 0,
      turn_id: 5,
      text: "Great! For real-time transcription, you'll need to:\n\n1. Initialize the MessageEngine\n2. Subscribe to RTC or RTM messages\n3. Pass messages to the ConvoTextStream component\n\nCheck out the [documentation](https://docs.agora.io) for more details.",
      status: EMessageStatus.END,
    },
  ])

  const [currentMessage] = useState<IMessageListItem>({
    uid: 0,
    turn_id: 6,
    text: "The component supports both RTC datastream and Signaling/RTM...",
    status: EMessageStatus.IN_PROGRESS,
  })

  const [viewMode, setViewMode] = useState<"inline" | "popout">("inline")
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom in inline mode
  useEffect(() => {
    if (viewMode !== "inline" || !chatContainerRef.current) return

    const scrollToBottom = () => {
      const scrollContainer = chatContainerRef.current?.querySelector(
        ".flex-1.overflow-auto"
      ) as HTMLElement
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }

    // Initial scroll
    setTimeout(scrollToBottom, 100)

    // Watch for chatbox opening/closing and message changes
    const observer = new MutationObserver(() => {
      setTimeout(scrollToBottom, 50)
    })

    observer.observe(chatContainerRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [viewMode, messageList, currentMessage])

  return (
    <div className="w-full space-y-6">
      {/* View Mode Toggle */}
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">View Mode</p>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => setViewMode("inline")}
            variant={viewMode === "inline" ? "default" : "secondary"}
          >
            Inline Preview
          </Button>
          <Button
            onClick={() => setViewMode("popout")}
            variant={viewMode === "popout" ? "default" : "secondary"}
          >
            Pop-out Mode
          </Button>
        </div>
        <p className="text-muted-foreground text-xs">
          {viewMode === "inline"
            ? "Transcript is shown open in the preview area below"
            : "Transcript appears as a floating widget (click the button in bottom-right)"}
        </p>
      </div>

      {/* Live Demo */}
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Interactive Demo</p>
        <div
          className={cn(
            "bg-muted rounded-lg p-6",
            viewMode === "popout" && "relative"
          )}
          style={viewMode === "popout" ? { height: 500 } : { minHeight: 650 }}
        >
          {viewMode === "popout" ? (
            <>
              <div className="text-muted-foreground flex h-full items-center justify-center text-center">
                <div>
                  <p className="text-sm font-medium">
                    👉 Check the bottom-right corner
                  </p>
                  <p className="mt-2 text-xs">
                    The transcript appears as a floating widget with a toggle
                    button
                  </p>
                </div>
              </div>
              <ConvoTextStream
                messageList={messageList}
                currentInProgressMessage={currentMessage}
                agentUID="0"
              />
            </>
          ) : (
            // Inline mode: override positioning with wrapper
            <div
              ref={chatContainerRef}
              className="relative mx-auto flex max-w-96 items-end justify-center"
              style={{ height: 600 }}
            >
              <ConvoTextStream
                messageList={messageList}
                currentInProgressMessage={currentMessage}
                agentUID="0"
                className="pointer-events-auto !relative !inset-auto !top-auto !right-auto !bottom-auto !left-auto !mx-0 !my-0 [&>div.chatbox]:!max-h-[600px]"
              />
            </div>
          )}
        </div>
      </div>

      {/* Props */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div>
            <strong>messageList:</strong> IMessageListItem[] - Array of
            completed messages
          </div>
          <div>
            <strong>currentInProgressMessage?:</strong> IMessageListItem | null
            - Currently streaming message
          </div>
          <div>
            <strong>agentUID:</strong> string | undefined - UID of the AI agent
          </div>
          <div>
            <strong>className?:</strong> string - Additional CSS classes
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Features</p>
        <div className="text-muted-foreground space-y-1.5 text-xs">
          <div>• Collapsible chat interface</div>
          <div>• Auto-scrolling with smart content detection</div>
          <div>• Markdown rendering (bold, links, headers, lists)</div>
          <div>• Distinguishes AI vs user messages</div>
          <div>• Responsive positioning (mobile/desktop)</div>
          <div>• Pulse animation for new messages</div>
          <div>• Streaming message support</div>
          <div>
            • Requires: import
            &quot;@agora/ai-agent-uikit/styles/convo-text-stream.css&quot;
          </div>
        </div>
      </div>

      {/* Message Structure */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Message Structure</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <pre className="bg-muted overflow-x-auto rounded p-3 text-[10px]">
            <code>{`interface IMessageListItem {
  uid: number        // User ID (0 = AI)
  turn_id: number    // Turn ID
  text: string       // Content
  status: EMessageStatus
}

enum EMessageStatus {
  IN_PROGRESS = 0,  // Streaming
  END = 1,          // Complete
  INTERRUPTED = 2   // Stopped
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
