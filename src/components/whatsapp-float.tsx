import { WhatsAppIcon } from "@/components/ui-icons";

type WhatsAppFloatProps = {
  href: string;
};

export function WhatsAppFloat({ href }: WhatsAppFloatProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a Sherany Mercado"
      className="pulse-soft fixed right-4 bottom-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#169b62] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(22,155,98,0.38)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01] md:right-6 md:bottom-6 md:px-5"
    >
      <WhatsAppIcon className="size-5" />
      <span className="hidden sm:inline">Escribir por WhatsApp</span>
    </a>
  );
}
