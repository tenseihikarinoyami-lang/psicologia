import type { Metadata, Viewport } from "next";
import { Allura, Cormorant_Garamond, Manrope } from "next/font/google";
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

function getSiteUrl(rawValue?: string) {
  const fallbackUrl = "https://example.com";

  if (!rawValue) {
    return fallbackUrl;
  }

  const normalizedValue =
    rawValue.startsWith("http://") || rawValue.startsWith("https://")
      ? rawValue
      : `https://${rawValue}`;

  try {
    return new URL(normalizedValue).toString();
  } catch {
    return fallbackUrl;
  }
}

const siteUrl = getSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sherany Mercado | Acompañamiento psicológico",
    template: "%s | Sherany Mercado",
  },
  description:
    "Acompañamiento psicológico profesional para adultos y deportistas. Atención online y presencial, nacional e internacional. Agenda por WhatsApp.",
  applicationName: "Sherany Mercado",
  keywords: [
    "psicóloga",
    "acompañamiento psicológico",
    "Sherany Mercado",
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
    title: "Sherany Mercado | Acompañamiento psicológico",
    description:
      "Un espacio profesional y humano para acompañarte en tu bienestar emocional, con atención online y presencial.",
    locale: "es_VE",
    type: "website",
    siteName: "Sherany Mercado",
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
    title: "Sherany Mercado | Acompañamiento psicológico",
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
