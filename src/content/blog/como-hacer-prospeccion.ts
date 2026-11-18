import type { Post } from "../posts";

export const comoHacerProspeccion: Post = {
  slug: "como-hacer-prospeccion-de-clientes-b2b",
  title: "Cómo hacer prospección de clientes B2B paso a paso (email, LinkedIn y teléfono)",
  description:
    "Guía práctica para hacer prospección de clientes B2B: definir a quién contactar, armar la lista, investigar cada empresa, escribir el primer mensaje, llamar en frío, hacer seguimiento y agendar reuniones. Con ejemplos para empresas de tecnología.",
  category: "Prospección",
  date: "2026-11-18",
  readingMinutes: 9,
  answer:
    "Para hacer prospección de clientes B2B hay que seguir siete pasos: definir el cliente ideal y los cargos que deciden, armar una lista de empresas que encajen, investigar cada cuenta, escribir un primer mensaje corto sobre un problema concreto, contactar por varios canales (email, LinkedIn y teléfono), hacer entre tres y cinco seguimientos que aporten algo nuevo, y calificar el interés antes de agendar la reunión. Medir cada paso permite saber qué ajustar.",
  keywords: [
    "cómo hacer prospección de clientes",
    "prospección de clientes B2B",
    "prospección en frío",
    "prospección telefónica B2B",
    "cómo prospectar empresas",
  ],
  body: [
    {
      type: "p",
      text: "Prospectar es salir a buscar clientes en lugar de esperar a que lleguen. En ventas B2B es la forma más directa de llenar la agenda de reuniones con empresas que todavía no te conocen. Bien hecha, no se siente como spam: se siente como alguien que entendió tu problema y te escribe en el momento justo.",
    },
    {
      type: "p",
      text: "Esta guía va al grano: qué hacer en cada paso, con ejemplos de mensajes para empresas de tecnología.",
    },
    { type: "h2", text: "Paso 1: Definí a quién vas a prospectar" },
    {
      type: "p",
      text: "Antes de escribir un solo mensaje, necesitás saber qué tipo de empresa y qué persona dentro de ella. Por ejemplo: empresas de logística de 50 a 500 empleados, sin equipo de desarrollo propio, y como contactos el gerente de operaciones y el gerente de sistemas.",
    },
    {
      type: "links",
      items: [{ href: "/blog/que-es-un-icp-perfil-de-cliente-ideal", label: "Qué es un ICP (perfil de cliente ideal) y cómo definirlo" }],
    },
    { type: "h2", text: "Paso 2: Armá la lista de empresas y contactos" },
    {
      type: "ul",
      items: [
        "Buscá empresas que cumplan el perfil en LinkedIn (Sales Navigator ayuda mucho), directorios del sector y cámaras empresariales.",
        "Dentro de cada empresa, identificá dos o tres personas que influyen en la decisión.",
        "Verificá los emails antes de usarlos para no rebotar.",
        "Empezá con una lista chica, de cincuenta a cien empresas, para aprender rápido.",
      ],
    },
    { type: "h2", text: "Paso 3: Investigá cada cuenta (cinco minutos alcanzan)" },
    {
      type: "p",
      text: "Mirá la web de la empresa, sus últimas noticias, búsquedas laborales y publicaciones de la persona en LinkedIn. Buscá un motivo concreto para escribir ahora: una expansión, una contratación, un lanzamiento o un sistema que están cambiando.",
    },
    { type: "h2", text: "Paso 4: Escribí el primer mensaje" },
    {
      type: "p",
      text: "Corto, específico y sobre el problema del otro. Una buena estructura: una observación sobre su empresa, un problema que suelen tener empresas como la suya, una prueba de que lo resolviste antes y una pregunta fácil de responder.",
    },
    {
      type: "quote",
      text: "“Vi que están abriendo un centro de distribución en Córdoba. Cuando las empresas de logística suman depósitos, el sistema de stock suele quedar chico. Con [cliente] lo resolvimos en cuatro meses sin frenar la operación. ¿Te sirve que te cuente cómo?”",
    },
    {
      type: "links",
      items: [{ href: "/blog/cold-email-b2b-correos-en-frio", label: "Cold email B2B: cómo escribir correos que consiguen reuniones (y no van a spam)" }],
    },
    { type: "h2", text: "Paso 5: Usá varios canales" },
    { type: "h3", text: "Email" },
    {
      type: "p",
      text: "El canal principal para el primer contacto. Cuidá la configuración del dominio (SPF, DKIM y DMARC) y enviá volúmenes moderados.",
    },
    { type: "h3", text: "LinkedIn" },
    {
      type: "p",
      text: "Interactuá con alguna publicación de la persona, enviá una solicitud de conexión con una nota breve sin vender y retomá la conversación cuando acepte.",
    },
    {
      type: "links",
      items: [{ href: "/blog/linkedin-para-ventas-b2b", label: "LinkedIn para ventas B2B: guía de social selling" }],
    },
    { type: "h3", text: "Teléfono (prospección telefónica)" },
    {
      type: "p",
      text: "La llamada en frío sigue funcionando en B2B, sobre todo después de un email. La clave es no leer un guion largo, sino abrir con contexto y pedir permiso para seguir.",
    },
    {
      type: "ol",
      items: [
        "Presentate en una frase y mencioná el email que enviaste.",
        "Explicá el motivo de la llamada en una frase, centrada en su problema.",
        "Preguntá si es un buen momento o si prefiere hablar otro día.",
        "Hacé una o dos preguntas para entender su situación.",
        "Si hay interés, proponé una reunión con día y hora concretos.",
      ],
    },
    { type: "h2", text: "Paso 6: Hacé seguimiento (acá está la mayoría de las respuestas)" },
    {
      type: "p",
      text: "La mayoría de las respuestas llega después del primer contacto. Planificá entre tres y cinco seguimientos en dos o tres semanas, alternando canales, y que cada uno aporte algo nuevo: un caso de éxito, una idea aplicable, un dato del sector. Cerrá con un último mensaje respetuoso que deje la puerta abierta.",
    },
    { type: "h2", text: "Paso 7: Calificá antes de agendar" },
    {
      type: "p",
      text: "Cuando alguien responde con interés, confirmá en pocas preguntas que hay un problema real, intención de resolverlo y que la persona participa en la decisión. Así cada reunión que llega a tu agenda tiene chances reales de convertirse en cliente.",
    },
    {
      type: "links",
      items: [{ href: "/blog/como-calificar-leads-b2b-bant-champ-meddic", label: "Cómo calificar leads B2B: BANT, CHAMP y MEDDIC" }],
    },
    { type: "h2", text: "Cómo medir tu prospección" },
    {
      type: "ul",
      items: [
        "Empresas contactadas por semana.",
        "Tasa de respuesta y tasa de respuestas positivas, por segmento y por mensaje.",
        "Reuniones agendadas y reuniones realizadas.",
        "Oportunidades y clientes generados.",
      ],
    },
    { type: "h2", text: "Errores comunes al prospectar" },
    {
      type: "ul",
      items: [
        "Escribirle a todo el mundo con el mismo mensaje.",
        "Hablar de tu empresa en lugar del problema del cliente.",
        "Rendirse después del primer intento.",
        "Comprar bases de datos y quemar el dominio de email.",
        "Agendar reuniones sin calificar y llenar la agenda de llamadas que no avanzan.",
      ],
    },
    {
      type: "p",
      text: "En ENBI hacemos este proceso completo para empresas de tecnología: definimos el cliente ideal, armamos las listas, escribimos y enviamos las secuencias, y un equipo humano conversa y califica antes de agendar cada reunión.",
    },
    {
      type: "links",
      title: "Seguí leyendo",
      items: [
        { href: "/blog/prospeccion-b2b-con-ia", label: "Prospección B2B con IA: qué automatizar y qué no" },
        { href: "/servicios/generacion-de-leads-b2b", label: "Servicio de generación de leads B2B" },
      ],
    },
  ],
  faqs: [
    {
      q: "¿Qué es la prospección de clientes?",
      a: "Es el proceso de buscar y contactar de forma proactiva a empresas que pueden convertirse en clientes, con el objetivo de iniciar una conversación comercial y agendar una reunión.",
    },
    {
      q: "¿Cuáles son los pasos de la prospección B2B?",
      a: "Definir el cliente ideal, armar la lista de empresas y contactos, investigar cada cuenta, escribir el primer mensaje, contactar por varios canales, hacer seguimiento y calificar el interés antes de agendar.",
    },
    {
      q: "¿Qué es la prospección en frío?",
      a: "Es contactar a una persona o empresa que todavía no te conoce ni mostró interés, por email, LinkedIn o teléfono. Funciona cuando el mensaje es relevante para esa empresa y el volumen es moderado.",
    },
    {
      q: "¿La prospección telefónica todavía funciona en B2B?",
      a: "Sí, especialmente como complemento del email: una llamada breve después de un correo aumenta la visibilidad y permite resolver dudas en el momento. Conviene abrir con contexto y pedir permiso para seguir, en lugar de leer un guion largo.",
    },
    {
      q: "¿Cuántos seguimientos hay que hacer?",
      a: "Entre tres y cinco seguimientos en dos o tres semanas, alternando canales, suele ser un buen punto de partida. Cada uno tiene que aportar algo nuevo para no resultar insistente.",
    },
  ],
};
