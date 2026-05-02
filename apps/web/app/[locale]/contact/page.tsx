import type { Metadata } from "next"
import { routing } from "@/i18n/routing"
import ContactForm from "./contact-form"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Contact",
    description:
      "Get in touch with VIXION. Request automation consulting, discuss your project needs, or learn about our enterprise solutions for African businesses.",
    alternates: {
      canonical: `/${locale}/contact`,
    },
  }
}

export default function ContactPage() {
  return <ContactForm />
}