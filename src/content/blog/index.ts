import type { Post } from "../posts";
import { accountBasedMarketing } from "./abm";
import { agenciaLeadsSoftwareLatam } from "./agencia-leads-software-latam";
import { agenciaMarketingEmpresasSoftware } from "./agencia-marketing-empresas-software";
import { agenciaVsSdr } from "./agencia-vs-sdr";
import { calentamientoEmails } from "./calentamiento-emails";
import { calificarLeadsB2b } from "./calificar-leads-b2b";
import { clientesConsultoraIt } from "./clientes-consultora-it";
import { clientesSaasB2b } from "./clientes-saas-b2b";
import { coldEmailB2b } from "./cold-email-b2b";
import { comoHacerProspeccion } from "./como-hacer-prospeccion";
import { convertirUsuariosClientesSaas } from "./convertir-usuarios-clientes-saas";
import { estrategiaContenidosB2b } from "./estrategia-contenidos-b2b";
import { generacionDeLeadsB2b } from "./generacion-de-leads-b2b";
import { linkedinVentasB2b } from "./linkedin-ventas-b2b";
import { marketingEmpresasTecnologia } from "./marketing-empresas-tecnologia";
import { marketingSoftwareFactories } from "./marketing-software-factories";
import { metricasMarketingB2b } from "./metricas-marketing-b2b";
import { nearshoreEstadosUnidosEspana } from "./nearshore-estados-unidos-espana";
import { prescriptoresSaas } from "./prescriptores-saas";
import { prospeccionB2bConIa } from "./prospeccion-b2b-con-ia";
import { queEsMarketingB2b } from "./que-es-marketing-b2b";
import { queEsUnCrm } from "./que-es-un-crm";
import { seoEmpresasSoftware } from "./seo-empresas-software";
import { seoSoftwareFactories } from "./seo-software-factories";
import { venderSoftwareEmpresas } from "./vender-software-empresas";
import { venderSoftwareErp } from "./vender-software-erp";

/** Articles kept one per file (the original three live in posts.ts). */
export const newPosts: Post[] = [
  // Marketing para empresas de tecnología (topic cluster: pillar + supporting guides)
  seoSoftwareFactories,
  queEsMarketingB2b,
  agenciaMarketingEmpresasSoftware,
  marketingEmpresasTecnologia,
  marketingSoftwareFactories,
  estrategiaContenidosB2b,
  seoEmpresasSoftware,
  accountBasedMarketing,
  metricasMarketingB2b,
  // Generación de leads, prospección y ventas
  venderSoftwareErp,
  prescriptoresSaas,
  convertirUsuariosClientesSaas,
  calentamientoEmails,
  comoHacerProspeccion,
  queEsUnCrm,
  prospeccionB2bConIa,
  venderSoftwareEmpresas,
  agenciaLeadsSoftwareLatam,
  calificarLeadsB2b,
  nearshoreEstadosUnidosEspana,
  generacionDeLeadsB2b,
  coldEmailB2b,
  linkedinVentasB2b,
  clientesSaasB2b,
  clientesConsultoraIt,
  agenciaVsSdr,
];
