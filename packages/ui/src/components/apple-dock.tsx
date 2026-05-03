"use client"

import React, { useRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"
import type { MotionProps } from "motion/react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Home01Icon,
  GridIcon,
  Briefcase01Icon,
  LockIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"
import { cn } from "../lib"

export interface AppleDockProps extends VariantProps<typeof appleDockVariants> {
  className?: string
  iconSize?: number
  iconMagnification?: number
  disableMagnification?: boolean
  iconDistance?: number
  direction?: "top" | "middle" | "bottom"
  children: React.ReactNode
  currentPath?: string
}

const DEFAULT_SIZE = 40
const DEFAULT_MAGNIFICATION = 60
const DEFAULT_DISTANCE = 140
const DEFAULT_DISABLEMAGNIFICATION = false

const appleDockVariants = cva(
  "mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10"
)

const AppleDock = React.forwardRef<HTMLDivElement, AppleDockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      disableMagnification = DEFAULT_DISABLEMAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      currentPath = "",
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity)

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (
          React.isValidElement<AppleDockIconProps>(child) &&
          child.type === AppleDockIcon
        ) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            size: iconSize,
            magnification: iconMagnification,
            disableMagnification: disableMagnification,
            distance: iconDistance,
            currentPath,
          })
        }
        return child
      })
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(appleDockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    )
  }
)

AppleDock.displayName = "AppleDock"
export { AppleDock }

AppleDock.displayName = "AppleDock"

export interface AppleDockIconProps extends Omit<
  MotionProps & React.HTMLAttributes<HTMLDivElement>,
  "children"
> {
  size?: number
  magnification?: number
  disableMagnification?: boolean
  distance?: number
  mouseX?: MotionValue<number>
  currentPath?: string
  isActive?: boolean
  className?: string
  children?: React.ReactNode
}

const AppleDockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  disableMagnification,
  distance = DEFAULT_DISTANCE,
  mouseX,
  currentPath = "",
  isActive,
  className,
  children,
  ...props
}: AppleDockIconProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const padding = Math.max(6, size * 0.2)
  const defaultMouseX = useMotionValue(Infinity)

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const targetSize = disableMagnification ? size : magnification

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, targetSize, size]
  )

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full transition-colors",
        isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted-foreground/20",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

AppleDockIcon.displayName = "AppleDockIcon"
export { AppleDockIcon }

export interface AppleDockNavProps {
  className?: string
  iconSize?: number
  iconMagnification?: number
  disableMagnification?: boolean
  iconDistance?: number
  currentPath?: string
}

const navItems: { label: string; href: string; icon: typeof Home01Icon }[] = [
  { label: "Home", href: "/", icon: Home01Icon },
  { label: "Solutions", href: "/solutions", icon: GridIcon },
  { label: "Services", href: "/services", icon: Briefcase01Icon },
  { label: "Framework", href: "/framework", icon: LockIcon },
  { label: "Contact", href: "/contact", icon: Mail01Icon },
]

export function AppleDockNav({
  className,
  iconSize,
  iconMagnification,
  disableMagnification,
  iconDistance,
  currentPath = "",
}: AppleDockNavProps) {
  return (
    <AppleDock
      className={className}
      iconSize={iconSize}
      iconMagnification={iconMagnification}
      disableMagnification={disableMagnification}
      iconDistance={iconDistance}
      currentPath={currentPath}
    >
      {navItems.map(({ label, href, icon: Icon }) => {
        const isActive = currentPath === href || (currentPath === "" && label === "Home")
        return (
          <AppleDockIcon
            key={label}
            isActive={isActive}
            className="text-foreground"
            aria-label={label}
          >
            <HugeiconsIcon icon={Icon} className="h-6 w-6" />
          </AppleDockIcon>
        )
      })}
    </AppleDock>
  )
}

export default function AppleDockDemo() {
  return (
    <AppleDockNav currentPath="" />
  )
}
