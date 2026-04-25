export const siteConfig = {
  name: "Sherany Mercado",
  title: "Sherany Mercado | Acompañamiento psicológico",
  description:
    "Acompañamiento psicológico profesional para adultos y deportistas. Atención online y presencial, nacional e internacional. Agenda por WhatsApp.",
  phoneDisplay: "+58 414-4758637",
  phoneRaw: "584144758637",
  registry: "FPV 18.468",
  instagramHandle: "@mercadosherany",
  instagramUrl: "https://instagram.com/mercadosherany",
  locale: "es_VE",
};

export function getSiteUrl(rawValue = process.env.NEXT_PUBLIC_SITE_URL) {
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

export function getAbsoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

export function getWhatsappLink(message: string) {
  return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`;
}
