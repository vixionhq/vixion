"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@vix/ui/lib/utils"
import { locales } from "@/lib/locale-data"

export interface LocaleSwitcherProps {
  locale: string
  className?: string
}

export function LocaleSwitcher({ locale, className }: LocaleSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const currentPage = pathname?.replace(`/${locale}`, "") || ""

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 border border-white/30 px-3 py-1.5",
          "font-display text-xs tracking-widest text-white uppercase",
          "transition-all duration-200",
          "hover:border-white hover:bg-white hover:text-black"
        )}
        aria-expanded={isOpen}
        aria-label="Switch language"
      >
        <span className="font-bold">{locale.toUpperCase()}</span>
        <span className="text-[10px] opacity-70">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 z-50 mt-1 min-w-[140px] border border-white/20 bg-black">
            {locales.map((loc, idx) => (
              <Link
                key={loc.code}
                href={
                  loc.code === "en" ? `/en${currentPage}` : `/fr${currentPage}`
                }
                className={cn(
                  "flex items-center justify-between px-3 py-2",
                  "font-display text-xs tracking-widest text-white uppercase",
                  "transition-colors hover:bg-white hover:text-black",
                  idx > 0 && "border-t border-white/10"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span>{loc.code.toUpperCase()}</span>
                <span className="text-[10px] text-white/50">{loc.name}</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
