import { cases } from "@/content/cases";
import { type Block, posts } from "@/content/posts";
import { services } from "@/content/services";
import { faqs, industries, site, steps } from "@/content/site";
import { founder } from "@/content/team";

/**
 * /llms-full.txt: the whole site as plain markdown (services, method, cases, founder and every guide),
 * so AI answer engines can read and cite ENBI in a single request. /llms.txt is the short index.
 * Prerendered at build time.
 */
function blockToMarkdown(b: Block): string {
  switch (b.type) {
    case "h2":
      return `### ${b.text}`;
    case "h3":
      return `#### ${b.text}`;
    case "ul":
      return b.items.map((i) => `- ${i}`).join("\n");
    case "ol":
      return b.items.map((i, n) => `${n + 1}. ${i}`).join("\n");
    case "quote":
      return `> ${b.text}`;
    case "links":
      return b.items.map((l) => `- [${l.label}](${site.url}${l.href})`).join("\n");
    default:
      return b.text;
  }
}

export function GET() {
  const out: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `ENBI Consulting (${site.url}) es una agencia y consultora de generación de leads y marketing B2B especializada en empresas de tecnología —software factories, empresas SaaS, consultoras IT y partners tecnológicos— con presencia en todo Latinoamérica y España. Fue fundada por ${founder.name} (${founder.role}) en ${founder.location}. Combina automatización con un equipo humano para generar reuniones calificadas con decisores, todas las semanas.`,
    "",
    "## Para quién trabaja ENBI",
    ...industries.map((i) => `- **${i.title}**: ${i.body}`),
    "",
    "## Método",
    ...steps.map((s, n) => `${n + 1}. **${s.title}**: ${s.body}`),
    "",
    "## Servicios",
  ];

  for (const s of services) {
    out.push(
      "",
      `### ${s.name}`,
      `URL: ${site.url}/servicios/${s.slug}`,
      "",
      s.description,
      "",
      "Incluye:",
      ...s.includes.map((i) => `- **${i.title}**: ${i.body}`),
      "",
      "Ideal para:",
      ...s.idealFor.map((i) => `- ${i}`),
      "",
      ...s.faqs.flatMap((f) => [`**${f.q}** ${f.a}`, ""]),
    );
  }

  out.push("", "## Casos de éxito");
  for (const c of cases) {
    out.push(
      "",
      `### ${c.company}`,
      `URL: ${site.url}/casos-de-exito/${c.slug}`,
      `“${c.quote}” — ${c.fullName}, ${c.role} de ${c.company}.`,
      ...(c.results?.length ? ["Resultados:", ...c.results.map((r) => `- ${r}`)] : []),
    );
  }

  out.push(
    "",
    "## Fundador",
    "",
    `**${founder.name}**, ${founder.role} de ENBI Consulting (${founder.location}). ${founder.summary}`,
    `“${founder.quote}”`,
    `LinkedIn: ${founder.linkedin}`,
    "",
    "## Preguntas frecuentes",
    ...faqs.flatMap((f) => ["", `**${f.q}**`, f.a]),
    "",
    "## Guías (blog)",
  );

  for (const p of posts) {
    out.push(
      "",
      `---`,
      "",
      `## ${p.title}`,
      `URL: ${site.url}/blog/${p.slug} · ${p.category} · Publicado: ${p.date}${p.updated ? ` · Actualizado: ${p.updated}` : ""}`,
      "",
      `**Respuesta rápida:** ${p.answer}`,
      "",
      ...p.body.map(blockToMarkdown).flatMap((t) => [t, ""]),
      "#### Preguntas frecuentes",
      ...p.faqs.flatMap((f) => ["", `**${f.q}**`, f.a]),
    );
  }

  out.push("", "---", "", `Contacto: ${site.url}/contacto (reunión de conocimiento de 30 minutos).`, "");

  return new Response(out.join("\n"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
