import * as React from "react"
import { cn } from "@vix/ui/lib"
import { Technical, Display, Headline, Button } from "."

export interface CTASectionProps {
  technicalLabel?: string
  title?: string | string[]
  primaryButton?: string
  secondaryButton?: string
  className?: string
}

export function CTASection({
  technicalLabel,
  title,
  primaryButton,
  secondaryButton,
  className,
  ...props
}: CTASectionProps & React.ComponentProps<"section">) {
  return (
    <section
      className={cn("flex flex-col items-center py-8 text-center", className)}
      {...props}
    >
      {technicalLabel && (
        <Technical className="mb-4 tracking-widest uppercase">
          {technicalLabel}
        </Technical>
      )}
      {title && (
        <Display size="md" className="mb-8 uppercase">
          {Array.isArray(title)
            ? title.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < title.length - 1 && <br />}
                </React.Fragment>
              ))
            : title}
        </Display>
      )}
      <div className="flex flex-col gap-4 md:flex-row">
        {primaryButton && (
          <Button
            variant="default"
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-muted"
          >
            {primaryButton}
          </Button>
        )}
        {secondaryButton && (
          <Button
            variant="outline"
            size="xl"
            className="border-primary-foreground bg-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            {secondaryButton}
          </Button>
        )}
      </div>
    </section>
  )
}
