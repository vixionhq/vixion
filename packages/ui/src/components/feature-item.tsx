import * as React from "react"
import { cn } from "@vix/ui/lib/utils"
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react"

export interface FeatureItemProps {
  icon: IconSvgElement
  label: string
  id: string
}

export function FeatureItem({
  icon,
  label,
  id,
  className,
  ...props
}: FeatureItemProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group cursor-crosshair border-r border-white/10 p-6 text-white transition-colors last:border-r-0 hover:bg-white",
        className
      )}
      {...props}
    >
      {/* Icon */}
      <HugeiconsIcon
        icon={icon}
        className="mb-4 block group-hover:text-black/40"
      />

      {/* Reference */}
      <span className="font-technical-sm block text-[10px] text-white/40 group-hover:text-black/40">
        {id}
      </span>

      {/* Label */}
      <span className="font-label-caps block text-white group-hover:text-black">
        {label}
      </span>
    </div>
  )
}
