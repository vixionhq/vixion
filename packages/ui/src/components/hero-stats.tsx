import * as React from "react"
import { cn } from "@vix/ui/lib"

export interface HeroStatsProps {
  stats: {
    metric: string
    label: string
  }[]
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="grid grid-cols-1 divide-x-[0.5px] divide-border md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.metric} className="flex flex-col gap-4 p-8">
          <span className="font-mono text-[12px] leading-[1.4] tracking-[0.05em] text-muted-foreground">
            {stat.metric}
          </span>
          <p className="text-xs tracking-widest text-zinc-400 uppercase">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}

HeroStats.displayName = "HeroStats"
