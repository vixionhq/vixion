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
    title: "Terminal",
    description:
      "VIXION Terminal. Command-line interface for direct neural network access. Execute operations at wire speed.",
    alternates: {
      canonical: `/${locale}/terminal`,
    },
  }
}

export default function Terminal() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-16">
        <section className="relative min-h-[500px] flex flex-col justify-end px-6 py-12 border-b border-border">
          <div className="absolute top-4 right-6">
            <Technical className="text-muted-foreground/30">
              TERMINAL_ACCESS_V.01
            </Technical>
          </div>
          <div className="max-w-7xl mx-auto w-full">
            <Technical className="text-muted-foreground/40 mb-4 block uppercase tracking-[0.3em]">
              COMMAND_LINE_01
            </Technical>
            <Display size="xl" className="text-primary uppercase mb-6 leading-none">
              Terminal
            </Display>
            <Headline size="md" className="text-secondary max-w-2xl">
              Direct command-line access to VIXION neural networks.
              Execute operations at wire speed.
            </Headline>
          </div>
        </section>

        {/* Terminal Interface */}
        <section className="p-6 md:p-12 border-b border-border">
          <div className="border border-border bg-surface overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <div className="w-3 h-3 rounded-full bg-primary/20" />
              </div>
              <Technical className="text-xs text-muted-foreground">vixion-core@terminal:~</Technical>
              <div className="w-4" />
            </div>

            {/* Terminal Output */}
            <div className="p-6 font-mono text-sm min-h-[400px]">
              <div className="text-primary/60 mb-4">
                <span className="text-primary">vixion</span>@<span className="text-primary">core</span>:~$ ./status.sh
              </div>
              <div className="text-primary/80 mb-2">
                [INIT] Checking neural mesh connectivity... OK
              </div>
              <div className="text-primary/80 mb-2">
                [INIT] Validating encryption protocols... AES-512 OK
              </div>
              <div className="text-primary/80 mb-2">
                [INIT] Loading custom configurations... OK
              </div>
              <div className="text-primary/80 mb-2">
                [INIT] Syncing distributed nodes... 14,209 ACTIVE
              </div>
              <div className="text-primary/80 mb-2">
                [INIT] All systems operational
              </div>
              <div className="text-primary/60 mb-4 mt-6">
                <span className="text-primary">vixion</span>@<span className="text-primary">core</span>:~$ ./metrics.sh -- realtime
              </div>
              <div className="mb-2">
                <span className="text-muted-foreground/50">AVG_LATENCY...</span>
                <span className="text-primary ml-4">0.04ms</span>
              </div>
              <div className="mb-2">
                <span className="text-muted-foreground/50">THROUGHPUT.....</span>
                <span className="text-primary ml-4">2.4GB/s</span>
              </div>
              <div className="mb-2">
                <span className="text-muted-foreground/50">ACTIVE_NODES...</span>
                <span className="text-primary ml-4">14,209</span>
              </div>
              <div className="mb-2">
                <span className="text-muted-foreground/50">UPTIME........</span>
                <span className="text-primary ml-4">99.9999%</span>
              </div>
              <div className="text-primary/60 mb-4 mt-6">
                <span className="text-primary">vixion</span>@<span className="text-primary">core</span>:~$ <span className="animate-pulse">▋</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Commands */}
        <section className="border-b border-border">
          <Technical className="text-muted-foreground/40 px-6 md:px-12 py-6 block uppercase tracking-widest border-b border-border">
            Quick Commands
          </Technical>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { cmd: "./deploy.sh", desc: "Deploy instance" },
              { cmd: "./status.sh", desc: "System status" },
              { cmd: "./logs.sh", desc: "View logs" },
              { cmd: "./query.sh", desc: "Run query" },
            ].map((item, i) => (
              <div key={i} className="p-6 hover:bg-muted/10 transition-colors cursor-pointer">
                <Technical className="text-muted-foreground/40 mb-2 block">CMD_{String(i + 1).padStart(3, "0")}</Technical>
                <Label className="text-primary block">{item.cmd}</Label>
                <Body className="text-secondary text-xs mt-1">{item.desc}</Body>
              </div>
            ))}
          </div>
        </section>

        {/* API Reference */}
        <section className="p-6 md:p-12 border-b border-border">
          <Technical className="text-muted-foreground/40 mb-6 block uppercase">API Reference</Technical>
          <div className="space-y-4 font-mono text-sm">
            <div className="border border-border p-4">
              <span className="text-primary">GET</span>
              <span className="text-muted-foreground ml-4">/api/v1/status</span>
            </div>
            <div className="border border-border p-4">
              <span className="text-primary">POST</span>
              <span className="text-muted-foreground ml-4">/api/v1/deploy</span>
            </div>
            <div className="border border-border p-4">
              <span className="text-primary">GET</span>
              <span className="text-muted-foreground ml-4">/api/v1/metrics</span>
            </div>
            <div className="border border-border p-4">
              <span className="text-primary">POST</span>
              <span className="text-muted-foreground ml-4">/api/v1/query</span>
            </div>
          </div>
        </section>

        {/* Access CTA */}
        <section className="px-6 py-24 flex flex-col items-center text-center border-b border-border">
          <Technical className="uppercase mb-4 tracking-widest text-muted-foreground/40">
            Local Terminal
          </Technical>
          <Display size="xl" className="mb-8 uppercase">
            Install CLI Tools
          </Display>
          <div className="flex gap-4">
            <Button size="xl">npm i -g @vixion/cli</Button>
            <Button variant="outline" size="xl">View Documentation</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}