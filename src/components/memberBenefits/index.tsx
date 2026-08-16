import React from "react";
import { ShoppingCart, ShieldCheck } from "lucide-react";

export const MemberBenefits: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto w-full">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 text-[#C97873] text-xs font-bold uppercase tracking-widest mb-3">
          Member Advantages
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Member <span className="text-[#C97873]">Benefits</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="group bg-gradient-to-b from-[#18181b] via-[#141417] to-[#101012] border border-[#C97873]/20 hover:border-[#C97873]/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C97873]/10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C97873]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C97873]/10 transition-colors duration-500" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873] mb-5 group-hover:scale-110 transition-transform duration-300">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg sm:text-xl mb-3 text-white">
              Delightful Shopping Experience
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Members enjoy a seamless, curated shopping experience with one-click simplicity and exclusive bundle savings.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-gradient-to-b from-[#18181b] via-[#141417] to-[#101012] border border-[#C97873]/20 hover:border-[#C97873]/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C97873]/10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C97873]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C97873]/10 transition-colors duration-500" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873] mb-5 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg sm:text-xl mb-3 text-white">
              Independently Evaluated
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Only services and products meeting or exceeding our strict quality criteria are included in Pak Buy Collections™.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

