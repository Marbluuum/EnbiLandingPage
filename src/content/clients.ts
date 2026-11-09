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
  { name: "InzaiQ", caseSlug: "inzaiq", logo: { src: "/clientes/inzaiq-v2.png", width: 497, height: 136, display: 28 } },
  { name: "Ait Tech Venture", logo: { src: "/clientes/ait-tech-venture-v2.png", width: 393, height: 213, display: 40 } },
  { name: "MegaPractical", caseSlug: "megapractical", logo: { src: "/clientes/megapractical-v2.png", width: 287, height: 240, display: 58 } },
  { name: "Latech", logo: { src: "/clientes/latech-v2.png", width: 509, height: 147, display: 30 } },
  { name: "Web3D", caseSlug: "web3d", logo: { src: "/clientes/web3d-v2.png", width: 795, height: 193, display: 30 } },
  { name: "Automy", logo: { src: "/clientes/automy-v2.png", width: 740, height: 96, display: 20 } },
  { name: "DualNova", logo: { src: "/clientes/dualnova-v2.png", width: 480, height: 66, display: 24 } },
  { name: "Softnet", caseSlug: "softnet" },
  { name: "Sajatech", logo: { src: "/clientes/sajatech-v2.png", width: 678, height: 146, display: 30 } },
  { name: "Affi", logo: { src: "/clientes/affi-v2.png", width: 454, height: 147, display: 30 } },
];
