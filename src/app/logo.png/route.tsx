import { ImageResponse } from "next/og";

/**
 * Square 512×512 PNG of the ENBI mark, used as the organization logo in structured data
 * (Google requires a raster logo of at least 112×112). Prerendered at build time.
 */
export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        <svg width="400" height="300" viewBox="0 0 64 48">
          <path d="M4 36 24 22l5 9 21-15" fill="none" stroke="#0044f1" strokeWidth="6" />
          <path d="m46 9 14-2-5 13z" fill="#0044f1" />
          <path d="m20 33 8 10 23-16" fill="none" stroke="#0e182c" strokeWidth="6" />
        </svg>
      </div>
    ),
    { width: 512, height: 512 },
  );
}
