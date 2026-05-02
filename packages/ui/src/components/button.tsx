import type { ComponentProps, ElementType, ReactNode } from "react"
import { cn } from "@vix/ui/lib"

type ButtonProps = ComponentProps<"button"> & {
  variant?: "default" | "outline" | "ghost" | "destructive" | "link"
  size?: "default" | "xs" | "sm" | "lg" | "xl" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"
}

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex shrink-0 items-center justify-center border font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50"

  const variantStyles = {
    default: "border-primary bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary",
    outline: "border-border bg-transparent hover:bg-muted hover:text-foreground",
    ghost: "border-transparent hover:bg-muted hover:text-foreground",
    destructive: "border-destructive text-destructive hover:bg-destructive/20",
    link: "border-transparent text-primary underline-offset-4 hover:underline",
  }

  const sizeStyles = {
    default: "h-9 px-4 py-2 text-sm",
    xs: "h-6 px-2.5 text-xs",
    sm: "h-8 px-3 text-sm",
    lg: "h-10 px-6 text-base",
    xl: "h-12 px-8 text-base",
    icon: "size-9",
    "icon-xs": "size-6",
    "icon-sm": "size-8",
    "icon-lg": "size-10",
  }

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        "rounded-none",
        className
      )}
      {...props}
    />
  )
}

export { Button }
export type { ButtonProps }