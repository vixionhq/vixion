"use client"

import { usePathname } from "next/navigation"
import { AppleDockNav } from "@vix/ui/components"

export function MobileDock() {
  const pathname = usePathname()

  return <AppleDockNav currentPath={pathname} />
}