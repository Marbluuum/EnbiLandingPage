import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        <svg width="136" height="102" viewBox="0 0 64 48">
          <path d="M4 36 24 22l5 9 21-15" fill="none" stroke="#0044f1" strokeWidth="6" />
          <path d="m46 9 14-2-5 13z" fill="#0044f1" />
          <path d="m20 33 8 10 23-16" fill="none" stroke="#0e182c" strokeWidth="6" />
        </svg>
      </div>
    ),
    size,
  );
}
