import type { Metadata, Viewport } from "next";
import { Allura, Cormorant_Garamond, Manrope } from "next/font/google";
import { getSiteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "psicóloga",
    "acompañamiento psicológico",
    siteConfig.name,
    "psicología clínica",
    "atención online",
    "deportistas y adultos",
    "Venezuela",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: siteConfig.title,
    description:
      "Un espacio profesional y humano para acompañarte en tu bienestar emocional, con atención online y presencial.",
    locale: siteConfig.locale,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/sherany-photo.jpg",
        width: 576,
        height: 1024,
        alt: "Sherany Mercado, psicóloga mención clínica.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "Atención psicológica profesional para adultos y deportistas. Agenda por WhatsApp.",
    images: ["/images/sherany-photo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f9edef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${cormorant.variable} ${allura.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
