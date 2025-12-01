"use client"

import { Copy, Heart, Search, Settings, Share2, Trash2 } from "lucide-react"

import { IconButton } from "@/registry/agora-ui/ui/icon-button"

export function IconButtonDemo() {
  return (
    <div className="w-full space-y-6">
      {/* Demo */}
      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Interactive Demo</p>
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Variants Row */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-muted-foreground mb-2 text-xs">Filled</div>
              <div className="flex gap-2">
                <IconButton shape="round" variant="filled">
                  <Copy className="size-5" />
                </IconButton>
                <IconButton shape="square" variant="filled">
                  <Settings className="size-5" />
                </IconButton>
              </div>
            </div>

            <div className="text-center">
              <div className="text-muted-foreground mb-2 text-xs">Outlined</div>
              <div className="flex gap-2">
                <IconButton shape="round" variant="outlined">
                  <Search className="size-5" />
                </IconButton>
                <IconButton shape="square" variant="outlined">
                  <Heart className="size-5" />
                </IconButton>
              </div>
            </div>

            <div className="text-center">
              <div className="text-muted-foreground mb-2 text-xs">Standard</div>
              <div className="flex gap-2">
                <IconButton shape="round" variant="standard">
                  <Share2 className="size-5" />
                </IconButton>
                <IconButton shape="square" variant="standard">
                  <Trash2 className="size-5" />
                </IconButton>
              </div>
            </div>
          </div>

          {/* Disabled Row */}
          <div className="text-center">
            <div className="text-muted-foreground mb-2 text-xs">Disabled</div>
            <div className="flex justify-center gap-2">
              <IconButton shape="round" variant="filled" disabled>
                <Copy className="size-5" />
              </IconButton>
              <IconButton shape="round" variant="outlined" disabled>
                <Search className="size-5" />
              </IconButton>
              <IconButton shape="round" variant="standard" disabled>
                <Settings className="size-5" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {/* Props */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div>
            <strong>shape?:</strong> &quot;round&quot; | &quot;square&quot; -
            Button shape (default: &quot;round&quot;)
          </div>
          <div>
            <strong>variant?:</strong> &quot;filled&quot; | &quot;outlined&quot;
            | &quot;standard&quot; - Visual style (default: &quot;filled&quot;)
          </div>
          <div>
            <strong>size?:</strong> &quot;default&quot; | &quot;sm&quot; |
            &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot; - Button size
            (default: &quot;default&quot;)
          </div>
          <div>
            <strong>disabled?:</strong> boolean - Disable button interaction
          </div>
          <div>
            <strong>className?:</strong> string - Additional CSS classes
          </div>
          <div>
            <strong>children:</strong> React.ReactNode - Icon content (typically
            SVG)
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Features</p>
        <div className="text-muted-foreground space-y-1.5 text-xs">
          <div>• Compact icon-only button design</div>
          <div>• 2 shapes: round (circular), square (rounded corners)</div>
          <div>
            • 3 variants: filled (solid background), outlined (border), standard
            (transparent)
          </div>
          <div>
            • 5 sizes: sm (24px), md (40px), default/lg (48px), xl (56px)
          </div>
          <div>• Hover and active state transitions</div>
          <div>• Disabled state with reduced opacity</div>
          <div>• Auto-sizing for SVG icons</div>
        </div>
      </div>
    </div>
  )
}
