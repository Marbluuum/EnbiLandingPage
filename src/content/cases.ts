export type Case = {
  slug: string;
  company: string;
  person: string;
  fullName: string;
  role: string;
  tag: string;
  /** Footer icon on the testimonial card: lightning (results) or handshake (ally). */
  tagIcon: "bolt" | "ally";
  quote: string;
  /** Short highlight shown in bold inside the quote on cards. */
  highlight: string;
  video: { src: string; poster: string; vertical: boolean; duration: string; durationIso: string };
  /** Optional long-form fields: rendered only when filled in. */
  challenge?: string;
  solution?: string;
  results?: string[];
};

const filesafe = "https://assets.cdn.filesafe.space/QS9CQSp7fWvUzUEPTKYo/media";
const gcs = "https://storage.googleapis.com/msgsndr/QS9CQSp7fWvUzUEPTKYo/media";

export const cases: Case[] = [
  {
    slug: "inzaiq",
    tagIcon: "bolt",
    company: "Inzaiq",
    person: "Juan",
    fullName: "Juan Cubells",
    role: "CTO",
    tag: "Resultados inmediatos",
    quote: "Desde el primer mes pudimos cerrar tres clientes gracias al sistema de ENBI.",
    highlight: "pudimos cerrar tres clientes",
    video: { src: `${filesafe}/6a8e204b67bb7ac351af29bc.mp4`, poster: "/casos/inzaiq.webp", vertical: true, duration: "4:26", durationIso: "PT4M26S" },
  },
  {
    slug: "megapractical",
    tagIcon: "bolt",
    company: "Megapractical",
    person: "Mario",
    fullName: "Mario Guerrero",
    role: "CEO",
    tag: "Resultados inmediatos",
    quote: "Obtuvimos resultados inmediatos en el corto plazo gracias al sistema de ENBI.",
    highlight: "resultados inmediatos en el corto plazo",
    video: { src: `${filesafe}/6a3df031cb92c4e0c88a3176.mp4`, poster: "/casos/megapractical.webp", vertical: true, duration: "8:52", durationIso: "PT8M52S" },
  },
  {
    slug: "softnet",
    tagIcon: "ally",
    company: "Softnet",
    person: "Jessica",
    fullName: "Jessica",
    role: "Directora de ventas",
    tag: "Aliado permanente",
    quote: "Para nosotros son más que un simple proveedor, son un aliado.",
    highlight: "son un aliado",
    video: {
      src: `${gcs}/68d8a0677fda7ac2f82f9781.mp4`,
      poster: "/casos/softnet.webp",
      vertical: true,
      duration: "0:20",
      durationIso: "PT20S",
    },
  },
  {
    slug: "web3d",
    tagIcon: "bolt",
    company: "Web3D",
    person: "Gustavo",
    fullName: "Gustavo Del Giudice",
    role: "CEO",
    tag: "Crecimiento acelerado",
    quote: "Hemos logrado la escalabilidad gracias a ustedes.",
    highlight: "la escalabilidad",
    video: {
      src: `${gcs}/68d8991bd2bc90356ef18a4b.mp4`,
      poster: "/casos/web3d.webp",
      vertical: false,
      duration: "1:03",
      durationIso: "PT1M3S",
    },
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
