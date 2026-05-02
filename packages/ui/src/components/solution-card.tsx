import * as React from "react"
import { cn } from "@vix/ui/lib/utils"
import { Technical, Label, Headline, Body, Button } from "."

type SolutionCardType =
  | "process-automation"
  | "smart-ai-agents"
  | "document-intelligence"
  | "knowledge-graph"
  | "decision-intelligence"
  | "system-integration"

export interface SolutionCardProps {
  id: string
  refCode?: string
  label: string
  title: string
  description?: string
  progressLabel?: string
  progressValue?: number
  chartData?: number[]
  chartLabel?: string
  buttonLabel?: string
  infoGrid?: Array<{ label: string; value: string }>
  type: SolutionCardType
}

const chartOpacity = [0.22, 0.42, 0.32, 0.64, 0.92, 0.52, 0.28]

export function SolutionCard({
  id,
  refCode,
  label,
  title,
  description,
  progressLabel,
  progressValue,
  chartData,
  chartLabel,
  buttonLabel,
  infoGrid,
  type,
  className,
  ...props
}: SolutionCardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative flex h-full min-h-[360px] flex-col overflow-hidden border border-white/10 bg-surface-container-low text-white transition-[border-color,background-color] duration-200 ease-out hover:border-white/35 hover:bg-surface-container",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="pointer-events-none absolute top-4 left-4 h-3 w-3 border-t border-l border-white/35" />
      <div className="pointer-events-none absolute right-4 bottom-4 h-3 w-3 border-r border-b border-white/35" />

      {refCode && (
        <div className="absolute top-4 right-5 z-10">
          <Technical className="text-[10px] text-white/30">{refCode}</Technical>
        </div>
      )}

      <div className="relative z-10 flex min-h-0 flex-1 flex-col p-6 md:p-8">
        <div className="mb-8">
          <Label className="mb-4 block text-white/80">{label}</Label>
          <Headline
            size="lg"
            className="mb-4 max-w-xl text-white uppercase"
          >
            {title}
          </Headline>
          {description ? (
            <Body className="max-w-xl text-white/60">{description}</Body>
          ) : null}
        </div>

        <div className="mt-auto">
          {type === "process-automation" && (
            <ProcessVisual
              progressLabel={progressLabel}
              progressValue={progressValue}
            />
          )}

          {type === "smart-ai-agents" && (
            <AgentVisual
              chartData={chartData}
              chartLabel={chartLabel}
              buttonLabel={buttonLabel}
            />
          )}

          {type === "document-intelligence" && (
            <DocumentVisual infoGrid={infoGrid} />
          )}

          {type === "knowledge-graph" && <KnowledgeGraphVisual />}

          {type === "decision-intelligence" && <DecisionVisual />}

          {type === "system-integration" && <IntegrationVisual />}
        </div>
      </div>
    </div>
  )
}

function ProcessVisual({
  progressLabel,
  progressValue = 75,
}: Pick<SolutionCardProps, "progressLabel" | "progressValue">) {
  return (
    <div className="border-t border-white/10 pt-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <Technical className="text-white/45">AUTOMATION_COVERAGE</Technical>
        <Technical className="text-white/70">{progressValue}%</Technical>
      </div>
      <div className="relative h-3 overflow-hidden border border-white/15 bg-black">
        <div
          className="absolute inset-y-0 left-0 bg-white transition-[width] duration-300 ease-out"
          style={{ width: `${progressValue}%` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.55)_1px,transparent_1px)] bg-[size:12px_100%]" />
      </div>
      <Technical className="mt-4 block text-white/70">
        {progressLabel || "75% REDUCTION IN OPEX"}
      </Technical>
    </div>
  )
}

function AgentVisual({
  chartData = [20, 40, 30, 60, 90, 50, 20],
  chartLabel,
  buttonLabel,
}: Pick<SolutionCardProps, "chartData" | "chartLabel" | "buttonLabel">) {
  return (
    <div className="space-y-5">
      <div className="relative flex aspect-video flex-col overflow-hidden border border-white/10 bg-black p-4">
        {chartLabel && (
          <div className="absolute top-4 left-4">
            <Technical className="text-[10px] text-white/40">
              {chartLabel}
            </Technical>
          </div>
        )}
        <div className="mt-auto flex h-[78%] items-end justify-between gap-1.5">
          {chartData.map((height, index) => (
            <div
              key={`${height}-${index}`}
              className="w-full bg-white"
              style={{
                height: `${height}%`,
                opacity: chartOpacity[index] || 0.25,
              }}
            />
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        className="font-label-caps w-full border-white/50 py-3 text-label-caps text-white uppercase transition-[background-color,color,transform] duration-150 ease-out active:scale-[0.98] hover:bg-white hover:text-black"
      >
        {buttonLabel || "Initialize Simulation"}
      </Button>
    </div>
  )
}

function DocumentVisual({
  infoGrid,
}: Pick<SolutionCardProps, "infoGrid">) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.8fr_1fr]">
      {infoGrid ? (
        <div className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {infoGrid.map((item) => (
            <div key={item.label} className="border border-white/10 bg-black/35 p-4">
              <Technical className="mb-1 block text-white/40">
                {item.label}
              </Technical>
              <Label className="text-white">{item.value}</Label>
            </div>
          ))}
        </div>
      ) : null}
      <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden border border-white/10 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        <div className="relative h-52 w-40 border-2 border-white/30 bg-black">
          <div className="absolute top-0 left-0 h-1 w-full animate-pulse bg-white" />
          <div className="flex flex-col gap-2 p-4">
            <div className="h-2 w-3/4 bg-white/25" />
            <div className="h-2 w-1/2 bg-white/20" />
            <div className="h-2 w-full bg-white/20" />
            <div className="h-2 w-2/3 bg-white/15" />
            <div className="mt-8 border border-white/40 p-2 text-center">
              <Technical className="text-[8px] text-white/45">
                SCANNING...
              </Technical>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function KnowledgeGraphVisual() {
  return (
    <div className="relative min-h-[220px] overflow-hidden border border-white/10 bg-black">
      <div className="absolute top-1/2 left-1/2 h-px w-48 -translate-x-1/2 -rotate-12 bg-white/25" />
      <div className="absolute top-1/2 left-1/2 h-px w-44 -translate-x-1/2 rotate-[28deg] bg-white/20" />
      <div className="absolute top-1/2 left-1/2 h-36 w-px -translate-y-1/2 rotate-[18deg] bg-white/20" />
      {[
        "top-8 left-10 size-14",
        "top-20 right-12 size-20",
        "bottom-8 left-1/3 size-16",
        "bottom-12 right-1/4 size-10",
      ].map((className, index) => (
        <div
          key={className}
          className={cn(
            "absolute grid place-items-center rounded-full border border-white/35 bg-surface-container-low text-white",
            className
          )}
        >
          <Technical className="text-[9px]">N{index + 1}</Technical>
        </div>
      ))}
    </div>
  )
}

function DecisionVisual() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        ["SIGNAL", "0.94"],
        ["RISK", "LOW"],
        ["ACTION", "READY"],
      ].map(([label, value]) => (
        <div key={label} className="border border-white/10 bg-black/45 p-4">
          <Technical className="mb-5 block text-white/35">{label}</Technical>
          <Label className="text-white">{value}</Label>
        </div>
      ))}
    </div>
  )
}

function IntegrationVisual() {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
      <div className="space-y-2">
        {["CRM", "ERP", "OPS", "DATA"].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between border border-white/10 bg-black/35 px-4 py-3"
          >
            <Technical className="text-white/45">{item}</Technical>
            <span className="h-2 w-2 rounded-full bg-white" />
          </div>
        ))}
      </div>
      <div className="border border-white/10 bg-black p-4">
        <Technical className="mb-4 block text-white/35">
          PIPELINE_STATUS
        </Technical>
        <div className="space-y-3">
          {["capture.input", "normalize.schema", "deploy.worker"].map(
            (command) => (
              <div key={command} className="font-mono text-xs text-white/65">
                $ vixion {command}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
