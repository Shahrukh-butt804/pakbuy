import React from "react";
import { useNavigate } from "react-router";
import { Info, CheckCircle2, ArrowRight } from "lucide-react";

export const ChooseInfoSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="text-white px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="group bg-[#121215]/80 border border-[#C97873]/20 hover:border-[#C97873]/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C97873]/10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C97873]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C97873]/10 transition-colors duration-500" />

          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-extrabold mb-5 text-white flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873]">
                <Info className="w-4 h-4" />
              </div>
              What you need to know
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#C97873] mt-2 flex-shrink-0" />
                <span>Pak Buy does NOT replace your doctor or health insurance.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#C97873] mt-2 flex-shrink-0" />
                <span>Member input and evolving clinical evidence shape new Pak Buy Collections.</span>
              </li>
            </ul>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/5">
            <button
              onClick={() => navigate("/tips")}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C97873] hover:text-[#b86762] transition-colors duration-200"
            >
              <span>Learn more details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="group bg-[#121215]/80 border border-[#C97873]/20 hover:border-[#C97873]/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C97873]/10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C97873]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C97873]/10 transition-colors duration-500" />

          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-extrabold mb-5 text-white flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              Pak Buy standards
            </h3>

            <ul className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed">
              {[
                "FDA clearance (where applicable) and relevant regulatory approvals",
                "Clinical and peer-reviewed scientific evidence",
                "Outstanding consumer reviews and responsive customer support",
                "Common sense pricing with absolute zero hidden markup",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C97873] mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer Banner */}
      <div className="mt-8 text-xs text-center px-6 py-5 leading-relaxed text-gray-400 rounded-2xl bg-[#18181b]/60 border border-[#C97873]/20 backdrop-blur-md shadow-lg">
        <p className="max-w-4xl mx-auto">
          Pak Buy is not a healthcare provider nor a substitute for medical insurance. Pak Buy does not provide direct medical care or offer diagnosis advice. All statements are true to the best of our knowledge and have been verified by independent evaluation. As new information and advanced options develop, Pak Buy will update Members and modify our Collections accordingly.
        </p>
      </div>
    </section>
  );
};

