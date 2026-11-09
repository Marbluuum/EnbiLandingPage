export type Service = {
  slug: string;
  name: string;
  /** Short card title and copy used on the home page (from the original landing). */
  cardTitle: string;
  cardText: string;
  icon: string;
  /** H1 for the service page, written around the search intent. */
  headline: string;
  summary: string;
  description: string;
  includes: { title: string; body: string }[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "generacion-de-leads-b2b",
    name: "Generación de leads B2B",
    cardTitle: "Nuevos clientes",
    cardText: "Buscamos nuevos clientes y los convertimos de leads a llamadas de venta.",
    icon: "/brand/icons/service-clients.svg",
    headline: "Generación de leads B2B para empresas de tecnología",
    summary:
      "Encontramos empresas que encajan con tu cliente ideal, contactamos a sus decisores y convertimos esos leads en reuniones de venta.",
    description:
      "Servicio de generación de leads y prospección B2B para software factories, SaaS y consultoras IT: cliente ideal, outbound automatizado + humano, calificación y agendamiento de reuniones con decisores.",
    includes: [
      {
        title: "Perfil de cliente ideal (ICP)",
        body: "Definimos industrias, tamaños de empresa, cargos y señales de compra para contactar solo a quien tiene sentido.",
      },
      {
        title: "Bases de datos depuradas",
        body: "Construimos y validamos listas de cuentas y decisores, en lugar de comprar bases genéricas.",
      },
      {
        title: "Secuencias multicanal",
        body: "Mensajes personalizados que combinan automatización con interacción real de nuestro equipo.",
      },
      {
        title: "Calificación y agendamiento",
        body: "Filtramos por interés y presupuesto, y agendamos la reunión directamente en tu calendario.",
      },
      {
        title: "Reportes claros",
        body: "Paneles con contactos, respuestas, reuniones y oportunidades generadas, mes a mes.",
      },
    ],
    idealFor: [
      "Software factories que dependen del boca a boca",
      "Empresas SaaS B2B que quieren previsibilidad en su pipeline",
      "Consultoras IT y partners tecnológicos que buscan proyectos más grandes",
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre comprar leads y un sistema de generación de leads?",
        a: "Un lead comprado es un contacto sin contexto. Un sistema define a quién contactar, cómo y cuándo, califica el interés y te entrega reuniones con decisores, no listas.",
      },
      {
        q: "¿Ustedes hacen las reuniones de venta?",
        a: "No: nosotros generamos y calificamos la oportunidad y la agendamos con tu equipo comercial, que es quien mejor conoce tu solución y cierra el negocio.",
      },
    ],
  },
  {
    slug: "contenido-b2b",
    name: "Contenido estratégico B2B",
    cardTitle: "Contenido",
    cardText: "Creamos, diseñamos y subimos contenido dirigido para tu cliente ideal, generando interacciones calificadas.",
    icon: "/brand/icons/service-content.svg",
    headline: "Contenido B2B que atrae a tu cliente ideal",
    summary:
      "Creamos, diseñamos y publicamos contenido pensado para tu cliente ideal, que genera interacciones calificadas.",
    description:
      "Estrategia y producción de contenido B2B para empresas de tecnología: piezas pensadas para tu cliente ideal que construyen autoridad y alimentan la prospección.",
    includes: [
      {
        title: "Estrategia de contenido",
        body: "Temas, ángulos y formatos alineados con los problemas reales de tus compradores.",
      },
      {
        title: "Diseño y redacción",
        body: "Producimos las piezas listas para publicar, con tu tono y tu identidad de marca.",
      },
      {
        title: "Publicación y seguimiento",
        body: "Publicamos con constancia y medimos qué contenido genera conversaciones con potenciales clientes.",
      },
      {
        title: "Integración con la prospección",
        body: "El contenido acompaña a las secuencias de outbound para que cada contacto llegue con contexto.",
      },
    ],
    idealFor: [
      "Empresas tech que quieren posicionarse como referentes en su nicho",
      "Equipos comerciales que necesitan material para abrir conversaciones",
      "Fundadores que quieren construir marca personal sin dedicarle horas",
    ],
    faqs: [
      {
        q: "¿El contenido reemplaza a la prospección?",
        a: "No, la potencia. El contenido genera confianza y hace que los mensajes de prospección se reciban mejor.",
      },
    ],
  },
  {
    slug: "consultoria-en-ventas-b2b",
    name: "Consultoría en ventas B2B",
    cardTitle: "Comunicación",
    cardText: "Nuestra comunicación es efectiva desde nuestro equipo con ustedes hasta la comunicación con los leads.",
    icon: "/brand/icons/service-communication.svg",
    headline: "Consultoría en ventas B2B para escalar tu empresa de tecnología",
    summary:
      "Ordenamos tu proceso comercial para que cada oportunidad generada tenga más chances de convertirse en cliente.",
    description:
      "Consultoría en ventas B2B para empresas de tecnología: proceso comercial, comunicación con leads y seguimiento para convertir más reuniones en clientes.",
    includes: [
      {
        title: "Diagnóstico comercial",
        body: "Revisamos cómo vendés hoy: oferta, mensajes, etapas del proceso y puntos de fuga.",
      },
      {
        title: "Proceso de venta",
        body: "Definimos etapas, criterios de calificación y próximos pasos claros para cada reunión.",
      },
      {
        title: "Comunicación con leads",
        body: "Mensajes directos y efectivos, tanto entre nuestro equipo y el tuyo como con cada lead.",
      },
      {
        title: "Seguimiento y mejora",
        body: "Medimos la conversión de reunión a propuesta y de propuesta a cliente, y ajustamos.",
      },
    ],
    idealFor: [
      "Empresas que ya tienen reuniones pero cierran pocas",
      "Fundadores que todavía venden solos y quieren armar equipo",
      "Equipos comerciales sin un proceso documentado",
    ],
    faqs: [
      {
        q: "¿Se puede contratar junto con la generación de leads?",
        a: "Sí, y es lo que recomendamos: más reuniones rinden más cuando el proceso de venta está ordenado.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
