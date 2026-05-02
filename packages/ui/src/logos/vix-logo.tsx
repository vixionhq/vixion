import { cn } from "@vix/ui/lib"
import { type SVGAttributes } from "react"

export interface VixLogoProps extends SVGAttributes<SVGSVGElement> {
  variant?: "wordmark" | "mark"
  size?: "default" | "sm" | "lg"
}

export function VixLogo({
  className,
  variant = "wordmark",
  size = "default",
  ...props
}: VixLogoProps) {
  if (variant === "mark") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        className={cn(
          size === "default" && "h-8 w-8",
          size === "sm" && "h-6 w-6",
          size === "lg" && "h-12 w-12",
          className
        )}
        {...props}
      >
        <path d="M0 4h2v24H0V4z" fill="currentColor" />
        <path d="M4 4h2v24H4V4z" fill="currentColor" />
        <path d="M8 4h2v24H8V4z" fill="currentColor" />
        <path d="M12 4h2v24h-2V4z" fill="currentColor" />
        <path d="M16 4h2v24h-2V4z" fill="currentColor" />
        <path d="M20 4h2v24h-2V4z" fill="currentColor" />
        <path d="M24 4h2v24h-2V4z" fill="currentColor" />
        <path d="M28 4h2v24h-2V4z" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 32"
      fill="none"
      className={cn(
        size === "default" && "h-8 w-auto",
        size === "sm" && "h-6 w-auto",
        size === "lg" && "h-12 w-auto",
        className
      )}
      {...props}
    >
      <path d="M0 4h2v24H0V4z" fill="currentColor" />
      <path d="M4 4h2v24H4V4z" fill="currentColor" />
      <path d="M8 4h2v24H8V4z" fill="currentColor" />
      <path d="M12 4h2v24h-2V4z" fill="currentColor" />
      <path d="M16 4h2v24h-2V4z" fill="currentColor" />
      <path d="M20 4h2v24h-2V4z" fill="currentColor" />
      <path d="M24 4h2v24h-2V4z" fill="currentColor" />
      <path d="M28 4h2v24h-2V4z" fill="currentColor" />
      <path
        d="M32 16V8h4v24h-4v-8a4 4 0 0 1 4-4h2v-4h-2a8 8 0 0 0-4 0z"
        fill="currentColor"
      />
      <path d="M40 8h4v4h-4V8z" fill="currentColor" />
      <path d="M40 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M44 8h4v4h-4V8z" fill="currentColor" />
      <path d="M44 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M48 8h4v4h-4V8z" fill="currentColor" />
      <path d="M48 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M52 8h4v4h-4V8z" fill="currentColor" />
      <path d="M52 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M56 8h4v4h-4V8z" fill="currentColor" />
      <path d="M56 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M60 8h4v4h-4V8z" fill="currentColor" />
      <path d="M60 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M64 8h4v4h-4V8z" fill="currentColor" />
      <path d="M64 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M68 8h4v4h-4V8z" fill="currentColor" />
      <path d="M68 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M72 8h4v4h-4V8z" fill="currentColor" />
      <path d="M72 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M76 8h4v4h-4V8z" fill="currentColor" />
      <path d="M76 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M80 8h4v4h-4V8z" fill="currentColor" />
      <path d="M80 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M84 8h4v4h-4V8z" fill="currentColor" />
      <path d="M84 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M88 8h4v4h-4V8z" fill="currentColor" />
      <path d="M88 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M92 8h4v4h-4V8z" fill="currentColor" />
      <path d="M92 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M96 8h4v4h-4V8z" fill="currentColor" />
      <path d="M96 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M100 8h4v4h-4V8z" fill="currentColor" />
      <path d="M100 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M104 8h4v4h-4V8z" fill="currentColor" />
      <path d="M104 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M108 8h4v4h-4V8z" fill="currentColor" />
      <path d="M108 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M112 8h4v4h-4V8z" fill="currentColor" />
      <path d="M112 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M116 8h4v4h-4V8z" fill="currentColor" />
      <path d="M116 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M120 8h4v4h-4V8z" fill="currentColor" />
      <path d="M120 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M124 8h4v4h-4V8z" fill="currentColor" />
      <path d="M124 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M128 8h4v4h-4V8z" fill="currentColor" />
      <path d="M128 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M132 8h4v4h-4V8z" fill="currentColor" />
      <path d="M132 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M136 8h4v4h-4V8z" fill="currentColor" />
      <path d="M136 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M140 8h4v4h-4V8z" fill="currentColor" />
      <path d="M140 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M144 8h4v4h-4V8z" fill="currentColor" />
      <path d="M144 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M148 8h4v4h-4V8z" fill="currentColor" />
      <path d="M148 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M152 8h4v4h-4V8z" fill="currentColor" />
      <path d="M152 16h4v4h-4v-4z" fill="currentColor" />
      <path d="M156 8h4v4h-4V8z" fill="currentColor" />
      <path d="M156 16h4v4h-4v-4z" fill="currentColor" />
    </svg>
  )
}