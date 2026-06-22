export const siteConfig = {
  name: "RLC Obras e Locacoes",
  domain: "https://www.rlcobraselocacoes.com.br",
  description:
    "Solucoes completas em obras, construcao civil, terraplenagem, infraestrutura e locacao de equipamentos para empresas.",
  keywords: [
    "Obras",
    "Construcao Civil",
    "Locacao de Equipamentos",
    "Terraplenagem",
    "Infraestrutura",
    "Engenharia",
    "Pavimentacao",
    "Obras Industriais"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.domain,
  image: `${siteConfig.domain}/assets/og-rlc.svg`,
  description: siteConfig.description,
  telephone: "+55 11 99999-9999",
  email: "contato@rlcobraselocacoes.com.br",
  areaServed: "Brasil",
  priceRange: "$$",
  serviceType: [
    "Construcao Civil",
    "Terraplenagem",
    "Infraestrutura",
    "Locacao de Equipamentos"
  ]
};
