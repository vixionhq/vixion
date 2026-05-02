"use client"

import Link from "next/link"
import { nav } from "@/lib/nav-data"
import { BrandMark } from "./brand-mark"
import { LocaleSwitcher } from "./locale-switcher"
import en from "../messages/en.json"
import fr from "../messages/fr.json"

const messages = { en, fr }

interface NavProps {
  locale?: string
}

export function Nav({ locale = "fr" }: NavProps) {
  const lang = locale === "en" ? "en" : "fr"
  const t = messages[lang]!.Nav!

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full max-w-full border-b border-white/20 bg-black px-6">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center justify-center">
          <BrandMark surface="dark" size="lg" />
          <span className="-mr-1.5 h-8 font-display text-xl font-black tracking-[0.2em] text-white">
            VIXION
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.main.map((item) => (
            <Link
              key={item.title}
              href={`/${lang}${item.url}`}
              className="cursor-crosshair py-1 font-display text-sm tracking-widest text-white uppercase transition-all duration-200 hover:bg-white hover:px-2 hover:text-black"
            >
              {t[item.title as keyof typeof t]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitcher locale={lang} />

          <Link
            href="/get-started"
            className="border border-white bg-white px-6 py-2 font-display text-sm font-bold tracking-widest text-black uppercase transition-all duration-200 hover:bg-neutral-800 hover:text-white"
          >
            {t.getStarted}
          </Link>
        </div>
      </div>
    </header>
  )
}
