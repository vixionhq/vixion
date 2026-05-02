import { cn } from "@vix/ui/lib"
import type { ComponentProps } from "react"
import {
  managedAccessItems,
  observabilityBars,
  systemBroadcastLogs,
} from "@/lib/blocks-data"

function SecurityModule({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("", className)} {...props}>
      <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
        <div>
          <h2 className="font-display text-2xl uppercase mb-2">
            Enterprise Security Module
          </h2>
          <p className="font-mono text-xs text-muted-foreground">
            VIXION_CORE_ENCRYPTION_SUITE_V.4.2
          </p>
        </div>
        <div className="text-right">
          <span className="font-mono text-xs text-muted-foreground block">
            LATENCY: 14MS
          </span>
          <span className="font-mono text-xs text-muted-foreground block">
            UPTIME: 100.00%
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
        <div className="bg-background p-8 border-r border-border hover:bg-muted/20 transition-colors group cursor-pointer">
          <div className="flex justify-between items-start mb-12">
            <div className="w-10 h-10 flex items-center justify-center border border-border">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-mono text-xs text-muted-foreground/30">
              REF: SEC_01
            </span>
          </div>
          <h3 className="font-display text-xl mb-2">99.99% Uptime SLA</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Guaranteed availability for mission-critical operations.
          </p>
          <div className="inline-block border border-border px-4 py-1 text-[10px] font-display font-bold tracking-widest uppercase group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            READ_AGREEMENT
          </div>
        </div>
        <div className="bg-background p-8 border-r border-border hover:bg-muted/20 transition-colors group cursor-pointer">
          <div className="flex justify-between items-start mb-12">
            <div className="w-10 h-10 flex items-center justify-center border border-border">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-mono text-xs text-muted-foreground/30">
              REF: SEC_02
            </span>
          </div>
          <h3 className="font-display text-xl mb-2">SOC 2 Type 2</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Rigorous operational security auditing.
          </p>
          <div className="inline-block border border-border px-4 py-1 text-[10px] font-display font-bold tracking-widest uppercase group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            CERT_VIEW
          </div>
        </div>
        <div className="bg-background p-8 hover:bg-muted/20 transition-colors group cursor-pointer">
          <div className="flex justify-between items-start mb-12">
            <div className="w-10 h-10 flex items-center justify-center border border-border">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="font-mono text-xs text-muted-foreground/30">
              REF: SEC_03
            </span>
          </div>
          <h3 className="font-display text-xl mb-2">GDPR Compliant</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Global data privacy standards implemented.
          </p>
          <div className="inline-block border border-border px-4 py-1 text-[10px] font-display font-bold tracking-widest uppercase group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            PRIVACY_POLICY
          </div>
        </div>
      </div>
    </section>
  )
}

function ManagedAccess({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("border border-border p-8", className)} {...props}>
      <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
        <h3 className="font-display text-lg uppercase tracking-tight flex items-center">
          <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
          </svg>
          Managed Access
        </h3>
        <span className="text-[10px] font-mono px-2 py-1 border border-border">
          ACTIVE_CONTROL
        </span>
      </div>
      <div className="space-y-6">
        {managedAccessItems.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b border-border pb-4 last:border-0 cursor-pointer group"
          >
            <div>
              <div className="text-[10px] font-mono text-muted-foreground mb-1">
                {item.id}
              </div>
              <div className="font-body">{item.name}</div>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              →
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Observability({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("border border-border p-8", className)} {...props}>
      <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
        <h3 className="font-display text-lg uppercase tracking-tight flex items-center">
          <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Observability
        </h3>
        <span className="text-[10px] font-mono px-2 py-1 border border-border">
          REAL_TIME
        </span>
      </div>
      <div className="h-48 mb-6 relative overflow-hidden bg-muted/20 border border-border flex items-end justify-between px-4 pb-4">
        {observabilityBars.map((h, i) => (
          <div
            key={i}
            className="w-2 bg-foreground/40 transition-all"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-border p-4">
          <div className="text-[10px] font-mono text-muted-foreground mb-1">
            THREAT_LEVEL
          </div>
          <div className="font-display text-xl">NOMINAL</div>
        </div>
        <div className="border border-border p-4">
          <div className="text-[10px] font-mono text-muted-foreground mb-1">
            LOG_INGESTION
          </div>
          <div className="font-display text-xl">2.4 TB/S</div>
        </div>
      </div>
    </div>
  )
}

function SystemBroadcast({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("border border-border overflow-hidden", className)} {...props}>
      <div className="bg-primary text-primary-foreground font-display text-xs text-center py-2 px-4">
        SYSTEM_BROADCAST_PROTOCOLS
      </div>
      <div className="divide-y divide-border">
        {systemBroadcastLogs.map((log, i) => (
          <div key={i} className="flex p-4 items-center">
            <span className="font-mono text-[10px] text-muted-foreground w-32">
              {log.time}
            </span>
            <span className="font-mono text-xs flex-grow">{log.message}</span>
            <span className="text-[10px] text-muted-foreground">[{log.status}]</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export { SecurityModule, ManagedAccess, Observability, SystemBroadcast }
