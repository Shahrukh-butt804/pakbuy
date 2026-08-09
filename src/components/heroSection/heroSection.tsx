import { AudioLines } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="w-full lg:pt-2 !bg-transparent">
      <div className="relative mx-auto h-screen max-w-[1440px] overflow-hidden rounded-2xl md:h-auto md:rounded-3xl">
        <picture className="hidden md:block">
          <img
            src="/images/web_banner.png"
            alt=""
            role="presentation"
            className="h-160 w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        <div className="relative flex h-full flex-col justify-start pt-8 gap-5 px-6 md:absolute md:inset-0 md:h-auto md:justify-center md:pt-0 md:px-10 md:py-10 lg:px-12">
          <div className="relative max-w-[560px]">
            {/* Logo — mobile only */}
            <img
              src="/images/logo.png"
              className="mb-8 h-20 w-24 md:hidden"
              alt="logo"
            />

            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm md:text-sm">
              <span aria-hidden="true">✨</span>
              Meet PakBuy AI
              <span aria-hidden="true">✨</span>
            </span>

            {/* Headline */}
            <h1 className="mt-5 text-4xl !font-extrabold leading-[1.15] text-white md:mt-4 md:text-4xl lg:text-5xl">
              You Describe.
              <br />
              <span className="bg-gradient-to-r from-[#F26B8A] via-[#F4845F] to-[#FDBB74] bg-clip-text text-transparent">
                AI Shops
              </span>{" "}
              For You!
            </h1>

            {/* Subcopy */}
            <p className="mt-5 max-w-[440px] text-base leading-relaxed text-white/60 md:mt-4 md:text-base">
              A smarter, faster and effortless shopping experience — powered by
              AI.
            </p>

            {/* Trust badges */}
            <div className="mt-7 flex flex-wrap gap-2.5 md:mt-6">
              {[
                { icon: "🛡️", label: "Best Prices" },
                { icon: "⭐", label: "Trusted Sellers" },
                { icon: "🔒", label: "Safe Shopping" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
                >
                  <span aria-hidden="true">{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>

            {/* Search / voice input */}
            <div className="mt-8 flex max-w-[440px] items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] py-3.5 pl-5 pr-2 shadow-[0_0_30px_-8px_rgba(242,107,138,0.35)] backdrop-blur-md md:mt-7 md:py-3 ">
              <span aria-hidden="true" className="shrink-0 text-white/50">
                🎙️
              </span>
              <span className="flex-1 text-sm italic text-white/60 md:text-sm">
                "I need a supplement for better sleep and recovery"
              </span>
              <div
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 mr-1.5"
              >
                <AudioLines className="h-4 w-4 text-white/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};