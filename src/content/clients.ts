export type Client = {
  name: string;
  /** Case study slug, when the client has one. */
  caseSlug?: string;
  /**
   * Monochrome logo in /public/clientes (width/height are the file's pixels). `display` is the height
   * in px it is shown at, tuned per logo so wide wordmarks and square marks look the same size.
   * Until a logo is added, the name is shown as a wordmark.
   */
  logo?: { src: string; width: number; height: number; display: number };
};

/** Companies ENBI works with, shown in the logo wall. */
export const clients: Client[] = [
  { name: "InzaiQ", caseSlug: "inzaiq", logo: { src: "/clientes/inzaiq.png", width: 375, height: 105, display: 28 } },
  { name: "Ait Tech Venture", logo: { src: "/clientes/ait-tech-venture.png", width: 294, height: 159, display: 40 } },
  { name: "MegaPractical", caseSlug: "megapractical", logo: { src: "/clientes/megapractical.png", width: 216, height: 180, display: 46 } },
  { name: "Latech", logo: { src: "/clientes/latech.png", width: 384, height: 114, display: 30 } },
  { name: "Web3D", caseSlug: "web3d", logo: { src: "/clientes/web3d.png", width: 597, height: 144, display: 30 } },
  { name: "Automy", logo: { src: "/clientes/automy.png", width: 558, height: 72, display: 20 } },
  { name: "DualNova", logo: { src: "/clientes/dualnova.png", width: 363, height: 60, display: 24 } },
  { name: "Softnet", caseSlug: "softnet" },
  { name: "Sajatech", logo: { src: "/clientes/sajatech.png", width: 504, height: 108, display: 26 } },
  { name: "Affi", logo: { src: "/clientes/affi.png", width: 339, height: 108, display: 30 } },
];
