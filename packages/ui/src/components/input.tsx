import { Input as InputPrimitive } from "@vix/ui/primitives/input"
import { Textarea as TextareaPrimitive } from "@vix/ui/primitives/textarea"
import type { ComponentProps } from "react"

import { cn } from "@vix/ui/lib"

type InputProps = ComponentProps<"input"> & {
  variant?: "default" | "underline" | "filled"
  status?: "default" | "error" | "success"
}

function Input({
  className,
  variant = "default",
  status = "default",
  type = "text",
  ...props
}: InputProps) {
  return (
    <InputPrimitive
      type={type}
      className={cn(
        "rounded-none",
        variant === "underline" &&
          "border-x-0 border-t-0 border-b bg-transparent px-0 py-2 focus:border-primary",
        variant === "filled" && "bg-surface-container",
        status === "error" && "border-destructive",
        status === "success" && "border-primary",
        className
      )}
      {...props}
    />
  )
}

type TextareaProps = ComponentProps<"textarea"> & {
  variant?: "default" | "underline" | "filled"
}

function Textarea({ className, variant = "default", ...props }: TextareaProps) {
  return (
    <TextareaPrimitive
      className={cn(
        "resize-none rounded-none",
        variant === "underline" &&
          "border-x-0 border-t-0 border-b bg-transparent px-0 py-2 focus:border-primary",
        variant === "filled" && "bg-surface-container",
        className
      )}
      {...props}
    />
  )
}

export { Input, Textarea }
export type { InputProps, TextareaProps }
