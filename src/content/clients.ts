export type Client = {
  name: string;
  /** Case study slug, when the client has one. */
  caseSlug?: string;
  /** Logo in /public/clientes. Until it is added, the name is shown as a wordmark. */
  logo?: { src: string; width: number; height: number };
};

/** Companies ENBI works with, shown in the logo wall. */
export const clients: Client[] = [
  { name: "Ait Tech Venture" },
  { name: "Automy" },
  { name: "LaTech" },
  { name: "InzaiQ", caseSlug: "inzaiq" },
  { name: "MegaPractical", caseSlug: "megapractical" },
  { name: "Softnet", caseSlug: "softnet" },
  { name: "Web3D", caseSlug: "web3d" },
];
