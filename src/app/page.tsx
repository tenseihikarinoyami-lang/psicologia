import Image from "next/image";

import { BrandLogo } from "@/components/brand-logo";
import {
  ArrowUpRightIcon,
  CheckIcon,
  GlobeIcon,
  InstagramIcon,
  MessageIcon,
  PhoneIcon,
  ShieldIcon,
  SparklesIcon,
  WhatsAppIcon,
} from "@/components/ui-icons";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const whatsappMessage = encodeURIComponent(
  "Hola, Sherany. Me gustaría recibir información sobre tu acompañamiento psicológico.",
);

const whatsappHref = `https://wa.me/584144758637?text=${whatsappMessage}`;
const instagramHref = "https://instagram.com/mercadosherany";
const phoneHref = "tel:+584144758637";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Acompañamiento", href: "#acompanamiento" },
  { label: "Modalidad", href: "#modalidad" },
  { label: "Preguntas", href: "#preguntas" },
];

const trustHighlights = [
  "Atención a adultos y deportistas",
  "Modalidad online y presencial",
  "Acompañamiento nacional e internacional",
  "Registro profesional FPV 18.468",
];

const focusAreas = [
  {
    title: "Estrés, ansiedad y desbordamiento emocional",
    description:
      "Un espacio para comprender lo que te está pasando, bajar la carga mental y empezar a construir herramientas de regulación emocional.",
  },
  {
    title: "Acompañamiento a deportistas y adultos",
    description:
      "Procesos orientados a fortalecer claridad, enfoque, autoconfianza y equilibrio emocional dentro y fuera del rendimiento.",
  },
  {
    title: "Cambios vitales, autoestima y bienestar",
    description:
      "Apoyo psicológico para momentos de transición, toma de decisiones, relaciones, autoestima y construcción de una vida más alineada contigo.",
  },
  {
    title: "Mindfulness y recursos de atención plena",
    description:
      "Estrategias para volver al presente, reconocer tus necesidades y sostener el proceso con mayor conciencia y calma.",
  },
];

const processSteps = [
  {
    title: "Primer contacto por WhatsApp",
    description:
      "Es el canal más directo para conversar, aclarar dudas iniciales y coordinar la modalidad que mejor se adapte a ti.",
  },
  {
    title: "Primera sesión de exploración",
    description:
      "En este encuentro revisamos tu motivo de consulta, lo que necesitas hoy y el ritmo más adecuado para acompañarte.",
  },
  {
    title: "Proceso claro y personalizado",
    description:
      "Cada espacio se construye contigo, con objetivos realistas, mirada clínica y un enfoque humano que cuide tu proceso.",
  },
];

const modalityCards = [
  {
    title: "Atención online",
    description:
      "Ideal si prefieres la comodidad de tu propio espacio o si te encuentras fuera de tu ciudad o país.",
  },
  {
    title: "Atención presencial",
    description:
      "Una opción para quienes desean vivir el proceso en un encuentro cara a cara, según disponibilidad.",
  },
  {
    title: "Coordinación simple",
    description:
      "La agenda y la orientación inicial se canalizan por WhatsApp para que el primer paso sea claro y cercano.",
  },
];

const faqItems = [
  {
    question: "¿Cómo puedo agendar una cita?",
    answer:
      "Puedes escribir directamente por WhatsApp. Desde allí se coordina disponibilidad, modalidad y cualquier duda inicial que tengas.",
  },
  {
    question: "¿La atención puede ser online?",
    answer:
      "Sí. La atención puede realizarse online y también de forma presencial, según disponibilidad y tu preferencia.",
  },
  {
    question: "¿Atiendes a deportistas y adultos?",
    answer:
      "Sí. El acompañamiento está orientado a adultos y deportistas que buscan apoyo profesional para su bienestar emocional y mental.",
  },
  {
    question: "¿Qué sucede en la primera sesión?",
    answer:
      "La primera sesión es un espacio para comprender tu motivo de consulta, conocer tu contexto y definir juntas el mejor camino de trabajo.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sherany Mercado",
  jobTitle: "Psicóloga mención clínica",
  description:
    "Acompañamiento psicológico profesional para adultos y deportistas, con atención online y presencial.",
  telephone: "+58 414-4758637",
  identifier: "FPV 18.468",
  sameAs: [instagramHref],
  knowsAbout: [
    "acompañamiento psicológico",
    "bienestar emocional",
    "atención a deportistas",
    "adultos",
    "mindfulness",
  ],
  areaServed: ["Venezuela", "Atención online internacional"],
  availableLanguage: ["es"],
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e8d5d9] bg-white/80 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#9f7c88]">
      <SparklesIcon className="size-4 text-[#c79c54]" />
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(246,223,230,0.88),_transparent_56%)]" />
        <div className="pointer-events-none absolute -top-12 left-[-8rem] -z-20 h-72 w-72 rounded-full bg-[#f5d9df]/60 blur-3xl" />
        <div className="pointer-events-none absolute right-[-6rem] top-[24rem] -z-20 h-80 w-80 rounded-full bg-[#eed7c6]/45 blur-3xl" />

        <header className="sticky top-0 z-40 border-b border-white/70 bg-white/72 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
            <a href="#inicio" aria-label="Ir al inicio">
              <BrandLogo variant="compact" className="max-w-[14rem]" />
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#6f5b65] transition-colors hover:text-[#b57d8b]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#2f2229] px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="size-4" />
              <span className="hidden sm:inline">Agendar por WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </header>

        <main id="inicio">
          <section className="mx-auto max-w-7xl px-5 pt-14 pb-24 sm:px-6 lg:px-8 lg:pt-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
              <div>
                <SectionEyebrow>Acompañamiento psicológico</SectionEyebrow>

                <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.94] text-[#2f2229] text-balance sm:text-6xl lg:text-7xl">
                  Un espacio humano y profesional para cuidar tu bienestar
                  emocional.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f5b65]">
                  Sherany Mercado ofrece acompañamiento psicológico para adultos
                  y deportistas, con una propuesta cercana, clínica y
                  profesional que te ayude a dar ese primer paso con confianza.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#169b62] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(22,155,98,0.24)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="size-5" />
                    Escribir por WhatsApp
                  </a>

                  <a
                    href="#acompanamiento"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[#e7d2d8] bg-white/75 px-6 py-4 text-base font-semibold text-[#3b2a33] transition-colors hover:border-[#d9b3bd] hover:text-[#b57d8b]"
                  >
                    Ver acompañamiento
                    <ArrowUpRightIcon className="size-5" />
                  </a>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {trustHighlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.5rem] border border-white/80 bg-white/70 px-4 py-4 text-sm text-[#5e4c56] soft-shadow"
                    >
                      <span className="mt-0.5 rounded-full bg-[#f7ecef] p-1.5 text-[#c79c54]">
                        <CheckIcon className="size-4" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-start gap-3 rounded-[1.5rem] border border-[#ead6db] bg-[linear-gradient(135deg,rgba(255,255,255,0.85),rgba(249,237,240,0.95))] px-5 py-4 text-sm text-[#6b5660]">
                  <ShieldIcon className="mt-0.5 size-5 shrink-0 text-[#c79c54]" />
                  <p>
                    Un proceso cuidado, confidencial y pensado para que puedas
                    sentirte acompañada con respeto, claridad y contención.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full border border-[#ebd6db] lg:block" />
                <div className="absolute -right-4 bottom-14 hidden h-36 w-36 rounded-full bg-[#f0d6dd]/40 blur-2xl lg:block" />

                <div className="soft-shadow relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(252,241,243,0.92))] p-5 sm:p-6">
                  <BrandLogo variant="full" className="mb-6" />

                  <div className="fine-border relative min-h-[26rem] overflow-hidden rounded-[2rem] bg-[#f6e7eb] sm:min-h-[33rem]">
                    <div className="mesh-sheen absolute inset-0 z-10" />
                    <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),transparent_48%),linear-gradient(180deg,rgba(255,250,252,0.72),transparent_40%,rgba(47,34,41,0.16)_100%)]" />

                    <Image
                      src="/images/sherany-photo.jpg"
                      alt="Sherany Mercado, psicóloga mención clínica."
                      fill
                      priority
                      sizes="(min-width: 1024px) 44vw, 100vw"
                      className="object-cover object-[center_66%]"
                    />

                    <div className="absolute left-5 top-5 z-20 rounded-full border border-white/80 bg-white/78 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#9d7b86] backdrop-blur-md">
                      Acompañamiento psicológico
                    </div>

                    <div className="absolute right-5 top-5 z-20 rounded-full border border-white/80 bg-white/82 px-4 py-2 text-sm font-semibold text-[#8d6c77] backdrop-blur-md">
                      FPV 18.468
                    </div>

                    <div className="absolute inset-x-5 bottom-5 z-20 rounded-[1.6rem] border border-white/70 bg-white/70 p-5 backdrop-blur-lg">
                      <p className="font-display text-3xl leading-none text-[#3b2a33] sm:text-4xl">
                        Sherany Mercado
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[#64505a]">
                        Atención profesional para adultos y deportistas, en
                        modalidad online y presencial, con alcance nacional e
                        internacional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="acompanamiento"
            className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8"
          >
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <div>
                <SectionEyebrow>Sobre la consulta</SectionEyebrow>

                <h2 className="mt-6 font-display text-4xl leading-tight text-[#2f2229] sm:text-5xl">
                  Un acompañamiento claro, sensible y adaptado a tu momento
                  actual.
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-[#6f5b65]">
                  <p>
                    Sherany Mercado,{" "}
                    <strong className="font-semibold text-[#3c2b34]">
                      psicóloga mención clínica
                    </strong>
                    , acompaña procesos emocionales desde una mirada profesional,
                    humana y respetuosa del ritmo de cada persona.
                  </p>
                  <p>
                    La consulta está pensada para adultos y deportistas que
                    desean comprender mejor lo que están viviendo, fortalecer
                    recursos emocionales y sentirse sostenidos en su proceso.
                  </p>
                  <p>
                    La intención no es apurarte, sino ofrecer un espacio seguro
                    donde puedas ordenar lo que sientes, reconocer necesidades y
                    avanzar con mayor claridad.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.8rem] border border-[#ead7dc] bg-white/75 p-5 soft-shadow">
                    <div className="mb-3 inline-flex rounded-full bg-[#f7ecef] p-2 text-[#c79c54]">
                      <GlobeIcon />
                    </div>
                    <h3 className="font-display text-2xl text-[#35242d]">
                      Alcance amplio
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#6f5b65]">
                      Atención nacional e internacional, para que la distancia no
                      sea una barrera al momento de buscar apoyo.
                    </p>
                  </div>

                  <div className="rounded-[1.8rem] border border-[#ead7dc] bg-white/75 p-5 soft-shadow">
                    <div className="mb-3 inline-flex rounded-full bg-[#f7ecef] p-2 text-[#c79c54]">
                      <ShieldIcon />
                    </div>
                    <h3 className="font-display text-2xl text-[#35242d]">
                      Espacio confidencial
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#6f5b65]">
                      Un proceso cuidado, con contención, escucha clínica y
                      respeto por tu historia y tu ritmo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {focusAreas.map((item, index) => (
                  <article
                    key={item.title}
                    className="soft-shadow rounded-[1.9rem] border border-white/80 bg-white/78 p-6"
                  >
                    <span className="inline-flex rounded-full border border-[#ecd9de] bg-[#fff6f7] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#aa7a87]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-4 font-display text-[1.9rem] leading-tight text-[#32222b]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#6e5a64]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
            <div className="rounded-[2.4rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(247,236,239,0.95))] px-6 py-10 soft-shadow sm:px-8 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <SectionEyebrow>Qué puedes esperar</SectionEyebrow>

                  <h2 className="mt-6 font-display text-4xl leading-tight text-[#2f2229] sm:text-5xl">
                    Un proceso pensado para que el primer paso se sienta más
                    claro.
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-8 text-[#6f5b65]">
                    La experiencia está diseñada para ser cercana desde el
                    inicio, con una orientación clínica clara y una forma de
                    trabajo que te permita sentir acompañamiento real.
                  </p>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d7c0c8] bg-white/85 px-5 py-3 text-sm font-semibold text-[#3b2a33] transition-colors hover:border-[#cba6b1] hover:text-[#b57d8b]"
                  >
                    Conversar por WhatsApp
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {processSteps.map((step, index) => (
                    <article
                      key={step.title}
                      className="rounded-[1.8rem] border border-white/85 bg-white/86 p-6"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#c79c54]">
                        0{index + 1}
                      </p>
                      <h3 className="mt-4 font-display text-2xl text-[#33222b]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#6f5b65]">
                        {step.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="modalidad"
            className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8"
          >
            <div className="grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
              <div>
                <SectionEyebrow>Modalidad y contacto</SectionEyebrow>

                <h2 className="mt-6 font-display text-4xl leading-tight text-[#2f2229] sm:text-5xl">
                  Elegimos la modalidad que mejor acompañe tu proceso.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[#6f5b65]">
                  La atención puede realizarse online o presencialmente, según
                  disponibilidad y según lo que te haga sentir más cómoda. El
                  primer acercamiento se coordina por WhatsApp para que puedas
                  resolver dudas con facilidad.
                </p>

                <div className="mt-8 grid gap-4">
                  {modalityCards.map((card) => (
                    <article
                      key={card.title}
                      className="soft-shadow rounded-[1.8rem] border border-white/80 bg-white/78 p-6"
                    >
                      <h3 className="font-display text-[1.95rem] leading-tight text-[#35242d]">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#6f5b65]">
                        {card.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="soft-shadow rounded-[2.2rem] border border-white/80 bg-[linear-gradient(160deg,rgba(60,42,51,0.96),rgba(91,65,77,0.92))] p-7 text-white sm:p-8">
                <BrandLogo variant="full" light className="max-w-[24rem]" />

                <div className="mt-8 space-y-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[1.6rem] border border-white/15 bg-white/8 px-5 py-4 transition-colors hover:bg-white/12"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-white/12 p-2 text-[#f2d993]">
                        <WhatsAppIcon className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          WhatsApp
                        </p>
                        <p className="text-sm text-white/72">+58 414-4758637</p>
                      </div>
                    </div>
                    <ArrowUpRightIcon className="size-5 text-white/78" />
                  </a>

                  <a
                    href={phoneHref}
                    className="flex items-center justify-between rounded-[1.6rem] border border-white/15 bg-white/8 px-5 py-4 transition-colors hover:bg-white/12"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-white/12 p-2 text-[#f2d993]">
                        <PhoneIcon className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Teléfono
                        </p>
                        <p className="text-sm text-white/72">+58 414-4758637</p>
                      </div>
                    </div>
                    <ArrowUpRightIcon className="size-5 text-white/78" />
                  </a>

                  <a
                    href={instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-[1.6rem] border border-white/15 bg-white/8 px-5 py-4 transition-colors hover:bg-white/12"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-white/12 p-2 text-[#f2d993]">
                        <InstagramIcon className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Instagram
                        </p>
                        <p className="text-sm text-white/72">@mercadosherany</p>
                      </div>
                    </div>
                    <ArrowUpRightIcon className="size-5 text-white/78" />
                  </a>
                </div>

                <div className="mt-8 rounded-[1.7rem] border border-white/12 bg-white/8 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white/55">
                    Señales de confianza
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-white/80">
                    <li className="flex items-start gap-3">
                      <ShieldIcon className="mt-0.5 size-5 shrink-0 text-[#f2d993]" />
                      Proceso profesional con enfoque clínico y trato cercano.
                    </li>
                    <li className="flex items-start gap-3">
                      <GlobeIcon className="mt-0.5 size-5 shrink-0 text-[#f2d993]" />
                      Atención online y presencial, nacional e internacional.
                    </li>
                    <li className="flex items-start gap-3">
                      <MessageIcon className="mt-0.5 size-5 shrink-0 text-[#f2d993]" />
                      Primer paso simple y directo a través de WhatsApp.
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </section>

          <section
            id="preguntas"
            className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8"
          >
            <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
              <div>
                <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
                <h2 className="mt-6 font-display text-4xl leading-tight text-[#2f2229] sm:text-5xl">
                  Resolver dudas también forma parte del cuidado.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#6f5b65]">
                  Si quieres dar el paso, estas preguntas pueden ayudarte a
                  sentirte más tranquila antes de escribir.
                </p>
              </div>

              <div className="space-y-4">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-[1.7rem] border border-white/80 bg-white/78 p-6 soft-shadow"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="font-display text-[1.85rem] leading-tight text-[#31222a]">
                        {item.question}
                      </span>
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[#e7d3d8] text-[#b57d8b] transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6f5b65]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section
            id="contacto"
            className="mx-auto max-w-7xl px-5 pt-8 pb-24 sm:px-6 lg:px-8"
          >
            <div className="soft-shadow overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(246,225,231,0.92))] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <SectionEyebrow>Agenda tu consulta</SectionEyebrow>
                  <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-[#2f2229] sm:text-5xl">
                    Si sientes que este puede ser tu momento, el primer paso está
                    a un mensaje de distancia.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#6f5b65]">
                    Puedes escribir por WhatsApp para pedir información,
                    consultar disponibilidad y coordinar la modalidad que mejor
                    se adapte a ti. La idea es que el contacto sea claro, amable
                    y profesional desde el principio.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#169b62] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(22,155,98,0.24)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="size-5" />
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[#dec7ce] bg-white/80 px-7 py-4 text-base font-semibold text-[#3b2a33] transition-colors hover:border-[#cba7b3] hover:text-[#b57d8b]"
                  >
                    <InstagramIcon className="size-5" />
                    Ver Instagram
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/70 bg-white/68 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
            <div>
              <BrandLogo variant="compact" className="max-w-[15rem]" />
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#6f5b65]">
                Acompañamiento psicológico profesional para adultos y
                deportistas. Atención online y presencial, nacional e
                internacional.
              </p>
              <p className="mt-4 text-xs leading-6 text-[#8d7480]">
                Si estás atravesando una situación de emergencia o riesgo
                inmediato, busca apoyo de los servicios de emergencia de tu
                localidad.
              </p>
            </div>

            <div className="space-y-3 text-sm text-[#6f5b65]">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-[#169b62]"
              >
                <WhatsAppIcon className="size-4" />
                +58 414-4758637
              </a>
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-[#b57d8b]"
              >
                <InstagramIcon className="size-4" />
                @mercadosherany
              </a>
              <p className="flex items-center gap-3">
                <ShieldIcon className="size-4 text-[#c79c54]" />
                Registro profesional FPV 18.468
              </p>
            </div>
          </div>
        </footer>

        <WhatsAppFloat href={whatsappHref} />
      </div>
    </>
  );
}
