export const founder = {
  name: "Martin Bufczyk",
  role: "Founder & CEO",
  location: "Buenos Aires, Argentina",
  photo: { src: "/equipo/martin-bufczyk-2026.webp", width: 560, height: 700 },
  linkedin: "https://www.linkedin.com/in/martinbufczyk/",
  website: "https://www.martinbufczyk.com/",
  quote:
    "Haber programado me permite hablar el idioma de las empresas tech. Haber vendido me permite traducir lo que construyen en clientes.",
  summary:
    "Martin fundó ENBI después de ver, desde la programación, un patrón que se repetía: empresas de tecnología con muy buenos productos que no lograban conseguir clientes de forma constante. El problema no era técnico, era de marketing y de ventas.",
  /** Career milestones, oldest first. */
  timeline: [
    {
      stage: "Ventas",
      title: "Tiem Torneos",
      body: "Organizando torneos online, con 300 personas por noche, descubrió lo que realmente le gustaba: convocar, convencer y vender.",
    },
    {
      stage: "Sistemas",
      title: "Programador en República Checa",
      body: "Trabajó como programador de sistemas, la base técnica para entender cómo se construye un producto de software desde adentro.",
    },
    {
      stage: "Marketing B2B",
      title: "ENBI Consulting",
      body: "Se enfocó en hacer crecer empresas de tecnología y trabajó con compañías de toda la región.",
    },
    {
      stage: "Hoy",
      title: "ENBI, LinkedIn y Clipia",
      body: "Lidera ENBI, construyó una audiencia de más de 10.000 personas en LinkedIn y es founder de Clipia.",
    },
  ],
};

/** What ENBI brings together, from the founder's background. */
export const pillars = [
  { title: "Sistemas", body: "Entendemos cómo se construye un producto de software, porque lo hicimos." },
  { title: "Ventas", body: "Convocar, convencer y cerrar: el oficio detrás de cada reunión." },
  { title: "Marketing B2B", body: "Estrategias de crecimiento para empresas de tecnología de toda la región." },
  { title: "Contenido y audiencia", body: "Más de 10.000 seguidores en LinkedIn y un método replicable." },
] as const;
