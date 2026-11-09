import Link from "next/link";
import { nav } from "@/content/site";
import { CloseMenuOnNavigate } from "./close-menu-on-navigate";
import { BookingButton, Logo } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] w-full max-w-[1220px] items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" aria-label="ENBI Consulting, ir al inicio">
          <Logo priority className="h-6 w-auto md:h-7" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[17px]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <BookingButton small>Agendar reunión</BookingButton>
        </div>

        {/* Mobile menu: native <details>; the only JS is closing it after navigation */}
        <details id="mobile-menu" className="group relative lg:hidden">
          <summary
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-hairline shadow-[0_0_4px_rgb(0_0_0/0.15)]"
            aria-label="Abrir menú"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 group-open:hidden" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg viewBox="0 0 24 24" className="hidden h-5 w-5 group-open:block" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-3 w-[calc(100vw-2rem)] max-w-sm rounded-[20px] border border-card-border bg-white p-4 shadow-[0_0_18px_rgb(0_68_241/0.15)]">
            <nav aria-label="Menú móvil">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block rounded-[10px] px-3 py-3 text-lg hover:bg-gray-band">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-3 flex justify-center border-t border-hairline pt-4">
              <BookingButton small>Agendar reunión</BookingButton>
            </div>
          </div>
        </details>
        <CloseMenuOnNavigate id="mobile-menu" />
      </div>
    </header>
  );
}
