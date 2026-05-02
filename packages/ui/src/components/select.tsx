import * as SelectPrimitive from "@vix/ui/primitives/select"
import type { ComponentProps } from "react"

import { cn } from "@vix/ui/lib"

const Select = SelectPrimitive.Select

function SelectContent({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.SelectContent>) {
  return (
    <SelectPrimitive.SelectContent
      className={cn(
        "rounded-md border border-border bg-surface-container-lowest text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SelectItem({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.SelectItem>) {
  return (
    <SelectPrimitive.SelectItem
      className={cn("rounded-sm text-sm", className)}
      {...props}
    />
  )
}

function SelectTrigger({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.SelectTrigger>) {
  return (
    <SelectPrimitive.SelectTrigger
      className={cn(
        "h-10 w-full rounded-md border-border bg-surface-container-lowest px-3 text-sm text-foreground hover:bg-surface-container-low focus-visible:ring-primary/30 data-placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

const SelectValue = SelectPrimitive.SelectValue
const SelectGroup = SelectPrimitive.SelectGroup
const SelectLabel = SelectPrimitive.SelectLabel
const SelectSeparator = SelectPrimitive.SelectSeparator

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
