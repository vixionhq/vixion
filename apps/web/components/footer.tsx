import { Technical } from "@vix/ui/components"
import { BrandMark } from "./brand-mark"
import en from "../messages/en.json"
import fr from "../messages/fr.json"

const messages = { en, fr }

interface FooterProps {
  locale?: string
}

export function Footer({ locale = "fr" }: FooterProps) {
  const lang = locale === "en" ? "en" : "fr"
  const t = messages[lang]!.Footer!

  return (
    <footer className="border-t-[0.5px] border-border bg-black py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col">
          <div className="flex items-center">
            <BrandMark surface="dark" size="lg" />
            <span className="-mr-2 h-8 font-display text-lg font-black tracking-widest text-white">
              VIXION
            </span>
          </div>
          <Technical className="text-zinc-400">{t.copyright}</Technical>
        </div>

        <div className="flex items-center gap-4 border-[0.5px] border-border px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-white" />
          <Technical className="text-zinc-500">
            PRIMARY_SERVER: LAG_01_ACTIVE
          </Technical>
        </div>
      </div>
    </footer>
  )
}
