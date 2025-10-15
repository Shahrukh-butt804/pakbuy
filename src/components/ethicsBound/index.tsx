import React from "react";

export const EthicsBound: React.FC = () => {
  return (
    <section className="flex justify-center px-8 py-12 ethics-bound-section">
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div
            className="bg-[#1e2432b6] text-white rounded-xl p-10 flex flex-col h-full min-h-[450px] bond-bg-change"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="900"
          >
            <span className="text-sm italic text-gray-300 mb-4 block bound-itaclic-text">ethics bound</span>
            <h3 className="text-lg font-semibold leading-6 mb-3">
              No Ads <br />  No Tracking <br /> No Conflicts of Interest
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Brands can’t pay to appear on CHOOSE. <br />
              We never process or sell your data. <br />
              {/* • We don’t sell medications or supplements. */}
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#1e2432b6] text-white rounded-xl p-10 flex flex-col h-full min-h-[450px] bond-bg-change"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1000"
          >
            <span className="text-sm italic text-gray-300 mb-4 block bound-itaclic-text">ethics bound</span>
            <h3 className="text-lg font-semibold mb-3">NO Auto-Renewal</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Membership renewal is your choice. We believe we must prove value to earn your ongoing trust.
              <br />
              Renew because you want to!
            </p>
          </div>
        </div>

        {/* Right Column (Offset) */}
        <div className="flex flex-col gap-6 md:mt-10">
          {/* Card 2 */}
          <div
            className="bg-[#1e2432b6] text-white rounded-xl p-10 flex flex-col h-full min-h-[450px] bond-bg-change"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1100"
          >
            <span className="text-sm italic text-gray-300 mb-4 block bound-itaclic-text">ethics bound</span>
            <h3 className="text-lg font-semibold mb-3">Strictly Independent</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              CHOOSE makes NO money from Members’ purchases. <br />
              We accept NO funds from outside companies.<br />
              We don’t sell medications or supplements.
              {/* • Pharma <br />
              • Health systems <br />
              • Insurers */}
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="relative rounded-xl p-10 flex flex-col h-full min-h-[450px] bond-bg-change text-white bg-cover bg-center bg-[#1e2432b6]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-sm italic text-gray-300 mb-4 block bound-itaclic-text">ethics bound</span>
              <div>
                <h3 className="text-lg font-semibold mb-3">Transparency</h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  We work for our members to ensure all pricing is clear and simple with no markup added and no compromises in value.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
