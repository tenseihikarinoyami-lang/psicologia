import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Sherany",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf9",
    theme_color: "#f9edef",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
