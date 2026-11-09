# ENBI Consulting — Sitio web

Sitio principal de [enbiconsulting.com](https://enbiconsulting.com) en Next.js 16 (App Router) + Tailwind 4, desplegado en Vercel.
La landing de marketing (GoHighLevel) queda en un subdominio aparte.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm run start
```

## Contenido (editar acá)

| Qué | Archivo |
| --- | --- |
| Textos generales, método, beneficios, FAQ, link de reservas | `src/content/site.ts` |
| Servicios (cada uno genera `/servicios/<slug>`) | `src/content/services.ts` |
| Casos de éxito y testimonios en video (`/casos-de-exito/<slug>`) | `src/content/cases.ts` |
| Artículos del blog (`/blog/<slug>`) | `src/content/posts.ts` |

Las páginas, el sitemap y los datos estructurados se generan solos a partir de esos archivos.
En `cases.ts`, los campos `challenge`, `solution` y `results` son opcionales: al completarlos aparecen en la página del caso.

## Marca

El diseño replica el código propio de la landing original de ENBI (bloques "enbi-*"):

- Colores: degradé `#0044F1 → #00278B` (animado en heros y CTAs), negro puro para texto, bandas `#F7F7F7`, bordes de tarjeta `#D0D0D0`.
- Tipografía: Neulis Sans 400 en todo el sitio, tracking `-0.04em` (`src/fonts/neulis-sans.woff2`, subset latin).
- Logos, íconos e ilustraciones originales en `public/brand/`.
- Estilos de componentes en `src/app/globals.css`.
