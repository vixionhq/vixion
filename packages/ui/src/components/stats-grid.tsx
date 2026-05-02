import * as React from "react"
import { cn } from "@vix/ui/lib/utils"
import { Display, Technical } from "./typography"

export interface StatsGridProps {
  stats: Array<{ label: string; value: string }>
  className?: string
}

export function StatsGrid({
  stats,
  className,
  ...props
}: StatsGridProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 border-b border-border md:grid-cols-4",
        className
      )}
      {...props}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col gap-2 border-r border-border p-6 md:border-r"
        >
          <Technical className="text-muted-foreground/40 uppercase">
            {stat.label}
          </Technical>
          <Display size="lg" className="text-primary">
            {stat.value}
          </Display>
        </div>
      ))}
    </div>
  )
}
