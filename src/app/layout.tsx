import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/ui";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { founder } from "@/content/team";
import "./globals.css";

// Brand display face, subset to Latin and converted to woff2.
const neulis = localFont({
  src: "../fonts/neulis-sans.woff2",
  variable: "--font-neulis",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // Search engine ownership tags (Google Search Console and Bing Webmaster Tools, account martin@enbiconsulting.com).
  verification: {
    google: "-f-dfl3jHxWmOuHS49Zqk4L-ilsDuIkMNAFtr_fozqY",
    other: { "msvalidate.01": "BDE446AC906FCBFFF4218EEE1B445DBB" },
  },
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "business",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#0044f1",
  colorScheme: "light",
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: [site.shortName, "ENBI"],
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png`, width: 512, height: 512 },
      image: `${site.url}/opengraph-image`,
      description:
        "ENBI Consulting es una agencia y consultora de generación de leads y marketing B2B especializada en empresas de tecnología: software factories, empresas SaaS, consultoras IT y partners tecnológicos de Latinoamérica y España.",
      disambiguatingDescription:
        "Agencia de generación de demanda B2B para empresas de software con sede en Buenos Aires, Argentina.",
      knowsAbout: [
        ...site.keywords,
        "Prospección outbound B2B",
        "Cold email B2B",
        "LinkedIn para ventas B2B",
        "Account-Based Marketing",
        "SEO para empresas de software",
        "Marketing para empresas de tecnología",
      ],
      slogan: "Dejá de depender de referidos para conseguir proyectos nuevos.",
      founder: { "@id": `${site.url}/#founder` },
      employee: { "@id": `${site.url}/#founder` },
      address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
      areaServed: [
        { "@type": "Place", name: "Latinoamérica" },
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "México" },
        { "@type": "Country", name: "Colombia" },
        { "@type": "Country", name: "Chile" },
        { "@type": "Country", name: "Perú" },
        { "@type": "Country", name: "Uruguay" },
        { "@type": "Country", name: "España" },
      ],
      audience: { "@type": "BusinessAudience", audienceType: "Software factories, empresas SaaS B2B, consultoras IT y partners tecnológicos" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: `${site.url}/contacto`,
        availableLanguage: ["es"],
        areaServed: ["AR", "MX", "CO", "CL", "PE", "UY", "ES"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de ENBI Consulting",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@id": `${site.url}/servicios/${s.slug}#service`, "@type": "Service", name: s.name, url: `${site.url}/servicios/${s.slug}` },
        })),
      },
      subjectOf: { "@id": `${site.url}/blog#blog` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#founder`,
      name: founder.name,
      jobTitle: founder.role,
      description: founder.summary,
      image: `${site.url}${founder.photo.src}`,
      url: `${site.url}/nosotros`,
      worksFor: { "@id": `${site.url}/#organization` },
      homeLocation: { "@type": "Place", name: founder.location },
      knowsAbout: ["Generación de leads B2B", "Ventas B2B", "Marketing para empresas de tecnología", "Desarrollo de software"],
      sameAs: [founder.linkedin, founder.website],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "es",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className={`${neulis.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <JsonLd data={organization} />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
