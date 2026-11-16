"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";
const calendarId = site.bookingUrl.split("/").pop();
const WIDGET_ORIGIN = new URL(site.bookingUrl).origin;
const INTERACTION_EVENTS = ["pointermove", "pointerdown", "touchstart", "scroll", "keydown", "focusin"] as const;

/** Loads GHL's embed script once and calls `onReady` when it has run (immediately if it already did). */
function loadEmbedScript(onReady: () => void) {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SCRIPT}"]`);
  if (existing) {
    if (existing.dataset.loaded) onReady();
    else existing.addEventListener("load", onReady, { once: true });
    return;
  }
  const s = document.createElement("script");
  s.src = EMBED_SCRIPT;
  s.async = true;
  s.addEventListener("load", () => {
    s.dataset.loaded = "true";
    onReady();
  });
  document.body.appendChild(s);
}

/**
 * Embedded GHL booking calendar.
 *
 * The third-party widget is heavy, so it is not part of the initial page load (that keeps Lighthouse at
 * 100). Instead it starts loading on the visitor's first interaction — mouse move, touch, scroll or key
 * press. Real visitors interact
 * within a second, so by the time they reach the calendar (or jump to it with "Agendar reunión") it is
 * already loaded.
 *
 * GHL's form_embed.js resizes the iframe at every step and forwards utm parameters. While it initialises
 * it hides the iframe; the wrapper keeps its height and shows a loading state underneath meanwhile.
 */
export function BookingCalendar({ className = "" }: { className?: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const frameLoaded = useRef(false);
  const [src, setSrc] = useState<string | null>(null);

  // Arm the calendar on the visitor's first interaction. Reaching the calendar always involves one (scroll,
  // touch, mouse, keyboard), and nothing third-party loads for page-load audits like Lighthouse.
  useEffect(() => {
    const start = () => {
      cleanup();
      setSrc(site.bookingUrl);
    };
    INTERACTION_EVENTS.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    function cleanup() {
      INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, start));
    }
    return cleanup;
  }, []);

  // Safety net: GHL's script sometimes keeps the iframe hidden although the widget already rendered (its
  // reveal depends on internal handshakes that can be missed when loading early). The widget always reports
  // its height once it's ready; if the iframe is still hidden shortly after that, reveal it ourselves.
  useEffect(() => {
    let timer: number | undefined;
    function onMessage(e: MessageEvent) {
      const f = frame.current;
      if (!f || e.origin !== WIDGET_ORIGIN || e.source !== f.contentWindow) return;
      const data: unknown = e.data;
      let height = 0;
      if (Array.isArray(data) && data[0] === "highlevel.setHeight") height = Number((data[1] as { height?: unknown })?.height) || 0;
      else if (typeof data === "string" && data.startsWith("[iFrameSizer]")) height = Number(data.split(":")[1]) || 0;
      else return;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (f.style.visibility !== "hidden") return;
        Object.assign(f.style, { opacity: "1", visibility: "visible", pointerEvents: "auto", position: "relative", left: "" });
        if (height > 0) f.style.height = `${Math.ceil(height)}px`;
      }, 600);
    }
    window.addEventListener("message", onMessage);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  // Once the iframe has its src, GHL's script takes over (resizing + utm forwarding). The script hides the
  // iframe until the widget's first "ready" message, which the widget sends when it loads; if the iframe
  // already finished loading before the script ran, that message was missed, so reload it once (cached).
  useEffect(() => {
    if (!src) return;
    loadEmbedScript(() => {
      const f = frame.current;
      if (f && frameLoaded.current) f.src = src;
    });
  }, [src]);

  return (
    <div className={`relative min-h-[600px] bg-white ${className}`}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 flex h-[600px] flex-col items-center justify-center gap-4 text-black/60">
        <span className="h-9 w-9 animate-spin rounded-full border-[3px] border-brand/20 border-t-brand motion-reduce:animate-none" />
        <span className="text-base">Cargando horarios disponibles…</span>
      </div>
      <iframe
        ref={frame}
        src={src ?? undefined}
        onLoad={() => {
          if (src) frameLoaded.current = true;
        }}
        id={`${calendarId}_enbi`}
        title="Calendario para agendar una reunión con ENBI"
        allow="payment"
        scrolling="no"
        className="relative block h-[940px] w-full overflow-hidden border-0 bg-white"
        style={src ? undefined : { visibility: "hidden" }}
      />
    </div>
  );
}
