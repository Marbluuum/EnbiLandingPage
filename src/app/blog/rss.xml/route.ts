import { posts } from "@/content/posts";
import { site } from "@/content/site";
import { founder } from "@/content/team";

/** RSS 2.0 feed of the blog: lets feed readers, aggregators and AI crawlers discover new guides fast. */
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const rfc822 = (iso: string) => new Date(`${iso}T12:00:00Z`).toUTCString();

export function GET() {
  const latest = posts.map((p) => p.updated ?? p.date).sort().at(-1) ?? posts[0].date;
  const items = posts
    .map((p) => {
      const url = `${site.url}/blog/${p.slug}`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <category>${esc(p.category)}</category>
      <dc:creator>${esc(founder.name)}</dc:creator>
      <description>${esc(p.answer)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Blog de ENBI Consulting: marketing y ventas B2B para empresas de tecnología</title>
    <link>${site.url}/blog</link>
    <atom:link href="${site.url}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Guías de generación de leads, prospección, marketing B2B, SEO y ventas para software factories, empresas SaaS y consultoras IT.</description>
    <language>es</language>
    <lastBuildDate>${rfc822(latest)}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
