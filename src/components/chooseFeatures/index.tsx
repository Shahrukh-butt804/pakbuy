import React from "react";

type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "REVEAL",
    description:
      "Gain informed insights iinto your health to guide your next steps.",
  },
  {
    title: "IGNITE",
    description:
      "Priortize an improve health in areas most important to you.",
  },
  // {
  //   title: "ENGAGE",
  //   description: "Improve the health areas that you feel are most needed.",
  // },
  {
    title: "SUSTAIN",
    description:
      "Enjoy the ongoing benefits of a healthier lifestyle.",
  },
];

export const ChooseFeatures: React.FC = () => {
  return (
    <section className="flex justify-center px-4 py-8 choose-features-section">
      <div className="bg-[#000000c4] text-white container w-full rounded-2xl p-8 md:p-12 shadow-md golden_border">
        <h2
          className="text-center text-lg md:text-xl font-semibold mb-8"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="800"
        >
          The 3 features of each Pak Buy Collection:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              data-aos-duration="700"
            >
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
