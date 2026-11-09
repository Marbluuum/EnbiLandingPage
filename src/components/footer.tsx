import Link from "next/link";
import { cases } from "@/content/cases";
import { services } from "@/content/services";
import { Logo } from "./ui";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  const columns = [
    {
      title: "Servicios",
      links: services.map((s) => ({ href: `/servicios/${s.slug}`, label: s.name })),
    },
    {
      title: "Casos de éxito",
      links: cases.map((c) => ({ href: `/casos-de-exito/${c.slug}`, label: c.company })),
    },
    {
      title: "ENBI",
      links: [
        { href: "/#metodo", label: "Método" },
        { href: "/blog", label: "Blog" },
        { href: "/contacto", label: "Contacto" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-band">
      <div className="mx-auto grid w-full max-w-[1220px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link href="/" aria-label="ENBI Consulting, ir al inicio">
            <Logo className="h-7 w-auto" />
          </Link>
          <p className="mt-5 max-w-xs text-[15px] leading-5 text-black/60">
            Sistema personalizado para que empresas de tecnología dejen de depender de referidos y consigan reuniones
            calificadas todas las semanas.
          </p>
          <Link href="/#agendar" className="mt-5 inline-block text-brand hover:underline">
            Agendar reunión →
          </Link>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-lg">{col.title}</h2>
            <ul className="mt-4 space-y-3 text-[15px] text-black/60">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-divider">
        <p className="mx-auto w-full max-w-[1220px] px-4 py-6 text-sm text-black/60 sm:px-6">
          © <CurrentYear /> ENBI Consulting. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
