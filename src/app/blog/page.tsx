import type { Metadata } from "next";
import { CtaBand, PageHero, PostCard, breadcrumbJsonLd } from "@/components/sections";
import { Band, JsonLd } from "@/components/ui";
import { posts, slugify } from "@/content/posts";

/** Topic hubs: each category gets its own section, so the blog reads as clusters of expertise. */
const topics = [
  {
    category: "Marketing B2B",
    intro: "Cómo hacer marketing para empresas de software, SaaS y consultoras IT: posicionamiento, contenido, SEO, ABM y cómo elegir una agencia.",
  },
  {
    category: "Generación de leads",
    intro: "Cómo conseguir clientes de forma previsible: canales, agencias, mercados como Estados Unidos y España, y casos por tipo de empresa.",
  },
  {
    category: "Prospección",
    intro: "Prospección outbound paso a paso: cold email, calentamiento de dominios, LinkedIn, llamadas e inteligencia artificial.",
  },
  {
    category: "Estrategia comercial",
    intro: "El proceso de venta B2B: cliente ideal, calificación de oportunidades, CRM, vender software y convertir usuarios en clientes.",
  },
];
import { site } from "@/content/site";

const title = "Blog de marketing y ventas B2B para empresas de tecnología";
const description =
  "Guías prácticas de marketing para empresas de tecnología: generación de leads B2B, contenido, SEO, LinkedIn, ABM, prospección outbound y métricas para software factories, SaaS y consultoras IT.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": [{ url: "/blog/rss.xml", title: "Blog de ENBI Consulting" }] },
  },
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

      <nav aria-label="Temas del blog" className="border-b border-hairline">
        <ul className="mx-auto flex max-w-[1220px] flex-wrap justify-center gap-3 px-4 py-6 sm:px-6">
          {topics.map((t) => (
            <li key={t.category}>
              <a
                href={`#${slugify(t.category)}`}
                className="inline-flex h-10 items-center rounded-full border border-card-border px-5 text-[15px] transition-colors hover:border-brand hover:text-brand"
              >
                {t.category} <span className="ml-2 text-black/50">{sorted.filter((p) => p.category === t.category).length}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {topics.map((t, i) => {
        const items = sorted.filter((p) => p.category === t.category);
        if (!items.length) return null;
        const id = slugify(t.category);
        return (
          <Band key={t.category} gray={i % 2 === 1} aria-labelledby={`${id}-title`}>
            <div id={id} className="mx-auto max-w-3xl text-center">
              <h2 id={`${id}-title`} className="enbi-h2">
                {t.category}
              </h2>
              <p className="mt-3 text-lg text-black/70">{t.intro}</p>
            </div>
            <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-[25px]">
              {items.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </Band>
        );
      })}

      <CtaBand />
    </>
  );
}
