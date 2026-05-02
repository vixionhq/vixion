import { Display, Headline, Body, Technical, Label, Button, Card, Badge } from "@vix/ui/components"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { routing } from "@/i18n/routing"
import {
  certifications,
  institutionalTeam,
  legalDocuments,
} from "@/lib/institutional-data"

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
    title: "Institutional",
    description:
      "VIXION institutional information. Corporate governance, team, certifications, and legal documents.",
    alternates: {
      canonical: `/${locale}/institutional`,
    },
  }
}

export default function Institutional() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-16">
        <section className="relative min-h-[500px] flex flex-col justify-end px-6 py-12 border-b border-border">
          <div className="absolute top-4 right-6">
            <Technical className="text-muted-foreground/30">
              INSTITUTIONAL_GRID_V.01
            </Technical>
          </div>
          <div className="max-w-7xl mx-auto w-full">
            <Technical className="text-muted-foreground/40 mb-4 block uppercase tracking-[0.3em]">
              CORPORATE_STRUCTURE_01
            </Technical>
            <Display size="xl" className="text-primary uppercase mb-6 leading-none">
              Institutional
            </Display>
            <Headline size="md" className="text-secondary max-w-2xl">
              Corporate governance and operational protocols.
              Transparent, auditable, compliant.
            </Headline>
          </div>
        </section>

        {/* Governance Cards */}
        <section className="p-6 md:p-12 border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="elevated" className="p-6">
              <Technical className="text-muted-foreground/40 mb-2 block">DOC: GOV_001</Technical>
              <Label className="text-primary mb-2 block uppercase">Board of Directors</Label>
              <Body className="text-secondary text-sm mb-4">
                Multi-national oversight committee with quarterly review protocols.
              </Body>
              <Badge variant="secondary">COMPLIANT</Badge>
            </Card>

            <Card variant="elevated" className="p-6">
              <Technical className="text-muted-foreground/40 mb-2 block">DOC: AUD_001</Technical>
              <Label className="text-primary mb-2 block uppercase">Audit Framework</Label>
              <Body className="text-secondary text-sm mb-4">
                Third-party SOC 2 Type 2 certified auditing.
              </Body>
              <Badge variant="secondary">CERTIFIED</Badge>
            </Card>

            <Card variant="elevated" className="p-6">
              <Technical className="text-muted-foreground/40 mb-2 block">DOC: REG_001</Technical>
              <Label className="text-primary mb-2 block uppercase">Regulatory Compliance</Label>
              <Body className="text-secondary text-sm mb-4">
                GDPR, POPIA, and regional data sovereignty standards.
              </Body>
              <Badge variant="secondary">ACTIVE</Badge>
            </Card>
          </div>
        </section>

        {/* Leadership Grid */}
        <section className="border-b border-border">
          <Technical className="text-muted-foreground/40 px-6 md:px-12 py-6 block uppercase tracking-widest border-b border-border">
            Leadership Core
          </Technical>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {institutionalTeam.map((member) => (
              <div key={member.id} className="p-6">
                <Technical className="text-muted-foreground/30 mb-2 block">
                  {member.id}
                </Technical>
                <Label className="text-primary mb-2 block">{member.role}</Label>
                <Body className="text-secondary text-sm mb-4">{member.name}</Body>
                <Badge variant={member.status === "ACTIVE" ? "default" : "outline"}>
                  {member.status}
                </Badge>
              </div>
            ))}
          </div>
        </section>

        {/* Legal & Compliance */}
        <section className="p-6 md:p-12 border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Technical className="text-muted-foreground/40 mb-6 block uppercase">Legal Framework</Technical>
              <ul className="space-y-4">
                {legalDocuments.map((doc, i) => (
                  <li key={i} className="flex items-center gap-4 border-b border-border pb-2">
                    <span className="text-muted-foreground">→</span>
                    <span className="font-body">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Technical className="text-muted-foreground/40 mb-6 block uppercase">Certifications</Technical>
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-center gap-4 border-b border-border pb-2">
                    <span className="text-primary">◈</span>
                    <span className="font-body">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-6 py-24 flex flex-col items-center text-center border-b border-border">
          <Technical className="uppercase mb-4 tracking-widest text-muted-foreground/40">
            Governance Inquiry
          </Technical>
          <Display size="xl" className="mb-8 uppercase">
            Request Documentation
          </Display>
          <Button size="xl">Contact Institutional Team</Button>
        </section>
      </main>

      <Footer />
    </div>
  )
}
