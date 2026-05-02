import { MetadataRoute } from "next"

const baseUrl = "https://vixionhq.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/solutions",
    "/services",
    "/framework",
    "/contact",
    "/products",
    "/terminal",
    "/encrypted-comms",
    "/institutional",
    "/about",
  ]

  const locales = ["en", "fr"]

  const sitemapEntries = locales.flatMap((locale) =>
    pages.map((path) => ({
      url: `${baseUrl}/${locale}${path === "" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${path === "" ? "" : path}`,
          fr: `${baseUrl}/fr${path === "" ? "" : path}`,
        },
      },
    }))
  )

  return sitemapEntries
}