import * as React from "react"
import { cn } from "@vix/ui/lib/utils"
import { Technical, Label } from "."

export interface PillarItemProps {
  label: string
  description: string
  id: string
}

export function PillarItem({
  label,
  description,
  id,
  className,
  ...props
}: PillarItemProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col border-r border-white/10 p-6 last:border-r-0",
        className
      )}
      {...props}
    >
      <Technical className="mb-2 block text-white/40">{id}</Technical>
      <Label className="mb-3 block text-white uppercase">{label}</Label>
      <p className="text-sm text-white/60">{description}</p>
    </div>
  )
}