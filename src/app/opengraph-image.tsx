import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "ENBI Consulting — Generación de leads B2B para empresas de tecnología";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo-white.png"), "base64");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          padding: 80,
          background: "linear-gradient(120deg, #0044f1 0%, #00278b 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <img src={`data:image/png;base64,${logo}`} width={254} height={56} alt="" />
        <div style={{ fontSize: 64, lineHeight: 1.1, letterSpacing: -2, maxWidth: 1000 }}>
          Generación de demanda B2B para empresas de tecnología
        </div>
        <div
          style={{
            display: "flex",
            border: "1px solid rgba(255,255,255,0.4)",
            borderRadius: 100,
            padding: "10px 28px",
            fontSize: 28,
          }}
        >
          Sólo para Empresas de Tecnología
        </div>
      </div>
    ),
    size,
  );
}
