"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, X } from "lucide-react"

import { cn } from "@/lib/utils"

export enum EMessageStatus {
  IN_PROGRESS = 0,
  END = 1,
  INTERRUPTED = 2,
}

export interface IMessageListItem {
  uid: number
  turn_id: number
  text: string
  status: EMessageStatus
}

export interface ConvoTextStreamProps {
  messageList: IMessageListItem[]
  currentInProgressMessage?: IMessageListItem | null
  agentUID: string | undefined
  messageSource?: "rtc" | "rtm" | "auto"
  className?: string
}

// Basic markdown rendering function
function renderMarkdownToHtml(text: string): string {
  if (!text) return ""
  let processed = text
  processed = processed.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  processed = processed.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-link">$1</a>'
  )
  return processed.replace(/\n/g, "<br/>")
}

// Simple useIsMobile hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)")
    const onChange = () => {
      setIsMobile(window.innerWidth < 768)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < 768)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return isMobile
}

export function ConvoTextStream({
  messageList,
  currentInProgressMessage = null,
  agentUID,
  messageSource = "auto",
  className = "",
}: ConvoTextStreamProps) {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true)
  const [hasNewMessages, setHasNewMessages] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const lastMessageRef = useRef<HTMLDivElement>(null)
  const prevMessageLengthRef = useRef(messageList.length)
  const prevMessageTextRef = useRef("")
  const hasSeenFirstMessageRef = useRef(false)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = scrollRef.current
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 100
      setShouldAutoScroll(isAtBottom)
    }
  }

  const hasContentChanged = () => {
    if (!currentInProgressMessage) return false
    const currentText = currentInProgressMessage.text || ""
    const textLengthDiff =
      currentText.length - prevMessageTextRef.current.length
    const hasSignificantChange = textLengthDiff > 20
    if (hasSignificantChange) {
      prevMessageTextRef.current = currentText
    }
    return hasSignificantChange
  }

  useEffect(() => {
    const hasNewMessage = messageList.length > 0
    const hasInProgressMessage =
      shouldShowStreamingMessage() && currentInProgressMessage !== null

    if (
      (hasNewMessage || hasInProgressMessage) &&
      !hasSeenFirstMessageRef.current
    ) {
      if (!isOpen) {
        setIsOpen(true)
      }
      setHasNewMessages(true)
      hasSeenFirstMessageRef.current = true
    }
  }, [messageList, currentInProgressMessage, isMobile, isOpen])

  useEffect(() => {
    const hasNewMessage = messageList.length > prevMessageLengthRef.current
    const hasStreamingChange = hasContentChanged()

    if (
      (hasNewMessage || shouldAutoScroll || hasStreamingChange) &&
      scrollRef.current
    ) {
      scrollToBottom()
    }

    prevMessageLengthRef.current = messageList.length
  }, [messageList, currentInProgressMessage?.text, shouldAutoScroll])

  useEffect(() => {
    if (
      currentInProgressMessage?.status === EMessageStatus.IN_PROGRESS &&
      shouldAutoScroll
    ) {
      const timer = setTimeout(scrollToBottom, 100)
      return () => clearTimeout(timer)
    }
  }, [currentInProgressMessage?.text])

  const shouldShowStreamingMessage = () => {
    return (
      currentInProgressMessage !== null &&
      currentInProgressMessage.status === EMessageStatus.IN_PROGRESS &&
      currentInProgressMessage.text.trim().length > 0
    )
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      hasSeenFirstMessageRef.current = true
      setHasNewMessages(false)
    }
  }

  const isAIMessage = (message: IMessageListItem) => {
    return (
      message.uid === 0 || (agentUID && message.uid.toString() === agentUID)
    )
  }

  const allMessages = [...messageList]
  if (shouldShowStreamingMessage() && currentInProgressMessage) {
    allMessages.push(currentInProgressMessage)
  }

  return (
    <div
      id="chatbox"
      className={cn(
        "fixed z-50",
        isOpen
          ? "right-4 bottom-32 left-4 md:right-8 md:bottom-24 md:left-auto"
          : "right-4 bottom-6 md:right-8 md:bottom-8",
        className
      )}
    >
      {isOpen ? (
        <div
          className="chatbox expanded mx-auto flex max-w-96 min-w-96 flex-col shadow-lg md:mx-0"
          style={{ backgroundColor: "#171717", borderRadius: "15px" }}
        >
          <div className="flex shrink-0 items-center justify-end p-2">
            <h3 className="mr-auto ml-2 font-semibold">Transcription</h3>
            <button
              onClick={toggleChat}
              className="inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            className="flex-1 overflow-auto"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            <div className="space-y-4 p-4">
              {allMessages.map((message, index) => (
                <div
                  key={`${message.turn_id}-${message.uid}-${message.status}`}
                  ref={index === allMessages.length - 1 ? lastMessageRef : null}
                  className={cn(
                    "flex w-full items-start gap-2",
                    isAIMessage(message) ? "flex-row" : "flex-row-reverse"
                  )}
                >
                  {/* Avatar */}
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: isAIMessage(message)
                        ? "#A0FAFF"
                        : "#333333",
                      color: isAIMessage(message) ? "#000000" : "#FFFFFF",
                    }}
                  >
                    {isAIMessage(message) ? "AI" : "U"}
                  </div>

                  {/* Message content */}
                  <div
                    className={cn(
                      "flex",
                      isAIMessage(message)
                        ? "flex-col items-start"
                        : "flex-col items-end"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-[15px] px-3 py-2",
                        isAIMessage(message) ? "text-left" : "text-right",
                        message.status === EMessageStatus.IN_PROGRESS &&
                          "animate-pulse"
                      )}
                      style={{
                        backgroundColor: isAIMessage(message)
                          ? "transparent"
                          : "#333333",
                        color: isAIMessage(message) ? "#A0FAFF" : "#FFFFFF",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: renderMarkdownToHtml(message.text),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className={cn(
            "group mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out hover:scale-110 active:scale-110",
            "border-white bg-[#333333] hover:bg-white active:bg-white",
            hasNewMessages && "animate-chat-pulse"
          )}
        >
          <MessageCircle className="h-6 w-6 text-white transition-colors duration-300 ease-in-out group-hover:text-black group-active:text-black" />
        </button>
      )}
    </div>
  )
}
