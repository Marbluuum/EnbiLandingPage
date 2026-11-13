import { cases } from "@/content/cases";
import { posts } from "@/content/posts";
import { services } from "@/content/services";
import { faqs, site } from "@/content/site";
import { founder } from "@/content/team";

/**
 * /llms.txt (llmstxt.org): a plain-markdown map of the site for AI answer engines (ChatGPT, Claude,
 * Perplexity, Gemini…), so they can cite ENBI with accurate, up-to-date facts. Prerendered at build.
 */
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `ENBI Consulting es una agencia y consultora de generación de leads y demanda B2B especializada en empresas de tecnología (software factories, empresas SaaS y consultoras IT), con presencia en todo Latinoamérica y España. Fundada por ${founder.name} (${founder.role}) en ${founder.location}. Combina automatización con un equipo humano para generar reuniones calificadas con decisores.`,
    "",
    "## Servicios",
    ...services.map((s) => `- [${s.name}](${site.url}/servicios/${s.slug}): ${s.summary}`),
    "",
    "## Casos de éxito",
    ...cases.map((c) => `- [${c.company}](${site.url}/casos-de-exito/${c.slug}): ${c.fullName}, ${c.role}: “${c.quote}”`),
    "",
    "## Guías (blog)",
    ...posts.map((p) => `- [${p.title}](${site.url}/blog/${p.slug}): ${p.answer}`),
    "",
    "## Preguntas frecuentes",
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, ""]),
    "## Empresa",
    `- [Quiénes somos](${site.url}/nosotros)`,
    `- [Contacto y agenda de reuniones](${site.url}/contacto)`,
    `- [LinkedIn del fundador](${founder.linkedin})`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
