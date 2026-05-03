import { Inter, Space_Grotesk } from "next/font/google"
import type { Metadata, Viewport } from "next"

import "@vix/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@vix/ui/lib/utils"
import { Nav } from "@/components/nav"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { setRequestLocale } from "next-intl/server"

const inter = Inter({ subsets: ["latin"], variable: "--font-body" })

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const baseUrl = "https://vixionhq.com"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isFrench = locale === "fr"

  return {
    metadataBase: new URL(baseUrl),
    applicationName: "Vixion",
    authors: [{ name: "Vixion" }],
    title: {
      default: "Vixion – AI & Automation for African Businesses",
      template: "%s | Vixion",
    },
    description:
      "Vixion helps African businesses automate workflows, reduce manual operations, and scale using AI-powered solutions and custom software.",
    keywords: [
      "automation",
      "AI",
      "business intelligence",
      "Africa",
      "enterprise software",
      "workflow automation",
    ],
    openGraph: {
      type: "website",
      locale: isFrench ? "fr_FR" : "en_US",
      alternateLocale: isFrench ? ["en_US"] : ["fr_FR"],
      url: `${baseUrl}/${locale}`,
      siteName: "Vixion",
      title: "Vixion",
      description:
        "Vixion helps African businesses automate everything that slows them down.",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Vixion",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Vixion",
      description: "Vixion helps African businesses automate everything.",
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        "x-default": "/",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn("antialiased", inter.variable, spaceGrotesk.variable)}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark font-body-md bg-background text-on-surface selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NextIntlClientProvider>
            <Nav locale={locale} />
            <main className="dark">{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
