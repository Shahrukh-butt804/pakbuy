import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { ImageUrl } from '../../utils/Functions';
import { ChooseInfoSection } from "../../components/chooseInfoSection";



const Checkout: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#1c2230] text-white flex flex-col md:flex-row gap-6 p-4 md:p-10">
                {/* Sidebar */}

                <aside className="w-full md:w-1/3 bg-[#1e2432] text-white p-5 rounded-xl shadow-md">
                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-4">Summary</h3>

                    {/* Total */}
                    <div className="flex justify-between mb-4">
                        <span className="text-sm">Total</span>
                        <span className="text-sm font-medium">$622.00</span>
                    </div>

                    {/* Gift Card Discount */}
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Gift Card Discount</span>
                        <button className="text-xs text-pink-400 hover:text-pink-300">Apply Code</button>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            placeholder="Gift Card Code"
                            className="flex-1 p-2 rounded-l-full bg-[#2b3143] text-sm focus:outline-none"
                        />
                        <button className="bg-[#D7C6B7] hover:bg-[#D7C6B7] px-4 text-sm text-black font-semibold" style={{ color: '#000', borderRadius: "50px" }}>
                            Apply
                        </button>
                    </div>

                    {/* Coupon Code */}
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">Coupon Code</span>
                        <button className="text-xs text-pink-400 hover:text-pink-300" >Apply Code</button>
                    </div>
                    <div className="flex items-center mb-6">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="flex-1 p-2 rounded-l-full bg-[#2b3143] text-sm focus:outline-none"
                        />
                        <button className="bg-[#D7C6B7] hover:bg-[#D7C6B7] px-4 text-sm text-black font-semibold" style={{ color: '#000', borderRadius: "50px" }}>
                            Apply
                        </button>
                    </div>

                    {/* Product Card */}
                    <div className="flex items-center gap-3 bg-[#2b3143] p-3 rounded-lg mb-6">
                        <img
                            src={ImageUrl("prod1.png")}
                            alt="product"
                            className="rounded-md w-20 h-20 object-cover "
                        />

                        <div className="flex flex-col flex-1">
                            <h4 className="text-sm font-semibold">CHOOSE mind</h4>
                            <div className="flex text-yellow-400 text-xs mb-1">⭐⭐⭐⭐⭐</div>
                            <div className="text-sm font-bold">$600 <span className="text-gray-400 line-through text-xs ml-1">$700.00</span></div>
                        </div>
                    </div>

                    {/* Place Order Button */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200"
                    >
                        PLACE ORDER
                    </button>
                    {/* <button className="w-full bg-pink-400 hover:bg-pink-500 py-2 rounded-full text-black font-semibold mb-4">
                        PLACE ORDER
                    </button> */}

                    {/* Remember Me */}
                    <label className="flex items-center gap-2 text-sm cursor-pointer my-4">
                        <input type="checkbox" className="w-4 h-4 accent-pink-400" />
                        Remember Me
                    </label>
                </aside>
                {/* Main Form */}
                <main className="w-full md:w-3/4 bg-[#212737] p-6 rounded-2xl shadow-md">
                    {/* Billing Info */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Billing Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm mb-1">First Name</label>
                                <input type="text" className="w-full p-2 rounded web-input bg-[#2b3143] focus:outline-none" placeholder="First Name" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Last Name</label>
                                <input type="text" className="w-full p-2 rounded web-input bg-[#2b3143] focus:outline-none" placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm mb-1">Address</label>
                            <input type="text" className="w-full p-2 rounded web-input bg-[#2b3143] focus:outline-none" placeholder="Street Address" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div>
                                <label className="block text-sm mb-1">Country</label>
                                <select className="w-full p-2 rounded web-input bg-[#2b3143] focus:outline-none">
                                    <option value="">Select Country</option>
                                    <option value="pk">Pakistan</option>
                                    <option value="in">India</option>
                                    <option value="us">USA</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Region/State</label>
                                <select className="w-full p-2 rounded web-input bg-[#2b3143] focus:outline-none">
                                    <option value="">Select Region/State</option>
                                    <option value="sindh">Sindh</option>
                                    <option value="punjab">Punjab</option>
                                    <option value="kpk">KPK</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1">City</label>
                                <select className="w-full p-2 rounded web-input bg-[#2b3143] focus:outline-none">
                                    <option value="">Select City</option>
                                    <option value="karachi">Karachi</option>
                                    <option value="lahore">Lahore</option>
                                    <option value="islamabad">Islamabad</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Zip Code</label>
                                <input type="text" className="w-full p-2 rounded web-input bg-[#2b3143] focus:outline-none" />
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-2 rounded bg-[#2b3143] focus:outline-none web-input"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-[#2b3143] focus:outline-none web-input"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        {/* Ship to different address checkbox */}
                        <div className="flex items-center gap-2 mb-6">
                            <input
                                id="differentAddress"
                                type="checkbox"
                                className="w-4 h-4 accent-pink-500"
                            />
                            <label htmlFor="differentAddress" className="text-sm cursor-pointer">
                                Ship to a different address
                            </label>
                        </div>

                    </section>

                    {/* Card Details */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Card Details (Debit / Credit)</h2>
                        <div className="mb-4">
                            <label className="block text-sm mb-1">Name on Card</label>
                            <input type="text" className="w-full p-2 rounded web-input bg-[#2b3143] focus:outline-none" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm mb-1">Card Number</label>
                            <input type="text" className="w-full p-2 rounded web-input bg-[#2b3143] focus:outline-none" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1">Expiry Date</label>
                                <input type="text" className="w-full p-2 rounded web-input bg-[#2b3143] focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Security Code</label>
                                <input type="text" className="w-full p-2 rounded web-input bg-[#2b3143] focus:outline-none" />
                            </div>
                        </div>
                    </section>

                    {/* Additional Information */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
                        <textarea
                            rows={4}
                            className="w-full p-2 rounded web-textarea bg-[#2b3143] focus:outline-none"
                            placeholder="Notes about your order..."
                        />
                    </section>
                </main>
            </div>
            <section className="ethicsBoundary-bg">
                <ChooseInfoSection />
                <Footer />
            </section>


            {/* Order Success Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm z-50 transition-opacity duration-300">
                    <div
                        className={`bg-white rounded-2xl p-8 max-w-md w-full text-center relative transform transition-all duration-300 ease-out ${isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-3 text-black text-lg"
                        >
                            ✕
                        </button>

                        {/* Success Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="bg-green-500 p-4 rounded-full">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold mb-2 text-black">
                            Order Placed Successfully!
                        </h2>

                        {/* Message */}
                        <p className="text-gray-600 text-sm mb-6">
                            Congratulations on CHOOSING WELL! You will soon experience one of
                            the many powerful benefits of your CHOOSE Well membership.
                        </p>

                        {/* Continue Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="site-btn text-black font-semibold py-2 px-6 rounded-full"
                        >
                            CONTINUE SHOPPING
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Checkout;















