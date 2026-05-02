import { cn } from "@vix/ui/lib"
import type { ComponentProps } from "react"
import { defaultFeatureGridItems } from "@/lib/blocks-data"

interface FeatureGridProps extends ComponentProps<"section"> {
  features?: {
    id: string
    title: string
    description: string
  }[]
}

function FeatureGrid({ className, features = defaultFeatureGridItems, ...props }: FeatureGridProps) {
  return (
    <section className={cn("", className)} {...props}>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border border-border">
        {features.map((feature, i) => (
          <div
            key={feature.id}
            className={cn(
              "p-6 border-r border-b border-border hover:bg-muted/10 transition-colors cursor-pointer group",
              i === features.length - 1 && "border-r-0"
            )}
          >
            <div className="font-mono text-xs text-muted-foreground/40 mb-4">
              ID: {feature.id}
            </div>
            <div className="font-display text-sm uppercase tracking-wider group-hover:text-foreground transition-colors">
              {feature.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { FeatureGrid }
