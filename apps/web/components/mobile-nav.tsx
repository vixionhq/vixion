"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
} from "@vix/ui/primitives/drawer"
import { Body, Technical } from "@vix/ui/components"
import { nav } from "@/lib/nav-data"
import en from "../messages/en.json"
import fr from "../messages/fr.json"

const messages = { en, fr }

interface MenuButtonProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileNav({ open, onOpenChange }: MenuButtonProps) {
  const pathname = usePathname()
  const locale = pathname?.startsWith("/en") ? "en" : "fr"
  const t = messages[locale]!.Nav!

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="bottom">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
          <div className="flex flex-col gap-6 pt-8">
            {nav.main.map((item) => {
              const isActive = pathname === `/${locale}${item.url}` ||
                (item.url === "" && pathname === `/${locale}`)

              return (
                <DrawerClose key={item.title} asChild>
                  <Link
                    href={`/${locale}${item.url}`}
                    className={`block py-3 font-display text-lg tracking-widest uppercase transition-colors ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Technical className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground/60">
                      {item.url === "" ? "01" : String(nav.main.indexOf(item) + 1).padStart(2, "0")}
                    </Technical>
                    {t[item.title as keyof typeof t]}
                  </Link>
                </DrawerClose>
              )
            })}

            <div className="mt-4 border-t border-border pt-6">
              <Link
                href={`/${locale}/get-started`}
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
  )
}