export const site = {
  name: "ENBI Consulting",
  shortName: "ENBI",
  url: "https://enbiconsulting.com",
  locale: "es_AR",
  title: "ENBI Consulting | Generación de leads B2B para empresas de tecnología",
  description:
    "Generación de leads B2B para empresas de tecnología: definimos tu cliente ideal, prospectamos con automatización + equipo humano y te agendamos reuniones calificadas con decisores todas las semanas.",
  bookingUrl: "https://api.leadconnectorhq.com/widget/booking/IOzKnhNtLXlFj4i7j4eg",
  keywords: [
    "generación de leads B2B",
    "prospección B2B",
    "leads para empresas de tecnología",
    "agendamiento de reuniones calificadas",
    "outbound B2B",
    "consultoría en ventas B2B",
    "clientes para software factory",
    "pipeline de ventas B2B",
  ],
} as const;

export const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/casos-de-exito", label: "Casos de éxito" },
  { href: "/#metodo", label: "Método" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const steps = [
  {
    title: "Identificación del cliente ideal",
    body: "Analizamos tu mercado y definimos con precisión a quién debés contactar.",
    icon: "/brand/icons/step-icp.svg",
  },
  {
    title: "Prospección automatizada + humana",
    body: "Mezclamos automatización con interacción real para conectar con decision makers.",
    icon: "/brand/icons/step-prospecting.svg",
  },
  {
    title: "Calificación y agendamiento",
    body: "Filtramos los leads para que solo llegues a reuniones con interés y presupuesto.",
    icon: "/brand/icons/step-scheduling.svg",
  },
  {
    title: "Optimización continua",
    body: "Medimos, ajustamos y escalamos mes a mes hasta lograr previsibilidad total.",
    icon: "/brand/icons/step-optimization.svg",
  },
] as const;

/** Who ENBI works with. */
export const industries = [
  {
    title: "Software factories",
    body: "Proyectos nuevos de forma constante, sin depender del boca a boca.",
    icon: "/brand/icons/service-clients.svg",
  },
  {
    title: "Empresas SaaS B2B",
    body: "Un pipeline previsible de demos con quienes toman las decisiones.",
    icon: "/brand/icons/step-prospecting.svg",
  },
  {
    title: "Consultoras IT",
    body: "Acceso a cuentas más grandes y a mejores proyectos.",
    icon: "/brand/icons/step-icp.svg",
  },
  {
    title: "Partners tecnológicos",
    body: "Oportunidades calificadas para las soluciones que representás.",
    icon: "/brand/icons/benefit-support.svg",
  },
] as const;

/** "Esto vas a obtener" bubbles around the orbit. */
export const outcomes = [
  "Nuevas reuniones todas las semanas",
  "Clientes interesados",
  "Sistema probado y escalable",
  "Consultoría en ventas",
  "Un aliado estratégico",
  "Aumento de facturación",
] as const;

export const faqs = [
  {
    q: "¿Qué necesito para calificar para el servicio de ENBI?",
    a: "Trabajamos con empresas de tecnología que ya venden y quieren escalar: software factories, SaaS, consultoras IT, partners tecnológicos y agencias tech que buscan dejar de depender de referidos.",
  },
  {
    q: "¿Qué es un sistema de prospección B2B?",
    a: "Es un proceso repetible para conseguir clientes nuevos: definir el cliente ideal, contactar decisores por canales directos, calificar el interés y agendar reuniones de venta. En ENBI lo diseñamos y lo operamos por vos.",
  },
  {
    q: "¿Por qué con ENBI?",
    a: "Porque nos especializamos en conseguir clientes para empresas de tecnología. Entendemos tu oferta y hablamos el idioma de tus compradores, lo que acorta el camino hacia mejores proyectos.",
  },
  {
    q: "¿Cómo miden los resultados?",
    a: "Con paneles claros que muestran contactos, respuestas, reuniones agendadas y oportunidades generadas. Revisamos los números todos los meses y ajustamos el sistema.",
  },
  {
    q: "¿Qué pasa si no es el momento indicado?",
    a: "Mientras tu empresa espera, tu competencia sigue ganando mercado. Una primera reunión no te compromete a nada y te sirve para entender dónde está tu potencial de crecimiento.",
  },
  {
    q: "¿Por qué están tan seguros de su sistema?",
    a: "Porque el foco no está solo en conseguir leads, sino en armar un proceso de venta para que tu empresa escale de manera previsible y personalizada.",
  },
] as const;
