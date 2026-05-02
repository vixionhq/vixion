import { cn } from "@vix/ui/lib"
import type { ComponentProps } from "react"

interface ResourceHubProps extends ComponentProps<"section"> {}

function ResourceHub({ className, ...props }: ResourceHubProps) {
  return (
    <section className={cn("", className)} {...props}>
      <div className="px-6 py-12 border-b border-border">
        <p className="font-mono text-xs text-muted-foreground mb-2 opacity-60">
          REF_ID: //RESOURCE_HUB_01
        </p>
        <h2 className="font-display text-4xl uppercase tracking-tight leading-none mb-4">
          Connectivity Hub
        </h2>
        <div className="h-[1px] w-32 bg-primary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-l border-t border-border">
        {/* Fast Support Card */}
        <div className="md:col-span-8 border-r border-b border-border p-8 flex flex-col justify-between group hover:bg-muted/10 transition-colors">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-display text-xs tracking-widest text-muted-foreground">
                  SYSTEM_UPTIME: 99.9%
                </span>
              </div>
              <h3 className="font-display text-2xl uppercase text-foreground">
                Fast support, 24/7
              </h3>
              <p className="text-muted-foreground max-w-lg">
                Direct uplink to our level-3 technical engineers. Real-time diagnostic
                response and incident resolution protocols executed within milliseconds.
              </p>
            </div>
            <svg className="w-12 h-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a12 12 0 0112 12v5a2 2 0 01-2 2H9l-3 3v-3H7a2 2 0 01-2-2v-5a12 12 0 0112-12zm0 0l6 6m-6-6l6-6" />
            </svg>
          </div>
          <div className="mt-12 flex items-end justify-between">
            <div className="font-mono text-[10px] text-muted-foreground/40">
              <p>ENCRYPTION: AES_256</p>
              <p>LATENCY: &lt;15MS</p>
            </div>
            <button className="border border-border px-6 py-3 font-display text-xs tracking-widest hover:bg-primary hover:text-primary-foreground transition-all">
              ESTABLISH_CONNECTION →
            </button>
          </div>
        </div>

        {/* Architecture Metric Card */}
        <div className="md:col-span-4 border-r border-b border-border p-8 bg-surface-container-lowest">
          <div className="font-mono text-xs text-muted-foreground mb-8 border-b border-border/10 pb-2 flex justify-between">
            <span>V-SECURE_OS</span>
            <span>v4.0.2</span>
          </div>
          <div className="aspect-square w-full border border-border/10 relative overflow-hidden bg-muted/5 flex items-center justify-center p-4">
            <div className="text-center">
              <div className="text-5xl font-display mb-1">0.02s</div>
              <div className="font-display text-xs text-muted-foreground tracking-widest uppercase">
                AVG_RESPONSE
              </div>
            </div>
          </div>
        </div>

        {/* Planning to Migrate Card */}
        <div className="md:col-span-6 border-r border-b border-border p-8 flex flex-col justify-between group hover:bg-muted/10 transition-colors">
          <div>
            <div className="flex justify-between mb-8">
              <span className="font-mono text-xs text-muted-foreground/40">
                PROTOCOL_77
              </span>
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.582 0l-3.582-3.582m0 0A11.956 11.956 0 0112 2.944 11.956 11.956 0 012.382 8.382m0 0a12.005 12.005 0 00-3.582 6.618m3.582 0h.618m-.618 0h.618" />
              </svg>
            </div>
            <h4 className="font-display text-lg uppercase mb-4">
              Planning to migrate?
            </h4>
            <p className="text-muted-foreground text-sm">
              Seamless transition pathways for enterprise datasets. Structural integrity
              checks performed on every packet transfer during the automated migration sequence.
            </p>
          </div>
          <button className="mt-8 border border-border px-4 py-2 font-display text-xs tracking-widest hover:bg-foreground hover:text-background transition-all w-fit">
            START_MIGRATION
          </button>
        </div>

        {/* Documentation Card */}
        <div className="md:col-span-6 border-b border-border p-8 flex flex-col justify-between group hover:bg-muted/10 transition-colors">
          <div>
            <div className="flex justify-between mb-8">
              <span className="font-mono text-xs text-muted-foreground/40">
                DOCS_V4
              </span>
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="font-display text-lg uppercase mb-4">
              Documentation
            </h4>
            <p className="text-muted-foreground text-sm">
              Comprehensive API references, implementation guides, and architectural
              blueprints for enterprise integration.
            </p>
          </div>
          <button className="mt-8 border border-border px-4 py-2 font-display text-xs tracking-widest hover:bg-foreground hover:text-background transition-all w-fit">
            VIEW_DOCS
          </button>
        </div>
      </div>
    </section>
  )
}

export { ResourceHub }