const whatsappNumber = "5511999999999";
const contactEmail = "contato@rlcobraselocacoes.com.br";

export function buildWhatsAppUrl(message = "Ola, gostaria de solicitar um orcamento com a RLC Obras e Locacoes.") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailToUrl(subject = "Solicitacao de orcamento - RLC Obras e Locacoes") {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}

export const companyContacts = {
  whatsappLabel: "(11) 99999-9999",
  phone: "(11) 99999-9999",
  email: contactEmail,
  address: "Atendimento regional para obras, infraestrutura e locacoes"
};
