import React from "react";
import { ShieldAlert, Award, Lock, Eye } from "lucide-react";

export const EthicsBound: React.FC = () => {
  const ethicsItems = [
    {
      icon: <Eye className="w-5 h-5 text-[#C97873]" />,
      title: "No Ads, No Tracking, No Conflicts of Interest",
      description:
        "Brands can’t pay to appear on Pak Buy. We never process or sell your data to third parties.",
    },
    {
      icon: <Award className="w-5 h-5 text-[#C97873]" />,
      title: "Strictly Independent",
      description:
        "Pak Buy makes NO money from Members’ purchases. We accept NO funds from outside companies. We don’t sell medications or supplements directly.",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#C97873]" />,
      title: "NO Auto-Renewal",
      description:
        "Membership renewal is entirely your choice. We believe we must continuously earn your ongoing trust.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#C97873]" />,
      title: "Full Transparency",
      description:
        "We work for our members to ensure all pricing is clear and simple with no markup added and no compromises in value.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto w-full">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 text-[#C97873] text-xs font-bold uppercase tracking-widest mb-3">
          Our Commitments
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Ethics <span className="text-[#C97873]">Bound</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ethicsItems.map((item, idx) => (
          <div
            key={idx}
            className="group bg-[#121215]/80 border border-[#C97873]/20 hover:border-[#C97873]/50 backdrop-blur-md text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C97873]/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C97873]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#C97873]/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#C97873] bg-[#C97873]/15 px-3 py-1 rounded-full border border-[#C97873]/30">
                  Ethics Bound
                </span>
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold leading-snug mb-3 text-white">
                {item.title}
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

