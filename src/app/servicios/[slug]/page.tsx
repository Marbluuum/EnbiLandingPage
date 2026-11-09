import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Carousel } from "@/components/carousel";
import { CtaBand, FaqBlock, PageHero, StepsCards, TestimonialCard, breadcrumbJsonLd, faqJsonLd } from "@/components/sections";
import { Badge, Band, BookingButton, CtaRow, JsonLd, SectionTitle } from "@/components/ui";
import { cases } from "@/content/cases";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  const url = `/servicios/${service.slug}`;
  return {
    title: service.headline,
    description: service.description,
    alternates: { canonical: url },
    openGraph: { url, title: service.headline, description: service.description },
  };
}

// Every valid slug is prerendered by generateStaticParams. Blocking on params keeps a real 404
// status for unknown slugs (a <Suspense> shell would answer 200 before notFound() runs).
export const instant = false;

export default async function ServicePage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${site.url}/servicios/${service.slug}`;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: service.name,
          serviceType: service.name,
          description: service.description,
          url,
          provider: { "@id": `${site.url}/#organization` },
          audience: { "@type": "BusinessAudience", name: "Empresas de tecnología" },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: site.url },
          { name: "Servicios", url: `${site.url}/servicios` },
          { name: service.name, url },
        ])}
      />
      <JsonLd data={faqJsonLd(service.faqs, url)} />

      <PageHero
        title={service.headline}
        description={service.summary}
        breadcrumbs={[{ name: "Inicio", href: "/" }, { name: "Servicios", href: "/servicios" }, { name: service.name }]}
      >
        <CtaRow>
          <BookingButton variant="white">Agendar reunión</BookingButton>
        </CtaRow>
      </PageHero>

      <Band aria-labelledby="incluye-title">
        <SectionTitle id="incluye-title" title="Qué incluye" sub={`${service.name}, de punta a punta.`} />
        <ul className="enbi-reveal mt-[60px] grid gap-[15px] sm:grid-cols-2 sm:gap-[25px] lg:grid-cols-3">
          {service.includes.map((inc) => (
            <li key={inc.title} className="enbi-card p-[25px]">
              <Image src={service.icon} alt="" width={35} height={35} className="enbi-card-icon mb-[25px]" />
              <h3 className="enbi-card-title mb-3">{inc.title}</h3>
              <p className="enbi-card-text">{inc.body}</p>
            </li>
          ))}
        </ul>
      </Band>

      <Band gray aria-labelledby="ideal-title">
        <p className="mb-1.5 text-base tracking-[0.02em] text-brand uppercase">Para quién es</p>
        <h2 id="ideal-title" className="enbi-h2 max-w-2xl">
          Diseñado para empresas que ya venden, pero quieren escalar
        </h2>
        <ul className="mt-10 flex flex-wrap gap-4">
          {service.idealFor.map((item) => (
            <li key={item} className="enbi-bubble whitespace-normal">
              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-brand-dot" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Band>

      <Band aria-labelledby="metodo-title">
        <SectionTitle id="metodo-title" title="Cómo trabajamos" sub="Un sistema probado, simple y escalable." />
        <div className="mt-[60px]">
          <StepsCards />
        </div>
      </Band>

      <Band gray aria-labelledby="testimonios-title">
        <div className="mb-[30px] flex justify-center">
          <Badge>Testimonios</Badge>
        </div>
        <SectionTitle id="testimonios-title" title="Lo que dicen de nosotros" />
        <div className="mt-10">
          <Carousel label="Casos de éxito">
            {cases.map((c) => (
              <TestimonialCard key={c.slug} item={c} />
            ))}
          </Carousel>
        </div>
      </Band>

      <Band aria-labelledby="faq-title">
        <FaqBlock items={service.faqs} titleId="faq-title" subtitle={`Sobre ${service.name.toLowerCase()}`} />
      </Band>

      <Band gray aria-labelledby="otros-title">
        <h2 id="otros-title" className="text-center text-[26px] tracking-[-0.04em]">
          Otros servicios
        </h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-4">
          {others.map((s) => (
            <li key={s.slug}>
              <Link href={`/servicios/${s.slug}`} className="enbi-badge">
                <span className="enbi-dot" aria-hidden="true" />
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </Band>

      <CtaBand />
    </>
  );
}
