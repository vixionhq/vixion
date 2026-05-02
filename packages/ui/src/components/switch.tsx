import { Switch as SwitchPrimitive } from "@vix/ui/primitives/switch"
import type { ComponentProps } from "react"

import { cn } from "@vix/ui/lib"

function Switch({ className, ...props }: ComponentProps<typeof SwitchPrimitive>) {
  return (
    <SwitchPrimitive
      className={cn(
        "data-checked:bg-primary data-unchecked:bg-surface-container-high",
        className
      )}
      {...props}
    />
  )
}

export { Switch }
