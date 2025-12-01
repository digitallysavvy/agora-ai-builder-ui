"use client"

import { useState } from "react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/agora-ui/ui/tabs"
import { ValuePicker, type Item } from "@/registry/agora-ui/ui/value-picker"

const items: Item[] = [
  {
    id: "option-1",
    name: "Option 1",
  },
  {
    id: "option-2",
    name: "Option 2",
  },
  {
    id: "option-3",
    name: "Option 3",
  },
  {
    id: "option-4",
    name: "Option 4",
  },
  {
    id: "option-5",
    name: "Option 5",
  },
  {
    id: "option-6",
    name: "Option 6",
  },
  {
    id: "option-7",
    name: "Option 7",
  },
  {
    id: "option-8",
    name: "Option 8",
  },
  {
    id: "option-9",
    name: "Option 9",
  },
]

export default function ValuePickerDemo() {
  const [selectedValueScrollable, setSelectedValueScrollable] = useState<
    string | undefined
  >("option-1")
  const [selectedValueFull, setSelectedValueFull] = useState<
    string | undefined
  >("option-1")

  return (
    <div className="w-full space-y-6">
      <Tabs defaultValue="scrollable" className="w-full">
        {/* Tabs Navigation */}
        <div className="mb-4 flex items-center border-b pb-2">
          <TabsList>
            <TabsTrigger value="scrollable">With Scroll</TabsTrigger>
            <TabsTrigger value="full">Full Height</TabsTrigger>
          </TabsList>
        </div>

        {/* Tab 1: Scrollable */}
        <TabsContent value="scrollable" className="space-y-4">
          <div className="space-y-4 rounded-lg border p-4">
            <div className="mx-auto max-w-lg space-y-4">
              <ValuePicker
                label="Select a value (with scroll)"
                items={items}
                value={selectedValueScrollable}
                onValueChange={setSelectedValueScrollable}
                placeholder="Choose an option..."
                maxHeight="150px"
              />

              {selectedValueScrollable && (
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-medium">Selected Value:</p>
                  <p className="mt-2 text-lg font-semibold">
                    {items.find((i) => i.id === selectedValueScrollable)?.name}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    ID: {selectedValueScrollable}
                  </p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Full Height */}
        <TabsContent value="full" className="space-y-4">
          <div className="space-y-4 rounded-lg border p-4">
            <div className="mx-auto max-w-lg space-y-4">
              <ValuePicker
                label="Select a value (full height)"
                items={items}
                value={selectedValueFull}
                onValueChange={setSelectedValueFull}
                placeholder="Choose an option..."
              />

              {selectedValueFull && (
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-medium">Selected Value:</p>
                  <p className="mt-2 text-lg font-semibold">
                    {items.find((i) => i.id === selectedValueFull)?.name}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    ID: {selectedValueFull}
                  </p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Props */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="text-muted-foreground space-y-2 text-xs">
          <div>
            <strong>items:</strong> Item[] - Array of items to display
            (required)
          </div>
          <div>
            <strong>value?:</strong> string - Currently selected item ID
          </div>
          <div>
            <strong>onValueChange?:</strong> (value: string) =&gt; void -
            Callback when selection changes
          </div>
          <div>
            <strong>placeholder?:</strong> string - Placeholder text (default:
            &quot;Select a value...&quot;)
          </div>
          <div>
            <strong>label?:</strong> string - Label displayed above dropdown
          </div>
          <div>
            <strong>disabled?:</strong> boolean - Disable the dropdown
          </div>
          <div>
            <strong>open?:</strong> boolean - Controlled open state
          </div>
          <div>
            <strong>onOpenChange?:</strong> (open: boolean) =&gt; void -
            Callback when open state changes
          </div>
          <div>
            <strong>maxHeight?:</strong> string - Maximum height for dropdown
            with scroll (e.g., &quot;150px&quot;, &quot;200px&quot;). If not
            provided, shows all items without scroll.
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Features</p>
        <div className="text-muted-foreground space-y-1.5 text-xs">
          <div>• Generic dropdown for value selection</div>
          <div>• Built on Radix UI Select primitive</div>
          <div>• Keyboard navigation support</div>
          <div>
            • Optional scrollable viewport for long lists (set maxHeight prop)
          </div>
          <div>• Visual indicator for selected item</div>
          <div>• Smooth animations for open/close</div>
          <div>• Theme-aware styling</div>
          <div>• Optional label above dropdown</div>
        </div>
      </div>
    </div>
  )
}
