import React from "react";

type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "KNOW",
    description:
      "Receive an informed health snapshot to guide your next steps.",
  },
  {
    title: "PREDICT",
    description:
      "Find potential health risks so you can make positive changes.",
  },
  {
    title: "ENGAGE",
    description: "Improve the health areas that you feel are most needed.",
  },
  {
    title: "PREVENT",
    description:
      "Address health concerns before they become a problem.",
  },
];

export const ChooseFeatures: React.FC = () => {
  return (
    <section className="flex justify-center px-4 py-8 choose-features-section">
      <div className="bg-[#000000c4] text-white container w-full rounded-2xl p-8 md:p-12 shadow-md">
        <h2 className="text-center text-lg md:text-xl font-semibold mb-8">
          The 4 features of each CHOOSE Collection include:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-4">
          {FEATURES.map((f) => (
            <div key={f.title}>
              <h3 className="text-[#f6c356] font-bold text-sm tracking-wide mb-2">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
