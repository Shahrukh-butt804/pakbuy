// import React from 'react';

const InfoCards = () => {
  return (
    <div className="flex items-center justify-center p-6 info-cards-container">
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full">
        {/* Left Card */}
        <div className="bg-[#000000c4] text-white rounded-xl p-8 flex-1">
          <p>
            <span className="font-semibold tracking-wider">CHOOSE™</span> was born in response to growing demand for{' '}
            <span className="font-semibold text-lg  blue-text">proven</span> health options that aren’t typically covered by insurance—
            and may not be recommended by physicians.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-[#000000c4] text-white rounded-xl p-8 flex-1">
          <p>
            Millions begin their health journey with hope, only to{' '}
            <span className="font-semibold text-lg blue-text">feel lost and frustrated</span> in a sea of influencers, sponsored content,
            ads, and endless conflicting reviews.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
