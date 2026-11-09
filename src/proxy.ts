import { NextResponse, type NextRequest } from "next/server";

/** Where the GoHighLevel funnels (landing, proposals, onboarding, NPS…) live now. */
const FUNNELS_ORIGIN = "https://mkt.enbiconsulting.com";

/**
 * Before this site, every GHL funnel was published on enbiconsulting.com/<path>, and those links
 * were shared with clients and used in ads. Any path that is not part of this site is sent to the
 * same path on the funnels subdomain, so old links keep working.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  return NextResponse.redirect(`${FUNNELS_ORIGIN}${pathname}${search}`, 308);
}

export const config = {
  // Runs only for paths outside the site: the home ("/" has no characters after the slash),
  // the site sections, Next internals, metadata routes, public assets and any file with an extension.
  matcher: [
    "/((?!(?:servicios|casos-de-exito|nosotros|blog|contacto|_next|_vercel|brand|casos|equipo|icon|apple-icon|opengraph-image|manifest\\.webmanifest)(?:/|$)|.*\\.[a-zA-Z0-9]+$).+)",
  ],
};
