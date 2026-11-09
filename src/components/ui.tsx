import Image from "next/image";
import Link from "next/link";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1220px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Full-width section band, white or #F7F7F7, with the landing's 70px rhythm. */
export function Band({
  children,
  gray = false,
  className = "",
  ...rest
}: { children: React.ReactNode; gray?: boolean; className?: string } & React.ComponentProps<"section">) {
  return (
    <section className={`px-0 py-[45px] md:py-[70px] ${gray ? "bg-gray-band" : ""} ${className}`} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}

export function Logo({
  light = false,
  priority = false,
  className = "h-7 w-auto",
}: {
  light?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={light ? "/brand/logo-white.png" : "/brand/logo-dark.png"}
      alt="ENBI Consulting"
      width={light ? 254 : 258}
      height={56}
      className={className}
      priority={priority}
    />
  );
}

export function Badge({ children, onBlue = false }: { children: React.ReactNode; onBlue?: boolean }) {
  return (
    <span className={`enbi-badge ${onBlue ? "enbi-badge--on-blue" : ""}`}>
      <span className="enbi-dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export function GradientBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="enbi-tbadge">
      <span className="h-[7px] w-[7px] rounded-full bg-white" aria-hidden="true" />
      {children}
    </span>
  );
}

function CtaIcon({ white = false }: { white?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className="enbi-cta-icon" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill={white ? "#0044F1" : "#fff"} />
      <path
        d="M22 15l9 9-9 9M14 24h17"
        fill="none"
        stroke={white ? "#fff" : "#0044F1"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The landing's CTA: opens the ENBI booking calendar. */
export function BookingButton({
  children,
  variant = "gradient",
  small = false,
  href = "/#agendar",
}: {
  children: React.ReactNode;
  variant?: "gradient" | "white";
  small?: boolean;
  /** Defaults to the calendar embedded at the end of the home page. */
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`${variant === "white" ? "enbi-cta-white" : "enbi-cta"} ${small ? "enbi-cta--sm" : ""} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`}
    >
      <span>{children}</span>
      <CtaIcon white={variant === "white"} />
    </Link>
  );
}

export function CtaRow({ children, align = "center" }: { children: React.ReactNode; align?: "center" | "left" }) {
  return (
    <div className={`mt-10 flex ${align === "center" ? "justify-center" : "justify-center lg:justify-start"}`}>{children}</div>
  );
}

export function SectionTitle({
  id,
  title,
  sub,
  eyebrow,
  align = "center",
}: {
  id: string;
  title: React.ReactNode;
  sub?: string;
  eyebrow?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-[1000px] text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-1.5 text-base tracking-[0.02em] text-brand uppercase">{eyebrow}</p>}
      <h2 id={id} className="enbi-h2">
        {title}
      </h2>
      {sub && <p className="enbi-sub mt-2.5">{sub}</p>}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 text-brand underline-offset-4 hover:underline">
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

export function Breadcrumbs({ items, onBlue = false }: { items: { name: string; href?: string }[]; onBlue?: boolean }) {
  return (
    <nav aria-label="Migas de pan" className={`text-sm ${onBlue ? "text-white/75" : "text-muted"}`}>
      <ol className="flex flex-wrap items-center justify-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className={onBlue ? "hover:text-white" : "hover:text-brand"}>
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className={onBlue ? "text-white" : "text-ink"}>
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
  );
}
