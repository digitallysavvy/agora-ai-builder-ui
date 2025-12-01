"use client"

import { useState } from "react"

import { MicSelector } from "@/registry/agora-ui/ui/mic-selector"

export default function MicSelectorDemo() {
  const [selectedDevice, setSelectedDevice] = useState<string>()
  const [isMuted, setIsMuted] = useState(false)

  return (
    <div className="w-full max-w-2xl space-y-6">
      {/* Description */}
      <div className="rounded-lg border p-4">
        <p className="mb-2 text-sm font-medium">
          Mic Selector with Audio Devices
        </p>
      </div>

      {/* Basic Example */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Basic Selector</p>
        <p className="text-muted-foreground mb-3 text-xs">
          Auto-detects microphones. Click to open dropdown and select device.
        </p>
        <div className="flex items-center gap-2">
          <MicSelector
            value={selectedDevice}
            onValueChange={setSelectedDevice}
            muted={isMuted}
            onMutedChange={setIsMuted}
          />
        </div>
        {selectedDevice && (
          <p className="text-muted-foreground mt-3 text-sm">
            Selected device ID:{" "}
            <strong>{selectedDevice.slice(0, 16)}...</strong>
          </p>
        )}
        {isMuted && (
          <p className="text-muted-foreground mt-2 text-sm">
            Status: <strong>🔇 Muted</strong>
          </p>
        )}
      </div>

      {/* Props */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div>
            <strong>value?:</strong> string - Currently selected device ID
          </div>
          <div>
            <strong>onValueChange?:</strong> (deviceId: string) =&gt; void -
            Callback when device selection changes
          </div>
          <div>
            <strong>muted?:</strong> boolean - Mute state (controlled)
          </div>
          <div>
            <strong>onMutedChange?:</strong> (muted: boolean) =&gt; void -
            Callback when mute state changes
          </div>
          <div>
            <strong>disabled?:</strong> boolean - Disable the selector
          </div>
          <div>
            <strong>state?:</strong> MicButtonState - Visual state indicator
            (idle, listening, processing, error)
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
          <div>• Auto-detects audio input devices</div>
          <div>• Live waveform preview using Web Audio API</div>
          <div>• Mute/unmute toggle with visual indicator</div>
          <div>• Dropdown device selector</div>
          <div>• Permission handling with error states</div>
          <div>• Auto-selects first available device</div>
          <div>• Responsive design with Chip wrapper</div>
        </div>
      </div>
    </div>
  )
}
