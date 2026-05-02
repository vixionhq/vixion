import { cn } from "@vix/ui/lib"
import type { ComponentProps } from "react"
import { trustMeshClients } from "@/lib/blocks-data"

interface TrustMeshProps extends ComponentProps<"section"> {}

function TrustMesh({ className, ...props }: TrustMeshProps) {
  return (
    <section className={cn("", className)} {...props}>
      <div className="mb-8">
        <span className="font-mono text-xs text-muted-foreground block mb-2">
          MODULE_ID: TRUST_MESH_01
        </span>
        <h2 className="font-display text-4xl uppercase leading-none">
          Client Trust Mesh
        </h2>
        <p className="font-body text-muted-foreground mt-4 max-w-2xl">
          Architectural validation through enterprise integration. Our core protocols are
          verified by the world&apos;s most demanding engineering teams.
        </p>
      </div>

      <div className="border border-border bg-surface overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-border">
          <div className="p-8 md:col-span-1 flex flex-col justify-between border-r border-border bg-background">
            <div>
              <div className="font-display text-xs tracking-widest mb-4">STATUS</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-mono text-xs">ACTIVE_MESH</span>
              </div>
            </div>
            <div className="mt-20">
              <h3 className="font-display text-lg uppercase leading-tight">
                Trusted by the best enterprise teams
              </h3>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {trustMeshClients.map((client) => (
                <div
                  key={client.id}
                  className="aspect-square border-r border-b border-border flex flex-col items-center justify-center p-6 group hover:bg-muted/10 transition-all cursor-pointer"
                >
                  <span className="font-mono text-xs text-muted-foreground/20 self-start mb-auto">
                    {client.id}
                  </span>
                  <span className="text-4xl text-muted-foreground/60 group-hover:text-foreground transition-colors">
                    {client.icon}
                  </span>
                  <div className="font-display text-xs tracking-widest text-muted-foreground/40 mt-auto">
                    {client.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border bg-background flex justify-between items-center font-mono text-[10px]">
          <div className="flex gap-8 text-muted-foreground/40">
            <span>PROTOCOLS: ENCRYPTED_AES256</span>
            <span>UPTIME: 99.9999%</span>
            <span>LATENCY: &lt; 1.2MS</span>
          </div>
          <span className="text-foreground">MESH_VALIDATED_2024</span>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-border p-8 flex flex-col justify-between hover:border-foreground/40 transition-colors group cursor-pointer">
          <div>
            <div className="font-display text-xs tracking-widest text-muted-foreground/60 mb-2">
              INTEGRATION_GUIDE
            </div>
            <h4 className="font-display text-lg">
              Deploy VIXION in your local stack in under 5 minutes.
            </h4>
          </div>
          <button className="mt-8 border border-border px-6 py-3 font-display text-xs tracking-widest hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-4">
            READ DOCUMENTATION →
          </button>
        </div>
        <div className="border border-border p-8 flex flex-col justify-between hover:border-foreground/40 transition-colors group cursor-pointer">
          <div>
            <div className="font-display text-xs tracking-widest text-muted-foreground/60 mb-2">
              PARTNERSHIP_TIER
            </div>
            <h4 className="font-display text-lg">
              Scale your architecture with enterprise priority nodes.
            </h4>
          </div>
          <button className="mt-8 border border-border px-6 py-3 font-display text-xs tracking-widest hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-4">
            REQUEST_ACCESS →
          </button>
        </div>
      </div>
    </section>
  )
}

export { TrustMesh }
