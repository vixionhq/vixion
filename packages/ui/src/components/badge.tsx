import { Badge as BadgePrimitive, badgeVariants } from "@vix/ui/primitives/badge"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

import { cn } from "@vix/ui/lib"

const vixBadgeVariants = cva(badgeVariants(), {
  variants: {
    variant: {
      default: "rounded-none bg-primary text-primary-foreground",
      secondary: "rounded-none bg-secondary text-secondary-foreground",
      destructive: "rounded-none border-destructive text-destructive",
      outline: "rounded-none border-border",
      ghost: "rounded-none border-transparent",
      link: "rounded-none border-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type BadgeProps = ComponentProps<typeof BadgePrimitive> &
  VariantProps<typeof vixBadgeVariants>

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <BadgePrimitive
      className={cn(vixBadgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, vixBadgeVariants as badgeVariants }
export type { BadgeProps }