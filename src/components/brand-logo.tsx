type BrandLogoProps = {
  variant?: "compact" | "full";
  className?: string;
  light?: boolean;
};

function classes(...tokens: Array<string | undefined>) {
  return tokens.filter(Boolean).join(" ");
}

function LotusPsiMark({ light = false }: { light?: boolean }) {
  const petal = light ? "#fbecef" : "#e6b8c5";
  const petalDeep = light ? "#f4d7df" : "#d592a8";
  const petalCore = light ? "#fff8fa" : "#f5dfe5";
  const gold = light ? "#f4d48d" : "#c69c54";

  return (
    <div
      className={classes(
        "relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] sm:h-[4.8rem] sm:w-[4.8rem] sm:rounded-[1.8rem]",
        light
          ? "bg-white/14 ring-1 ring-white/20"
          : "bg-[radial-gradient(circle_at_top,_#fff7fa_0%,_#f5dde3_45%,_#efd0d8_100%)] ring-1 ring-[#ebcfd4]",
      )}
      aria-hidden="true"
    >
      <span
        className={classes(
          "absolute bottom-[0.02rem] text-[2.35rem] leading-none font-display sm:bottom-[0.08rem] sm:text-[3.2rem]",
          light ? "text-[#f6e7ba]" : "text-[#c69c54]",
        )}
      >
        Ψ
      </span>
      <svg
        viewBox="0 0 100 100"
        className="absolute -top-1 w-[2.8rem] sm:w-[3.8rem]"
        role="presentation"
      >
        <path
          d="M50 14c4 8 4 15 0 22-4-7-4-14 0-22Z"
          fill={petalCore}
        />
        <path
          d="M38 22c7 4 11 10 12 18-8-2-13-7-16-15 1-2 2-3 4-3Z"
          fill={petal}
        />
        <path
          d="M62 22c-7 4-11 10-12 18 8-2 13-7 16-15-1-2-2-3-4-3Z"
          fill={petal}
        />
        <path
          d="M28 31c8 1 14 5 19 13-8 1-15-1-21-7 0-2 1-4 2-6Z"
          fill={petalDeep}
        />
        <path
          d="M72 31c-8 1-14 5-19 13 8 1 15-1 21-7 0-2-1-4-2-6Z"
          fill={petalDeep}
        />
        <path
          d="M42 34c4 3 7 7 8 13-5-1-9-4-12-9 1-2 2-3 4-4Z"
          fill={petalCore}
        />
        <path
          d="M58 34c-4 3-7 7-8 13 5-1 9-4 12-9-1-2-2-3-4-4Z"
          fill={petalCore}
        />
        <rect x="47.2" y="35" width="5.6" height="27" rx="2.8" fill={gold} />
      </svg>
    </div>
  );
}

export function BrandLogo({
  variant = "full",
  className,
  light = false,
}: BrandLogoProps) {
  if (variant === "compact") {
    return (
      <div className={classes("flex items-center gap-2.5 sm:gap-3", className)}>
        <LotusPsiMark light={light} />
        <div className="min-w-0">
          <p
            className={classes(
              "truncate font-script text-[1.55rem] leading-none sm:text-[2rem]",
              light ? "text-white" : "text-[#a96c7a]",
            )}
          >
            Sherany Mercado
          </p>
          <p
            className={classes(
              "mt-1 truncate whitespace-nowrap text-[0.54rem] font-semibold uppercase tracking-[0.28em] sm:text-[0.62rem] sm:tracking-[0.34em]",
              light ? "text-white/75" : "text-[#7f6670]",
            )}
          >
            Psicóloga mención clínica
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes("relative inline-flex flex-col", className)}>
      <span
        className={classes(
          "pointer-events-none absolute -left-1 top-2 text-[4.4rem] leading-none font-display opacity-70 sm:text-[6.5rem]",
          light ? "text-white/10" : "text-white",
        )}
        aria-hidden="true"
      >
        SM
      </span>
      <div className="relative z-10 flex items-center gap-3 sm:gap-4">
        <LotusPsiMark light={light} />
        <div>
          <p
            className={classes(
              "font-script text-[2rem] leading-none sm:text-[3.2rem]",
              light ? "text-white" : "text-[#b27b87]",
            )}
          >
            Sherany Mercado
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.64rem] font-semibold uppercase tracking-[0.24em] sm:gap-x-4 sm:text-[0.76rem] sm:tracking-[0.34em]">
            <span className={light ? "text-white/80" : "text-[#8b707b]"}>
              Psicóloga mención clínica
            </span>
            <span className={light ? "text-white/50" : "text-[#c69c54]"}>
              FPV 18.468
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
