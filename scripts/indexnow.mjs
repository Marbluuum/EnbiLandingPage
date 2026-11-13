// Notifies IndexNow (Bing, Yandex, Seznam, Naver… and through Bing, ChatGPT search) about every URL
// in the live sitemap, so new or updated pages get crawled in hours instead of weeks.
//
// Usage: npm run indexnow            (all sitemap URLs)
//        npm run indexnow -- <url>…  (only the given URLs)

const SITE = "https://enbiconsulting.com";
const KEY = "31cb4eebdd42c6856e4ac0ebed375834"; // must match public/<KEY>.txt

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml → HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const urls = process.argv.slice(2).length ? process.argv.slice(2) : await sitemapUrls();

const keyCheck = await fetch(`${SITE}/${KEY}.txt`);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
  throw new Error(`Key file ${SITE}/${KEY}.txt is not live yet — deploy first.`);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow: ${urls.length} URLs → HTTP ${res.status} ${res.statusText}`);
if (res.status >= 400) {
  console.error(await res.text());
  process.exit(1);
}
