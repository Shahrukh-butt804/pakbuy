import React from "react";
import { useNavigate } from "react-router";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";

const InfoCards2 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Card */}
        <div className="group relative bg-gradient-to-b from-[#18181b] via-[#141417] to-[#101012] border border-[#C97873]/20 hover:border-[#C97873]/50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C97873]/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C97873]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C97873]/10 transition-colors duration-500" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873] mb-6 shadow-inner">
              <Award className="w-6 h-6" />
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4 tracking-tight leading-snug">
              A marketplace for{" "}
              <span className="text-[#C97873] relative inline-block">
                proven
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C97873]/40 rounded-full" />
              </span>{" "}
              health options
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              The Pak Buy team has selected the best from a variety of companies located throughout the world and have brought them together to form the Pak Buy Collections™ with common sense pricing.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="group relative bg-gradient-to-b from-[#18181b] via-[#141417] to-[#101012] border border-[#C97873]/25 hover:border-[#C97873]/50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C97873]/10 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C97873]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C97873]/10 transition-colors duration-500" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873] mb-6 shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-4 tracking-tight leading-snug">
              A marketplace for{" "}
              <span className="text-[#C97873] relative inline-block">
                trusted
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C97873]/40 rounded-full" />
              </span>{" "}
              health solutions
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
              By thoughtfully combining complementary options, we equip our members to make informed decisions and move forward on their path to better health.
            </p>
          </div>

          <div className="relative z-10">
            <button
              onClick={() => navigate("/shop")}
              className="group/btn relative inline-flex items-center gap-2.5 py-3.5 px-7 rounded-full bg-[#C97873] hover:bg-[#b86762] text-white font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg shadow-[#C97873]/25 hover:shadow-[#C97873]/40 transition-all duration-300 active:scale-[0.98]"
            >
              <span>SEE COLLECTIONS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards2;

