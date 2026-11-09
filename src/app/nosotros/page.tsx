import type { Metadata } from "next";
import { Carousel } from "@/components/carousel";
import { FounderPhoto, LogoWall, Pillars } from "@/components/about";
import { CtaBand, PageHero, TestimonialCard, breadcrumbJsonLd } from "@/components/sections";
import { Band, JsonLd, SectionTitle } from "@/components/ui";
import { cases } from "@/content/cases";
import { site } from "@/content/site";
import { founder } from "@/content/team";

const title = "Quiénes somos";
const description =
  "ENBI Consulting es una consultora de generación de demanda B2B para empresas de tecnología, fundada por Martin Bufczyk en Buenos Aires.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nosotros" },
  openGraph: { url: "/nosotros", title: `${title} | ${site.name}`, description, type: "profile" },
};

export default function NosotrosPage() {
  const url = `${site.url}/nosotros`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${url}#page`,
          url,
          name: `${title} | ${site.name}`,
          description,
          inLanguage: "es",
          about: { "@id": `${site.url}/#organization` },
          mainEntity: { "@id": `${site.url}/#founder` },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: site.url },
          { name: title, url },
        ])}
      />

      <PageHero
        title="Hacemos crecer empresas de tecnología"
        description={description}
        breadcrumbs={[{ name: "Inicio", href: "/" }, { name: title }]}
      />

      <Band aria-labelledby="fundador-title">
        <div className="grid items-start gap-10 lg:grid-cols-[420px_1fr] lg:gap-[70px]">
          <FounderPhoto priority className="mx-auto w-full max-w-[360px] lg:max-w-none" />
          <div>
            <p className="mb-1.5 text-base tracking-[0.02em] text-brand uppercase">El fundador</p>
            <h2 id="fundador-title" className="enbi-h2">
              {founder.name}
            </h2>
            <p className="enbi-sub mt-2.5">
              {founder.role} de ENBI Consulting · {founder.location}
            </p>
            <p className="mt-6 text-lg leading-7 text-black/70">{founder.summary}</p>
            <blockquote className="mt-7 border-l-2 border-brand pl-5 text-[22px] leading-[30px] tracking-[-0.04em]">
              “{founder.quote}”
            </blockquote>

            <ol className="mt-10 space-y-0">
              {founder.timeline.map((t, i) => (
                <li key={t.title} className="relative grid grid-cols-[28px_1fr] gap-4 pb-8 last:pb-0">
                  <span className="relative flex justify-center" aria-hidden="true">
                    <span className={`mt-1.5 h-3 w-3 rounded-full ${i === founder.timeline.length - 1 ? "bg-brand" : "border-2 border-brand bg-white"}`} />
                    {i < founder.timeline.length - 1 && <span className="absolute top-5 bottom-[-6px] w-px bg-card-border" />}
                  </span>
                  <div>
                    <p className="text-sm tracking-[0.02em] text-brand uppercase">{t.stage}</p>
                    <h3 className="mt-1 text-[22px] leading-7 tracking-[-0.04em]">{t.title}</h3>
                    <p className="mt-1.5 text-base leading-6 text-black/60">{t.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <a href={founder.linkedin} target="_blank" rel="noopener me" className="text-brand hover:underline">
                LinkedIn de Martin ↗<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
              <a href={founder.website} target="_blank" rel="noopener me" className="text-black/70 hover:text-brand">
                martinbufczyk.com ↗<span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </div>
      </Band>

      <Band gray aria-labelledby="pilares-title">
        <SectionTitle id="pilares-title" eyebrow="Lo que combinamos" title="Tecnología y marketing, del mismo lado" />
        <div className="mt-[60px]">
          <Pillars />
        </div>
      </Band>

      <LogoWall label="Empresas que trabajan con ENBI" />

      <Band aria-labelledby="testimonios-title">
        <SectionTitle id="testimonios-title" eyebrow="Casos de éxito" title="Lo que dicen de nosotros" />
        <div className="mt-10">
          <Carousel label="Casos de éxito">
            {cases.map((c) => (
              <TestimonialCard key={c.slug} item={c} />
            ))}
          </Carousel>
        </div>
      </Band>

      <CtaBand />
    </>
  );
}
