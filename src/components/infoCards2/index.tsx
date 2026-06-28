// import React from 'react';
import { useNavigate } from 'react-router';
// import { ImageUrl } from '../../utils/Functions';
import well from "../../assets/well.png";

const InfoCards2 = () => {
    const navigate = useNavigate();
    return (
        <div
            className="bg-cover bg-center flex items-center justify-center px-6 py-6 info-cards2-container"
        >
            <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full">
                {/* Left Card */}
                <div
                    className="bg-[#000000c4] bg-opacity-60 text-white rounded-xl p-6 md:w-1/2 info-cards2-black"
                    data-aos="fade-up-right"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                >
                    <h2 className="text-xl font-semibold mb-4">A marketplace for proven health options</h2>
                    <p className="text-sm">
                        The Pak Buy team has selected the best from a variety of companies located throughout the world and have brought
                        them together to form the Pak Buy Collections™ with common sense pricing.
                    </p>
                </div>

                {/* Right Card */}
                <div
                    className="bg-[#ffffffaf] bg-opacity-70 text-gray-900 rounded-xl p-6 md:w-1/2 info-cards2-white"
                    data-aos="fade-up-left"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                >
                    {/* <img
                        src={ImageUrl("well.png")}
                        alt="well"
                        className="mb-4"
                    /> */}
                    <img
                        src={well}
                        alt="well"
                        className="mb-4"
                    />
                    <p className="text-sm mb-6">
                        By thoughtfully combining complementary options, we equip our members to make informed decisions and move
                        forward on their path to better health.
                    </p>
                    <button
                        onClick={() => navigate("/shop")}
                        className="site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200 !text-white"
                    >
                        SEE COLLECTIONS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoCards2;
