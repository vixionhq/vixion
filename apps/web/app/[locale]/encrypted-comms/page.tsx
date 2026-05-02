import { Display, Headline, Body, Technical, Label, Button, Card, Input } from "@vix/ui/components"
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
    title: "Encrypted Comms",
    description:
      "VIXION secure communications. End-to-end encrypted channels with zero-knowledge protocols for sensitive business transmissions.",
    alternates: {
      canonical: `/${locale}/encrypted-comms`,
    },
  }
}

export default function EncryptedComms() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-16">
        <section className="relative min-h-[500px] flex flex-col justify-end px-6 py-12 border-b border-border">
          <div className="absolute top-4 right-6">
            <Technical className="text-muted-foreground/30">
              ENCRYPTED_COMMS_V.01
            </Technical>
          </div>
          <div className="max-w-7xl mx-auto w-full">
            <Technical className="text-muted-foreground/40 mb-4 block uppercase tracking-[0.3em]">
              SECURE_CHANNEL_01
            </Technical>
            <Display size="xl" className="text-primary uppercase mb-6 leading-none">
              Encrypted Comms
            </Display>
            <Headline size="md" className="text-secondary max-w-2xl">
              End-to-end encrypted communication channels.
              Zero-knowledge protocols for sensitive transmissions.
            </Headline>
          </div>
        </section>

        {/* Security Guarantee */}
        <section className="p-6 md:p-12 border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            <div className="bg-background p-8 text-center">
              <Technical className="text-muted-foreground/40 mb-2 block">ENC_01</Technical>
              <Label className="text-primary mb-2 block uppercase">Encryption</Label>
              <Display size="lg" className="text-primary mb-2">AES-512</Display>
              <Body className="text-secondary text-sm">
                Military-grade Advanced Encryption Standard
              </Body>
            </div>
            <div className="bg-background p-8 text-center border-x border-border">
              <Technical className="text-muted-foreground/40 mb-2 block">PROT_01</Technical>
              <Label className="text-primary mb-2 block uppercase">Protocol</Label>
              <Display size="lg" className="text-primary mb-2">ZERO-TRUST</Display>
              <Body className="text-secondary text-sm">
                Never trust, always verify
              </Body>
            </div>
            <div className="bg-background p-8 text-center">
              <Technical className="text-muted-foreground/40 mb-2 block">KEY_01</Technical>
              <Label className="text-primary mb-2 block uppercase">Key Exchange</Label>
              <Display size="lg" className="text-primary mb-2">PQ3</Display>
              <Body className="text-secondary text-sm">
                Post-quantum secure
              </Body>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-b border-border">
          <Technical className="text-muted-foreground/40 px-6 md:px-12 py-6 block uppercase tracking-widest border-b border-border">
            Channel Features
          </Technical>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-border">
            {[
              { id: "F01", title: "Ephemeral Keys", desc: "Auto-rotating session keys" },
              { id: "F02", title: "Self-Destruct", desc: "Time-limited messages" },
              { id: "F03", title: "No-Log Policy", desc: "Zero message retention" },
              { id: "F04", title: "Forward Secrecy", desc: "Past sessions stay secure" },
              { id: "F05", title: "Perfect Forward", desc: "Future-proof encryption" },
              { id: "F06", title: "Metadata Strip", desc: "No timing or size leaks" },
            ].map((feature, i) => (
              <div key={i} className="p-6">
                <Technical className="text-muted-foreground/30 mb-2 block">
                  {feature.id}
                </Technical>
                <Label className="text-primary mb-2 block">{feature.title}</Label>
                <Body className="text-secondary text-xs">{feature.desc}</Body>
              </div>
            ))}
          </div>
        </section>

        {/* Secure Form */}
        <section className="p-6 md:p-12 border-b border-border">
          <Technical className="text-muted-foreground/40 mb-8 block uppercase tracking-widest">
            Secure Transmission
          </Technical>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="elevated" className="p-8">
              <Label className="text-primary mb-6 block uppercase">
                Encrypted Message
              </Label>
              <div className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="YOUR_EMAIL" 
                  className="font-mono"
                />
                <Input 
                  type="password" 
                  placeholder="PASSPHRASE" 
                  className="font-mono"
                />
                <textarea 
                  className="w-full h-40 p-4 border border-border bg-background font-mono text-sm resize-none"
                  placeholder="ENCRYPTED_MESSAGE..."
                />
                <Button className="w-full">Send Encrypted</Button>
              </div>
            </Card>

            <div className="flex flex-col justify-center gap-6">
              <div className="border border-border p-6">
                <Technical className="text-muted-foreground/40 mb-2 block">STATUS</Technical>
                <Label className="text-primary block">Channel Secure</Label>
                <Body className="text-secondary text-xs mt-2">
                  All transmissions use end-to-end encryption with post-quantum key exchange.
                </Body>
              </div>
              <div className="border border-border p-6">
                <Technical className="text-muted-foreground/40 mb-2 block">ROTATION</Technical>
                <Label className="text-primary block">Key Cycle: Active</Label>
                <Body className="text-secondary text-xs mt-2">
                  Session keys rotate every 15 minutes. Previous keys are securely wiped.
                </Body>
              </div>
              <div className="border border-border p-6">
                <Technical className="text-muted-foreground/40 mb-2 block">VERIFICATION</Technical>
                <Label className="text-primary block">Identity Verified</Label>
                <Body className="text-secondary text-xs mt-2">
                  All messages are signed with ECDSA P-521 keys.
                </Body>
              </div>
            </div>
          </div>
        </section>

        {/* Security Notice */}
        <section className="px-6 py-24 flex flex-col items-center text-center border-b border-border">
          <div className="max-w-2xl">
            <Technical className="uppercase mb-4 tracking-widest text-muted-foreground/40">
              Security Notice
            </Technical>
            <Body className="text-secondary">
              This channel uses Zero-Knowledge Proofs. We cannot read your messages.
              We do not log message content. Metadata is stripped before transmission.
              For maximum security, use the VIXION CLI for all sensitive communications.
            </Body>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}