// import React from 'react';

const InfoCards = () => {
  return (
    <div className="flex items-center justify-center p-6 !px-2 info-cards-container">
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full">

        {/* Right Card */}
        <div
          className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 shadow-2xl backdrop-blur-md text-white rounded-2xl p-8 flex-1"
          data-aos="fade-left"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          <p className="text-gray-200 leading-relaxed text-sm md:text-base">
            Millions begin their health journey with hope, only to{' '}
            <span className="font-bold text-[#C97873]">feel lost and frustrated</span> in a sea of influencers, sponsored content,
            ads, and endless conflicting reviews.
          </p>
        </div>

        {/* Left Card */}
        <div
          className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 shadow-2xl backdrop-blur-md text-white rounded-2xl p-8 flex-1"
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          <p className="text-gray-200 leading-relaxed text-sm md:text-base">
            <span className="font-semibold tracking-wider text-white">Pak Buy™</span> was born in response to growing demand for{' '}
            <span className="font-bold text-[#C97873]">proven</span> health options that aren’t typically covered by insurance—
            and may not be recommended by physicians.
          </p>
        </div>


      </div>
    </div>
  );
};

export default InfoCards;
