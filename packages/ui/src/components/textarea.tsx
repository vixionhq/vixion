import { Textarea as TextareaPrimitive } from "@vix/ui/primitives/textarea"

import { cn } from "@vix/ui/lib"

type TextareaProps = React.ComponentProps<"textarea"> & {
  variant?: "default" | "underline" | "filled"
}

function Textarea({
  className,
  variant = "default",
  ...props
}: TextareaProps) {
  return (
    <TextareaPrimitive
      className={cn(
        "rounded-none resize-none",
        variant === "underline" && "border-b border-x-0 border-t-0 bg-transparent px-0 py-2 focus:border-primary",
        variant === "filled" && "bg-surface-container",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
export type { TextareaProps }