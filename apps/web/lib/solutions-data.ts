import {
  BashIcon,
  DatabaseSync01Icon,
  PeerToPeer01Icon,
  PresentationBarChart01Icon,
  ShieldBanIcon,
  WorkflowCircle02Icon,
} from "@hugeicons/core-free-icons"

export const solutionHeroData = {
  technicalLabel: "CORE_SYSTEM_01",
  title: "SOLUTIONS",
  subtitle:
    "Architecting efficiency through AI & Automation. Converting legacy friction into autonomous operational precision.",
}

export const solutionStatsData = [
  { label: "Manual Tasks", value: "-75%" },
  { label: "Data Access", value: "Real-time" },
  { label: "Decisions", value: "Faster" },
  { label: "Operations", value: "Automated" },
]

export const solutionLogos = [
  { name: "Microsoft", url: "https://logo.clearbit.com/microsoft.com" },
  { name: "Google", url: "https://logo.clearbit.com/google.com" },
  { name: "Amazon", url: "https://logo.clearbit.com/amazon.com" },
  { name: "Apple", url: "https://logo.clearbit.com/apple.com" },
  { name: "Meta", url: "https://logo.clearbit.com/meta.com" },
  { name: "Tesla", url: "https://logo.clearbit.com/tesla.com" },
  { name: "Netflix", url: "https://logo.clearbit.com/netflix.com" },
  { name: "Adobe", url: "https://logo.clearbit.com/adobe.com" },
]

export const solutionFeatureItems = [
  { id: "001_AUT", label: "SECURE_DATA", icon: ShieldBanIcon },
  { id: "002_DTA", label: "UNIFIED_DATA", icon: DatabaseSync01Icon },
  { id: "003_NET", label: "CONNECTED_SYSTEMS", icon: PeerToPeer01Icon },
  { id: "004_SYS", label: "AUTOMATED_WORKFLOWS", icon: WorkflowCircle02Icon },
  { id: "005_CLI", label: "AI_EXECUTION", icon: BashIcon },
  {
    id: "006_LOG",
    label: "REALTIME_INSIGHTS",
    icon: PresentationBarChart01Icon,
  },
]

export const solutionGridClasses = {
  "process-automation": "md:col-span-7",
  "smart-ai-agents": "md:col-span-5",
  "document-intelligence": "md:col-span-6",
  "knowledge-graph": "md:col-span-6",
  "decision-intelligence": "md:col-span-5",
  "system-integration": "md:col-span-7",
}

export function getSolutionCards(t: any) {
  return [
    {
      id: "process-automation",
      refCode: "REF: AUT_01",
      label: t.cards!.processAutomation!.label!,
      title: t.cards!.processAutomation!.title!,
      description: t.cards!.processAutomation!.description!,
      progressLabel: t.cards!.processAutomation!.reduction!,
      progressValue: 75,
      type: "process-automation" as const,
    },
    {
      id: "smart-ai-agents",
      refCode: undefined,
      label: t.cards!.smartAiAgents!.label!,
      title: t.cards!.smartAiAgents!.title!,
      description: t.cards!.smartAiAgents!.description!,
      chartData: [20, 40, 30, 60, 90, 50, 20],
      chartLabel: "ANALYTICS_V2.STREAM",
      buttonLabel: "Initialize Simulation",
      type: "smart-ai-agents" as const,
    },
    {
      id: "document-intelligence",
      refCode: undefined,
      label: t.cards!.documentIntelligence!.label!,
      title: t.cards!.documentIntelligence!.title!,
      description: t.cards!.documentIntelligence!.description!,
      infoGrid: [
        { label: "DATA_EXTR", value: "FAST_PATH" },
        { label: "VERIF_LVL", value: "MIL-SPEC" },
      ],
      type: "document-intelligence" as const,
    },
    {
      id: "knowledge-graph",
      refCode: "REF: KNG_04",
      label: t.cards!.knowledgeGraph!.label!,
      title: t.cards!.knowledgeGraph!.title!,
      description: t.cards!.knowledgeGraph!.description!,
      type: "knowledge-graph" as const,
    },
    {
      id: "decision-intelligence",
      refCode: "REF: DEC_05",
      label: t.cards!.decisionIntelligence!.label!,
      title: t.cards!.decisionIntelligence!.title!,
      description: t.cards!.decisionIntelligence!.description!,
      type: "decision-intelligence" as const,
    },
    {
      id: "system-integration",
      refCode: "REF: INT_06",
      label: t.cards!.systemIntegration!.label!,
      title: t.cards!.systemIntegration!.title!,
      description: t.cards!.systemIntegration!.description!,
      type: "system-integration" as const,
    },
  ]
}
