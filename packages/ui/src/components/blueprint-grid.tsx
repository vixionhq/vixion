import * as React from "react"
import { cn } from "@vix/ui/lib/utils"

export interface BlueprintGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function BlueprintGrid({ className, ...props }: BlueprintGridProps) {
  return (
    <div
      className={cn("relative overflow-hidden bg-background", className)}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <div className="relative">{props.children}</div>
    </div>
  )
}
