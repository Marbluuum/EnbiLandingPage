import type { Metadata } from "next";
import { BookingEmbed } from "@/components/booking-embed";
import { PageHero, breadcrumbJsonLd } from "@/components/sections";
import { Band, JsonLd } from "@/components/ui";
import { site } from "@/content/site";

const title = "Agendá una reunión con ENBI";
const description =
  "Reunión de conocimiento de 45 minutos: conversamos, entendemos cómo vendés hoy y vemos cómo podemos trabajar juntos.";

export const metadata: Metadata = {
  title: "Contacto",
  description: `${title}. ${description}`,
  alternates: { canonical: "/contacto" },
  openGraph: { url: "/contacto", title, description },
};

const agenda = [
  "Entendemos cómo vendés hoy y qué clientes buscás.",
  "Te mostramos cómo funcionaría el sistema ENBI en tu empresa.",
  "Definimos juntos si tiene sentido trabajar en equipo.",
];

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: site.url },
          { name: "Contacto", url: `${site.url}/contacto` },
        ])}
      />
      <PageHero title={title} description={description} breadcrumbs={[{ name: "Inicio", href: "/" }, { name: "Contacto" }]} />

      <Band aria-labelledby="agenda-title">
        <div id="agendar" className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-[60px]">
          <div>
            <h2 id="agenda-title" className="enbi-h2">
              ENBI Sesión
            </h2>
            <p className="enbi-sub mt-2.5">45 minutos · Sin compromiso</p>
            <ul className="mt-8 space-y-5">
              {agenda.map((a) => (
                <li key={a} className="flex gap-3 text-lg leading-6 text-black/70">
                  <span className="mt-2 h-[7px] w-[7px] shrink-0 rounded-full bg-brand-dot" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <BookingEmbed />
        </div>
      </Band>
    </>
  );
}
