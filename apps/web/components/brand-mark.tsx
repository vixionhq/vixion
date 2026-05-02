import Image from "next/image"

import { brandMarkSizeClassName, logoBySurface } from "@/lib/brand-data"
import { cn } from "@vix/ui/lib"

interface BrandMarkProps {
  surface?: "dark" | "light"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function BrandMark({
  surface = "dark",
  size = "default",
  className,
}: BrandMarkProps) {
  return (
    <Image
      src={logoBySurface[surface]}
      alt="Vixion"
      width={500}
      height={500}
      priority={size === "default"}
      className={cn(
        "shrink-0 object-contain",
        brandMarkSizeClassName[size],
        className
      )}
    />
  )
}
