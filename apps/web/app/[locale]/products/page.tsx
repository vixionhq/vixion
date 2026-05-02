import { Display, Headline, Body, Technical, Label, Button, Card, Badge } from "@vix/ui/components"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { products } from "@/lib/products-data"
import type { Metadata } from "next"
import { routing } from "@/i18n/routing"
import Link from "next/link"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Products",
    description:
      "Explore VIXION's product catalog. CLI tools, SDKs, and modular AI components for enterprise deployment on the African continent.",
    alternates: {
      canonical: `/${locale}/products`,
    },
  }
}

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex flex-col justify-end px-6 py-12 border-b border-border">
          <div className="absolute top-4 right-6">
            <Technical className="text-muted-foreground/30">
              CATALOG: PRODUCTS_V2
            </Technical>
          </div>
          <div className="max-w-7xl mx-auto w-full">
            <Technical className="text-muted-foreground/40 mb-4 block uppercase tracking-[0.3em]">
              PRODUCT_INDEX
            </Technical>
            <Display size="xl" className="text-primary uppercase mb-6 leading-none">
              Products
            </Display>
            <Headline size="md" className="text-secondary max-w-2xl">
              Modular architecture for enterprise AI deployment. Select your 
              configuration.
            </Headline>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="px-6 py-4 border-b border-border flex gap-4 items-center">
          <Technical className="text-muted-foreground/40 uppercase">Filter:</Technical>
          <Badge variant="outline">ALL</Badge>
          <Badge variant="secondary">STANDARD</Badge>
          <Badge variant="secondary">PRO</Badge>
          <Badge variant="secondary">ENTERPRISE</Badge>
        </section>

        {/* Product Grid */}
        <section className="p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} variant="elevated" className="flex flex-col group">
                <div className="flex justify-between items-start mb-4">
                  <Technical className="text-[10px] text-primary/30">
                    SKU: {product.id}
                  </Technical>
                  <Badge variant={product.tier === "Enterprise" ? "default" : "secondary"}>
                    {product.tier.toUpperCase()}
                  </Badge>
                </div>

                <div className="flex-1">
                  <Label className="text-primary mb-2 block text-xs tracking-widest uppercase">
                    {product.name}
                  </Label>
                  <Headline size="lg" className="text-primary uppercase mb-4">
                    {product.tagline}
                  </Headline>
                  <Body className="text-secondary mb-6">
                    {product.description}
                  </Body>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <Technical className="text-[10px] text-muted-foreground/40 mb-2 block uppercase">
                    Specifications
                  </Technical>
                  <ul className="space-y-1">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary/40" />
                        <Technical className="text-xs text-primary/60">{spec}</Technical>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Initialize Configuration →
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparative Specs */}
        <section className="border-t border-border">
          <div className="grid grid-cols-4 border-b border-border">
            <div className="p-6 border-r border-border">
              <Technical className="text-muted-foreground/40 uppercase text-xs">Spec</Technical>
            </div>
            <div className="p-6 border-r border-border">
              <Technical className="text-muted-foreground/40 uppercase text-xs">Standard</Technical>
            </div>
            <div className="p-6 border-r border-border">
              <Technical className="text-muted-foreground/40 uppercase text-xs">Pro</Technical>
            </div>
            <div className="p-6">
              <Technical className="text-muted-foreground/40 uppercase text-xs">Enterprise</Technical>
            </div>
          </div>
          <div className="grid grid-cols-4 border-b border-border">
            <div className="p-4 border-r border-border flex items-center">
              <Label className="text-primary text-xs">Concurrent Agents</Label>
            </div>
            <div className="p-4 border-r border-border flex items-center">
              <Technical className="text-xs">10</Technical>
            </div>
            <div className="p-4 border-r border-border flex items-center">
              <Technical className="text-xs">100</Technical>
            </div>
            <div className="p-4 flex items-center">
              <Technical className="text-xs">Unlimited</Technical>
            </div>
          </div>
          <div className="grid grid-cols-4 border-b border-border">
            <div className="p-4 border-r border-border flex items-center">
              <Label className="text-primary text-xs">Data Retention</Label>
            </div>
            <div className="p-4 border-r border-border flex items-center">
              <Technical className="text-xs">30 Days</Technical>
            </div>
            <div className="p-4 border-r border-border flex items-center">
              <Technical className="text-xs">1 Year</Technical>
            </div>
            <div className="p-4 flex items-center">
              <Technical className="text-xs">Unlimited</Technical>
            </div>
          </div>
          <div className="grid grid-cols-4 border-b border-border">
            <div className="p-4 border-r border-border flex items-center">
              <Label className="text-primary text-xs">Support SLA</Label>
            </div>
            <div className="p-4 border-r border-border flex items-center">
              <Technical className="text-xs">24 Hours</Technical>
            </div>
            <div className="p-4 border-r border-border flex items-center">
              <Technical className="text-xs">4 Hours</Technical>
            </div>
            <div className="p-4 flex items-center">
              <Technical className="text-xs">15 Minutes</Technical>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="p-4 border-r border-border flex items-center">
              <Label className="text-primary text-xs">Encryption</Label>
            </div>
            <div className="p-4 border-r border-border flex items-center">
              <Technical className="text-xs">AES-256</Technical>
            </div>
            <div className="p-4 border-r border-border flex items-center">
              <Technical className="text-xs">AES-512</Technical>
            </div>
            <div className="p-4 flex items-center">
              <Technical className="text-xs">Post-quantum</Technical>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 flex flex-col items-center text-center border-b border-border">
          <Technical className="uppercase mb-4 tracking-widest text-muted-foreground/40">
            Not sure what you need?
          </Technical>
          <Display size="xl" className="mb-8 uppercase">
            Configure your stack.
          </Display>
          <div className="flex gap-4">
            <Button size="xl">Start Configuration</Button>
            <Button variant="outline" size="xl">Contact Sales</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
