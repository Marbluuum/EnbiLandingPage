import type { Post } from "../posts";
import { accountBasedMarketing } from "./abm";
import { agenciaVsSdr } from "./agencia-vs-sdr";
import { calificarLeadsB2b } from "./calificar-leads-b2b";
import { clientesConsultoraIt } from "./clientes-consultora-it";
import { clientesSaasB2b } from "./clientes-saas-b2b";
import { coldEmailB2b } from "./cold-email-b2b";
import { estrategiaContenidosB2b } from "./estrategia-contenidos-b2b";
import { generacionDeLeadsB2b } from "./generacion-de-leads-b2b";
import { linkedinVentasB2b } from "./linkedin-ventas-b2b";
import { marketingEmpresasTecnologia } from "./marketing-empresas-tecnologia";
import { marketingSoftwareFactories } from "./marketing-software-factories";
import { metricasMarketingB2b } from "./metricas-marketing-b2b";
import { nearshoreEstadosUnidosEspana } from "./nearshore-estados-unidos-espana";
import { seoEmpresasSoftware } from "./seo-empresas-software";

/** Articles kept one per file (the original three live in posts.ts). */
export const newPosts: Post[] = [
  // Marketing para empresas de tecnología (topic cluster: pillar + supporting guides)
  marketingEmpresasTecnologia,
  marketingSoftwareFactories,
  estrategiaContenidosB2b,
  seoEmpresasSoftware,
  accountBasedMarketing,
  metricasMarketingB2b,
  // Generación de leads, prospección y ventas
  calificarLeadsB2b,
  nearshoreEstadosUnidosEspana,
  generacionDeLeadsB2b,
  coldEmailB2b,
  linkedinVentasB2b,
  clientesSaasB2b,
  clientesConsultoraIt,
  agenciaVsSdr,
];
