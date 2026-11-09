"use client";

import { useState } from "react";
import { BookingCalendar } from "./booking-calendar";

/**
 * Click-to-load version of the calendar for pages where it would sit above the fold:
 * the GHL widget (and its third-party scripts) only loads when the visitor asks for it.
 */
export function BookingEmbed() {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className="overflow-hidden rounded-[20px] border border-card-border">
        <BookingCalendar eager />
      </div>
    );
  }

  return (
    <div className="enbi-card enbi-card--lg flex min-h-[380px] flex-col items-center justify-center gap-6 p-10 text-center hover:scale-100">
      <p className="text-[26px] leading-8 tracking-[-0.04em]">Elegí el día y horario que te quede mejor</p>
      <button type="button" onClick={() => setOpen(true)} className="enbi-cta">
        <span>Ver horarios disponibles</span>
        <svg viewBox="0 0 48 48" className="enbi-cta-icon" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="#fff" />
          <path d="M22 15l9 9-9 9M14 24h17" fill="none" stroke="#0044F1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
