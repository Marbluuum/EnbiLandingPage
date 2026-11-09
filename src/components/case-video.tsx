"use client";

import Image from "next/image";
import { useState } from "react";
import type { Case } from "@/content/cases";

type VideoProps = {
  src: string;
  poster: string;
  label: string;
  duration: string;
  aspect: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Click-to-play facade: shows a lazy, optimized poster and only mounts the (large) video
 * when the visitor presses play.
 */
export function VideoFacade({ src, poster, label, duration, aspect, priority = false, sizes, className = "" }: VideoProps) {
  const [playing, setPlaying] = useState(false);
  const frame = `relative block w-full overflow-hidden rounded-[10px] bg-black ${aspect} ${className}`;

  if (playing) {
    return (
      <div className={frame}>
        <video controls autoPlay playsInline poster={poster} className="absolute inset-0 h-full w-full object-cover" aria-label={label}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group ${frame} cursor-pointer transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-[0_0_16px_rgb(0_68_241/0.25)]`}
    >
      <Image
        src={poster}
        alt=""
        fill
        preload={priority}
        fetchPriority={priority ? "high" : undefined}
        sizes={sizes ?? "(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"}
        className="object-cover object-[50%_45%]"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
          <svg viewBox="0 0 16 16" className="ml-0.5 h-4 w-4 fill-brand md:h-6 md:w-6" aria-hidden="true">
            <path d="M4 2.5v11l9-5.5z" />
          </svg>
        </span>
      </span>
      <span className="absolute right-2 bottom-2 rounded bg-black/70 px-1.5 py-0.5 text-xs text-white">{duration}</span>
      <span className="sr-only">Reproducir: {label}</span>
    </button>
  );
}

/** Testimonial video. `fit="card"` crops to 16:9 like the landing's testimonial cards. */
export function CaseVideo({
  item,
  fit = "natural",
  priority = false,
  className = "",
}: {
  item: Case;
  fit?: "card" | "natural";
  priority?: boolean;
  className?: string;
}) {
  return (
    <VideoFacade
      src={item.video.src}
      poster={item.video.poster}
      duration={item.video.duration}
      label={`Testimonio en video de ${item.fullName}, ${item.role} de ${item.company}`}
      aspect={fit === "card" || !item.video.vertical ? "aspect-video" : "aspect-[9/16]"}
      priority={priority}
      className={className}
    />
  );
}
