import type { Metadata } from "next";
import Link from "next/link";
import { PostCard } from "@/components/sections";
import { Badge, Band, BookingButton, Container } from "@/components/ui";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

const shortcuts = [
  { href: "/servicios", title: "Servicios", body: "Generación de leads, contenido y consultoría en ventas B2B." },
  { href: "/casos-de-exito", title: "Casos de éxito", body: "InzaiQ, MegaPractical, Softnet y Web3D lo cuentan en video." },
  { href: "/blog", title: "Blog", body: "Guías de marketing, prospección y ventas para empresas de tecnología." },
  { href: "/nosotros", title: "Quiénes somos", body: "Conocé al equipo y la forma de trabajar de ENBI." },
];

/** Branded 404: explains what happened, points to the main sections and recovers old GHL links (now on mkt). */
export default function NotFound() {
  return (
    <>
      <section aria-labelledby="not-found-title" className="enbi-hero-bg relative overflow-hidden text-white">
        {/* Brand orbit rings, decorative */}
        <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 md:h-[720px] md:w-[720px]">
          {["0%", "10%", "20%", "30%"].map((inset) => (
            <span key={inset} className="absolute rounded-full border border-white/15" style={{ inset }} />
          ))}
        </div>

        <Container className="relative py-20 text-center md:py-28">
          <Badge onBlue>Error 404</Badge>
          <p aria-hidden="true" className="mt-8 text-[96px] leading-none tracking-[-0.06em] md:text-[150px]">
            404
          </p>
          <h1 id="not-found-title" className="mx-auto mt-6 max-w-2xl text-[30px] leading-[36px] tracking-[-0.04em] text-balance md:text-[44px] md:leading-[50px]">
            Esta página no existe, pero tu próximo cliente sí
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            Puede que el enlace esté mal escrito o que la página se haya movido. Te dejamos los mejores caminos para seguir.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookingButton variant="white">Agendar reunión</BookingButton>
            <Link href="/" className="enbi-btn-outline-light">
              Volver al inicio
            </Link>
          </div>
        </Container>
      </section>

      <Band aria-labelledby="atajos-title">
        <h2 id="atajos-title" className="enbi-h2 text-center">
          ¿Qué estabas buscando?
        </h2>
        <ul className="mt-10 grid gap-[15px] sm:grid-cols-2 sm:gap-[25px] lg:grid-cols-4">
          {shortcuts.map((s) => (
            <li key={s.href} className="enbi-card relative bg-white p-[25px]">
              <h3 className="enbi-card-title mb-3">
                <Link href={s.href} className="after:absolute after:inset-0 hover:text-brand">
                  {s.title} <span aria-hidden="true">→</span>
                </Link>
              </h3>
              <p className="enbi-card-text">{s.body}</p>
            </li>
          ))}
        </ul>

        <aside
          aria-label="Propuestas y landings anteriores"
          className="mx-auto mt-12 max-w-3xl rounded-[20px] border border-brand/25 bg-brand/[0.04] p-6 text-center md:p-8"
        >
          <p className="text-lg text-black/80">
            ¿Llegaste desde una propuesta, una landing o un link de un anuncio? Ahora están en{" "}
            <a href="https://mkt.enbiconsulting.com" className="text-brand underline underline-offset-4">
              mkt.enbiconsulting.com
            </a>
            . Si el enlace no funciona, escribinos y te lo reenviamos.
          </p>
        </aside>
      </Band>

      <Band gray aria-labelledby="ultimos-title">
        <h2 id="ultimos-title" className="enbi-h2 text-center">
          Lo último del blog
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-[25px]">
          {posts.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      </Band>
    </>
  );
}
