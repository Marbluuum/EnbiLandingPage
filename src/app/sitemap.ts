import type { MetadataRoute } from "next";
import { cases } from "@/content/cases";
import { posts } from "@/content/posts";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = posts.map((p) => p.updated ?? p.date).sort().at(-1);
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/servicios`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({ url: `${site.url}/servicios/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${site.url}/casos-de-exito`, changeFrequency: "monthly", priority: 0.8 },
    ...cases.map((c) => ({ url: `${site.url}/casos-de-exito/${c.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
    { url: `${site.url}/blog`, lastModified: latestPost, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.updated ?? p.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${site.url}/nosotros`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/contacto`, changeFrequency: "yearly", priority: 0.6 },
  ];
}
