import type { Post } from "../posts";
import { agenciaVsSdr } from "./agencia-vs-sdr";
import { clientesConsultoraIt } from "./clientes-consultora-it";
import { clientesSaasB2b } from "./clientes-saas-b2b";
import { coldEmailB2b } from "./cold-email-b2b";
import { generacionDeLeadsB2b } from "./generacion-de-leads-b2b";
import { linkedinVentasB2b } from "./linkedin-ventas-b2b";

/** Articles kept one per file (the original three live in posts.ts). */
export const newPosts: Post[] = [
  generacionDeLeadsB2b,
  coldEmailB2b,
  linkedinVentasB2b,
  clientesSaasB2b,
  clientesConsultoraIt,
  agenciaVsSdr,
];
