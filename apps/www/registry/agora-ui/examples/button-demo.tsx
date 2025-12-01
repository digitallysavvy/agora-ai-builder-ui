"use client"

import { Copy, Mic, Trash2 } from "lucide-react"

import { Button } from "@/registry/agora-ui/ui/button"

export default function ButtonDemo() {
  return (
    <div className="w-full space-y-6">
      {/* Demo */}
      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Interactive Demo</p>
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Variants */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
          </div>

          {/* With Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="default">
              <Mic className="size-4" />
              Record
            </Button>
            <Button variant="secondary">
              <Copy className="size-4" />
              Copy
            </Button>
            <Button variant="destructive">
              <Trash2 className="size-4" />
              Delete
            </Button>
          </div>

          {/* With Label */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button label="Click me">Default</Button>
            <Button variant="secondary" label="Submit form">
              <Mic className="size-4" />
              Submit
            </Button>
          </div>

          {/* Disabled */}
          <div className="flex items-center justify-center gap-4">
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </div>

      {/* Props */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div>
            <strong>variant?:</strong> &quot;default&quot; |
            &quot;secondary&quot; | &quot;destructive&quot; - Visual style
            (default: &quot;default&quot;)
          </div>
          <div>
            <strong>size?:</strong> &quot;default&quot; - Button size (default:
            &quot;default&quot;)
          </div>
          <div>
            <strong>disabled?:</strong> boolean - Disable button interaction
          </div>
          <div>
            <strong>asChild?:</strong> boolean - Render as child component using
            Radix Slot
          </div>
          <div>
            <strong>label?:</strong> string - Optional text label displayed
            below button
          </div>
          <div>
            <strong>labelClassName?:</strong> string - Custom classes for label
          </div>
          <div>
            <strong>className?:</strong> string - Additional CSS classes
          </div>
          <div>
            <strong>children:</strong> React.ReactNode - Button content (text,
            icons, etc.)
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Features</p>
        <div className="text-muted-foreground space-y-1.5 text-xs">
          <div>• 3 variants: default, secondary, destructive</div>
          <div>• Icon support with automatic sizing</div>
          <div>• Optional label displayed below button</div>
          <div>• Hover and transition effects</div>
          <div>• Disabled state with reduced opacity</div>
          <div>• Polymorphic with asChild prop (Radix Slot)</div>
          <div>• Aria-invalid support for form validation</div>
        </div>
      </div>
    </div>
  )
}
