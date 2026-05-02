import {
  ChartLineData01Icon,
  RoboticIcon,
  ScanIcon,
  SystemUpdate02Icon,
} from "@hugeicons/core-free-icons"

export function getHomeServices(msg: any) {
  return [
    {
      id: "001_AUT",
      icon: SystemUpdate02Icon,
      title: msg.services![0]!.title!,
      description: msg.services![0]!.description!,
      features: msg.services![0]!.features!,
      variant: "featured" as const,
    },
    {
      id: "002_AGNT",
      icon: RoboticIcon,
      title: msg.services![1]!.title!,
      description: msg.services![1]!.description!,
    },
    {
      id: "003_DOC",
      icon: ScanIcon,
      title: msg.services![2]!.title!,
      description: msg.services![2]!.description!,
    },
    {
      id: "004_ANL",
      icon: ChartLineData01Icon,
      title: msg.services![3]!.title!,
      description: msg.services![3]!.description!,
      variant: "featured" as const,
      isLast: true,
    },
  ]
}

export function getHomeHeroStats(msg: any) {
  return [
    {
      metric: msg.heroStats![0]!.metric!,
      label: msg.heroStats![0]!.label!,
    },
    {
      metric: msg.heroStats![1]!.metric!,
      label: msg.heroStats![1]!.label!,
    },
    {
      metric: msg.heroStats![2]!.metric!,
      label: msg.heroStats![2]!.label!,
    },
  ]
}

export const homeProtocols = [
  { name: "Inertia_Null", value: "TRUE" },
  { name: "Logic_Gate", value: "V_04", highlight: true },
  { name: "Auth_Token", value: "VALID" },
]
