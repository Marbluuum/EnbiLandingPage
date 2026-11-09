"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";

const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";
const calendarId = site.bookingUrl.split("/").pop();

function loadEmbedScript() {
  if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
  const s = document.createElement("script");
  s.src = EMBED_SCRIPT;
  s.async = true;
  document.body.appendChild(s);
}

/**
 * Embedded GHL booking calendar.
 *
 * GHL's form_embed.js resizes the iframe at every step (calendar, time slots, form) and forwards the
 * page's utm parameters. While it initialises it hides the iframe off-screen, so:
 * - it is loaded *before* the calendar scrolls into view (or right away when `eager`), so that phase
 *   happens while the widget is still blank, never as a visible flash;
 * - the wrapper keeps a minimum height, so the page does not jump while the iframe is hidden.
 */
export function BookingCalendar({ className = "", eager = false }: { className?: string; eager?: boolean }) {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (eager) return loadEmbedScript();
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          loadEmbedScript();
          io.disconnect();
        }
      },
      { rootMargin: "1200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  return (
    <div ref={wrapper} className={`relative min-h-[600px] bg-white ${className}`}>
      <iframe
        src={site.bookingUrl}
        id={`${calendarId}_enbi`}
        title="Calendario para agendar una reunión con ENBI"
        loading="lazy"
        allow="payment"
        scrolling="no"
        className="block h-[940px] w-full overflow-hidden border-0 bg-white"
      />
    </div>
  );
}
