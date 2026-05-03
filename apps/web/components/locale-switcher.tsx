"use client"

import { useTransition } from "react"
import { useRouter, usePathname } from "next/navigation"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@vix/ui/primitives/select"
import { locales } from "@/lib/locale-data"
import { cn } from "@vix/ui/lib/utils"

interface LocaleSwitcherProps {
  locale: string
  className?: string
}

export function LocaleSwitcher({ locale, className }: LocaleSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const currentPage = pathname?.replace(`/${locale}`, "") || ""

  function onValueChange(value: string | null) {
    if (!value) return
    const newLocale = value
    const newPath =
      newLocale === "en"
        ? `/en${currentPage}`
        : currentPage === ""
          ? `/${newLocale}`
          : `/fr${currentPage}`

    startTransition(() => {
      router.replace(newPath)
    })
  }

  return (
    <Select value={locale} onValueChange={onValueChange} disabled={isPending}>
      <SelectTrigger className="uppercase" aria-label="Switch language">
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        className="max-w-[140px] border border-border bg-background text-foreground"
        sideOffset={4}
        align="end"
      >
        {locales.map((loc, idx) => (
          <SelectItem
            key={loc.code}
            value={loc.code}
            className={cn(
              "font-display text-xs tracking-widest uppercase",
              "focus:bg-foreground focus:text-background",
              "data-[highlighted]:bg-foreground data-[highlighted]:text-background",
              idx > 0 && "border-t border-border",
              loc.code === locale && "bg-foreground/10 font-bold"
            )}
          >
            <span className="mr-2">{loc.code.toUpperCase()}</span>
            <span className="text-muted-foreground">{loc.name}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
