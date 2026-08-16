import React from "react";
import { Search, Flame, RefreshCw } from "lucide-react";

type Feature = {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "REVEAL",
    subtitle: "Insights & Clarity",
    description:
      "Gain informed insights into your health to guide your next steps with absolute confidence.",
    icon: <Search className="w-5 h-5 text-[#C97873]" />,
  },
  {
    title: "IGNITE",
    subtitle: "Targeted Enhancement",
    description:
      "Prioritize and improve health in areas most important to you with specialized product formulas.",
    icon: <Flame className="w-5 h-5 text-[#C97873]" />,
  },
  {
    title: "SUSTAIN",
    subtitle: "Long-term Vitality",
    description:
      "Enjoy the ongoing benefits of a healthier lifestyle with continuous member-first support.",
    icon: <RefreshCw className="w-5 h-5 text-[#C97873]" />,
  },
];

export const ChooseFeatures: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-b from-[#18181b] via-[#141417] to-[#101012] border border-[#C97873]/25 text-white w-full rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Glow ambient circle */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C97873]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center relative z-10 max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 text-[#C97873] text-xs font-bold uppercase tracking-widest mb-3">
            Core Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            The 3 features of each{" "}
            <span className="text-[#C97873]">Pak Buy Collection</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#C97873]/50 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-[#C97873]/10"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-[#C97873] font-black text-lg tracking-widest mb-1 flex items-center gap-2">
                  {f.title}
                </h3>
                <p className="text-xs text-gray-400 font-semibold mb-3">
                  {f.subtitle}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
              <div className="w-full h-1 bg-[#C97873]/10 group-hover:bg-[#C97873] rounded-full mt-6 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

