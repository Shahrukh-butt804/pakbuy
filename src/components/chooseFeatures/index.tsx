import React from "react";

type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "REVEAL",
    description:
      "Gain informed insights into your health to guide your next steps.",
  },
  {
    title: "IGNITE",
    description:
      "Prioritize and improve health in areas most important to you.",
  },
  {
    title: "SUSTAIN",
    description:
      "Enjoy the ongoing benefits of a healthier lifestyle.",
  },
];

export const ChooseFeatures: React.FC = () => {
  return (
    <section className="flex justify-center px-4 py-8 choose-features-section max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 text-white w-full rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C97873]/5 rounded-full blur-3xl pointer-events-none" />

        <h2
          className="text-center text-lg md:text-xl font-bold mb-8 text-white tracking-wide relative z-10"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="800"
        >
          The 3 features of each <span className="text-[#C97873]">Pak Buy Collection:</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 relative z-10">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C97873]/30 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              data-aos-duration="700"
            >
              <h3 className="text-[#C97873] font-extrabold text-base tracking-widest mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C97873]"></span>
                {f.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
