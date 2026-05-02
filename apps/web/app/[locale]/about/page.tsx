import { Display, Headline, Body, Technical, Label, Button, Card } from "@vix/ui/components"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { routing } from "@/i18n/routing"

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
    title: "About",
    description:
      "Learn about VIXION. Our mission to automate African businesses with high-fidelity architectural intelligence.",
    alternates: {
      canonical: `/${locale}/about`,
    },
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex flex-col justify-end px-6 py-12 border-b border-border">
          <div className="absolute top-4 right-6">
            <Technical className="text-muted-foreground/30">
              VISION_SEQ: V.01
            </Technical>
          </div>
          <div className="max-w-7xl mx-auto w-full">
            <Technical className="text-muted-foreground/40 mb-4 block uppercase tracking-[0.3em]">
              CORE_ORIGIN_01
            </Technical>
            <Display size="xl" className="text-primary uppercase mb-6 leading-none">
              Vision
            </Display>
            <Headline size="md" className="text-secondary max-w-2xl">
              Architecting the future of African industrial intelligence.
              From the continent, for the continent.
            </Headline>
          </div>
        </section>

        {/* Mission Grid */}
        <section className="p-6 md:p-12 border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="elevated" className="p-8">
              <Technical className="text-muted-foreground/40 mb-4 block">REF: MISSION_01</Technical>
              <Label className="text-primary mb-4 block uppercase">Our Mission</Label>
              <Headline size="md" className="text-primary uppercase mb-4">
                Eliminate Operational Friction
              </Headline>
              <Body className="text-secondary">
                VIXION exists to remove every bottleneck that slows African enterprises
                from scaling. We build neural infrastructure that adapts to the continent&apos;s
                unique operational realities—power variations, connectivity patterns,
                and industrial workflows.
              </Body>
            </Card>

            <Card variant="elevated" className="p-8">
              <Technical className="text-muted-foreground/40 mb-4 block">REF: ORIGIN_01</Technical>
              <Label className="text-primary mb-4 block uppercase">Origin Story</Label>
              <Headline size="md" className="text-primary uppercase mb-4">
                Built in the Trenches
              </Headline>
              <Body className="text-secondary">
                Founded by engineers who lived the problems we now solve.
                Every protocol in our mesh has been tested in African
                industrial environments—from Lagos logistics hubs
                to Johannesburg data centers.
              </Body>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-border">
            <div className="p-8">
              <Technical className="text-muted-foreground/40 mb-2 block">VALUE_01</Technical>
              <Label className="text-primary uppercase mb-4 block">Radical Reliability</Label>
              <Body className="text-secondary text-sm">
                99.9% uptime isn&apos;t enough. We target 99.999%.
                Every system has a fallback. Every process has redundancy.
              </Body>
            </div>
            <div className="p-8">
              <Technical className="text-muted-foreground/40 mb-2 block">VALUE_02</Technical>
              <Label className="text-primary uppercase mb-4 block">Local First</Label>
              <Body className="text-secondary text-sm">
                Data stays on the continent. Computation happens where
                the data lives. No unnecessary round-trips.
              </Body>
            </div>
            <div className="p-8">
              <Technical className="text-muted-foreground/40 mb-2 block">VALUE_03</Technical>
              <Label className="text-primary uppercase mb-4 block">Adaptive Intelligence</Label>
              <Body className="text-secondary text-sm">
                AI that learns your patterns. Not cookie-cutter
                solutions, but systems that evolve with you.
              </Body>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="p-6 md:p-12 border-b border-border">
          <Technical className="text-muted-foreground/40 mb-8 block uppercase tracking-widest">
            Operational Timeline
          </Technical>
          <div className="space-y-0">
            {[
              { year: "2021", event: "FOUNDATION", desc: "VIXION core neural routing system initiated" },
              { year: "2022", event: "DEPLOYMENT", desc: "First enterprise integration in Lagos" },
              { year: "2023", event: "SCALE", desc: "Mesh network activation across 12 nations" },
              { year: "2024", event: "EVOLUTION", desc: "VIXION Core v4.0 release" },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-4 border-b border-border py-6 last:border-0">
                <div className="font-display text-xl">{item.year}</div>
                <div className="md:col-span-2 font-display uppercase tracking-wider">
                  {item.event}
                </div>
                <div className="text-secondary text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 flex flex-col items-center text-center border-b border-border">
          <Technical className="uppercase mb-4 tracking-widest text-muted-foreground/40">
            Transmission Ready
          </Technical>
          <Display size="xl" className="mb-8 uppercase">
            Establish Connection
          </Display>
          <Button size="xl">Initialize Contact</Button>
        </section>
      </main>

      <Footer />
    </div>
  )
}