"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { BrandMark } from "./brand-mark"
import { LocaleSwitcher } from "./locale-switcher"
import { MobileNav } from "./mobile-nav"
import en from "../messages/en.json"
import fr from "../messages/fr.json"
import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
} from "@vix/ui/primitives/drawer"
import { Button } from "@vix/ui/components"
import { nav } from "@/lib/nav-data"

const messages = { en, fr }

interface NavProps {
  locale?: string
}

export function Nav({ locale = "fr" }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const lang = locale === "en" ? "en" : "fr"
  const t = messages[lang]!.Nav!

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 w-full max-w-full border-b border-border bg-background px-6">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center justify-center">
            <BrandMark surface="dark" size="lg" />
            <span className="-mr-1.5 h-8 font-display text-xl font-black tracking-[0.2em] text-foreground">
              VIXION
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.main.map((item) => (
              <Link
                key={item.title}
                href={`/${lang}${item.url}`}
                className="cursor-crosshair py-1 font-display text-sm tracking-widest text-foreground uppercase transition-all duration-200 hover:bg-foreground hover:px-2 hover:text-background"
              >
                {t[item.title as keyof typeof t]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LocaleSwitcher locale={lang} />

            <Link
              href="/get-started"
              className="hidden border border-foreground bg-foreground px-6 py-2 font-display text-sm font-bold tracking-widest text-background uppercase transition-all duration-200 hover:bg-muted-foreground hover:text-foreground md:block"
            >
              {t.getStarted}
            </Link>

            {/* Mobile menu button */}
            <Button
              className="group md:hidden"
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open menu"
            >
              <svg
                className="pointer-events-none"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M4 12L20 12"
                  className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                />
                <path
                  d="M4 12H20"
                  className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                />
                <path
                  d="M4 12H20"
                  className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} direction="bottom">
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            <div className="flex flex-col gap-6 pt-8">
              {nav.main.map((item) => {
                const isActive =
                  pathname === `/${lang}${item.url}` ||
                  (item.url === "" && pathname === `/${lang}`)

                return (
                  <DrawerClose key={item.title} asChild>
                    <Link
                      href={`/${lang}${item.url}`}
                      className={`block py-3 font-display text-lg tracking-widest uppercase transition-colors ${
                        isActive
                          ? "text-primary font-bold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground/60">
                        {item.url === ""
                          ? "01"
                          : String(nav.main.indexOf(item) + 1).padStart(2, "0")}
                      </span>
                      {t[item.title as keyof typeof t]}
                    </Link>
                  </DrawerClose>
                )
              })}

              <div className="mt-4 border-t border-border pt-6">
                <Link
                  href={`/${lang}/get-started`}
                  className="block border border-foreground bg-foreground px-6 py-3 text-center font-display text-sm font-bold tracking-widest text-background uppercase transition-colors hover:bg-muted-foreground hover:text-foreground"
                >
                  <DrawerClose asChild>
                    <span>{t.getStarted}</span>
                  </DrawerClose>
                </Link>
              </div>
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  )
}