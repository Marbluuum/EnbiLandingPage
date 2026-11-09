import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PostCard, breadcrumbJsonLd } from "@/components/sections";
import { Band, BookingButton, Breadcrumbs, Container, CtaRow, JsonLd } from "@/components/ui";
import { type Block, formatDate, getPost, posts } from "@/content/posts";
import { site } from "@/content/site";
import { founder } from "@/content/team";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      section: post.category,
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-14 text-[28px] leading-[34px] tracking-[-0.04em] text-balance md:text-[34px] md:leading-[40px]">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-10 text-[22px] leading-[30px] tracking-[-0.04em]">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[9px] h-[7px] w-[7px] shrink-0 rounded-full bg-brand-dot" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-5 list-decimal space-y-2 pl-6 marker:text-brand">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="mt-8 rounded-[20px] border border-card-border p-[30px] text-[22px] leading-[30px] tracking-[-0.04em] text-brand"
        >
          {block.text}
        </blockquote>
      );
    default:
      return (
        <p key={i} className="mt-5">
          {block.text}
        </p>
      );
  }
}

// Every valid slug is prerendered by generateStaticParams. Blocking on params keeps a real 404
// status for unknown slugs (a <Suspense> shell would answer 200 before notFound() runs).
export const instant = false;

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${site.url}/blog/${post.slug}`;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${url}#article`,
          mainEntityOfPage: url,
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          inLanguage: "es",
          articleSection: post.category,
          image: `${site.url}/opengraph-image`,
          author: { "@id": `${site.url}/#founder` },
          publisher: { "@id": `${site.url}/#organization` },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
          { name: post.title, url },
        ])}
      />

      <article>
        <header className="enbi-hero-bg text-white">
          <Container className="max-w-[860px] py-14 text-center md:py-20">
            <Breadcrumbs onBlue items={[{ name: "Inicio", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.category }]} />
            <p className="mt-6 text-sm text-white/80">
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min de lectura
            </p>
            <h1 className="mt-4 text-[30px] leading-[36px] tracking-[-0.04em] text-balance md:text-[46px] md:leading-[52px]">
              {post.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">{post.description}</p>
          </Container>
        </header>

        <Container className="max-w-[760px] py-[45px] text-[18px] leading-[29px] tracking-[-0.01em] text-black/80 md:py-[70px]">
          {post.body.map(renderBlock)}

          <aside aria-label="Sobre el autor" className="mt-16 flex items-center gap-5 border-y border-hairline py-8">
            <Image
              src={founder.photo.src}
              alt=""
              width={72}
              height={72}
              className="h-[72px] w-[72px] shrink-0 rounded-full object-cover object-top"
            />
            <p className="text-base leading-6 text-black/70">
              Escrito por{" "}
              <Link href="/nosotros" className="text-black underline underline-offset-4 hover:text-brand">
                {founder.name}
              </Link>
              , {founder.role} de ENBI Consulting. Hace crecer empresas de tecnología con generación de demanda B2B.
            </p>
          </aside>

          <aside aria-label="Agendar reunión" className="enbi-card enbi-card--lg mt-12 p-[30px] text-center md:p-10">
            <p className="enbi-h2">¿Querés que lo armemos por vos?</p>
            <p className="enbi-sub mt-2.5">Diseñamos y operamos tu sistema para que solo hables con decisores.</p>
            <CtaRow>
              <BookingButton>Agendar reunión</BookingButton>
            </CtaRow>
          </aside>
        </Container>
      </article>

      <Band gray aria-labelledby="relacionados-title">
        <h2 id="relacionados-title" className="enbi-h2 text-center">
          Seguí leyendo
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-[25px]">
          {related.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      </Band>

      <CtaBand />
    </>
  );
}
