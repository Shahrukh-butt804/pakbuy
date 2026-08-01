import React from "react";

export const EthicsBound: React.FC = () => {
  return (
    <section className="flex justify-center px-4 sm:px-8 py-12 ethics-bound-section max-w-7xl mx-auto w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div
            className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 backdrop-blur-md text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-[#C97873]/40 transition-all duration-300 min-h-[300px]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="900"
          >
            <div>
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#C97873] bg-[#C97873]/15 px-3 py-1 rounded-full mb-4 border border-[#C97873]/30">
                Ethics Bound
              </span>
              <h3 className="text-xl font-bold leading-snug mb-4 text-white">
                No Ads <br /> No Tracking <br /> No Conflicts of Interest
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Brands can’t pay to appear on Pak Buy. We never process or sell your data.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 backdrop-blur-md text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-[#C97873]/40 transition-all duration-300 min-h-[300px]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1000"
          >
            <div>
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#C97873] bg-[#C97873]/15 px-3 py-1 rounded-full mb-4 border border-[#C97873]/30">
                Ethics Bound
              </span>
              <h3 className="text-xl font-bold mb-4 text-white">NO Auto-Renewal</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Membership renewal is your choice. We believe we must prove value to earn your ongoing trust.
                Renew because you want to!
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Offset) */}
        <div className="flex flex-col gap-6 md:mt-8">
          {/* Card 2 */}
          <div
            className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 backdrop-blur-md text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-[#C97873]/40 transition-all duration-300 min-h-[300px]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1100"
          >
            <div>
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#C97873] bg-[#C97873]/15 px-3 py-1 rounded-full mb-4 border border-[#C97873]/30">
                Ethics Bound
              </span>
              <h3 className="text-xl font-bold mb-4 text-white">Strictly Independent</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Pak Buy makes NO money from Members’ purchases. We accept NO funds from outside companies. We don’t sell medications or supplements.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 backdrop-blur-md text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-[#C97873]/40 transition-all duration-300 min-h-[300px]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            <div>
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#C97873] bg-[#C97873]/15 px-3 py-1 rounded-full mb-4 border border-[#C97873]/30">
                Ethics Bound
              </span>
              <h3 className="text-xl font-bold mb-4 text-white">Transparency</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We work for our members to ensure all pricing is clear and simple with no markup added and no compromises in value.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
