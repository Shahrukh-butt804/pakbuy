import React from "react";

export const MemberBenefits: React.FC = () => {
    return (
        <section className="flex justify-center px-4 py-8 memberBenefits-bg">
            <div className="max-w-5xl w-full">
                {/* Heading */}
                <h2
                    className="text-center text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-wide"
                    data-aos="fade-up"
                    data-aos-delay="800"
                    data-aos-duration="800"
                >
                    Member <span className="text-[#C97873]">Benefits</span>
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div
                        className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl text-white hover:border-[#C97873]/40 transition-all duration-300"
                        data-aos="zoom-in"
                        data-aos-delay="1000"
                        data-aos-duration="800"
                    >
                        <h3 className="font-bold text-base sm:text-lg mb-2 text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#C97873]"></span>
                            Delightful Shopping Experience
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Members enjoy a seamless, curated shopping experience with one-click simplicity.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="bg-gradient-to-b from-[#18181b] to-[#101012] border border-[#C97873]/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl text-white hover:border-[#C97873]/40 transition-all duration-300"
                        data-aos="zoom-in"
                        data-aos-delay="1000"
                        data-aos-duration="800"
                    >
                        <h3 className="font-bold text-base sm:text-lg mb-2 text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#C97873]"></span>
                            Independently Evaluated
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Only services and products meeting or exceeding our established criteria are included in Pak Buy Collections™.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
