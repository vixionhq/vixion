import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"
import {
  BlueprintGrid,
  SolutionCard,
  FeatureItem,
  LogoCloud,
  Display,
  Headline,
  Technical,
  Body,
  PillarItem,
} from "@vix/ui/components"
import en from "../../../messages/en.json"
import fr from "../../../messages/fr.json"
import { routing } from "@/i18n/routing"
import {
  getSolutionCards,
  solutionFeatureItems,
  solutionGridClasses,
  solutionHeroData,
  solutionLogos,
  solutionStatsData,
} from "@/lib/solutions-data"
import { CTASection } from "@/components/cta-section"

const messages = { en, fr }
const baseUrl = "https://vixionhq.com"

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
    title: "Solutions",
    description:
      "Explore VIXION's comprehensive suite of automation solutions designed for African businesses. AI assistants, predictive analytics, workflow orchestration, and more.",
    alternates: {
      canonical: `/${locale}/solutions`,
    },
  }
}

export default async function Solutions({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const lang = locale === "en" ? "en" : "fr"
  const t = messages[lang]!.Solutions!
  const common = messages[lang]!.Common!
  const solutionCards = getSolutionCards(t)

  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <main className="container mx-auto border-x pt-16">
        {/* Hero Section */}
        <BlueprintGrid className="flex min-h-[390px] flex-col justify-end border-b border-border px-6 py-12">
          <div className="absolute top-4 right-6">
            <Technical className="text-muted-foreground/30">
              X: 42.091 / Y: 11.234
            </Technical>
          </div>
          <div className="mx-auto w-full max-w-7xl">
            <Technical className="mb-4 block tracking-[0.3em] text-muted-foreground/40 uppercase">
              {solutionHeroData.technicalLabel}
            </Technical>
            <Display
              size="xl"
              className="mb-6 leading-none text-primary uppercase"
            >
              {solutionHeroData.title}
            </Display>
            <Headline size="md" className="max-w-2xl text-secondary">
              {solutionHeroData.subtitle}
            </Headline>
          </div>
        </BlueprintGrid>

        {/* Framing Statement */}
        <section className="border-b border-border bg-surface-container-low px-6 py-16 md:px-12">
          <div className="mx-auto max-w-4xl">
            <Technical className="mb-4 block text-muted-foreground uppercase">
              SYS_INIT_01
            </Technical>
            <Display size="lg" className="mb-6 text-foreground uppercase">
              {t.framing!.title!}
            </Display>
            <Body className="max-w-2xl text-muted-foreground">
              {t.framing!.description!}
            </Body>
          </div>
        </section>

        {/* Technical Stats */}
        <section className="grid grid-cols-2 border-b border-border md:grid-cols-4">
          {solutionStatsData.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 border-r border-border p-6"
            >
              <Technical className="text-muted-foreground/40 uppercase">
                {stat.label}
              </Technical>
              <Display size="lg" className="text-primary">
                {stat.value}
              </Display>
            </div>
          ))}
        </section>

        {/* 3 Pillars Section */}
        <section className="border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {t.pillars!.map((pillar: any) => (
              <PillarItem
                key={pillar.label}
                id={pillar.label!.substring(0, 3) + "_001"}
                label={pillar.label!}
                description={pillar.description!}
                className="border-r border-white/10 last:border-r-0"
              />
            ))}
          </div>
        </section>

        {/* Solution Grid */}
        <section className="border-b border-border bg-background p-6 md:p-12">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Technical className="mb-3 block text-muted-foreground uppercase">
                {t.grid!.label!}
              </Technical>
              <Headline
                size="lg"
                className="max-w-xl text-foreground uppercase"
              >
                {t.grid!.title!}
              </Headline>
            </div>
            <Body className="max-w-md text-muted-foreground">
              {t.grid!.description!}
            </Body>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {solutionCards.map((card) => (
              <SolutionCard
                key={card.id}
                id={card.id}
                refCode={card.refCode}
                label={card.label}
                title={card.title}
                description={card.description}
                progressLabel={card.progressLabel}
                progressValue={card.progressValue}
                chartData={card.chartData}
                chartLabel={card.chartLabel}
                buttonLabel={card.buttonLabel}
                infoGrid={card.infoGrid}
                type={card.type}
                className={solutionGridClasses[card.type]}
              />
            ))}
          </div>
        </section>

        {/* Bridge to Services */}
        <section className="border-b border-border px-6 py-12 text-center">
          <Body className="mb-4 text-white/60">{t.bridge!.title!}</Body>
          <Link
            href={`/${lang}/services`}
            className="font-label-caps inline-block border border-border bg-background px-6 py-3 text-sm text-foreground uppercase transition-colors hover:bg-background/90"
          >
            {t.bridge!.link!}
          </Link>
        </section>

        {/* Feature Deep Dive (Horizontal Grid) */}
        <section className="border-b border-border">
          <div className="grid grid-cols-2 border-b border-border md:grid-cols-4 lg:grid-cols-6">
            {solutionFeatureItems.map((item) => (
              <FeatureItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                id={item.id}
                className="group cursor-crosshair border-r border-white/10 p-6 transition-colors last:border-r-0"
              />
            ))}
          </div>
        </section>
        {/* Call to Action */}
        <CTASection
          technicalLabel="TRANSMISSION_READY"
          title={common!.requestConsultation!}
          primaryButton={common!.requestConsultation!}
          secondaryButton={common!.exploreFramework!}
          className="flex flex-col items-center border-b border-border px-6 py-24 text-center"
        />
      </main>

      <Footer locale={locale} />
    </div>
  )
}
