import React from "react";

export const MemberBenefits: React.FC = () => {
    return (
        <section className="flex justify-center px-4 py-12 memberBenefits-bg">
            <div className="max-w-5xl w-full">
                {/* Heading */}
                <h2 className="text-center text-2xl md:text-3xl text-white mb-8">
                    Member benefits
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#000000c4] backdrop-blur-sm rounded-lg p-6 shadow-md text-white">
                        <h3 className="font-semibold mb-2">
                            Members enjoy a delightful shopping experience.
                        </h3>
                        <p className="text-gray-300 text-sm">One-click simplicity.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#000000c4] backdrop-blur-sm rounded-lg p-6 shadow-md text-white">
                        <h3 className="font-semibold mb-2">
                            All services and products are independently evaluated.
                        </h3>
                        <p className="text-gray-300 text-sm">
                            Only those meeting or exceeding our established criteria are included in CHOOSE Well Collections™
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
