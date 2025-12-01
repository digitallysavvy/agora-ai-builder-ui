"use client"

import { Card, CardContent, CardTitle } from "@/registry/agora-ui/ui/card"

export default function CardDemo() {
  return (
    <div className="w-full space-y-6">
      {/* Demo */}
      <div className="space-y-4 rounded-lg border p-4">
        <p className="text-sm font-medium">Interactive Demo</p>
        <div className="mx-auto flex max-w-lg flex-col gap-4">
          {/* Basic Card */}
          <Card className="w-full"></Card>

          {/* Card with Title */}
          <Card className="w-full">
            <CardTitle>Basic Card</CardTitle>
          </Card>

          {/* Full Example Card */}
          <Card className="w-full">
            <CardTitle>Basic Card</CardTitle>
            <CardContent>
              <p className="text-sm">
                Cards are flexible containers for grouping content and actions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Props */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Props</p>
        <div className="space-y-3">
          <div>
            <p className="mb-1 text-sm font-medium">Card</p>
            <div className="text-muted-foreground space-y-1.5 pl-3 text-xs">
              <div>
                <strong>className?:</strong> string - Additional CSS classes
              </div>
              <div>
                <strong>children:</strong> React.ReactNode - Card content
              </div>
            </div>
          </div>
          <div>
            <p className="mb-1 text-sm font-medium">CardTitle</p>
            <div className="text-muted-foreground space-y-1.5 pl-3 text-xs">
              <div>
                <strong>className?:</strong> string - Additional CSS classes
              </div>
              <div>
                <strong>children:</strong> React.ReactNode - Title content
              </div>
            </div>
          </div>
          <div>
            <p className="mb-1 text-sm font-medium">CardContent</p>
            <div className="text-muted-foreground space-y-1.5 pl-3 text-xs">
              <div>
                <strong>className?:</strong> string - Additional CSS classes
              </div>
              <div>
                <strong>children:</strong> React.ReactNode - Content
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="rounded-lg border p-4">
        <p className="mb-3 text-sm font-medium">Features</p>
        <div className="text-muted-foreground space-y-1.5 text-xs">
          <div>• Flexible container for grouping content</div>
          <div>• Three composable components: Card, CardTitle, CardContent</div>
          <div>• Built-in spacing with gap-3</div>
          <div>• Rounded corners and border styling</div>
          <div>• Semantic HTML structure</div>
          <div>• Theme-aware background and text colors</div>
        </div>
      </div>
    </div>
  )
}
