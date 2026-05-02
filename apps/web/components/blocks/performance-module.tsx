import { cn } from "@vix/ui/lib"
import type { ComponentProps } from "react"

interface PerformanceModuleProps extends ComponentProps<"section"> {}

function PerformanceModule({ className, ...props }: PerformanceModuleProps) {
  return (
    <section className={cn("", className)} {...props}>
      <div className="mb-8">
        <span className="font-mono text-xs text-muted-foreground block mb-2">
          MODULE_ID: PERFORMANCE_01
        </span>
        <h2 className="font-display text-4xl uppercase leading-none">
          Technical Performance
        </h2>
        <p className="font-body text-muted-foreground mt-4 max-w-2xl">
          Real-time performance metrics. Neural processing benchmarks executed at wire speed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border">
        {/* Main Chart Area */}
        <div className="md:col-span-3 p-8 border-r border-border">
          <div className="flex items-center justify-between mb-8">
            <div className="font-mono text-xs text-muted-foreground">
              NEURAL_PROCESSING_VELOCITY
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-muted-foreground">24H</span>
              <span className="font-mono text-xs text-muted-foreground/50">7D</span>
              <span className="font-mono text-xs text-muted-foreground/50">30D</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[65, 45, 78, 52, 88, 72, 95, 58, 82, 67, 90, 75, 85, 60, 92, 78, 88, 65, 45, 78, 52, 88, 72, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        {/* Stats Column */}
        <div className="p-8 flex flex-col gap-6">
          <div>
            <div className="font-mono text-xs text-muted-foreground mb-2">AVG_LATENCY</div>
            <div className="font-display text-3xl">0.04ms</div>
          </div>
          <div>
            <div className="font-mono text-xs text-muted-foreground mb-2">THROUGHPUT</div>
            <div className="font-display text-3xl">2.4GB/s</div>
          </div>
          <div>
            <div className="font-mono text-xs text-muted-foreground mb-2">ACTIVE_NODES</div>
            <div className="font-display text-3xl">14,209</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { PerformanceModule }