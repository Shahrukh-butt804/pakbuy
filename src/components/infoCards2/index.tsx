// import React from 'react';
import { useNavigate } from 'react-router';

const InfoCards2 = () => {
    const navigate = useNavigate();
    return (
        <div
            className="bg-cover bg-center flex items-center justify-center px-6 py-6 info-cards2-container"
        >
            <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full md:items-stretch">
                {/* Left Card */}
                <div
                    className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 shadow-2xl backdrop-blur-md text-white rounded-2xl p-6 sm:p-8 md:w-1/2 flex flex-col justify-between"
                    data-aos="fade-up-right"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                >
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">A marketplace for <span className="text-[#C97873]">proven</span> health options</h2>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            The Pak Buy team has selected the best from a variety of companies located throughout the world and have brought
                            them together to form the Pak Buy Collections™ with common sense pricing.
                        </p>
                    </div>
                </div>

                {/* Right Card */}
                <div
                    className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/30 shadow-2xl backdrop-blur-md text-white rounded-2xl p-6 sm:p-8 md:w-1/2 flex flex-col justify-between"
                    data-aos="fade-up-left"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                >
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">A marketplace for <span className="text-[#C97873]">trusted</span> health solutions</h2>

                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            By thoughtfully combining complementary options, we equip our members to make informed decisions and move
                            forward on their path to better health.
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={() => navigate("/shop")}
                            className="py-3 px-6 rounded-full bg-[#C97873] hover:bg-[#b86762] text-white font-semibold text-sm shadow-lg shadow-[#C97873]/25 hover:shadow-[#C97873]/40 transition-all duration-300 active:scale-[0.98] inline-block"
                        >
                            SEE COLLECTIONS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCards2;
