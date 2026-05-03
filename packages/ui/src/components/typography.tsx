import { cn } from "@vix/ui/lib"
import { type HTMLAttributes, forwardRef } from "react"

export interface DisplayProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: "xl" | "lg" | "md"
}

const displayVariants = {
  xl: "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] -tracking-[0.02em]",
  lg: "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.2] -tracking-[0.01em]",
  md: "text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-[1.3]",
}

const headlineVariants = {
  lg: "text-xl sm:text-2xl lg:text-[32px] font-semibold tracking-tight leading-[1.2] -tracking-[0.01em]",
  md: "text-lg sm:text-xl lg:text-[24px] font-medium tracking-tight leading-[1.3]",
  sm: "text-base sm:text-lg lg:text-xl font-medium tracking-tight leading-[1.3]",
}

export const Display = forwardRef<HTMLHeadingElement, DisplayProps>(
  ({ className, size = "xl", children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          "font-display rounded-none",
          displayVariants[size],
          className
        )}
        {...props}
      >
        {children}
      </h1>
    )
  }
)
Display.displayName = "Display"

export interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: "lg" | "md" | "sm"
}

export const Headline = forwardRef<HTMLHeadingElement, HeadlineProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          "font-display rounded-none",
          headlineVariants[size],
          className
        )}
        {...props}
      >
        {children}
      </h2>
    )
  }
)
Headline.displayName = "Headline"

export interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "lg" | "md" | "sm"
}

const bodyVariants = {
  lg: "text-base sm:text-lg lg:text-lg leading-[1.6]",
  md: "text-sm sm:text-base lg:text-base leading-[1.6]",
  sm: "text-xs sm:text-sm lg:text-sm leading-[1.6]",
}

export const Body = forwardRef<HTMLParagraphElement, BodyProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "font-body rounded-none",
          bodyVariants[size],
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)
Body.displayName = "Body"

export interface LeadProps extends HTMLAttributes<HTMLParagraphElement> {}

export const Lead = forwardRef<HTMLParagraphElement, LeadProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "font-body text-lg leading-[1.6] text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)
Lead.displayName = "Lead"

export interface LargeProps extends HTMLAttributes<HTMLSpanElement> {}

export const Large = forwardRef<HTMLSpanElement, LargeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("text-base sm:text-lg lg:text-lg font-semibold rounded-none", className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)
Large.displayName = "Large"

export interface SmallProps extends HTMLAttributes<HTMLSpanElement> {}

export const Small = forwardRef<HTMLSpanElement, SmallProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "text-sm font-medium rounded-none",
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
Small.displayName = "Small"

export interface MutedProps extends HTMLAttributes<HTMLSpanElement> {}

export const Muted = forwardRef<HTMLSpanElement, MutedProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "text-sm text-muted-foreground rounded-none",
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
Muted.displayName = "Muted"

export interface TechnicalProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "default" | "sm"
}

export const Technical = forwardRef<HTMLSpanElement, TechnicalProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "font-mono rounded-none uppercase",
          size === "default"
            ? "text-[10px] sm:text-[12px] leading-[1.4] tracking-[0.05em]"
            : "text-[9px] sm:text-[10px] leading-[1.4] tracking-[0.05em]",
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
Technical.displayName = "Technical"

export interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "default" | "sm"
}

export const Label = forwardRef<HTMLSpanElement, LabelProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "font-display text-[11px] font-bold uppercase tracking-[0.1em] leading-[1] rounded-none",
          size === "sm" && "text-[10px]",
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)
Label.displayName = "Label"

export interface BlockquoteProps
  extends HTMLAttributes<HTMLQuoteElement> {}

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={cn(
          "border-l-2 border-border pl-6 italic text-muted-foreground rounded-none",
          className
        )}
        {...props}
      >
        {children}
      </blockquote>
    )
  }
)
Blockquote.displayName = "Blockquote"

export interface ListProps extends HTMLAttributes<HTMLUListElement> {}

export const List = forwardRef<HTMLUListElement, ListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(
          "list-disc list-inside space-y-2 text-muted-foreground rounded-none",
          className
        )}
        {...props}
      >
        {children}
      </ul>
    )
  }
)
List.displayName = "List"

export interface CodeProps extends HTMLAttributes<HTMLSpanElement> {}

export const Code = forwardRef<HTMLSpanElement, CodeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(
          "font-mono text-sm bg-muted px-1.5 py-0.5 rounded-none",
          className
        )}
        {...props}
      >
        {children}
      </code>
    )
  }
)
Code.displayName = "Code"