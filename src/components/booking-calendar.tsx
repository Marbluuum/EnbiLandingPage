"use client";

import { site } from "@/content/site";

const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";
const calendarId = site.bookingUrl.split("/").pop();

/** GHL's embed script resizes the iframe to the calendar's height. Loaded once, only after an iframe loads. */
function loadEmbedScript() {
  if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
  const s = document.createElement("script");
  s.src = EMBED_SCRIPT;
  s.async = true;
  document.body.appendChild(s);
}

/**
 * Embedded GHL booking calendar. `loading="lazy"` defers the third-party widget (and GHL's resize
 * script, which loads after it) until the visitor scrolls near it, so it never competes with the
 * page's first render. The fixed heights are a fallback until the script sets the real one.
 */
export function BookingCalendar({ className = "" }: { className?: string }) {
  return (
    <iframe
      src={site.bookingUrl}
      id={`${calendarId}_enbi`}
      title="Calendario para agendar una reunión con ENBI"
      loading="lazy"
      allow="payment"
      onLoad={loadEmbedScript}
      className={`block h-[1100px] w-full overflow-hidden border-0 bg-white md:h-[760px] ${className}`}
    />
  );
}
