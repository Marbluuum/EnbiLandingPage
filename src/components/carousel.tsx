"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

/**
 * Auto-advancing, swipeable carousel built on native scroll-snap.
 * It pauses on hover, on focus and after any touch/click inside (e.g. playing a video),
 * offers an explicit pause button (WCAG 2.2.2) and never auto-plays with reduced motion.
 */
export function Carousel({
  children,
  label,
  interval = 4500,
}: {
  children: React.ReactNode;
  label: string;
  interval?: number;
}) {
  const track = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const items = Children.toArray(children);

  const step = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const amount = (first?.offsetWidth ?? el.clientWidth) + gap;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  useEffect(() => {
    // Respect reduced motion: never auto-advance.
    if (paused || hovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => step(1), interval);
    return () => window.clearInterval(id);
  }, [paused, hovered, interval, step]);

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
    >
      <ul
        ref={track}
        onScroll={onScroll}
        onPointerDown={() => setPaused(true)}
        className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pt-3 pb-6 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:gap-[25px] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <li
            key={i}
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${items.length}`}
            // `relative` keeps absolutely positioned children (e.g. sr-only labels) inside the scroller,
            // otherwise they escape it and widen the page.
            className="relative w-[85%] shrink-0 snap-start sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-50px)/3)]"
          >
            {child}
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center gap-4">
        <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-hairline" aria-hidden="true">
          <div
            className="h-full w-1/3 rounded-full bg-brand transition-transform duration-300"
            style={{ transform: `translateX(${progress * 200}%)` }}
          />
        </div>
        <div className="flex gap-2">
          <CarouselButton label={paused ? "Reanudar carrusel" : "Pausar carrusel"} onClick={() => setPaused((p) => !p)}>
            {paused ? (
              <path d="M8 5.5v13l10-6.5z" fill="currentColor" />
            ) : (
              <path d="M8 5h3v14H8zM13 5h3v14h-3z" fill="currentColor" />
            )}
          </CarouselButton>
          <CarouselButton
            label="Caso anterior"
            onClick={() => {
              setPaused(true);
              step(-1);
            }}
          >
            <path d="m14 6-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </CarouselButton>
          <CarouselButton
            label="Caso siguiente"
            onClick={() => {
              setPaused(true);
              step(1);
            }}
          >
            <path d="m10 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </CarouselButton>
        </div>
      </div>
    </div>
  );
}

function CarouselButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border bg-white text-black transition-colors hover:border-brand hover:text-brand"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        {children}
      </svg>
    </button>
  );
}
