import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";
import "@/styles/globals.css";
import { organizationSchema, siteConfig } from "@/utils/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "RLC Obras e Locacoes | Obras, Terraplenagem e Equipamentos",
    template: "%s | RLC Obras e Locacoes"
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: "RLC Obras e Locacoes",
    description: siteConfig.description,
    images: [
      {
        url: "/assets/og-rlc.svg",
        width: 1200,
        height: 630,
        alt: "RLC Obras e Locacoes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "RLC Obras e Locacoes",
    description: siteConfig.description,
    images: ["/assets/og-rlc.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A1A"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
