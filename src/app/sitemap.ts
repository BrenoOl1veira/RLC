import type { MetadataRoute } from "next";

import { siteConfig } from "@/utils/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "sobre", "servicos", "equipamentos", "projetos", "contato"];

  return routes.map((route) => ({
    url: route ? `${siteConfig.domain}/${route}` : `${siteConfig.domain}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
