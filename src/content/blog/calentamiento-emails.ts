import type { Post } from "../posts";

export const calentamientoEmails: Post = {
  slug: "calentamiento-de-emails-en-frio",
  title: "Calentamiento de emails en frío (email warm-up): cómo preparar tu dominio para no caer en spam",
  description:
    "Qué es el calentamiento de emails o email warm-up, por qué es clave en el cold email B2B, cómo calentar un dominio y una casilla nueva paso a paso, cuánto tarda, qué volúmenes usar y cómo saber si funcionó.",
  category: "Prospección",
  date: "2026-11-19",
  readingMinutes: 8,
  answer:
    "El calentamiento de emails (email warm-up) es el proceso de aumentar de a poco el volumen de envíos de una casilla o dominio nuevo para que Gmail, Outlook y otros proveedores lo reconozcan como un remitente confiable. Se hace configurando SPF, DKIM y DMARC, enviando primero pocos correos que reciban respuesta y subiendo el volumen gradualmente durante varias semanas. Sin calentamiento, los correos en frío suelen terminar en spam.",
  keywords: [
    "calentamiento de emails",
    "calentamiento de emails en frío",
    "email warm-up",
    "cómo calentar un dominio de email",
    "warm up de casillas para cold email",
  ],
  body: [
    {
      type: "p",
      text: "Podés tener el mejor mensaje y la lista perfecta, pero si tus correos llegan a la carpeta de spam, nadie los va a leer. En el cold email B2B, la entregabilidad —que el correo llegue a la bandeja de entrada— se decide antes de enviar el primer mensaje de prospección. El calentamiento de emails es la parte de ese trabajo que más se suele saltear.",
    },
    { type: "h2", text: "Qué es el calentamiento de emails" },
    {
      type: "p",
      text: "Los proveedores de correo desconfían de los remitentes nuevos. Una casilla recién creada que de un día para otro envía cientos de correos a desconocidos se parece mucho a un spammer. El calentamiento consiste en construir reputación de a poco: pocos envíos al principio, interacciones positivas (aperturas, respuestas, correos marcados como importantes) y un aumento gradual del volumen.",
    },
    { type: "h2", text: "Por qué es clave en el cold email B2B" },
    {
      type: "ul",
      items: [
        "Gmail y Outlook evalúan la reputación del dominio y de la casilla antes de decidir dónde entregar un correo.",
        "Un dominio que cae en spam tarda semanas en recuperarse.",
        "Si usás tu dominio principal sin calentar, ponés en riesgo también los correos de tu equipo, de facturación y de atención a clientes.",
        "Las campañas sobre casillas calentadas tienen tasas de respuesta mucho más estables.",
      ],
    },
    { type: "h2", text: "Antes de calentar: la configuración técnica" },
    {
      type: "ol",
      items: [
        "Usá un dominio secundario para prospección, parecido a tu marca, y dejá el principal para la operación diaria.",
        "Configurá SPF: indica qué servidores pueden enviar correos en nombre de tu dominio.",
        "Configurá DKIM: firma cada correo para demostrar que no fue alterado.",
        "Configurá DMARC: define qué hacer con los correos que no pasan SPF o DKIM y te envía reportes.",
        "Redirigí el dominio secundario a tu web principal, para que quien lo visite encuentre tu empresa.",
        "Completá la firma y el nombre del remitente con datos reales de una persona.",
      ],
    },
    {
      type: "links",
      items: [{ href: "/blog/cold-email-b2b-correos-en-frio", label: "Cold email B2B: cómo escribir correos en frío que consiguen reuniones" }],
    },
    { type: "h2", text: "Cómo calentar una casilla paso a paso" },
    { type: "h3", text: "Semana 1: arranque suave" },
    {
      type: "p",
      text: "Pocos envíos por día, a contactos que conocés o a otras casillas propias, con conversaciones reales: que respondan, que marquen el correo como importante, que lo saquen de spam si cae ahí.",
    },
    { type: "h3", text: "Semanas 2 y 3: aumento gradual" },
    {
      type: "p",
      text: "Subí el volumen de a poco, de forma constante, sin saltos bruscos. Mantené una proporción alta de correos que generan respuesta. Las herramientas de warm-up automatizan este intercambio entre casillas reales que se responden entre sí.",
    },
    { type: "h3", text: "Semana 4 en adelante: primeras campañas" },
    {
      type: "p",
      text: "Empezá a enviar prospección con volúmenes moderados por casilla y dejá el calentamiento activo en paralelo. Si necesitás más alcance, sumá más casillas en lugar de cargar una sola.",
    },
    {
      type: "quote",
      text: "Es mejor cinco casillas enviando poco cada una que una sola enviando mucho: el riesgo se reparte y la reputación se cuida.",
    },
    { type: "h2", text: "Cuánto tarda el calentamiento" },
    {
      type: "p",
      text: "Para una casilla y un dominio nuevos, lo habitual es dedicar entre dos y cuatro semanas antes de empezar a prospectar en serio. Un dominio con historia y buena reputación necesita menos; uno que ya tuvo problemas de spam, más. El calentamiento no termina cuando empezás las campañas: conviene mantenerlo activo mientras la casilla envíe prospección.",
    },
    { type: "h2", text: "Cómo saber si funcionó" },
    {
      type: "ul",
      items: [
        "Enviá pruebas a casillas propias de Gmail y Outlook y revisá si llegan a la bandeja principal.",
        "Revisá los reportes de DMARC y que SPF y DKIM pasen correctamente.",
        "Seguí la tasa de rebote: tiene que mantenerse muy baja.",
        "Mirá la tasa de respuesta: una caída brusca suele indicar problemas de entregabilidad.",
        "Usá Google Postmaster Tools para ver la reputación del dominio en Gmail cuando tengas volumen suficiente.",
      ],
    },
    { type: "h2", text: "Errores comunes" },
    {
      type: "ul",
      items: [
        "Prospectar desde el dominio principal de la empresa.",
        "Empezar a enviar campañas el mismo día que se crea la casilla.",
        "Subir el volumen de golpe porque “ya está calentada”.",
        "Usar listas sin verificar con muchos emails inválidos que rebotan.",
        "Incluir varios links, imágenes o adjuntos en los primeros correos.",
        "Apagar el calentamiento cuando arrancan las campañas.",
      ],
    },
    {
      type: "p",
      text: "En ENBI configuramos los dominios, calentamos las casillas y cuidamos la entregabilidad de las campañas de prospección de nuestros clientes, para que sus correos lleguen a la bandeja de entrada de los decisores.",
    },
    {
      type: "links",
      title: "Seguí leyendo",
      items: [
        { href: "/blog/como-hacer-prospeccion-de-clientes-b2b", label: "Cómo hacer prospección de clientes B2B paso a paso" },
        { href: "/servicios/generacion-de-leads-b2b", label: "Servicio de generación de leads B2B" },
      ],
    },
  ],
  faqs: [
    {
      q: "¿Qué es el calentamiento de emails?",
      a: "Es aumentar de forma gradual el volumen de envíos de una casilla o dominio nuevo, con interacciones positivas como respuestas, para que los proveedores de correo lo consideren un remitente confiable y no envíen sus mensajes a spam.",
    },
    {
      q: "¿Cuánto tiempo hay que calentar un dominio?",
      a: "Para un dominio y una casilla nuevos, lo habitual es entre dos y cuatro semanas antes de empezar campañas de prospección, y mantener el calentamiento activo mientras se envía.",
    },
    {
      q: "¿Es necesario un dominio aparte para cold email?",
      a: "Es muy recomendable. Un dominio secundario protege la reputación del dominio principal, que se usa para la comunicación diaria con clientes, proveedores y el equipo.",
    },
    {
      q: "¿Qué son SPF, DKIM y DMARC?",
      a: "Son registros DNS que autentican tu correo. SPF indica qué servidores pueden enviar por tu dominio, DKIM firma los mensajes y DMARC define qué hacer con los que no pasan esas verificaciones.",
    },
    {
      q: "¿Cuántos correos en frío se pueden enviar por día por casilla?",
      a: "Depende de la reputación y del calentamiento, pero conviene mantener volúmenes moderados por casilla y repartir los envíos entre varias en lugar de enviar cientos desde una sola.",
    },
  ],
};
