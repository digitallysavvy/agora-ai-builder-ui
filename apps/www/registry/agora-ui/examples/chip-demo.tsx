"use client"

import { Phone, X } from "lucide-react"

import { Button } from "@/registry/agora-ui/ui/button"
import { Chip } from "@/registry/agora-ui/ui/chip"

export default function ChipDemo() {
  return (
    <div className="w-full space-y-6">
      {/* Demo */}
      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Interactive Demo</p>
        <div className="flex flex-col items-center justify-center gap-4">
          <Chip>
            <Button>
              <Phone className="size-4" />
            </Button>
            <Button>
              <X className="size-4" />
            </Button>
          </Chip>
        </div>
      </div>

      {/* Props */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div>
            <strong>children:</strong> React.ReactNode - Content to wrap
            (typically buttons or controls)
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
          <div>• Rounded pill-shaped container</div>
          <div>• Perfect for grouping controls (buttons, toggles)</div>
          <div>• Flexible inline-flex layout with gap-2</div>
          <div>• Built-in padding (p-3)</div>
          <div>• Theme-aware background color</div>
          <div>• Lightweight wrapper component</div>
        </div>
      </div>
    </div>
  )
}
