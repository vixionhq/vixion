import { cn } from "@vix/ui/lib"
import type { ComponentProps, ReactNode } from "react"

interface SecurityModuleProps extends ComponentProps<"div"> {
  variant?: "default" | "compact"
}

function SecurityModule({ className, variant = "default", children, ...props }: SecurityModuleProps) {
  return (
    <div className={cn("", className)} {...props}>
      <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
        <div>
          <h2 className="font-display text-2xl uppercase mb-2">Enterprise Security Module</h2>
          <p className="font-mono text-xs text-muted-foreground">VIXION_CORE_ENCRYPTION_SUITE_V.4.2</p>
        </div>
        <div className="text-right">
          <span className="font-mono text-xs text-muted-foreground block">LATENCY: 14MS</span>
          <span className="font-mono text-xs text-muted-foreground block">UPTIME: 100.00%</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
        <div className="bg-background p-8 border-r border-border hover:bg-muted/20 transition-colors group cursor-pointer">
          <div className="flex justify-between items-start mb-12">
            <div className="w-10 h-10 flex items-center justify-center border border-border">
              <span className="text-xl">✓</span>
            </div>
            <span className="font-mono text-xs text-muted-foreground/30">REF: SEC_01</span>
          </div>
          <h3 className="font-display text-xl mb-2">99.99% Uptime SLA</h3>
          <p className="text-sm text-muted-foreground mb-6">Guaranteed availability for mission-critical operations.</p>
          <div className="inline-block border border-border px-4 py-1 text-[10px] font-display font-bold tracking-widest uppercase group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            READ_AGREEMENT
          </div>
        </div>
        <div className="bg-background p-8 border-r border-border hover:bg-muted/20 transition-colors group cursor-pointer">
          <div className="flex justify-between items-start mb-12">
            <div className="w-10 h-10 flex items-center justify-center border border-border">
              <span className="text-xl">✓</span>
            </div>
            <span className="font-mono text-xs text-muted-foreground/30">REF: SEC_02</span>
          </div>
          <h3 className="font-display text-xl mb-2">SOC 2 Type 2</h3>
          <p className="text-sm text-muted-foreground mb-6">Rigorous operational security auditing.</p>
          <div className="inline-block border border-border px-4 py-1 text-[10px] font-display font-bold tracking-widest uppercase group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            CERT_VIEW
          </div>
        </div>
        <div className="bg-background p-8 hover:bg-muted/20 transition-colors group cursor-pointer">
          <div className="flex justify-between items-start mb-12">
            <div className="w-10 h-10 flex items-center justify-center border border-border">
              <span className="text-xl">✓</span>
            </div>
            <span className="font-mono text-xs text-muted-foreground/30">REF: SEC_03</span>
          </div>
          <h3 className="font-display text-xl mb-2">GDPR Compliant</h3>
          <p className="text-sm text-muted-foreground mb-6">Global data privacy standards implemented.</p>
          <div className="inline-block border border-border px-4 py-1 text-[10px] font-display font-bold tracking-widest uppercase group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            PRIVACY_POLICY
          </div>
        </div>
      </div>
    </div>
  )
}

function ManagedAccess({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("border border-border p-8", className)} {...props}>
      <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
        <h3 className="font-display text-lg uppercase tracking-tight flex items-center">
          <span className="mr-3">🔓</span> Managed Access
        </h3>
        <span className="text-[10px] font-mono px-2 py-1 border border-border">ACTIVE_CONTROL</span>
      </div>
      <div className="space-y-6">
        {[
          { id: "MODULE_ID: 088", name: "Identity Verification Cluster" },
          { id: "MODULE_ID: 112", name: "Role-Based Access (RBAC)" },
          { id: "MODULE_ID: 404", name: "Zero Trust Perimeter" },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center border-b border-border pb-4 last:border-0 cursor-pointer group">
            <div>
              <div className="text-[10px] font-mono text-muted-foreground mb-1">{item.id}</div>
              <div className="font-body">{item.name}</div>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground">→</span>
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
          <span className="mr-3">👁</span> Observability
        </h3>
        <span className="text-[10px] font-mono px-2 py-1 border border-border">REAL_TIME</span>
      </div>
      <div className="h-48 mb-6 relative overflow-hidden bg-muted/20 border border-border flex items-end justify-between px-4 pb-4">
        {[12, 24, 16, 32, 8, 28, 36, 20, 32, 12].map((h, i) => (
          <div key={i} className="w-2 bg-foreground/40" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-border p-4">
          <div className="text-[10px] font-mono text-muted-foreground mb-1">THREAT_LEVEL</div>
          <div className="font-display text-xl">NOMINAL</div>
        </div>
        <div className="border border-border p-4">
          <div className="text-[10px] font-mono text-muted-foreground mb-1">LOG_INGESTION</div>
          <div className="font-display text-xl">2.4 TB/S</div>
        </div>
      </div>
    </div>
  )
}

function SystemBroadcast({ className, ...props }: ComponentProps<"div">) {
  const logs = [
    { time: "14:02:44:01", message: "ENCRYPTION KEYS ROTATED SUCCESSFULLY", status: "OK" },
    { time: "13:58:12:88", message: "INBOUND ACCESS REQUEST AUTHENTICATED", status: "OK" },
    { time: "13:44:09:55", message: "BACKUP SYNC COMPLETED", status: "OK" },
  ]

  return (
    <div className={cn("border border-border overflow-hidden", className)} {...props}>
      <div className="bg-primary text-primary-foreground font-display text-xs text-center py-2 px-4">
        SYSTEM_BROADCAST_PROTOCOLS
      </div>
      <div className="divide-y divide-border">
        {logs.map((log, i) => (
          <div key={i} className="flex p-4 items-center">
            <span className="font-mono text-[10px] text-muted-foreground w-32">{log.time}</span>
            <span className="font-mono text-xs flex-grow">{log.message}</span>
            <span className="text-[10px] text-muted-foreground">[{log.status}]</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export { SecurityModule, ManagedAccess, Observability, SystemBroadcast }