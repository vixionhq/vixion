import { Display, Body, Technical } from "@vix/ui/components"
import { Footer } from "@/components/footer"
import { BlueprintSection } from "@vix/ui/components"
import { HeroStats } from "@vix/ui/components"
import { ServicesGrid } from "@vix/ui/components"
import { ProtocolBox } from "@vix/ui/components"
import { CTASection } from "@/components/cta-section"
import { GridContainer } from "@vix/ui/components"
import en from "../../messages/en.json"
import fr from "../../messages/fr.json"
import {
  getHomeHeroStats,
  getHomeServices,
  homeProtocols,
} from "@/lib/home-data"
import type { Metadata } from "next"

const messages = { en, fr }
const baseUrl = "https://vixionhq.com"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const lang = locale === "en" ? "en" : "fr"

  return {
    title: lang === "fr" ? "Accueil" : "Home",
    description:
      lang === "fr"
        ? "VIXION aide les entreprises africaines à automatisereverything qui les ralentit. Intelligence architecturale de haute fidélité conçue pour l'échelle industrielle unique du continent."
        : "VIXION helps African businesses automate everything that slows them down. High-fidelity architectural intelligence built for the continent's unique industrial scale.",
    alternates: {
      canonical: `/${locale}`,
    },
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const lang = locale === "en" ? "en" : "fr"
  const msg = messages[lang]!.Home!
  const services = getHomeServices(msg)
  const heroStats = getHomeHeroStats(msg)

  return (
    <div className="min-h-screen overflow-hidden">
      <main className="container mx-auto border-x pt-24">
        {/* Hero Section */}
        <GridContainer>
          <BlueprintSection>
            <div className="absolute top-4 right-4">
              <Technical className="text-muted-foreground">
                {msg.hero.sysRef}
              </Technical>
            </div>

            <div className="border-b-[0.5px] border-border p-12 lg:p-24">
              <div className="max-w-4xl">
                <Technical className="mb-4 block text-muted-foreground">
                  {"//"} {msg.hero.technicalLabel}
                </Technical>
                <Display size="xl" className="mb-8 text-primary">
                  {msg.hero.title}
                </Display>
                <Body size="lg" className="max-w-2xl text-secondary">
                  {msg.hero.description}
                </Body>
              </div>
            </div>

            <HeroStats stats={heroStats} />
          </BlueprintSection>
        </GridContainer>

        {/* Services Bento Grid */}
        <ServicesGrid services={services} />

        {/* Mission & Vision: African Context First */}
        <section className="grid grid-cols-1 divide-x-[0.5px] divide-border border-b-[0.5px] border-border md:grid-cols-2">
          <div className="bg-background p-12 lg:p-24">
            <Technical className="mb-6 block text-muted-foreground">
              {"//"} {msg.mission.technicalLabel}
            </Technical>
            <Display size="xl" className="mb-8 text-primary uppercase">
              {msg.mission.title}
            </Display>
            <Body size="lg" className="space-y-6 text-secondary">
              <p>{msg.mission.description}</p>
            </Body>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden bg-background p-12">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </div>
            <ProtocolBox
              title={msg.mission.protocolTitle}
              protocols={homeProtocols}
            />
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          technicalLabel={msg.cta.technicalLabel}
          title={msg.cta.title}
          primaryButton={msg.cta.primaryButton}
          secondaryButton={msg.cta.secondaryButton}
        />
      </main>

      <Footer locale={locale} />
    </div>
  )
}
