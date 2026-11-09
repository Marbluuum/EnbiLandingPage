import Image from "next/image";
import Link from "next/link";
import type { Case } from "@/content/cases";
import { formatDate, type Post } from "@/content/posts";
import { services } from "@/content/services";
import { outcomes, steps } from "@/content/site";
import { CaseVideo } from "./case-video";
import { BookingButton, Breadcrumbs, Container, CtaRow, GradientBadge } from "./ui";

export function QuoteWithHighlight({ quote, highlight }: { quote: string; highlight: string }) {
  const i = quote.indexOf(highlight);
  if (i < 0) return <>“{quote}”</>;
  return (
    <>
      “{quote.slice(0, i)}
      <strong className="font-bold text-black/80">{highlight}</strong>
      {quote.slice(i + highlight.length)}”
    </>
  );
}

/** Testimonial card, as in the landing: gradient badge, video, name, quote, icon footer. */
export function TestimonialCard({ item, headingLevel: H = "h3" }: { item: Case; headingLevel?: "h2" | "h3" }) {
  return (
    <article className="enbi-card enbi-card--lg flex h-full flex-col items-center bg-white px-6 pt-10 pb-8 text-center sm:px-[30px] lg:items-stretch lg:text-left">
      <div className="flex justify-center">
        <GradientBadge>Caso de éxito</GradientBadge>
      </div>
      <div className="mt-8 w-full">
        <CaseVideo item={item} fit="card" />
      </div>
      <H className="mt-3 text-[15px] tracking-[-0.23px] lg:ml-[15px]">
        <strong className="font-bold">{item.person}</strong> – {item.role} de {item.company}
      </H>
      <p className="mt-6 flex-1 text-[15px] leading-5 tracking-[-0.23px] text-black/60 lg:ml-[15px]">
        <QuoteWithHighlight quote={item.quote} highlight={item.highlight} />
      </p>
      <p className="mt-7 flex items-center gap-2 text-[15px] tracking-[-0.23px] lg:ml-[15px]">
        <Image src={item.tagIcon === "ally" ? "/brand/icons/ally.svg" : "/brand/icons/bolt.svg"} alt="" width={24} height={24} />
        {item.tag}
      </p>
      <Link href={`/casos-de-exito/${item.slug}`} className="mt-4 text-[15px] text-brand hover:underline lg:ml-[15px]">
        Ver caso<span className="sr-only"> de {item.company}</span> →
      </Link>
    </article>
  );
}

/** "Cómo te llevamos..." four process cards; the last one is the gradient highlight. */
export function StepsCards() {
  return (
    <ol className="enbi-reveal grid gap-[15px] sm:grid-cols-2 sm:gap-[25px] lg:grid-cols-4">
      {steps.map((s, i) => (
        <li
          key={s.title}
          className={`enbi-card flex flex-col items-center p-[25px] text-center sm:items-start sm:pr-2.5 sm:text-left ${i === steps.length - 1 ? "enbi-card--highlight" : ""}`}
        >
          <Image src={s.icon} alt="" width={35} height={35} className="enbi-card-icon mb-[30px]" />
          <h3 className="enbi-card-title mb-[15px] max-w-[90%]">{s.title}</h3>
          <p className="enbi-card-text max-w-[90%]">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** "Esto vas a obtener": ENBI logo inside concentric rings with floating bubbles. */
export function Orbit() {
  // Desktop: bubbles orbit around the logo. Phones/tablets: rings + logo on top, bubbles listed below
  // (absolute bubbles don't fit a narrow screen and got clipped at the edges).
  const positions = [
    "lg:top-[100px] lg:left-[-130px]",
    "lg:top-1/2 lg:left-[-180px] lg:-translate-y-1/2",
    "lg:bottom-[10%] lg:left-[-160px]",
    "lg:top-[8%] lg:right-[-50px]",
    "lg:top-[40%] lg:right-[-170px]",
    "lg:bottom-[20%] lg:right-[-100px]",
  ];
  return (
    <div className="flex flex-col items-center py-10 lg:overflow-hidden lg:py-[60px]">
      <div className="relative h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] lg:h-[524px] lg:w-[524px]">
        {["0%", "6%", "11%", "16%"].map((inset) => (
          <span key={inset} className="enbi-orbit-ring" style={{ "--inset": inset } as React.CSSProperties} aria-hidden="true" />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/brand/logo-dark.png" alt="" width={258} height={56} className="h-9 w-auto lg:h-14" />
        </div>
        <ul className="hidden lg:block">
          {outcomes.map((o, i) => (
            <li key={o} className={`absolute ${positions[i]}`}>
              <span className="enbi-bubble">
                <span className="h-[7px] w-[7px] rounded-full bg-brand-dot" aria-hidden="true" />
                {o}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="mt-8 flex max-w-[560px] flex-wrap justify-center gap-3 lg:hidden">
        {outcomes.map((o) => (
          <li key={o}>
            <span className="enbi-bubble">
              <span className="h-[7px] w-[7px] rounded-full bg-brand-dot" aria-hidden="true" />
              {o}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** "Somos el aliado digital...": three service cards. */
export function ServiceCards() {
  return (
    <ul className="enbi-reveal grid gap-[15px] sm:gap-[25px] md:grid-cols-3">
      {services.map((s) => (
        <li key={s.slug} className="enbi-card relative flex flex-col items-center p-[25px] text-center sm:items-start sm:pr-5 sm:text-left">
          <Image src={s.icon} alt="" width={35} height={35} className="enbi-card-icon mb-[25px]" />
          <h3 className="enbi-card-title mb-3">
            <Link href={`/servicios/${s.slug}`} className="after:absolute after:inset-0">
              {s.cardTitle}
            </Link>
          </h3>
          <p className="enbi-card-text">{s.cardText}</p>
        </li>
      ))}
    </ul>
  );
}

export function FaqBlock({
  items,
  titleId,
  title = "Preguntas frecuentes",
  subtitle = "Despejá todas tus dudas sobre nuestro servicio",
}: {
  items: readonly { q: string; a: string }[];
  titleId: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-[60px]">
      <div>
        <h2 id={titleId} className="enbi-h2">
          {title}
        </h2>
        <p className="mt-2 text-lg text-black/70">{subtitle}</p>
      </div>
      <div>
        {items.map((f) => (
          <details key={f.q} className="group border-t border-divider last:border-b">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-[22px]">
              <h3 className="enbi-faq-q">{f.q}</h3>
              <span aria-hidden="true" className="shrink-0 text-[26px] leading-none transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pr-10 pb-6 text-[17px] leading-6 text-black/60">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function PostCard({ post, headingLevel: H = "h3" }: { post: Post; headingLevel?: "h2" | "h3" }) {
  return (
    <article className="enbi-card enbi-card--lg relative flex h-full flex-col bg-white p-[30px]">
      <p className="text-sm text-brand uppercase tracking-[0.02em]">{post.category}</p>
      <H className="mt-4 text-[22px] leading-[28px] tracking-[-0.04em] text-balance">
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
          {post.title}
        </Link>
      </H>
      <p className="enbi-card-text mt-3 flex-1">{post.description}</p>
      <p className="mt-6 flex items-center justify-between text-sm text-black/60">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>{post.readingMinutes} min de lectura</span>
      </p>
    </article>
  );
}

/** Blue animated-gradient page hero, the same treatment as the landing's first section. */
export function PageHero({
  title,
  description,
  breadcrumbs,
  children,
}: {
  title: string;
  description?: string;
  breadcrumbs: { name: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section aria-labelledby="page-title" className="enbi-hero-bg text-white">
      <Container className="py-14 text-center md:py-20">
        <Breadcrumbs items={breadcrumbs} onBlue />
        <h1
          id="page-title"
          className="mx-auto mt-6 max-w-4xl text-[32px] leading-[38px] tracking-[-0.04em] text-balance md:text-[48px] md:leading-[54px]"
        >
          {title}
        </h1>
        {description && <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85 md:text-xl">{description}</p>}
        {children}
      </Container>
    </section>
  );
}

/** Closing call to action on the animated blue gradient. */
export function CtaBand({
  title = "Hablemos de cómo hacer crecer tu empresa",
  cta = "Agendar reunión",
}: {
  title?: string;
  cta?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="enbi-hero-bg text-white">
      <Container className="py-16 text-center md:py-20">
        <h2
          id="cta-title"
          className="mx-auto max-w-3xl text-[28px] leading-[34px] tracking-[-0.04em] text-balance md:text-[44px] md:leading-[52px]"
        >
          {title}
        </h2>
        <CtaRow>
          <BookingButton variant="white">{cta}</BookingButton>
        </CtaRow>
      </Container>
    </section>
  );
}

export function faqJsonLd(items: readonly { q: string; a: string }[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: item.url })),
  };
}
