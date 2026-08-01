import React from "react";
import { useNavigate } from 'react-router';

export const ChooseInfoSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between">
        {/* Left Card */}
        <div
          className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:w-1/2 shadow-xl"
          data-aos="fade-up-right"
          data-aos-duration="800"
        >
          <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C97873]"></span>
            What you need to know
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-2.5 leading-relaxed">
            <li>Pak Buy does NOT replace your doctor or insurance.</li>
            <li>Member input and evolving evidence shape new Pak Buy Collections.</li>
            <li><a className="text-[#C97873] hover:underline font-semibold cursor-pointer" onClick={() => navigate("/tips")}>Learn more</a></li>
          </ul>
        </div>

        {/* Right Card */}
        <div
          className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:w-1/2 shadow-xl"
          data-aos="fade-up-left"
          data-aos-duration="800"
        >
          <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C97873]"></span>
            Pak Buy standards:
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-2.5 leading-relaxed">
            <li>FDA clearance (where applicable) and other relevant approvals</li>
            <li>Clinical and peer-reviewed evidence</li>
            <li>Outstanding consumer reviews and customer support</li>
            <li>Common sense pricing, with no mark-up</li>
          </ul>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div
        className="max-w-6xl mx-auto mt-10 text-xs text-center px-4 leading-relaxed text-gray-400 p-4 rounded-xl bg-white/[0.02] border border-white/5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <p>
          Pak Buy is not a healthcare company nor is it substitute for health insurance. Pak Buy does not provide direct care or offer
          medical advice. All statements are true to the best of our knowledge and have been verified by independent evaluation. As new
          information and more advanced options develop in the future, Pak Buy will update Members and may modify our Collections.
        </p>
      </div>
    </section>
  );
};
