"use client"

import { useEffect, useRef, useState } from "react"

import {
  MicButton,
  type MicButtonState,
} from "@/registry/agora-ui/ui/mic-button"

export default function MicButtonDemo() {
  const [state, setState] = useState<MicButtonState>("idle")
  const [micStream, setMicStream] = useState<MediaStream | undefined>(undefined)
  const [audioLevel, setAudioLevel] = useState(0)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)

  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      setMicStream(stream)
      setState("listening")

      // Setup audio analysis
      audioContextRef.current = new AudioContext()
      analyserRef.current = audioContextRef.current.createAnalyser()
      analyserRef.current.fftSize = 64
      analyserRef.current.smoothingTimeConstant = 0.5

      const source = audioContextRef.current.createMediaStreamSource(stream)
      source.connect(analyserRef.current)

      updateAudioLevel()
    } catch (err) {
      console.error("Error accessing microphone:", err)
      setState("error")
    }
  }

  const stopMicrophone = () => {
    if (micStream) {
      micStream.getTracks().forEach((track) => track.stop())
      setMicStream(undefined)
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    if (audioContextRef.current) {
      audioContextRef.current.close()
      audioContextRef.current = null
    }
    setState("idle")
    setAudioLevel(0)
  }

  const updateAudioLevel = () => {
    if (!analyserRef.current) return

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
    analyserRef.current.getByteFrequencyData(dataArray)

    // Calculate average audio level
    const average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length
    const normalizedLevel = Math.min(average / 128, 1) // Normalize to 0-1

    setAudioLevel(normalizedLevel)

    // Auto-switch to processing state if audio level is high enough
    if (normalizedLevel > 0.1 && state === "listening") {
      setState("processing")
    } else if (normalizedLevel <= 0.1 && state === "processing") {
      setState("listening")
    }

    animationFrameRef.current = requestAnimationFrame(updateAudioLevel)
  }

  useEffect(() => {
    return () => {
      if (micStream) {
        micStream.getTracks().forEach((track) => track.stop())
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [micStream])

  return (
    <div className="w-full max-w-lg space-y-6">
      {/* Info Alert */}
      <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
        <p className="mb-2 text-sm font-medium text-blue-400">
          Live Microphone Demo
        </p>
        <p className="text-muted-foreground text-xs">
          Click &quot;Enable Microphone&quot; below to see the button with live
          audio state transitions. The component automatically switches between
          listening and processing states based on audio input.
        </p>
      </div>

      {/* Microphone Control */}
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Microphone Control</p>
        <div className="flex items-center gap-3">
          {!micStream ? (
            <button
              onClick={startMicrophone}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Enable Microphone
            </button>
          ) : (
            <button
              onClick={stopMicrophone}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
            >
              Disable Microphone
            </button>
          )}
          {micStream && (
            <span className="text-sm text-green-500">● Microphone Active</span>
          )}
        </div>
        {state === "error" && (
          <p className="text-sm text-red-500">
            Unable to access microphone. Please grant microphone permissions.
          </p>
        )}
      </div>

      {/* Live Demo */}
      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Live Demo</p>
        <div className="bg-muted flex items-center justify-center rounded-lg p-6">
          <MicButton state={state} />
        </div>
        <p className="text-muted-foreground text-xs">
          Current state: <strong className="capitalize">{state}</strong>
          {state === "listening" && audioLevel > 0.1 && (
            <> • Audio level: {Math.round(audioLevel * 100)}%</>
          )}
        </p>
        {!micStream && (
          <p className="text-muted-foreground text-xs">
            Enable microphone above to see live state transitions. The button
            shows waveform animation when listening or processing.
          </p>
        )}
      </div>

      {/* State Controls - Manual Override */}
      <div className="space-y-3 rounded-lg border p-4">
        <p className="text-sm font-medium">Manual State Control</p>
        <p className="text-muted-foreground text-xs">
          Override the automatic state detection (only when microphone is
          disabled):
        </p>
        <div className="space-y-2">
          {(["idle", "listening", "processing", "error"] as const).map((s) => (
            <label
              key={s}
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded px-2 py-1 text-sm transition-colors"
            >
              <input
                type="radio"
                name="state"
                value={s}
                checked={state === s}
                onChange={(e) =>
                  !micStream && setState(e.target.value as MicButtonState)
                }
                disabled={!!micStream}
                className="h-4 w-4"
              />
              <span className="capitalize">{s}</span>
            </label>
          ))}
        </div>
        {micStream && (
          <p className="text-muted-foreground text-xs">
            State control disabled while microphone is active. States are
            controlled automatically based on audio input.
          </p>
        )}
      </div>

      {/* Static Examples */}
      <div className="rounded-lg border p-6">
        <p className="text-muted-foreground mb-4 text-sm">
          Static Examples (use manual controls above):
        </p>
        <div className="flex items-center gap-4">
          <MicButton state={state} />
        </div>
      </div>

      {/* States Description */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">State Descriptions</p>
        <p className="text-muted-foreground mb-3 text-xs">
          All states include a chevron icon on the right for dropdown
          indication.
        </p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div>
            <strong>idle:</strong> Shows mic icon + chevron
          </div>
          <div>
            <strong>listening:</strong> Shows mic icon + animated blue waveform
            + chevron
          </div>
          <div>
            <strong>processing:</strong> Shows mic icon + static gray waveform +
            chevron
          </div>
          <div>
            <strong>error:</strong> Shows mic-off icon + chevron in red
          </div>
        </div>
      </div>

      {/* State Examples */}
      <div className="rounded-lg border p-4">
        <p className="mb-4 text-sm font-medium">State Examples</p>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MicButton state="idle" />
            <span className="text-muted-foreground text-xs">idle</span>
          </div>
          <div className="flex items-center gap-2">
            <MicButton state="listening" />
            <span className="text-muted-foreground text-xs">listening</span>
          </div>
          <div className="flex items-center gap-2">
            <MicButton state="processing" />
            <span className="text-muted-foreground text-xs">processing</span>
          </div>
          <div className="flex items-center gap-2">
            <MicButton state="error" />
            <span className="text-muted-foreground text-xs">error</span>
          </div>
          <div className="flex items-center gap-2">
            <MicButton state="error" showErrorBadge={true} />
            <span className="text-muted-foreground text-xs">
              error with badge
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
