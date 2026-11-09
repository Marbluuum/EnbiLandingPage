import Image from "next/image";
import Link from "next/link";
import { clients } from "@/content/clients";
import { founder, pillars } from "@/content/team";
import { Container, TextLink } from "./ui";

function ClientMark({ client, hidden = false }: { client: (typeof clients)[number]; hidden?: boolean }) {
  const mark = client.logo ? (
    <Image
      src={client.logo.src}
      alt={hidden ? "" : client.name}
      width={client.logo.width}
      height={client.logo.height}
      sizes={`${Math.ceil((client.logo.display * client.logo.width) / client.logo.height)}px`}
      style={{ height: client.logo.display }}
      className="w-auto max-w-none opacity-55 transition-opacity duration-300 group-hover:opacity-100"
    />
  ) : (
    <span className="text-[22px] leading-6 tracking-[-0.04em] whitespace-nowrap text-black/60 transition-colors duration-300 group-hover:text-brand">
      {client.name}
    </span>
  );
  return (
    <li className="group flex h-12 shrink-0 items-center" aria-hidden={hidden || undefined}>
      {client.caseSlug ? (
        <Link
          href={`/casos-de-exito/${client.caseSlug}`}
          tabIndex={hidden ? -1 : undefined}
          aria-label={client.logo && !hidden ? `Caso de éxito ${client.name}` : undefined}
        >
          {mark}
        </Link>
      ) : (
        mark
      )}
    </li>
  );
}

/**
 * Client logos scrolling in a seamless loop (CSS only): grayscale until hover, paused on hover/focus,
 * static and wrapped with reduced motion. Names stand in until a logo is added.
 */
export function LogoWall({ label = "Confían en ENBI" }: { label?: string }) {
  return (
    <section aria-labelledby="clientes-title" className="border-b border-hairline py-10 md:py-12">
      <Container>
        <h2 id="clientes-title" className="text-center text-[15px] tracking-[0.02em] text-black/60 uppercase">
          {label}
        </h2>
        <p className="mt-2 text-center text-[17px] tracking-[-0.02em] text-ink">
          Presencia en todo <span className="text-brand">Latinoamérica y España</span>
        </p>
      </Container>
      <div className="enbi-marquee mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="enbi-marquee-track flex w-max">
          {/* Two identical lists: the track moves by exactly one list width, so the loop has no seam. */}
          {[false, true].map((hidden) => (
            <ul key={String(hidden)} className="flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24">
              {clients.map((c) => (
                <ClientMark key={c.name} client={c} hidden={hidden} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FounderPhoto({ priority = false, className = "" }: { priority?: boolean; className?: string }) {
  return (
    <figure className={`relative ${className}`}>
      <Image
        src={founder.photo.src}
        alt={`${founder.name}, ${founder.role} de ENBI Consulting`}
        width={founder.photo.width}
        height={founder.photo.height}
        priority={priority}
        sizes="(min-width: 1024px) 420px, 80vw"
        className="h-auto w-full rounded-[20px] object-cover"
      />
      <figcaption className="absolute right-4 bottom-4 left-4 rounded-[14px] bg-white/95 px-5 py-4 shadow-[0_0_14px_rgb(0_0_0/0.12)] backdrop-blur">
        <span className="block text-[20px] leading-6 tracking-[-0.04em]">{founder.name}</span>
        <span className="mt-0.5 block text-[15px] text-brand">{founder.role} · ENBI Consulting</span>
      </figcaption>
    </figure>
  );
}

export function Pillars() {
  return (
    <ul className="enbi-reveal grid gap-[15px] sm:grid-cols-2 sm:gap-[25px] lg:grid-cols-4">
      {pillars.map((p, i) => (
        <li key={p.title} className="enbi-card bg-white p-[25px]">
          <span className="text-[15px] text-brand">0{i + 1}</span>
          <h3 className="enbi-card-title mt-4 mb-3">{p.title}</h3>
          <p className="enbi-card-text">{p.body}</p>
        </li>
      ))}
    </ul>
  );
}

/** Home "Quiénes somos" block: founder photo + story + link to the full page. */
export function FounderSection() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[420px_1fr] lg:gap-[70px]">
      <FounderPhoto className="mx-auto w-full max-w-[360px] lg:max-w-none" />
      <div>
        <p className="mb-1.5 text-base tracking-[0.02em] text-brand uppercase">Quiénes somos</p>
        <h2 id="nosotros-title" className="enbi-h2">
          Tecnología y ventas, del mismo lado
        </h2>
        <p className="mt-6 text-lg leading-7 text-black/70">{founder.summary}</p>
        <blockquote className="mt-7 border-l-2 border-brand pl-5 text-[22px] leading-[30px] tracking-[-0.04em]">
          “{founder.quote}”
          <footer className="mt-3 text-[15px] tracking-normal text-black/60">
            {founder.name}, {founder.role}
          </footer>
        </blockquote>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <TextLink href="/nosotros">Conocer a ENBI</TextLink>
          <a href={founder.linkedin} target="_blank" rel="noopener me" className="text-black/70 hover:text-brand">
            LinkedIn de Martin ↗<span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
