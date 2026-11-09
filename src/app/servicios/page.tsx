import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHero, StepsCards, breadcrumbJsonLd } from "@/components/sections";
import { Band, BookingButton, CtaRow, JsonLd, SectionTitle } from "@/components/ui";
import { services } from "@/content/services";
import { site } from "@/content/site";

const title = "Servicios de generación de demanda B2B para empresas de tecnología";
const description =
  "Generación de leads B2B, contenido estratégico y consultoría en ventas para software factories, SaaS y consultoras IT. Conocé los servicios de ENBI.";

export const metadata: Metadata = {
  title: "Servicios",
  description,
  alternates: { canonical: "/servicios" },
  openGraph: { url: "/servicios", title, description },
};

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: site.url },
          { name: "Servicios", url: `${site.url}/servicios` },
        ])}
      />
      <PageHero title={title} description={description} breadcrumbs={[{ name: "Inicio", href: "/" }, { name: "Servicios" }]} />

      <Band aria-labelledby="lista-title">
        <SectionTitle id="lista-title" title="Somos el aliado digital para el crecimiento de tu empresa" />
        <ul className="enbi-reveal mt-[60px] grid gap-[25px] lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} className="enbi-card enbi-card--lg relative flex flex-col p-[30px]">
              <Image src={s.icon} alt="" width={35} height={35} className="enbi-card-icon mb-[25px]" />
              <h2 className="enbi-card-title text-[24px] leading-[28px]">
                <Link href={`/servicios/${s.slug}`} className="after:absolute after:inset-0">
                  {s.name}
                </Link>
              </h2>
              <p className="enbi-card-text mt-3">{s.summary}</p>
              <ul className="mt-6 flex-1 space-y-2.5 border-t border-hairline pt-6">
                {s.includes.map((inc) => (
                  <li key={inc.title} className="flex items-center gap-2.5 text-[15px]">
                    <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-brand-dot" aria-hidden="true" />
                    {inc.title}
                  </li>
                ))}
              </ul>
              <span className="mt-7 text-brand">Ver servicio →</span>
            </li>
          ))}
        </ul>
      </Band>

      <Band gray aria-labelledby="metodo-title">
        <SectionTitle id="metodo-title" title="Cómo trabajamos" sub="Un sistema probado, simple y escalable." />
        <div className="mt-[60px]">
          <StepsCards />
        </div>
        <CtaRow>
          <BookingButton>Programar reunión</BookingButton>
        </CtaRow>
      </Band>

      <CtaBand />
    </>
  );
}
