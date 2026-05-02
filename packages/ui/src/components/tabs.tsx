import { cn } from "@vix/ui/lib"
import { type HTMLAttributes, forwardRef } from "react"

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

const TabsRoot = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, defaultValue, value, onValueChange, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} data-tabs-root {...props}>
        {children}
      </div>
    )
  }
)
TabsRoot.displayName = "Tabs"

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {}

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex gap-1", className)} data-tabs-list {...props}>
        {children}
      </div>
    )
  }
)
TabsList.displayName = "TabsList"

export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string
}

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, children, value, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "px-4 py-2 font-mono text-xs transition-colors border border-transparent data-[active]:border-border data-[active]:bg-foreground data-[active]:text-background",
          "text-muted-foreground hover:text-foreground",
          className
        )}
        data-value={value}
        {...props}
      >
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, children, value, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} data-value={value} {...props}>
        {children}
      </div>
    )
  }
)
TabsContent.displayName = "TabsContent"

export { TabsRoot as Tabs, TabsList, TabsTrigger, TabsContent }