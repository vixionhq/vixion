import * as React from "react"
import { cn } from "@vix/ui/lib"
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react"

export interface ServiceCardProps extends React.ComponentProps<"div"> {
  icon: IconSvgElement
  id: string
  title: string
  description: string
  features?: string[]
  image?: string
  variant?: "default" | "featured"
  isLast?: boolean
}

export function ServiceCard({
  icon,
  id,
  title,
  description,
  features,
  image,
  variant = "default",
  isLast = false,
  className,
  ...props
}: ServiceCardProps) {
  return (
    <div
      data-slot="service-card"
      className={cn(
        "group transition-colors10 flex cursor-crosshair flex-col justify-between bg-background p-8 hover:bg-foreground/10",
        variant === "featured" && "md:col-span-2 md:row-span-2",
        className
      )}
      {...props}
    >
      <div>
        {!isLast && (
          <>
            <div className="mb-12 flex items-start justify-between">
              <span className="material-symbols-outlined text-4xl">
                <HugeiconsIcon icon={icon} />
              </span>
              <span className="font-mono text-[12px] leading-[1.4] tracking-[0.05em] text-muted-foreground">
                {id}
              </span>
            </div>
            <h3 className="mb-2 font-display text-[32px] leading-[1.2] font-semibold -tracking-[0.01em] tracking-tight uppercase">
              {title}
            </h3>
            <p className="text-xs tracking-wider text-muted-foreground uppercase">
              {description}
            </p>
          </>
        )}
        {/* for last card */}
        {isLast && (
          <div className="flex justify-between">
            <div>
              <div className="mb-12 flex items-start justify-between">
                <span className="material-symbols-outlined text-4xl">
                  <HugeiconsIcon icon={icon} />
                </span>
                <span className="font-mono text-[12px] leading-[1.4] tracking-wider text-muted-foreground">
                  {id}
                </span>
              </div>
              <h3 className="mb-2 font-display text-[32px] leading-[1.2] font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="max-w-sm text-xs tracking-wider text-wrap text-muted-foreground uppercase">
                {description}
              </p>
            </div>
            {image && variant === "featured" && (
              <div className="mt-auto">
                <img
                  src={image}
                  alt="Analytics visualization"
                  className="h-24 w-32 border-[0.5px] border-zinc-800 object-cover grayscale"
                />
              </div>
            )}
          </div>
        )}
      </div>
      {features && (
        <ul className="mt-12 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="h-1 w-1 bg-white" />
              <span className="font-mono text-[12px] leading-[1.4] tracking-[0.05em] text-zinc-400">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

ServiceCard.displayName = "ServiceCard"
