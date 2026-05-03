import Link from "next/link"
import type { Metadata } from "next"
import {
  BlueprintGrid,
  Body,
  Card,
  Display,
  Headline,
  Technical,
} from "@vix/ui/components"
import { Footer } from "@/components/footer"
import en from "../../../messages/en.json"
import fr from "../../../messages/fr.json"

const messages = { en, fr }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Framework",
    description:
      "VIXION's architectural framework: security-first design, compliance, and best practices for enterprise automation in African markets.",
    alternates: {
      canonical: `/${locale}/framework`,
    },
  }
}

function SectionHeader({
  id,
  label,
  title,
  description,
}: Readonly<{
  id?: string
  label: string
  title: string
  description?: string
}>) {
  return (
    <div className="mb-10 max-w-3xl">
      <Technical className="mb-3 block text-muted-foreground/45 uppercase">
        {label}
      </Technical>
      <Headline
        id={id}
        size="lg"
        className="text-balance text-primary uppercase"
      >
        {title}
      </Headline>
      {description && (
        <Body size="md" className="mt-4 max-w-2xl text-pretty text-secondary">
          {description}
        </Body>
      )}
    </div>
  )
}

function SignalList({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex min-w-0 gap-3 border-b border-white/10 pb-3"
        >
          <span aria-hidden="true" className="mt-2 size-1.5 bg-primary" />
          <Technical className="min-w-0 text-white/70">{item}</Technical>
        </li>
      ))}
    </ul>
  )
}

export default async function Framework({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const lang = locale === "en" ? "en" : "fr"
  const t = messages[lang]!.Framework!

  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <main className="container mx-auto border-x pt-16">
        <BlueprintGrid className="flex min-h-[430px] flex-col justify-end border-b border-border px-6 py-12">
          <div className="absolute top-4 right-6 hidden text-right md:block">
            <Technical className="text-muted-foreground/30">
              {t.hero!.method!}
              <br />
              READINESS: {t.hero!.readiness!}
              <br />
              OUTPUT: {t.hero!.output!}
            </Technical>
          </div>
          <section
            aria-labelledby="framework-title"
            className="mx-auto w-full max-w-7xl"
          >
            <Technical className="mb-4 block tracking-[0.3em] text-muted-foreground/40 uppercase">
              {t.hero!.label!}
            </Technical>
            <Display
              id="framework-title"
              size="xl"
              className="mb-6 max-w-5xl leading-none text-primary uppercase"
            >
              {t.hero!.title!}
            </Display>
            <Headline size="md" className="max-w-3xl text-secondary">
              {t.hero!.description!}
            </Headline>
          </section>
        </BlueprintGrid>

        <section
          aria-labelledby="core-principle-title"
          className="grid grid-cols-1 border-b border-border lg:grid-cols-[0.9fr_1.4fr]"
        >
          <div className="border-b border-border p-8 md:p-12 lg:border-r lg:border-b-0">
            <Technical className="mb-4 block text-muted-foreground/40 uppercase">
              {t.corePrinciple!.label!}
            </Technical>
            <h2
              id="core-principle-title"
              className="font-display text-4xl leading-[1.2] font-semibold tracking-tight text-balance text-primary uppercase"
            >
              {t.corePrinciple!.title!}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {t.corePrinciple!.cards!.map((principle: any, index: number) => (
              <Card
                key={principle}
                variant="outline"
                className={`min-w-0 border-0 bg-transparent p-8 text-primary md:p-10 ${
                  index < 2
                    ? "border-b border-border md:border-r md:border-b-0"
                    : ""
                }`}
              >
                <Technical className="mb-6 block text-muted-foreground/40">
                  0{index + 1}
                </Technical>
                <Body size="lg" className="text-pretty text-secondary">
                  {principle}
                </Body>
              </Card>
            ))}
          </div>
        </section>

        <section aria-labelledby="company-data-title" className="">
          <div className="p-8 md:p-12">
            <SectionHeader
              id="company-data-title"
              label={t.dataSurface!.label!}
              title={t.dataSurface!.title!}
              description={t.dataSurface!.description!}
            />
          </div>

          <div className="grid grid-cols-1 border-y md:grid-cols-5">
            {t.dataCategories!.map((category: any, index: number) => (
              <article
                key={category.title}
                className={`min-w-0 p-6 ${
                  index < t.dataCategories!.length - 1
                    ? "border-b border-border md:border-r md:border-b-0"
                    : ""
                }`}
              >
                <h3 className="font-display text-lg font-semibold text-balance text-primary">
                  {category.title}
                </h3>
                <Technical className="mt-3 block text-muted-foreground">
                  {category.description}
                </Technical>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="maturity-title">
          <div className="p-8 md:p-12">
            <SectionHeader
              id="maturity-title"
              label={t.maturity!.label!}
              title={t.maturity!.title!}
              description={t.maturity!.description!}
            />
          </div>
          <div className="grid grid-cols-1 gap-px border-y bg-border md:grid-cols-3">
            {t.maturityLevels!.map((level: any) => (
              <article key={level.level} className="bg-background p-8">
                <Technical className="mb-8 block text-muted-foreground/45">
                  {level.level}
                </Technical>
                <h3 className="mb-6 font-display text-2xl font-semibold text-balance text-primary">
                  {level.title}
                </h3>
                <SignalList items={level.signals!} />
                <div className="mt-8 border border-primary/30 p-4">
                  <Technical className="mb-2 block text-muted-foreground/45">
                    GOAL
                  </Technical>
                  <Body size="sm" className="text-pretty text-primary">
                    {level.goal}
                  </Body>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="method-title">
          <div className="p-8 md:p-12">
            <SectionHeader
              id="method-title"
              label={t.method!.label!}
              title={t.method!.title!}
              description={t.method!.description!}
            />
          </div>

          <div className="grid grid-cols-1 border-y lg:grid-cols-3">
            {t.methodSteps!.map((step: any, index: number) => (
              <article
                key={step.step}
                className={`min-w-0 p-8 ${
                  index < t.methodSteps!.length - 1
                    ? "border-b border-border lg:border-r lg:border-b-0"
                    : ""
                }`}
              >
                <Technical className="mb-6 block text-muted-foreground/45">
                  {step.step}
                </Technical>
                <h3 className="mb-6 font-display text-3xl font-semibold text-primary uppercase">
                  {step.title}
                </h3>
                <SignalList items={step.points!} />
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="data-layer-title"
          className="grid grid-cols-1 border-b border-border lg:grid-cols-[1fr_1.3fr]"
        >
          <div className="border-b border-border p-8 md:p-12 lg:border-r lg:border-b-0">
            <SectionHeader
              id="data-layer-title"
              label={t.dataLayer!.label!}
              title={t.dataLayer!.title!}
              description={t.dataLayer!.description!}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {t.unifiedLayer!.map((layer: any, index: number) => (
              <article
                key={layer.title}
                className={`min-w-0 p-8 md:p-10 ${
                  index < 2
                    ? "border-b border-border md:border-r md:border-b-0"
                    : ""
                }`}
              >
                <h3 className="font-display text-2xl font-semibold text-primary">
                  {layer.title}
                </h3>
                <Body size="sm" className="mt-4 text-pretty text-secondary">
                  {layer.description}
                </Body>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-border bg-primary px-6 py-20 text-center text-primary-foreground md:py-24">
          <Technical className="mb-4 block tracking-widest uppercase">
            {t.cta!.label!}
          </Technical>
          <h2 className="mb-6 font-display text-4xl leading-[1.2] font-semibold tracking-tight uppercase">
            {t.cta!.title!}
          </h2>
          <Body size="lg" className="mx-auto mb-10 max-w-2xl text-pretty">
            {t.cta!.description!}
          </Body>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`/${lang}/solutions`}
              className="inline-flex h-12 items-center justify-center border border-foreground px-8 font-display text-sm font-bold tracking-widest text-background uppercase transition-[background-color,color,transform] duration-150 hover:bg-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:outline-none active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100"
            >
              {t.cta!.solutionsLink!}
            </Link>
            <Link
              href={`/${lang}/services`}
              className="inline-flex h-12 items-center justify-center border border-foreground bg-background px-8 font-display text-sm font-bold tracking-widest text-foreground uppercase transition-[background-color,color,transform] duration-150 hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:outline-none active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100"
            >
              {t.cta!.servicesLink!}
            </Link>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  )
}
