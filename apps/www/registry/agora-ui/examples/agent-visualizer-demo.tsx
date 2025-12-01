"use client"

import { useState } from "react"

import { getLottieBasePath } from "@/lib/basepath"
import { AgentVisualizer } from "@/registry/agora-ui/ui/agent-visualizer"
import { Button } from "@/registry/agora-ui/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/agora-ui/ui/tabs"
import { ValuePicker, type Item } from "@/registry/agora-ui/ui/value-picker"

const states = [
  "not-joined",
  "joining",
  "ambient",
  "listening",
  "analyzing",
  "talking",
  "disconnected",
] as const

const sizeItems: Item[] = [
  { id: "sm", name: "Small" },
  { id: "md", name: "Medium" },
  { id: "lg", name: "Large" },
]

export default function AgentVisualizerDemo() {
  const [selectedState, setSelectedState] =
    useState<(typeof states)[number]>("listening")
  const [selectedSize, setSelectedSize] = useState<"sm" | "md" | "lg">("md")
  const lottieBasePath = getLottieBasePath()

  return (
    <div className="w-full max-w-4xl space-y-6">
      <Tabs defaultValue="interactive" className="w-full">
        {/* Tabs Navigation */}
        <div className="mb-4 flex items-center border-b pb-2">
          <TabsList>
            <TabsTrigger value="interactive">Interactive</TabsTrigger>
            <TabsTrigger value="all-states">All States</TabsTrigger>
            <TabsTrigger value="sizes">Sizes</TabsTrigger>
          </TabsList>
        </div>

        {/* Tab 1: Interactive Demo */}
        <TabsContent value="interactive" className="space-y-4">
          <div className="space-y-4 rounded-lg border p-4">
            <div className="bg-muted flex items-center justify-center rounded-lg p-8">
              <AgentVisualizer
                state={selectedState}
                size={selectedSize}
                lottieBasePath={lottieBasePath}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            {/* State Buttons */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Agent State</label>
              <div className="flex gap-1">
                {states.map((state) => (
                  <Button
                    key={state}
                    onClick={() => setSelectedState(state)}
                    variant={selectedState === state ? "default" : "secondary"}
                    className="flex-1 px-3 py-1 text-xs whitespace-nowrap"
                  >
                    {state
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </Button>
                ))}
              </div>
            </div>

            {/* Size Picker */}
            <ValuePicker
              label="Size"
              items={sizeItems}
              value={selectedSize}
              onValueChange={(value) =>
                setSelectedSize(value as "sm" | "md" | "lg")
              }
            />
          </div>
        </TabsContent>

        {/* Tab 2: All States */}
        <TabsContent value="all-states" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {states.map((state) => (
              <div
                key={state}
                className="bg-muted flex min-w-0 flex-col items-center gap-3 overflow-hidden rounded-lg border p-4"
              >
                <AgentVisualizer
                  state={state}
                  size="md"
                  lottieBasePath={lottieBasePath}
                />
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Tab 3: Size Variants */}
        <TabsContent value="sizes" className="space-y-4">
          <div className="flex flex-wrap items-end justify-center gap-8 overflow-hidden rounded-lg border p-6">
            <div className="flex min-w-0 flex-col items-center gap-2">
              <AgentVisualizer
                state="listening"
                size="sm"
                lottieBasePath={lottieBasePath}
              />
              <span className="text-muted-foreground text-xs">Small</span>
            </div>
            <div className="flex min-w-0 flex-col items-center gap-2">
              <AgentVisualizer
                state="listening"
                size="md"
                lottieBasePath={lottieBasePath}
              />
              <span className="text-muted-foreground text-xs">Medium</span>
            </div>
            <div className="flex min-w-0 flex-col items-center gap-2">
              <AgentVisualizer
                state="listening"
                size="lg"
                lottieBasePath={lottieBasePath}
              />
              <span className="text-muted-foreground text-xs">Large</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Props */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div>
            <strong>state:</strong> AgentVisualizerState - Current state of the
            agent (required)
          </div>
          <div>
            <strong>size?:</strong> &quot;sm&quot; | &quot;md&quot; |
            &quot;lg&quot; - Size of the visualizer (default: &quot;md&quot;)
          </div>
          <div>
            <strong>lottieBasePath?:</strong> string - Base path for lottie
            files (default: &quot;/agora-uikit/lottie&quot;)
          </div>
          <div>
            <strong>lottiePaths?:</strong>{" "}
            Partial&lt;Record&lt;AgentVisualizerState, string&gt;&gt; - Custom
            paths for specific states
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
          <div>• Animated Lottie visualizations</div>
          <div>
            • 7 agent states: not-joined, joining, ambient, listening,
            analyzing, talking, disconnected
          </div>
          <div>• 3 sizes: sm (128px), md (192px), lg (256px)</div>
          <div>• Auto-updating text labels</div>
          <div>• Customizable Lottie file paths</div>
          <div>• Loop and autoplay animations</div>
        </div>
      </div>

      {/* States Reference */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Available States</p>
        <div className="text-muted-foreground space-y-1.5 text-xs">
          <div>
            <strong>not-joined:</strong> Initial state before joining
          </div>
          <div>
            <strong>joining:</strong> Connecting to session
          </div>
          <div>
            <strong>ambient:</strong> Connected but idle
          </div>
          <div>
            <strong>listening:</strong> Actively listening to user
          </div>
          <div>
            <strong>analyzing:</strong> Processing user input
          </div>
          <div>
            <strong>talking:</strong> Agent is responding
          </div>
          <div>
            <strong>disconnected:</strong> Session ended
          </div>
        </div>
      </div>
    </div>
  )
}
