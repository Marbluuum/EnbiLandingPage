import type { Post } from "../posts";

export const coldEmailB2b: Post = {
  slug: "cold-email-b2b-correos-en-frio",
  title: "Cold email B2B: cómo escribir correos en frío que consiguen reuniones (y no van a spam)",
  description:
    "Cómo hacer cold email B2B bien: configuración del dominio (SPF, DKIM, DMARC), estructura de un correo en frío, secuencias de seguimiento y errores que te mandan a spam.",
  category: "Prospección",
  date: "2026-11-09",
  readingMinutes: 8,
  answer:
    "Un cold email B2B que consigue reuniones es corto (menos de 120 palabras), está dirigido a una persona que encaja con tu cliente ideal, abre con algo específico de su empresa, plantea un problema concreto y termina con una pregunta fácil de responder. Para no ir a spam, el dominio de envío necesita SPF, DKIM y DMARC configurados, calentamiento progresivo y volúmenes bajos por casilla.",
  keywords: [
    "cold email B2B",
    "correo en frío",
    "cómo escribir un cold email",
    "email en frío que no vaya a spam",
    "secuencia de cold email",
  ],
  body: [
    {
      type: "p",
      text: "El email en frío sigue siendo una de las formas más directas de llegar a un decisor B2B. También es una de las más fáciles de arruinar: un dominio mal configurado, una lista genérica o un mensaje que habla solo de tu empresa alcanzan para que nadie responda o, peor, para terminar en la carpeta de spam.",
    },
    {
      type: "p",
      text: "Esta guía cubre las tres partes que tienen que funcionar al mismo tiempo: la infraestructura técnica, el mensaje y la secuencia de seguimiento.",
    },
    { type: "h2", text: "1. Prepará la infraestructura antes de enviar" },
    {
      type: "p",
      text: "La entregabilidad —que tus correos lleguen a la bandeja de entrada— se decide antes de escribir el primer mensaje.",
    },
    {
      type: "ul",
      items: [
        "Usá un dominio secundario para prospección (por ejemplo, una variante de tu marca) y protegé tu dominio principal.",
        "Configurá SPF, DKIM y DMARC en el DNS del dominio de envío.",
        "Calentá cada casilla nueva durante varias semanas, subiendo el volumen de a poco.",
        "Mantené volúmenes bajos por casilla y repartí los envíos entre varias si necesitás más alcance.",
        "Verificá los emails antes de enviar para no rebotar: los rebotes dañan la reputación del dominio.",
      ],
    },
    { type: "h2", text: "2. Escribí para una persona, no para una base de datos" },
    {
      type: "p",
      text: "Un buen correo en frío se lee en el celular en menos de 30 segundos. La estructura que mejor funciona es simple:",
    },
    {
      type: "ol",
      items: [
        "Asunto corto y concreto, sin mayúsculas ni signos de exclamación.",
        "Primera línea personalizada: algo específico de la empresa o de la persona (una búsqueda laboral, un lanzamiento, una expansión).",
        "El problema: una frase sobre un dolor que empresas como la suya suelen tener.",
        "La prueba: un resultado que lograste con un cliente parecido.",
        "El llamado a la acción: una pregunta fácil de responder, no un link a tu calendario en el primer contacto.",
      ],
    },
    {
      type: "quote",
      text: "Si tu correo podría enviarse a cualquier empresa sin cambiar una palabra, no está personalizado: está automatizado.",
    },
    { type: "h3", text: "Ejemplo de estructura" },
    {
      type: "p",
      text: "“Vi que están sumando desarrolladores para el equipo de integraciones. Muchas empresas de logística que crecen así terminan con la operación atada a sistemas que ya no escalan. Con [cliente] reemplazamos ese sistema en cuatro meses sin frenar la operación. ¿Tiene sentido que te cuente cómo lo hicimos?”",
    },
    { type: "h2", text: "3. Armá una secuencia de seguimiento" },
    {
      type: "p",
      text: "La mayoría de las respuestas no llega con el primer correo. Una secuencia de cuatro o cinco contactos en dos o tres semanas, donde cada mensaje suma algo nuevo, multiplica las chances de conversación.",
    },
    {
      type: "ul",
      items: [
        "Seguimiento 1: un recordatorio breve con un ángulo distinto del problema.",
        "Seguimiento 2: un recurso útil, como un caso de éxito o una idea aplicable.",
        "Seguimiento 3: contacto por LinkedIn para ganar visibilidad en otro canal.",
        "Cierre: un último mensaje respetuoso que deje la puerta abierta.",
      ],
    },
    { type: "h2", text: "4. Medí lo que importa" },
    {
      type: "p",
      text: "La tasa de apertura dejó de ser una métrica confiable porque muchos clientes de correo bloquean el seguimiento. Concentrate en la tasa de respuesta, la tasa de respuestas positivas, los rebotes y, sobre todo, las reuniones calificadas que genera cada segmento y cada mensaje.",
    },
    { type: "h2", text: "Errores que te mandan a spam (o al olvido)" },
    {
      type: "ul",
      items: [
        "Enviar desde el dominio principal sin calentamiento ni autenticación.",
        "Usar bases de datos compradas con muchos emails inválidos.",
        "Incluir varios links, imágenes pesadas o adjuntos en el primer correo.",
        "Escribir párrafos largos sobre tu empresa en lugar del problema del cliente.",
        "No ofrecer una forma simple de no recibir más correos.",
      ],
    },
    {
      type: "p",
      text: "En ENBI configuramos la infraestructura, escribimos y operamos las secuencias de cold email para empresas de tecnología, y un equipo humano responde y califica cada conversación antes de agendarla.",
    },
  ],
  faqs: [
    {
      q: "¿El cold email es legal?",
      a: "En la mayoría de los países de Latinoamérica el email en frío B2B es una práctica habitual si es relevante para la empresa y ofrece una forma de darse de baja. En España y la Unión Europea aplica el RGPD: conviene contactar solo direcciones corporativas, justificar el interés legítimo e informar cómo se obtuvo el dato.",
    },
    {
      q: "¿Qué largo debería tener un correo en frío?",
      a: "Lo ideal es menos de 120 palabras: que se lea en el celular en menos de 30 segundos y termine con una pregunta fácil de responder.",
    },
    {
      q: "¿Qué son SPF, DKIM y DMARC?",
      a: "Son registros DNS que autentican tu dominio de email. SPF indica qué servidores pueden enviar en tu nombre, DKIM firma los mensajes y DMARC define qué hacer con los correos que no pasan esas verificaciones. Sin ellos, tus emails tienen muchas más chances de ir a spam.",
    },
    {
      q: "¿Cuántos correos en frío se pueden enviar por día?",
      a: "Depende del calentamiento y la reputación de cada casilla, pero conviene mantener volúmenes bajos por casilla y repartir los envíos entre varias en lugar de mandar cientos desde una sola.",
    },
    {
      q: "¿Cuántos seguimientos hay que hacer?",
      a: "Entre tres y cinco seguimientos en dos o tres semanas es un buen punto de partida. Cada mensaje tiene que aportar algo nuevo, no repetir el anterior.",
    },
  ],
};
