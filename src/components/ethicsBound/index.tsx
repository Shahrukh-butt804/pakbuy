import React from "react";

export const EthicsBound: React.FC = () => {
  return (
    <section className="flex justify-center px-8 py-12 ethics-bound-section">
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        
        {/* Card 1 */}
        <div className="bg-[#1e2432b6] text-white rounded-xl p-6 flex flex-col h-full">
          <span className="text-sm italic text-gray-300 mb-4 block bound-itaclic-text">ethics bound</span>
          <h3 className="text-lg font-semibold leading-6 mb-3">
            No Ads <br /> No Cookies <br /> No Tracking <br /> No Conflicts of Interest
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mt-auto">
            • Brands can’t pay to appear on CHOOSE. <br />
            • We never process or sell your data. <br />
            • We don’t sell medications or supplements.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1e2432b6] text-white rounded-xl p-6 flex flex-col h-full ">
          <span className="text-sm italic text-gray-300 mb-4 block bound-itaclic-text">ethics bound</span>
          <h3 className="text-lg font-semibold mb-3">Strictly Independent</h3>
          <p className="text-gray-400 text-sm leading-relaxed mt-auto">
            CHOOSE makes NO money from Members’ purchases. <br />
            We accept NO funds from outside companies such as: <br />
            • Pharma <br />
            • Health systems <br />
            • Insurers
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1e2432b6] text-white rounded-xl p-6 flex flex-col h-full ">
          <span className="text-sm italic text-gray-300 mb-4 block bound-itaclic-text">ethics bound</span>
          <h3 className="text-lg font-semibold mb-3">NO Auto-Renewal</h3>
          <p className="text-gray-400 text-sm leading-relaxed mt-auto">
            Membership renewal is your choice. We believe we must prove value to earn your ongoing trust.
            <br />
            renew because you want to
          </p>
        </div>

        {/* Card 4 with image */}
        <div
          className="bg-[#1e2432b6] relative rounded-xl p-6 flex flex-col h-full text-white bg-cover bg-center"
        >
          <div className="relative z-10 flex flex-col h-full">
            <span className="text-sm italic text-gray-300 mb-4 block bound-itaclic-text">ethics bound</span>
            <div className="mt-auto">
              <h3 className="text-lg font-semibold mb-3">Transparency</h3>
              <p className="text-gray-100 text-sm leading-relaxed">
                We work for our members to ensure all pricing is clear and simple with no markup added and no compromises in value.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
