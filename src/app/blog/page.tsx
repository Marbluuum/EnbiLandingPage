import type { Metadata } from "next";
import { CtaBand, PageHero, PostCard, breadcrumbJsonLd } from "@/components/sections";
import { Band, JsonLd } from "@/components/ui";
import { posts } from "@/content/posts";
import { site } from "@/content/site";

const title = "Blog de marketing y ventas B2B para empresas de tecnología";
const description =
  "Guías prácticas de marketing para empresas de tecnología: generación de leads B2B, contenido, SEO, LinkedIn, ABM, prospección outbound y métricas para software factories, SaaS y consultoras IT.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", title, description },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${site.url}/blog#blog`,
          name: title,
          description,
          url: `${site.url}/blog`,
          inLanguage: "es",
          publisher: { "@id": `${site.url}/#organization` },
          blogPost: sorted.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${site.url}/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
        ])}
      />
      <PageHero title={title} description={description} breadcrumbs={[{ name: "Inicio", href: "/" }, { name: "Blog" }]} />

      <Band aria-label="Artículos">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-[25px]">
          {sorted.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </Band>

      <CtaBand />
    </>
  );
}
