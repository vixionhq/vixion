import * as React from "react"
import { ServiceCard } from "./service-card"

export interface ServicesGridProps {
  services: React.ComponentProps<typeof ServiceCard>[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="grid grid-cols-1 gap-px border-y-[0.5px] border-border bg-border md:grid-cols-4 md:grid-rows-2">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  )
}

ServicesGrid.displayName = "ServicesGrid"
