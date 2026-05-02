import * as React from "react"
import { cn } from "@vix/ui/lib"

export interface ProtocolBoxProps {
  title: string
  protocols: {
    name: string
    value: string
    highlight?: boolean
  }[]
}

export function ProtocolBox({ title, protocols }: ProtocolBoxProps) {
  return (
    <div className="max-w-sm border border-white bg-black p-12">
      <div className="mb-8 font-mono text-[12px] leading-[1.4] tracking-[0.05em] text-zinc-500">
        {title}
      </div>
      <div className="space-y-4">
        {protocols.map((protocol) => (
          <div
            key={protocol.name}
            className="flex items-center justify-between border-b-[0.5px] border-zinc-800 pb-2"
          >
            <span className="text-xs tracking-widest uppercase">
              {protocol.name}
            </span>
            <span
              className={cn(
                "font-mono text-[12px] leading-[1.4] tracking-[0.05em]",
                protocol.highlight ? "text-white" : "text-zinc-400"
              )}
            >
              {protocol.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

ProtocolBox.displayName = "ProtocolBox"
