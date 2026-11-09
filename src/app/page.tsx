import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { FounderSection, LogoWall } from "@/components/about";
import { BookingCalendar } from "@/components/booking-calendar";
import {
  FaqBlock,
  Orbit,
  PostCard,
  ServiceCards,
  StepsCards,
  TestimonialCard,
  faqJsonLd,
} from "@/components/sections";
import { Badge, Band, BookingButton, Container, JsonLd, SectionTitle, TextLink } from "@/components/ui";
import { cases } from "@/content/cases";
import { posts } from "@/content/posts";
import { faqs, industries, site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: site.title, description: site.description },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs, `${site.url}/`)} />

      {/* Hero */}
      <section aria-labelledby="hero-title" className="enbi-hero-bg text-white">
        <Container className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:py-24">
          <div className="text-center lg:text-left">
            <Badge onBlue>Consultora B2B para empresas de tecnología</Badge>
            <h1
              id="hero-title"
              className="mt-7 text-[34px] leading-[40px] tracking-[-0.04em] text-balance md:text-[48px] md:leading-[54px] lg:text-[58px] lg:leading-[62px]"
            >
              Generación de demanda B2B para empresas de tecnología
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-white/85 md:text-xl lg:mx-0">
              Somos el aliado comercial de software factories, SaaS y consultoras IT: definimos tu cliente ideal,
              contactamos a los decisores y agendamos reuniones calificadas para tu equipo de ventas.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <BookingButton variant="white" href="#agendar">
                Agendar reunión
              </BookingButton>
              <Link href="/servicios" className="enbi-btn-outline-light">
                Conocer servicios
              </Link>
            </div>
          </div>
          <div className="mx-auto hidden w-full max-w-[373px] lg:block">
            <Image
              src="/brand/agendas.webp"
              alt="Notificaciones de nuevas reuniones confirmadas en el calendario"
              width={373}
              height={546}
              sizes="373px"
              className="h-auto w-full rounded-[20px] shadow-[0_20px_60px_rgb(0_0_0/0.3)] ring-1 ring-white/20"
            />
          </div>
        </Container>
      </section>

      <LogoWall />

      {/* Qué hacemos */}
      <Band aria-labelledby="servicios-title">
        <SectionTitle
          id="servicios-title"
          eyebrow="Qué hacemos"
          title="Somos el aliado digital para el crecimiento de tu empresa"
          sub="Encontramos clientes, posicionamos tu marca y ordenamos tu proceso comercial."
        />
        <div className="mt-[60px]">
          <ServiceCards />
        </div>
        <div className="mt-10 text-center">
          <TextLink href="/servicios">Ver todos los servicios</TextLink>
        </div>
      </Band>

      {/* Método */}
      <Band gray id="metodo" aria-labelledby="metodo-title">
        <SectionTitle
          id="metodo-title"
          eyebrow="Método ENBI"
          title={
            <>
              Cómo te llevamos de “no tener reuniones” a tener <br className="hidden lg:block" />
              un pipeline lleno de oportunidades calificadas
            </>
          }
          sub="Un sistema probado, simple y escalable."
        />
        <div className="mt-[60px]">
          <StepsCards />
        </div>
      </Band>

      {/* Esto vas a obtener */}
      <Band aria-labelledby="obtener-title">
        <SectionTitle
          id="obtener-title"
          title={
            <>
              Diseñado para empresas que ya venden, pero <br className="hidden lg:block" />
              quieren escalar y previsibilidad
            </>
          }
          sub="Esto vas a obtener:"
        />
        <Orbit />
      </Band>

      {/* Industrias */}
      <Band gray aria-labelledby="industrias-title">
        <SectionTitle id="industrias-title" eyebrow="Para quién trabajamos" title="Especialistas en empresas de tecnología" />
        <ul className="enbi-reveal mt-[60px] grid gap-[15px] sm:grid-cols-2 sm:gap-[25px] lg:grid-cols-4">
          {industries.map((ind) => (
            <li key={ind.title} className="enbi-card flex flex-col items-center bg-white p-[25px] text-center sm:items-start sm:text-left">
              <Image src={ind.icon} alt="" width={35} height={35} className="enbi-card-icon mb-[30px]" />
              <h3 className="enbi-card-title mb-[15px]">{ind.title}</h3>
              <p className="enbi-card-text">{ind.body}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* Casos de éxito */}
      <Band aria-labelledby="testimonios-title">
        <div className="mb-[30px] flex justify-center">
          <Badge>Casos de éxito</Badge>
        </div>
        <SectionTitle id="testimonios-title" title="Lo que dicen de nosotros" />
        <div className="mt-10">
          <Carousel label="Casos de éxito">
            {cases.map((c) => (
              <TestimonialCard key={c.slug} item={c} />
            ))}
          </Carousel>
        </div>
        <div className="mt-10 text-center">
          <TextLink href="/casos-de-exito">Ver todos los casos</TextLink>
        </div>
      </Band>

      {/* Quiénes somos */}
      <Band gray id="nosotros" aria-labelledby="nosotros-title">
        <FounderSection />
      </Band>

      {/* Blog */}
      <Band aria-labelledby="blog-title">
        <SectionTitle id="blog-title" eyebrow="Blog" title="Ideas para vender más en B2B" sub="Guías prácticas para empresas de tecnología." />
        <ul className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-[25px]">
          {posts.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <TextLink href="/blog">Ver todos los artículos</TextLink>
        </div>
      </Band>

      {/* FAQ */}
      <Band gray aria-labelledby="faq-title">
        <FaqBlock items={faqs} titleId="faq-title" />
      </Band>

      {/* Calendario embebido */}
      <section id="agendar" aria-labelledby="agendar-title" className="enbi-hero-bg text-white">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="agendar-title" className="text-[30px] leading-[36px] tracking-[-0.04em] text-balance md:text-[44px] md:leading-[52px]">
              Hablemos de cómo hacer crecer tu empresa
            </h2>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Elegí el día y horario que te quede mejor. Reunión de conocimiento de 30 minutos, sin compromiso.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-[1000px] overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgb(0_0_0/0.3)]">
            <BookingCalendar />
          </div>
          <p className="mt-6 text-center text-sm text-white/75">
            ¿No ves el calendario?{" "}
            <a href={site.bookingUrl} target="_blank" rel="noopener" className="text-white underline underline-offset-4">
              Abrilo en una pestaña nueva
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
