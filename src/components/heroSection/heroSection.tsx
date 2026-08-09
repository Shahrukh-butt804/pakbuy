export const HeroSection = () => {
  return (
    <section className="w-full pt-2">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-2xl sm:rounded-3xl">
        <picture>
          {/* Small screens get the dedicated crop — only loaded below 640px */}
          <source media="(max-width: 639px)" srcSet="/images/mobile_view-banner.png" />
          <img
            src="/images/web_banner.png"
            alt="Meet PakBuy AI — describe what you want, AI shops for you"
            className="h-160 w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
    </section>
  );
};