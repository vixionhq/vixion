import * as React from "react"
import { cn } from "@vix/ui/lib"

export interface BlueprintSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function BlueprintSection({
  children,
  className,
  ...props
}: BlueprintSectionProps) {
  return (
    <div
      className={cn(
        "relative mx-0 my-6 overflow-hidden border-t bg-black",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

BlueprintSection.displayName = "BlueprintSection"
