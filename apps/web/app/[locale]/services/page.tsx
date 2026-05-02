import {
  Body,
  BlueprintGrid,
  Card,
  Display,
  Technical,
  GridContainer,
  Headline,
  Small,
} from "@vix/ui/components"
import { Footer } from "@/components/footer"
import en from "../../../messages/en.json"
import fr from "../../../messages/fr.json"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Metadata } from "next"
import {
  ArrowRight02Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons"

const messages = { en, fr }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Services",
    description:
      "VIXION services: workflow automation, AI assistants, document processing, and predictive analytics. Enterprise solutions built for African scale.",
    alternates: {
      canonical: `/${locale}/services`,
    },
  }
}

export default async function Services({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const lang = locale === "en" ? "en" : "fr"
  const t = messages[lang]!.Services!

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <div className="container mx-auto border-x pt-16">
        <BlueprintGrid className="px-8 py-12 lg:px-16">
          <section aria-labelledby="services-hero-title" className="relative">
            <Technical
              size="sm"
              className="absolute top-0 right-0 hidden text-right text-white/30 md:block"
            >
              {t.hero!.sysLoc!}
              <br />
              LATENCY: {t.hero!.latency!}
              <br />
              STATUS: {t.hero!.status!}
            </Technical>

            <div className="mx-auto max-w-6xl">
              <Technical
                size="sm"
                className="mb-6 inline-block border border-white bg-white px-2 py-0.5 text-black"
              >
                {t.hero!.manifest!}
              </Technical>
              <Display
                id="services-hero-title"
                size="xl"
                className="mb-8 max-w-5xl leading-none font-black tracking-tighter text-balance text-white uppercase"
              >
                Operational
                <br />
                Transformation
                <br />
                Pipeline
              </Display>
              <Technical className="max-w-3xl font-mono text-lg text-pretty text-white/60">
                {t.hero!.description!}
              </Technical>
            </div>
          </section>
        </BlueprintGrid>

        <GridContainer direction="to-left">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {t.heroStats!.map((stat: any) => (
              <Card
                key={stat.label}
                variant="outline"
                className="flex min-w-0 flex-col gap-1 border-none p-6 text-white"
              >
                <Technical size="sm" className="text-white/50 uppercase">
                  {stat.label}
                </Technical>
                <span className="font-display text-3xl font-bold tabular-nums">
                  {stat.value}
                </span>
              </Card>
            ))}
          </div>
        </GridContainer>
        <section
          aria-labelledby="service-mosaic-title"
          className="border-b border-white/15"
        >
          <GridContainer>
            <h2 id="service-mosaic-title" className="sr-only">
              Services & Operational Use Cases
            </h2>

            <div className="grid grid-cols-1 border-b border-white/10 lg:grid-cols-3">
              {t.features!.map((feature: any, index: number) => (
                <article
                  key={feature.title}
                  className={`min-w-0 p-8 md:p-12 ${
                    index < t.features!.length - 1
                      ? "border-b border-white/10 lg:border-r lg:border-b-0"
                      : ""
                  }`}
                >
                  <h3 className="font-display text-xl font-bold text-balance text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 max-w-sm text-xl leading-snug text-pretty text-white/70">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
            <GridContainer direction="to-right">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.8fr)]">
                <aside className="flex min-w-0 flex-col border-b border-white/10 p-8 md:p-12 lg:border-r lg:border-b-0">
                  <div className="space-y-10">
                    {t.serviceRail!.map((service: any) => (
                      <article key={service.title} className="min-w-0">
                        <h3 className="font-display text-2xl font-bold text-balance text-white">
                          {service.title}
                        </h3>
                        <Body
                          size="md"
                          className="mt-4 text-pretty text-white/65"
                        >
                          {service.description}
                        </Body>
                      </article>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    type="button"
                    className="mt-10 inline-flex h-10 w-full items-center justify-center bg-white px-6 font-display font-medium text-black transition-[background-color,transform] duration-150 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100"
                  >
                    {t.cta!.button!}
                    <HugeiconsIcon icon={ArrowRight02Icon} className="ml-2" />
                  </Link>

                  <div className="mt-10">
                    <Technical className="mb-4 block text-white/55">
                      Supports
                    </Technical>
                    <div className="flex min-w-0 items-center gap-2">
                      {["AI", "OCR", "RAG", "OPS"].map((label) => (
                        <span
                          key={label}
                          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 font-display text-xs font-bold text-white"
                          translate="no"
                        >
                          {label}
                        </span>
                      ))}
                      <Technical className="ml-2 min-w-0 text-white/65">
                        {t.cta!.providers!}
                      </Technical>
                    </div>
                  </div>
                </aside>

                <div className="min-w-0 font-mono">
                  <div className="flex min-h-[370px] items-center justify-center border-b border-white/10 p-6 md:p-12">
                    <div className="w-full max-w-3xl overflow-hidden rounded-lg border border-white/15 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                      <div className="flex min-w-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
                        <div
                          className="flex items-center gap-2"
                          aria-hidden="true"
                        >
                          <span className="size-2 rounded-full bg-red-300" />
                          <span className="size-2 rounded-full bg-yellow-300" />
                          <span className="size-2 rounded-full bg-green-300" />
                        </div>
                        <Technical className="min-w-0 truncate text-white/65">
                          vixion-manifest.ts
                        </Technical>
                        <div className="flex shrink-0 items-center gap-2">
                          <Technical className="hidden text-white/70 sm:inline">
                            Run it with
                          </Technical>
                          <span className="rounded-md border border-white/15 px-2 py-1 font-display text-[11px] text-white">
                            AI Gateway
                          </span>
                        </div>
                      </div>

                      <pre
                        className="overflow-x-auto p-6 text-[13px] leading-7 text-white/85"
                        aria-label="Vixion automation manifest example"
                      >
                        <code className="font-mono">
                          <span className="text-white/35 select-none">1</span>{" "}
                          <span className="text-pink-300">import</span>{" "}
                          {"{ deployPipeline }"}{" "}
                          <span className="text-pink-300">from</span>{" "}
                          <span className="text-green-300">
                            &apos;@vixion/core&apos;
                          </span>
                          ;{"\n"}
                          <span className="text-white/35 select-none">2</span>
                          {"\n"}
                          <span className="text-white/35 select-none">
                            3
                          </span>{" "}
                          <span className="text-pink-300">const</span> pipeline
                          = <span className="text-purple-300">await</span>{" "}
                          deployPipeline({"{"}
                          {"\n"}
                          <span className="text-white/35 select-none">4</span>
                          {"   "}region:{" "}
                          <span className="text-green-300">
                            &apos;africa-west&apos;
                          </span>
                          ,{"\n"}
                          <span className="text-white/35 select-none">5</span>
                          {"   "}modules: [
                          <span className="text-green-300">
                            &apos;ocr&apos;
                          </span>
                          ,{" "}
                          <span className="text-green-300">
                            &apos;agents&apos;
                          </span>
                          ,{" "}
                          <span className="text-green-300">
                            &apos;ops&apos;
                          </span>
                          ],
                          {"\n"}
                          <span className="text-white/35 select-none">6</span>
                          {"   "}fallbacks:{" "}
                          <span className="text-sky-300">true</span>,{"\n"}
                          <span className="text-white/35 select-none">7</span>
                          {"}"});
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-b border-white/10 md:grid-cols-4">
                    {t.capabilities!.map((capability: any, index: number) => {
                      const title =
                        "label" in capability
                          ? capability.label
                          : capability.title
                      const description =
                        "description" in capability
                          ? capability.description
                          : null

                      return (
                        <div
                          key={title}
                          className={`min-w-0 border-white/10 px-4 py-4 md:px-6 ${
                            index % 2 === 0 ? "border-r" : ""
                          } ${
                            index < t.capabilities!.length - 2 ? "border-b" : ""
                          } ${index % 4 !== 3 ? "md:border-r" : "md:border-r-0"} ${
                            index < 4 ? "md:border-b" : "md:border-b-0"
                          }`}
                        >
                          <Technical
                            className={`block break-words ${
                              index === 0
                                ? "font-bold text-white"
                                : "text-white/80"
                            }`}
                          >
                            {title}
                          </Technical>
                          {description && (
                            <Technical
                              size="sm"
                              className="mt-1 block text-white/40"
                            >
                              {description}
                            </Technical>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </GridContainer>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {t.bottomCards!.map((card: any, index: number) => (
                <article
                  key={card.title}
                  className={`relative min-h-[240px] min-w-0 p-8 md:p-12 ${
                    index < t.bottomCards!.length - 1
                      ? "border-b border-white/10 md:border-r md:border-b-0"
                      : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 right-0 flex size-7 items-center justify-center border-b border-l border-white/10 text-xl leading-none text-white/45"
                  >
                    +
                  </span>
                  <h3 className="font-display text-2xl font-bold text-balance text-white">
                    {card.title}
                  </h3>
                  <Body
                    size="md"
                    className="mt-4 max-w-sm text-pretty text-white/65"
                  >
                    {card.description}
                  </Body>
                  <Technical className="mt-8 block rounded-md border border-white/15 px-4 py-3 text-white">
                    {card.command}
                  </Technical>
                </article>
              ))}
            </div>
          </GridContainer>
        </section>

        <section
          aria-labelledby="system-cohesion-title"
          className="group relative h-[500px] cursor-crosshair overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-black/40"
          />
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center p-6">
            <div className="border border-white bg-black/80 p-8 text-center backdrop-blur-sm md:p-12">
              <Technical className="mb-4 block text-white">
                {t.systemOverview!.label!}
              </Technical>
              <h2
                id="system-cohesion-title"
                className="font-display text-3xl font-black tracking-[0.35em] break-words text-white uppercase md:text-5xl md:tracking-[0.5em]"
              >
                {t.systemOverview!.title!}
              </h2>
            </div>
          </div>
        </section>
      </div>

      <Footer locale={locale} />
    </div>
  )
}
