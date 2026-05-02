"use client"

import { useState } from "react"
import { cn } from "@vix/ui/lib"
import { Label, Technical } from "@vix/ui/components"

interface ComponentDemoProps {
  id: string
  name: string
  category: string
  preview: React.ReactNode
  code: string
}

export function ComponentDemo({
  id,
  name,
  category,
  preview,
  code,
}: ComponentDemoProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")

  return (
    <div className="border border-border">
      <div className="border-b border-border bg-surface/50 px-4 py-2">
        <Technical className="text-xs text-muted-foreground/30">
          {category.toUpperCase()}
        </Technical>
      </div>

      <div
        className={cn(
          "flex min-h-[200px] items-center justify-center p-8",
          activeTab === "code" && "hidden"
        )}
      >
        {preview}
      </div>

      <div
        className={cn(
          "max-h-[200px] overflow-auto bg-surface p-4 font-mono text-xs",
          activeTab === "code" ? "block" : "hidden"
        )}
      >
        <pre className="whitespace-pre-wrap text-muted-foreground">{code}</pre>
      </div>

      <div className="flex items-center justify-between border-t border-border px-4 py-2">
        <Label className="text-xs">{name}</Label>

        <div className="flex border border-border">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-3 py-1 text-xs transition-colors",
              activeTab === "preview"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            PREVIEW
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("code")}
            className={cn(
              "px-3 py-1 text-xs transition-colors",
              activeTab === "code"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            CODE
          </button>
        </div>
      </div>
    </div>
  )
}
