import { AudioLines } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="w-full lg:pt-2 bg-transparent">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-2xl md:rounded-3xl bg-transparent border-none shadow-none">

        {/* Background Banner Image for Desktop & Mobile */}
        <picture className="block">
          <img
            src="/images/web_banner.png"
            alt="Pak Buy AI Banner"
            role="presentation"
            className="w-full h-auto min-h-[460px] md:h-[560px] lg:h-[640px] object-cover object-center opacity-10 md:opacity-100 hidden md:block"
            loading="eager"
            fetchPriority="high"
          />
          <img
            src="/images/mobile_view-banner.png"
            alt="Pak Buy AI Banner"
            role="presentation"
            className="w-full h-auto min-h-[460px] md:h-[560px] lg:h-[640px] object-cover object-center opacity-10 md:opacity-100 md:hidden"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Content Container */}
        <div className="absolute inset-0 flex h-full flex-col justify-center px-5 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-10">
          <div className="relative max-w-[560px]">
            {/* Logo — mobile only (scaled neatly) */}
            <img
              src="/images/logo.png"
              className="mb-4 h-12 w-auto object-contain md:hidden filter drop-shadow(0_0_6px_rgba(201,120,115,0.4))"
              alt="Pak Buy Logo"
            />

            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:text-sm">
              <span aria-hidden="true">✨</span>
              Meet PakBuy AI
              <span aria-hidden="true">✨</span>
            </span>

            {/* Headline */}
            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black leading-[1.15] text-white">
              You Describe.
              <br />
              <span className="bg-gradient-to-r from-[#F26B8A] via-[#F4845F] to-[#FDBB74] bg-clip-text text-transparent">
                AI Shops
              </span>{" "}
              For You!
            </h1>

            {/* Subcopy */}
            <p className="mt-3 sm:mt-5 max-w-[440px] text-sm sm:text-base leading-relaxed text-white/70">
              A smarter, faster and effortless shopping experience — powered by
              AI.
            </p>

            {/* Trust badges */}
            <div className="mt-5 sm:mt-7 flex flex-wrap gap-2 sm:gap-2.5">
              {[
                { icon: "🛡️", label: "Best Prices" },
                { icon: "⭐", label: "Trusted Sellers" },
                { icon: "🔒", label: "Safe Shopping" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.08] px-3 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium text-white/90 backdrop-blur-sm"
                >
                  <span aria-hidden="true">{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>

            {/* Search / voice input */}
            <div className="mt-6 sm:mt-8 flex w-full max-w-[440px] items-center gap-2 sm:gap-3 rounded-full border border-white/15 bg-white/[0.06] py-2.5 sm:py-3.5 pl-4 sm:pl-5 pr-2 shadow-[0_0_30px_-8px_rgba(242,107,138,0.35)] backdrop-blur-md">
              <span aria-hidden="true" className="shrink-0 text-sm sm:text-base text-white/60">
                🎙️
              </span>
              <span className="flex-1 truncate text-xs sm:text-sm italic text-white/70">
                "I need a supplement for better sleep and recovery"
              </span>
              <div
                aria-hidden="true"
                className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/10"
              >
                <AudioLines className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
