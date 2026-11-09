import { newPosts } from "./blog";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  updated?: string;
  readingMinutes: number;
  /**
   * Direct 40–60 word answer to the question the article targets. Shown first ("Respuesta rápida")
   * so search snippets and AI answer engines can quote it as-is.
   */
  answer: string;
  /** Search queries the article targets (also used as schema.org keywords). */
  keywords: string[];
  body: Block[];
  /** Visible FAQ at the end of the article, also published as FAQPage structured data. */
  faqs: { q: string; a: string }[];
};

/** Stable heading anchor ("2. Armá listas de cuentas" → "arma-listas-de-cuentas"). */
export function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const basePosts: Post[] = [
  {
    slug: "como-conseguir-clientes-software-factory",
    title: "Cómo conseguir clientes para una software factory sin depender de referidos",
    description:
      "Guía práctica para que una software factory deje de vivir del boca a boca: cliente ideal, prospección outbound, calificación y un pipeline previsible.",
    category: "Generación de leads",
    date: "2026-11-08",
    readingMinutes: 7,
    updated: "2026-11-09",
    answer: "Para conseguir clientes sin depender de referidos, una software factory necesita un sistema comercial propio: definir un cliente ideal concreto, armar listas de cuentas que encajen con ese perfil, prospectarlas con secuencias multicanal que combinen automatización y personalización humana, calificar antes de agendar y medir cada etapa para ajustar mes a mes.",
    keywords: ["cómo conseguir clientes para una software factory", "clientes para software factory", "conseguir clientes de desarrollo de software", "depender de referidos"],
    body: [
      {
        type: "p",
        text: "La mayoría de las software factories nace y crece gracias a los referidos. Un cliente contento recomienda a otro, y así se arma la cartera. El problema aparece cuando la empresa quiere crecer: los referidos no se pueden planificar, llegan cuando llegan y, muchas veces, traen proyectos que no son los que el equipo quiere hacer.",
      },
      {
        type: "p",
        text: "Si tu facturación depende de que alguien se acuerde de vos, no tenés un sistema comercial: tenés suerte. En esta guía repasamos cómo pasar de esa dependencia a un proceso previsible de generación de clientes.",
      },
      { type: "h2", text: "1. Definí a quién le querés vender (de verdad)" },
      {
        type: "p",
        text: "“Empresas que necesiten software” no es un cliente ideal. El primer paso es elegir un segmento concreto donde tu equipo tenga ventaja: una industria, un tamaño de empresa, un tipo de proyecto o una tecnología.",
      },
      {
        type: "ul",
        items: [
          "¿En qué proyectos pasados generaste más valor y mejor margen?",
          "¿Qué industrias entendés mejor que tu competencia?",
          "¿Quién toma la decisión de compra: CTO, gerente de operaciones, dueño?",
          "¿Qué señales indican que una empresa necesita lo que hacés ahora (contrataciones, rondas de inversión, sistemas legados)?",
        ],
      },
      {
        type: "p",
        text: "Con esas respuestas armás tu perfil de cliente ideal (ICP). Todo lo que viene después —listas, mensajes, contenido— depende de que este paso esté bien hecho.",
      },
      { type: "h2", text: "2. Armá listas de cuentas, no de contactos sueltos" },
      {
        type: "p",
        text: "Comprar una base de datos genérica es la forma más rápida de quemar tu dominio y tu reputación. Lo que funciona es construir una lista de cuentas que encajan con tu ICP y, dentro de cada una, identificar a las dos o tres personas que influyen en la decisión.",
      },
      { type: "h2", text: "3. Prospectá con automatización, pero con criterio humano" },
      {
        type: "p",
        text: "La automatización te permite sostener volumen y constancia; el criterio humano es lo que hace que alguien responda. Un buen sistema combina ambas cosas: secuencias multicanal que se ejecutan solas y personas que personalizan, responden y conversan.",
      },
      {
        type: "quote",
        text: "Un mensaje que podría haberle llegado a cualquiera no le habla a nadie. Personalizar no es poner el nombre: es mostrar que entendés el problema de esa empresa.",
      },
      { type: "h2", text: "4. Calificá antes de agendar" },
      {
        type: "p",
        text: "No todas las respuestas positivas son oportunidades. Antes de poner una reunión en la agenda de tu equipo comercial, conviene confirmar tres cosas: que hay un problema real, que existe presupuesto o intención de invertir y que estás hablando con alguien que influye en la decisión.",
      },
      { type: "h2", text: "5. Medí, ajustá y escalá" },
      {
        type: "p",
        text: "Un sistema comercial se mejora con datos. Medí cuántas cuentas contactaste, cuántas respondieron, cuántas reuniones se agendaron y cuántas se convirtieron en propuestas. Con esos números sabés dónde está el cuello de botella y qué ajustar cada mes.",
      },
      { type: "h2", text: "En resumen" },
      {
        type: "ol",
        items: [
          "Elegí un cliente ideal concreto.",
          "Construí listas de cuentas que encajen con ese perfil.",
          "Prospectá combinando automatización y personas.",
          "Calificá antes de agendar.",
          "Medí cada etapa y mejorá mes a mes.",
        ],
      },
      {
        type: "p",
        text: "En ENBI diseñamos y operamos este sistema para empresas de tecnología, para que tu equipo se concentre en lo que mejor sabe hacer: cerrar y entregar proyectos.",
      },
    ],
    faqs: [
      {
        q: "¿Por qué las software factories dependen tanto de los referidos?",
        a: "Porque la mayoría crece gracias a clientes conformes que las recomiendan y nunca arma un proceso comercial propio. Funciona al principio, pero no se puede planificar: los proyectos llegan cuando llegan y no siempre son los que el equipo quiere hacer.",
      },
      {
        q: "¿Cuánto tarda en dar resultados la prospección outbound para una software factory?",
        a: "Las primeras conversaciones suelen aparecer en las primeras semanas de campaña. El sistema se vuelve previsible después de algunos meses de medir y ajustar segmentos y mensajes, porque los ciclos de venta de proyectos de software son largos.",
      },
      {
        q: "¿Conviene comprar una base de datos de contactos?",
        a: "No. Las bases genéricas tienen datos desactualizados, contactos que no encajan con tu cliente ideal y dañan la reputación de tu dominio de email. Es mejor construir listas propias de cuentas que cumplan tu ICP.",
      },
      {
        q: "¿Qué métricas tiene que seguir una software factory en su proceso comercial?",
        a: "Cuentas contactadas, tasa de respuesta, respuestas positivas, reuniones agendadas, reuniones realizadas, propuestas enviadas y proyectos cerrados. Comparar esos números por segmento muestra dónde está el cuello de botella.",
      },
    ],
  },
  {
    slug: "que-es-un-icp-perfil-de-cliente-ideal",
    title: "Qué es un ICP (perfil de cliente ideal) y cómo definirlo en una empresa B2B de tecnología",
    description:
      "Qué es el perfil de cliente ideal o ICP, en qué se diferencia de un buyer persona y un paso a paso para definirlo en una empresa B2B de tecnología.",
    category: "Estrategia comercial",
    date: "2026-11-08",
    readingMinutes: 6,
    updated: "2026-11-09",
    answer: "Un ICP (Ideal Customer Profile o perfil de cliente ideal) es la descripción del tipo de empresa que más se beneficia de tu solución y más rentable es para tu negocio: industria, tamaño, región, tecnologías que usa y señales de compra. Se define analizando a tus mejores clientes, buscando atributos en común y validándolo con datos cada trimestre.",
    keywords: ["qué es un ICP", "perfil de cliente ideal", "ICP B2B", "ICP vs buyer persona", "cómo definir el ICP"],
    body: [
      {
        type: "p",
        text: "El ICP —Ideal Customer Profile o perfil de cliente ideal— describe el tipo de empresa que más se beneficia de tu solución y que, a la vez, es más rentable para tu negocio. Es la base de cualquier estrategia de generación de leads B2B: si no sabés a quién apuntar, cada acción comercial es un tiro al aire.",
      },
      { type: "h2", text: "ICP vs. buyer persona" },
      {
        type: "p",
        text: "Se confunden seguido, pero no son lo mismo. El ICP describe a la empresa; el buyer persona describe a las personas dentro de esa empresa que participan en la compra.",
      },
      {
        type: "ul",
        items: [
          "ICP: industria, tamaño, ubicación, tecnologías que usa, momento de negocio.",
          "Buyer persona: cargo, responsabilidades, objetivos, objeciones habituales, cómo se informa.",
        ],
      },
      { type: "h2", text: "Cómo definir tu ICP paso a paso" },
      { type: "h3", text: "1. Mirá a tus mejores clientes actuales" },
      {
        type: "p",
        text: "Listá los clientes con los que mejor te fue: los más rentables, los que se quedaron más tiempo, los que más te recomendaron. Buscá qué tienen en común.",
      },
      { type: "h3", text: "2. Identificá los atributos que se repiten" },
      {
        type: "p",
        text: "Industria, cantidad de empleados, región, stack tecnológico, si tienen equipo interno de desarrollo o no. Cuantos más atributos concretos, mejor vas a poder filtrar.",
      },
      { type: "h3", text: "3. Sumá señales de compra" },
      {
        type: "p",
        text: "Un buen ICP no solo dice quién, sino cuándo. Búsquedas laborales de perfiles técnicos, expansión a nuevos mercados, cambios de liderazgo o sistemas que quedaron obsoletos son señales de que una empresa puede necesitarte ahora.",
      },
      { type: "h3", text: "4. Definí también a quién no le vendés" },
      {
        type: "p",
        text: "Tan importante como el ICP es el anti-ICP: los clientes que te consumen tiempo, negocian cada peso o no valoran tu trabajo. Dejarlos afuera mejora la calidad de tu pipeline.",
      },
      { type: "h3", text: "5. Validalo con datos y revisalo" },
      {
        type: "p",
        text: "El ICP no es un documento que se escribe una vez. Con cada campaña vas a ver qué segmentos responden mejor y cuáles convierten en clientes. Usá esos datos para ajustarlo cada trimestre.",
      },
      { type: "h2", text: "Un ejemplo para una software factory" },
      {
        type: "quote",
        text: "Empresas de logística y retail de 50 a 500 empleados, sin equipo de desarrollo propio, que están reemplazando sistemas legados o integrando su operación con e-commerce. Decisores: gerente de operaciones, gerente de sistemas y dueño.",
      },
      {
        type: "p",
        text: "Con un ICP así, armar listas, escribir mensajes y elegir contenido se vuelve mucho más simple, y cada reunión que agendás tiene más chances de convertirse en un proyecto.",
      },
    ],
    faqs: [
      {
        q: "¿Qué significa ICP en ventas?",
        a: "ICP significa Ideal Customer Profile, en español perfil de cliente ideal. Describe a la empresa, no a la persona, que es el mejor cliente posible para tu negocio.",
      },
      {
        q: "¿Cuál es la diferencia entre ICP y buyer persona?",
        a: "El ICP describe a la empresa (industria, tamaño, ubicación, tecnología, momento de negocio). El buyer persona describe a las personas dentro de esa empresa que participan en la compra (cargo, objetivos, objeciones).",
      },
      {
        q: "¿Cada cuánto hay que revisar el ICP?",
        a: "Conviene revisarlo cada trimestre con los datos de las campañas: qué segmentos responden mejor, cuáles convierten en clientes y cuáles generan proyectos rentables.",
      },
      {
        q: "¿Una empresa puede tener más de un ICP?",
        a: "Sí, pero conviene empezar por uno y priorizar. Cada ICP necesita sus propias listas, mensajes y contenidos; tener muchos al mismo tiempo diluye el esfuerzo comercial.",
      },
    ],
  },
  {
    slug: "prospeccion-outbound-b2b-automatizacion-y-toque-humano",
    title: "Prospección outbound B2B: cómo combinar automatización y toque humano",
    description:
      "Cómo armar una prospección outbound B2B que escale sin sonar a robot: qué automatizar, qué hacer a mano y cómo medir resultados.",
    category: "Prospección",
    date: "2026-11-08",
    readingMinutes: 6,
    updated: "2026-11-09",
    answer: "La prospección outbound B2B consiste en contactar de forma proactiva a empresas que encajan con tu cliente ideal. Funciona mejor cuando se automatiza lo repetitivo —listas, envíos programados, seguimientos, registro en el CRM y reportes— y una persona se ocupa de investigar cuentas clave, personalizar mensajes, conversar y calificar antes de agendar.",
    keywords: ["prospección outbound B2B", "outbound B2B", "automatización de prospección", "secuencias de prospección", "prospección B2B"],
    body: [
      {
        type: "p",
        text: "La prospección outbound es salir a buscar a tus clientes en lugar de esperar que te encuentren. Bien hecha, es la forma más previsible de llenar el pipeline de una empresa B2B. Mal hecha, es spam.",
      },
      {
        type: "p",
        text: "La diferencia casi siempre está en el equilibrio entre automatización y trabajo humano. Automatizar todo te da volumen pero pocas respuestas; hacer todo a mano te da buenas conversaciones pero no escala.",
      },
      { type: "h2", text: "Qué conviene automatizar" },
      {
        type: "ul",
        items: [
          "La construcción y el enriquecimiento de listas de cuentas y contactos.",
          "El envío programado de secuencias y los recordatorios de seguimiento.",
          "El registro de cada interacción en el CRM.",
          "Los reportes de actividad y resultados.",
        ],
      },
      { type: "h2", text: "Qué conviene que haga una persona" },
      {
        type: "ul",
        items: [
          "Investigar las cuentas más importantes antes de contactarlas.",
          "Personalizar la apertura del mensaje con algo relevante para esa empresa.",
          "Responder, conversar y manejar objeciones.",
          "Decidir si una oportunidad está calificada para una reunión.",
        ],
      },
      { type: "h2", text: "Cómo se ve una secuencia equilibrada" },
      {
        type: "ol",
        items: [
          "Primer contacto personalizado, corto y centrado en un problema concreto.",
          "Seguimiento con un recurso útil: un caso, un dato del sector o una idea aplicable.",
          "Contacto por un segundo canal para ganar visibilidad.",
          "Un último mensaje que cierre el ciclo con respeto y deje la puerta abierta.",
        ],
      },
      {
        type: "quote",
        text: "La automatización hace que nadie se pierda en el camino; las personas hacen que valga la pena responder.",
      },
      { type: "h2", text: "Qué medir" },
      {
        type: "p",
        text: "Para saber si tu outbound funciona, seguí estas métricas por segmento y por mensaje: tasa de respuesta, tasa de respuestas positivas, reuniones agendadas, reuniones que efectivamente se realizan y oportunidades generadas. Comparar segmentos te dice dónde invertir más esfuerzo.",
      },
      { type: "h2", text: "Errores comunes" },
      {
        type: "ul",
        items: [
          "Hablar de tu empresa en lugar del problema del cliente.",
          "Escribir mensajes largos que nadie lee en el celular.",
          "Abandonar después del primer intento.",
          "Agendar reuniones sin calificar y llenar la agenda de llamadas que no van a ningún lado.",
        ],
      },
      {
        type: "p",
        text: "En ENBI combinamos automatización y un equipo humano especializado en empresas de tecnología, para que cada reunión que llega a tu agenda tenga sentido.",
      },
    ],
    faqs: [
      {
        q: "¿Qué es la prospección outbound?",
        a: "Es salir a buscar clientes de forma proactiva —por email, LinkedIn o teléfono— en lugar de esperar a que lleguen por marketing o referidos. Es la vía más previsible para llenar el pipeline de una empresa B2B.",
      },
      {
        q: "¿Cuál es la diferencia entre inbound y outbound?",
        a: "En inbound el cliente te encuentra a vos (contenido, SEO, anuncios). En outbound vos elegís a qué empresas contactar. Combinados, el outbound acelera resultados y el inbound los sostiene a largo plazo.",
      },
      {
        q: "¿Cuántos contactos debería tener una secuencia de prospección?",
        a: "Entre cuatro y seis contactos repartidos en dos o tres semanas y en más de un canal suele ser un buen punto de partida. Más que la cantidad, importa que cada mensaje aporte algo nuevo.",
      },
      {
        q: "¿La automatización de outbound es spam?",
        a: "No, si se hace bien: listas segmentadas, mensajes relevantes para cada empresa, volúmenes razonables y la opción de dejar de recibir mensajes. Se vuelve spam cuando se envía lo mismo a todos sin criterio.",
      },
    ],
  },
];

export const posts: Post[] = [...basePosts, ...newPosts].sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T12:00:00Z`),
  );
}
