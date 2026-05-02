"use client"

import { useState } from "react"
import {
  Display,
  Body,
  Technical,
} from "@vix/ui/components"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ComponentDemo } from "@/components/design/component-demo"
import {
  designComponentCategories,
  designComponents,
} from "@/lib/design-components-data"
import { cn } from "@vix/ui/lib"

export default function DesignComponents() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredComponents =
    selectedCategory === "all"
      ? designComponents
      : designComponents.filter((c) => c.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-16">
        <section className="border-b border-border px-6 py-12">
          <Technical className="mb-4 block tracking-[0.3em] text-muted-foreground/40 uppercase">
            Component Library // V.01
          </Technical>
          <Display size="xl" className="mb-4 text-primary uppercase">
            Design Components
          </Display>
          <Body className="max-w-xl text-secondary">
            VIXION design system component library. Toggle between preview and
            code views to explore all available components.
          </Body>
        </section>

        <section className="flex gap-4 overflow-x-auto border-b border-border px-6 py-4">
          {designComponentCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-4 py-2 font-display text-xs tracking-widest whitespace-nowrap uppercase transition-colors",
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </section>

        <section className="p-6 md:p-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredComponents.map((component) => (
              <ComponentDemo
                key={component.id}
                id={component.id}
                name={component.name}
                category={component.category}
                preview={component.preview}
                code={component.code}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
