"use client"

import * as React from "react"
import { Check, Copy, Terminal } from "lucide-react"

import { getBasePath } from "@/lib/basepath"
import AgentVisualizerDemo from "@/registry/agora-ui/examples/agent-visualizer-demo"
import AudioVisualizerDemo from "@/registry/agora-ui/examples/audio-visualizer-demo"
import ButtonDemo from "@/registry/agora-ui/examples/button-demo"
import CardDemo from "@/registry/agora-ui/examples/card-demo"
import ChipDemo from "@/registry/agora-ui/examples/chip-demo"
import ConvoTextStreamDemo from "@/registry/agora-ui/examples/convo-text-stream-demo"
import { IconButtonDemo } from "@/registry/agora-ui/examples/icon-button-demo"
import MicButtonWithVisualizerDemo from "@/registry/agora-ui/examples/mic-button-with-visualizer-demo"
import MicSelectorDemo from "@/registry/agora-ui/examples/mic-selector-demo"
import ValuePickerDemo from "@/registry/agora-ui/examples/value-picker-demo"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/agora-ui/ui/tabs"

import { codeExamples } from "./code-examples"
import { ComponentDemo } from "./component-demo"

function InstallCTA() {
  const [copied, setCopied] = React.useState(false)
  const installCommand = "npm install @agora/ai-agent-uikit"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(installCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy install command: ", err)
    }
  }

  return (
    <div>
      <div className="bg-card flex items-center gap-3 rounded-lg border p-4 shadow-sm">
        <Terminal className="text-muted-foreground h-5 w-5" />
        <code className="text-muted-foreground flex-1 font-mono text-xs">
          {installCommand}
        </code>
        <button
          onClick={copyToClipboard}
          className="text-muted-foreground hover:bg-muted hover:text-foreground flex h-6 w-6 items-center justify-center rounded transition-colors"
          title={copied ? "Copied!" : "Copy install command"}
        >
          {copied ? (
            <Check className="h-3 w-3" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </button>
      </div>
    </div>
  )
}

export default function ComponentsPage() {
  const basePath = getBasePath()

  return (
    <main className="bg-background min-h-screen p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="mb-4 flex items-end gap-4">
              <img
                src={`${basePath}/agora-logo-rgb-blue.svg`}
                alt="Agora"
                className="h-10 w-auto translate-y-2"
              />
              <h1 className="text-4xl font-bold tracking-tight">
                AI Agent UIKit
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              React components for building AI agents with real-time voice and
              video
            </p>
          </div>
          <div className="md:w-90">
            <InstallCTA />
          </div>
        </div>

        {/* Tabbed Layout */}
        <Tabs defaultValue="agent-visualizer" className="w-full">
          <div className="bg-background border-b pb-4">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-10">
              <TabsTrigger
                value="agent-visualizer"
                className="text-xs md:text-sm"
              >
                Agent Visualizer
              </TabsTrigger>
              <TabsTrigger
                value="audio-visualizer"
                className="text-xs md:text-sm"
              >
                Audio Visualizer
              </TabsTrigger>
              <TabsTrigger
                value="mic-button-visualizer"
                className="text-xs md:text-sm"
              >
                Mic Button
              </TabsTrigger>
              <TabsTrigger
                value="convo-text-stream"
                className="text-xs md:text-sm"
              >
                Transcript Stream
              </TabsTrigger>
              <TabsTrigger value="mic-selector" className="text-xs md:text-sm">
                Mic Selector
              </TabsTrigger>
              <TabsTrigger value="icon-button" className="text-xs md:text-sm">
                Icon Button
              </TabsTrigger>
              <TabsTrigger value="button" className="text-xs md:text-sm">
                Button
              </TabsTrigger>
              <TabsTrigger value="card" className="text-xs md:text-sm">
                Card
              </TabsTrigger>
              <TabsTrigger value="chip" className="text-xs md:text-sm">
                Chip
              </TabsTrigger>
              <TabsTrigger value="value-picker" className="text-xs md:text-sm">
                Value Picker
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab 1: Agent Visualizer */}
          <TabsContent value="agent-visualizer" className="pt-8">
            <ComponentDemo
              title="Agent Visualizer"
              description="An animated agent visualizer component that displays Lottie animations for different agent states"
              demo={<AgentVisualizerDemo />}
              code={codeExamples.agentVisualizer}
            />
          </TabsContent>

          {/* Tab 2: Audio Visualizer */}
          <TabsContent value="audio-visualizer" className="pt-8">
            <ComponentDemo
              title="Audio Visualizer"
              description="Real-time audio frequency visualizer with 9 bars and configurable gradient colors. Supports Agora audio tracks and MediaStream."
              demo={<AudioVisualizerDemo />}
              code={codeExamples.audioVisualizer}
            />
          </TabsContent>

          {/* Tab 3: Mic Button with Visualizer */}
          <TabsContent value="mic-button-visualizer" className="pt-8">
            <ComponentDemo
              title="Mic Button with Visualizer"
              description="Microphone toggle button with integrated 5-bar audio visualizer. Requires Agora RTC context for publish/unpublish functionality."
              demo={<MicButtonWithVisualizerDemo />}
              code={codeExamples.micButtonWithVisualizer}
            />
          </TabsContent>

          {/* Tab 4: Convo Text Stream */}
          <TabsContent value="convo-text-stream" className="pt-8">
            <ComponentDemo
              title="Convo Text Stream"
              description="Collapsible chat interface for displaying streaming conversation transcripts. Supports markdown rendering, auto-scrolling, and both RTC/RTM message sources."
              demo={<ConvoTextStreamDemo />}
              code={codeExamples.convoTextStream}
            />
          </TabsContent>

          {/* Tab 5: Mic Selector */}
          <TabsContent value="mic-selector" className="pt-8">
            <ComponentDemo
              title="Mic Selector"
              description="A microphone selector component with automatic device detection, mute toggle, and waveform preview using Web Audio API"
              demo={<MicSelectorDemo />}
              code={codeExamples.micSelector}
            />
          </TabsContent>

          {/* Tab 6: Icon Button */}
          <TabsContent value="icon-button" className="pt-8">
            <ComponentDemo
              title="Icon Button"
              description="A compact icon button component with shape variants (round, square) and style variants (filled, outlined, standard)"
              demo={<IconButtonDemo />}
              code={codeExamples.iconButton}
            />
          </TabsContent>

          {/* Tab 7: Button */}
          <TabsContent value="button" className="pt-8">
            <ComponentDemo
              title="Button"
              description="A versatile button component with multiple variants, sizes, and border radius options"
              demo={<ButtonDemo />}
              code={codeExamples.button}
            />
          </TabsContent>

          {/* Tab 8: Card */}
          <TabsContent value="card" className="pt-8">
            <ComponentDemo
              title="Card"
              description="Flexible card containers for grouping content and actions"
              demo={<CardDemo />}
              code={codeExamples.card}
            />
          </TabsContent>

          {/* Tab 9: Chip */}
          <TabsContent value="chip" className="pt-8">
            <ComponentDemo
              title="Chip"
              description="A flexible wrapper component with rounded pill-shaped background for grouping controls"
              demo={<ChipDemo />}
              code={codeExamples.chip}
            />
          </TabsContent>

          {/* Tab 10: Value Picker */}
          <TabsContent value="value-picker" className="pt-8">
            <ComponentDemo
              title="Value Picker"
              description="A generic dropdown to select a value from a list"
              demo={<ValuePickerDemo />}
              code={codeExamples.valuePicker}
            />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
