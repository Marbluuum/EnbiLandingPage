import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseVideo } from "@/components/case-video";
import { CtaBand, QuoteWithHighlight, StepsCards, TestimonialCard, breadcrumbJsonLd } from "@/components/sections";
import { Band, BookingButton, Breadcrumbs, Container, CtaRow, GradientBadge, JsonLd, SectionTitle } from "@/components/ui";
import { cases, getCase } from "@/content/cases";
import { site } from "@/content/site";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

function describe(c: NonNullable<ReturnType<typeof getCase>>) {
  return `Caso de éxito de ${c.company}: ${c.fullName}, ${c.role}, cuenta cómo el sistema de generación de leads B2B de ENBI los ayudó. “${c.quote}”`;
}

export async function generateMetadata(props: PageProps<"/casos-de-exito/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const c = getCase(slug);
  if (!c) return {};
  const url = `/casos-de-exito/${c.slug}`;
  const title = `Caso de éxito ${c.company}`;
  return {
    title,
    description: describe(c),
    alternates: { canonical: url },
    openGraph: { url, title, description: describe(c), images: [{ url: c.video.poster, alt: `${c.fullName}, ${c.company}` }] },
  };
}

// Every valid slug is prerendered by generateStaticParams. Blocking on params keeps a real 404
// status for unknown slugs (a <Suspense> shell would answer 200 before notFound() runs).
export const instant = false;

export default async function CasePage(props: PageProps<"/casos-de-exito/[slug]">) {
  const { slug } = await props.params;
  const c = getCase(slug);
  if (!c) notFound();

  const url = `${site.url}/casos-de-exito/${c.slug}`;
  const others = cases.filter((o) => o.slug !== c.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: site.url },
          { name: "Casos de éxito", url: `${site.url}/casos-de-exito` },
          { name: c.company, url },
        ])}
      />

      <section aria-labelledby="page-title" className="enbi-hero-bg text-white">
        <Container className="grid gap-12 py-14 md:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="text-center lg:text-left">
            <div className="lg:[&_ol]:justify-start">
              <Breadcrumbs onBlue items={[{ name: "Inicio", href: "/" }, { name: "Casos de éxito", href: "/casos-de-exito" }, { name: c.company }]} />
            </div>
            <h1
              id="page-title"
              className="mt-6 text-[32px] leading-[38px] tracking-[-0.04em] md:text-[52px] md:leading-[56px]"
            >
              Caso de éxito: {c.company}
            </h1>
            <figure className="mt-8">
              <blockquote className="text-2xl leading-snug tracking-[-0.04em] text-white/90 md:text-[28px] md:leading-9">
                <QuoteWithHighlight quote={c.quote} highlight={c.highlight} />
              </blockquote>
              <figcaption className="mt-4 text-white/75">
                <strong className="font-bold text-white">{c.fullName}</strong> – {c.role} de {c.company}
              </figcaption>
            </figure>
            <div className="mt-10 flex justify-center lg:justify-start">
              <BookingButton variant="white">Agendar reunión</BookingButton>
            </div>
          </div>
          <div className={c.video.vertical ? "mx-auto w-full max-w-[340px]" : ""}>
            <CaseVideo item={c} priority className="shadow-[0_20px_60px_rgb(0_0_0/0.35)]" />
          </div>
        </Container>
      </section>

      {(c.challenge || c.solution || c.results) && (
        <Band aria-labelledby="detalle-title">
          <h2 id="detalle-title" className="sr-only">
            Detalle del caso
          </h2>
          <div className="grid gap-[25px] lg:grid-cols-3">
            {c.challenge && (
              <div className="enbi-card p-[25px]">
                <h3 className="enbi-card-title mb-3">El desafío</h3>
                <p className="enbi-card-text">{c.challenge}</p>
              </div>
            )}
            {c.solution && (
              <div className="enbi-card p-[25px]">
                <h3 className="enbi-card-title mb-3">La solución</h3>
                <p className="enbi-card-text">{c.solution}</p>
              </div>
            )}
            {c.results && (
              <div className="enbi-card enbi-card--highlight p-[25px]">
                <h3 className="enbi-card-title mb-3">Resultados</h3>
                <ul className="enbi-card-text space-y-2">
                  {c.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Band>
      )}

      <Band aria-labelledby="metodo-title">
        <div className="mb-[30px] flex justify-center">
          <GradientBadge>Cómo lo hicimos</GradientBadge>
        </div>
        <SectionTitle id="metodo-title" title={`El sistema ENBI aplicado en ${c.company}`} sub="Un sistema probado, simple y escalable." />
        <div className="mt-[60px]">
          <StepsCards />
        </div>
        <CtaRow>
          <BookingButton>Programar reunión</BookingButton>
        </CtaRow>
      </Band>

      <Band gray aria-labelledby="mas-casos-title">
        <SectionTitle id="mas-casos-title" title="Más casos de éxito" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[25px]">
          {others.map((o) => (
            <li key={o.slug}>
              <TestimonialCard item={o} />
            </li>
          ))}
        </ul>
      </Band>

      <CtaBand title="Construyamos tu próximo caso de éxito" />
    </>
  );
}
