import * as React from "react"
import {
  Card as CardPrimitive,
  CardHeader as CardHeaderPrimitive,
  CardTitle as CardTitlePrimitive,
  CardDescription as CardDescriptionPrimitive,
  CardContent as CardContentPrimitive,
  CardFooter as CardFooterPrimitive,
} from "@vix/ui/primitives/card"

import { cn } from "@vix/ui/lib"

type CardProps = React.ComponentProps<"div"> & {
  variant?: "default" | "elevated" | "outline"
}

function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <CardPrimitive
      data-slot="card"
      className={cn(
        "rounded-none border border-border bg-card text-card-foreground p-6",
        variant === "elevated" && "bg-surface-container",
        variant === "outline" && "border-border bg-transparent",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <CardHeaderPrimitive
      data-slot="card-header"
      className={cn("mb-4", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <CardTitlePrimitive
      data-slot="card-title"
      className={cn(
        "font-display text-2xl font-semibold tracking-tight leading-tight",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <CardDescriptionPrimitive
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <CardContentPrimitive
      data-slot="card-content"
      className={cn("", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <CardFooterPrimitive
      data-slot="card-footer"
      className={cn("flex items-center pt-4 mt-4 border-t border-border", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
}
export type { CardProps }