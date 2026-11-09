import type { Metadata } from "next";
import { CtaBand, PageHero, TestimonialCard, breadcrumbJsonLd } from "@/components/sections";
import { Badge, Band, BookingButton, CtaRow, JsonLd, SectionTitle } from "@/components/ui";
import { cases } from "@/content/cases";
import { site } from "@/content/site";

const title = "Casos de éxito de empresas de tecnología";
const description =
  "Testimonios en video de empresas de tecnología que consiguen reuniones calificadas y nuevos clientes con el sistema de generación de leads B2B de ENBI.";

export const metadata: Metadata = {
  title: "Casos de éxito",
  description,
  alternates: { canonical: "/casos-de-exito" },
  openGraph: { url: "/casos-de-exito", title, description },
};

export default function CasosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: site.url },
          { name: "Casos de éxito", url: `${site.url}/casos-de-exito` },
        ])}
      />
      <PageHero
        title="Casos de éxito: empresas tech que dejaron de depender de referidos"
        description={description}
        breadcrumbs={[{ name: "Inicio", href: "/" }, { name: "Casos de éxito" }]}
      />

      <Band id="testimonios" aria-labelledby="testimonios-title">
        <div className="mb-[30px] flex justify-center">
          <Badge>Testimonios</Badge>
        </div>
        <SectionTitle id="testimonios-title" title="Lo que dicen de nosotros" sub="Escuchalo de nuestros clientes." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[25px]">
          {cases.map((c) => (
            <li key={c.slug}>
              <TestimonialCard item={c} headingLevel="h2" />
            </li>
          ))}
        </ul>
        <CtaRow>
          <BookingButton>Agendar reunión</BookingButton>
        </CtaRow>
      </Band>

      <CtaBand title="Construyamos tu próximo caso de éxito" />
    </>
  );
}
