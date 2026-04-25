type BrandLogoProps = {
  variant?: "compact" | "full";
  className?: string;
  light?: boolean;
};

function classes(...tokens: Array<string | undefined | false>) {
  return tokens.filter(Boolean).join(" ");
}

function LotusFlower({ light = false }: { light?: boolean }) {
  const petal = light ? "#fbe8ee" : "#efbfd0";
  const petalDeep = light ? "#f6d6df" : "#dd9fb5";
  const petalSoft = light ? "#fff4f7" : "#f7dde6";

  return (
    <svg viewBox="0 0 100 74" className="w-full" aria-hidden="true">
      <path d="M50 6c5 8 5 14 0 22-5-8-5-14 0-22Z" fill={petalSoft} />
      <path d="M35 18c9 4 14 11 15 20-9-2-16-7-20-15 1-2 3-4 5-5Z" fill={petal} />
      <path d="M65 18c-9 4-14 11-15 20 9-2 16-7 20-15-1-2-3-4-5-5Z" fill={petal} />
      <path d="M23 29c10 1 18 7 24 17-11 2-20 0-27-6 0-4 1-7 3-11Z" fill={petalDeep} />
      <path d="M77 29c-10 1-18 7-24 17 11 2 20 0 27-6 0-4-1-7-3-11Z" fill={petalDeep} />
      <path d="M40 28c4 3 8 8 10 15-6-1-11-5-14-11 1-2 2-3 4-4Z" fill={petalSoft} />
      <path d="M60 28c-4 3-8 8-10 15 6-1 11-5 14-11-1-2-2-3-4-4Z" fill={petalSoft} />
      <path d="M50 26c6 5 8 10 7 16-5-2-8-6-10-12 0-1 1-3 3-4Z" fill={petal} />
      <path d="M50 26c-6 5-8 10-7 16 5-2 8-6 10-12 0-1-1-3-3-4Z" fill={petal} />
    </svg>
  );
}

function PsiGlyph({
  light = false,
  boxed = false,
}: {
  light?: boolean;
  boxed?: boolean;
}) {
  const gold = light ? "#f5d68d" : "#c9a04f";

  if (boxed) {
    return (
      <div
        className={classes(
          "relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] sm:h-[4.8rem] sm:w-[4.8rem] sm:rounded-[1.8rem]",
          light
            ? "bg-white/12 ring-1 ring-white/20"
            : "bg-[radial-gradient(circle_at_top,_#fff7fa_0%,_#f4dce3_46%,_#efd1d9_100%)] ring-1 ring-[#ebcfd4]",
        )}
        aria-hidden="true"
      >
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] text-[2.6rem] leading-none sm:text-[3.35rem]"
          style={{ color: gold }}
        >
          Ψ
        </span>
        <div className="absolute left-1/2 top-[0.32rem] w-[2.05rem] -translate-x-1/2 sm:top-[0.38rem] sm:w-[2.7rem]">
          <LotusFlower light={light} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-[4.9rem] w-[5.4rem] items-start justify-center sm:h-[6.4rem] sm:w-[6.9rem]">
      <span
        className="absolute top-[0.72rem] text-[4rem] leading-none sm:top-[1rem] sm:text-[5.45rem]"
        style={{ color: gold }}
      >
        Ψ
      </span>
      <div className="absolute top-0 w-[3.15rem] sm:w-[4.15rem]">
        <LotusFlower light={light} />
      </div>
    </div>
  );
}

function LogoFlourish({
  light = false,
  mirrored = false,
}: {
  light?: boolean;
  mirrored?: boolean;
}) {
  const stroke = light ? "rgba(255,255,255,0.5)" : "#dcb1bf";

  return (
    <svg
      viewBox="0 0 120 28"
      className={classes("h-5 w-[5.2rem]", mirrored && "-scale-x-100")}
      aria-hidden="true"
    >
      <path
        d="M5 14C20 14 25 7 34 5c-2 7-1 13 4 18M28 11c5 2 9 5 11 9M18 14c4 2 7 5 9 9M8 16c3 2 6 4 8 8M34 14c16 0 26 0 81-1"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
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
        <PsiGlyph light={light} boxed />
        <div className="min-w-0">
          <p
            className={classes(
              "font-script text-[1.2rem] leading-[0.88] min-[390px]:text-[1.38rem] sm:text-[1.9rem]",
              light ? "text-white" : "text-[#be9650]",
            )}
          >
            <span className="block sm:inline">Sherany</span>
            <span className="block sm:ml-1.5 sm:inline">Mercado</span>
          </p>
          <div className="mt-1 hidden min-[390px]:block">
            <p
              className={classes(
                "text-[0.44rem] font-semibold uppercase tracking-[0.24em] sm:text-[0.56rem] sm:tracking-[0.32em]",
                light ? "text-white/72" : "text-[#8e6f79]",
              )}
            >
              Psicóloga mención clínica
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={classes(
        "relative inline-flex flex-col items-center text-center",
        className,
      )}
    >
      <div className="relative flex h-[5.4rem] w-full items-start justify-center sm:h-[7rem]">
        <span
          className={classes(
            "pointer-events-none absolute top-[0.45rem] text-[4.9rem] leading-none font-display tracking-[-0.08em] opacity-80 sm:top-[0.25rem] sm:text-[7.3rem]",
            light ? "text-white/12" : "text-white",
          )}
          aria-hidden="true"
        >
          SM
        </span>
        <div className="relative z-10">
          <PsiGlyph light={light} />
        </div>
      </div>

      <p
        className={classes(
          "font-script text-[2.2rem] leading-[0.92] sm:text-[3.15rem]",
          light ? "text-[#f4deb1]" : "text-[#c39a55]",
        )}
      >
        Sherany Mercado
      </p>

      <p
        className={classes(
          "mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] sm:text-[0.76rem] sm:tracking-[0.34em]",
          light ? "text-white/82" : "text-[#b28756]",
        )}
      >
        Psicóloga mención clínica
      </p>

      <p
        className={classes(
          "mt-2 text-[0.74rem] font-semibold tracking-[0.22em] sm:text-[0.95rem] sm:tracking-[0.26em]",
          light ? "text-[#f2d58f]" : "text-[#c39a55]",
        )}
      >
        FPV 18.468
      </p>

      <div className="mt-4 flex items-center gap-5 sm:gap-7">
        <LogoFlourish light={light} />
        <LogoFlourish light={light} mirrored />
      </div>
    </div>
  );
}
