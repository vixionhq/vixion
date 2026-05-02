import * as React from "react"
import { cn } from "@vix/ui/lib/utils"

export interface LogoCloudProps {
  logos: Array<{ name: string; url: string }>
  className?: string
}

export function LogoCloud({
  logos,
  className,
  ...props
}: LogoCloudProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-12 opacity-50 contrast-125 grayscale md:gap-24",
        className
      )}
      {...props}
    >
      {logos.map((logo) => (
        <img
          key={logo.name}
          src={logo.url}
          alt={logo.name}
          className="h-8 invert md:h-12"
        />
      ))}
    </div>
  )
}
