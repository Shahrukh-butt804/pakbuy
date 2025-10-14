import React from "react";
import { useNavigate } from 'react-router';

export const ChooseInfoSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between">
        {/* Left Card */}
        <div
          className="bg-[#000000c4] rounded-xl p-6 md:w-1/2"
          data-aos="fade-up-right"
          data-aos-duration="800"
        >
          <h3 className="text-lg font-semibold mb-4">What you need to know</h3>
          <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
            {/* <li>We feature only companies with FDA-clearance and/or other relevant approvals,  strong evidence, and clinical validation.</li> */}
            <li>CHOOSE does NOT replace your doctor or insurance.</li>
            <li>Member input and evolving evidence shape new CHOOSE Well Collections.</li>
            <li><a className="text-blue-400 underline cursor-pointer" onClick={() => navigate("/tips")}>Learn more</a></li>
          </ul>
        </div>

        {/* Right Card */}
        <div
          className="bg-[#000000c4] rounded-xl p-6 md:w-1/2"
          data-aos="fade-up-left"
          data-aos-duration="800"
        >
          <h3 className="text-lg font-semibold mb-4">CHOOSE standards:</h3>
          <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
            <li>FDA clearance (where applicable). and other relevant approvals</li>
            <li>Clinical and peer-reviewed evidence</li>
            <li>Outstanding consumer reviews and customer support</li>
            <li>Common sense pricing, with no mark-up</li>
          </ul>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div
        className="max-w-6xl mx-auto mt-8 text-xs text-center px-4 leading-relaxed footerinfo-p"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <p>
          CHOOSE is not a healthcare company nor is it substitute for health insurance. CHOOSE does not provide direct care or offer
          medical advice. All statements are true to the best of our knowledge and have been verified by independent evaluation. As new
          information and more advanced options develop in the future, CHOOSE will update Members and may modify our Collections.
        </p>
      </div>
    </section>
  );
};
