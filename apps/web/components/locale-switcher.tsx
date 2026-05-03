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
      <SelectTrigger
        className={cn(
          "h-auto w-auto border border-white/30 px-3 py-1.5",
          "font-display text-xs tracking-widest text-white uppercase",
          "transition-all duration-200",
          "hover:border-white hover:bg-white hover:text-black",
          "focus-visible:ring-0 focus-visible:ring-offset-0",
          "data-placeholder:text-white",
          className
        )}
        aria-label="Switch language"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        className="max-w-[140px] border border-white/20 bg-black text-white"
        sideOffset={4}
        align="end"
      >
        {locales.map((loc, idx) => (
          <SelectItem
            key={loc.code}
            value={loc.code}
            className={cn(
              "font-display text-xs tracking-widest uppercase",
              "focus:bg-white focus:text-black",
              "data-[highlighted]:bg-white data-[highlighted]:text-black",
              idx > 0 && "border-t border-white/10",
              loc.code === locale && "bg-white/10 font-bold"
            )}
          >
            <span className="mr-2">{loc.code.toUpperCase()}</span>
            <span className="text-white/50">{loc.name}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
