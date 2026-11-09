import { site } from "@/content/site";

/**
 * Embedded GHL booking calendar. `loading="lazy"` defers the third-party widget until the visitor
 * scrolls near it, so it never competes with the page's first render.
 */
export function BookingCalendar({ className = "" }: { className?: string }) {
  return (
    <iframe
      src={site.bookingUrl}
      title="Calendario para agendar una reunión con ENBI"
      loading="lazy"
      className={`block h-[1100px] w-full border-0 bg-white md:h-[760px] ${className}`}
    />
  );
}
