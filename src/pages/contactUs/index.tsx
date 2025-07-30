import React from "react";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";


const Contact: React.FC = () => {
    return (
        <>
            <Header />
            <section className="bg-[#1b1e28] text-white py-16 px-4 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left Side */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">CONTACT US</h2>
                        <h3 className="text-xl md:text-2xl font-semibold mb-6">Get In Touch With Us</h3>
                        <p className="text-sm md:text-base text-gray-300 mb-6">
                            We love connecting with our customers and vendors! Whether you have a question about your order,
                            want to learn more about becoming a vendor, or need assistance with anything else, our team is here
                            to help. Reach out to us and we’ll get back to you as soon as possible.
                        </p>

                        <div className="space-y-4 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <span>📞</span>
                                <p>619.405.6500</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>📧</span>
                                <a href="mailto:mh@choose-well.today" className="text-[#a4cdfa] hover:underline">
                                    mh@choose-well.today
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>📍</span>
                                <p>CHOOSE, Inc., 600 1st Ave, Suite 102 Seattle, WA 98104</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-[#2b2f3d] rounded-lg p-6 md:p-8 shadow-lg">
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-md bg-[#3a3f50] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 web-input"
                                style={{ marginBottom: '1rem' }}
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-md bg-[#3a3f50] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 web-input"
                                style={{ marginBottom: '1rem' }}
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 rounded-md bg-[#3a3f50] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 web-input"
                                style={{ marginBottom: '1rem' }}
                            />
                            <textarea
                                placeholder="Message"
                                rows={5}
                                className="w-full px-4 py-3 rounded-md bg-[#3a3f50] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 web-input"
                                style={{ marginBottom: '1rem' }}
                            ></textarea>
                            <button
                                type="submit"
                                className="site-btn w-full bg-[#e4cfc2] text-black py-2 rounded-full font-semibold hover:opacity-90 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="ethicsBoundary-bg">
                <ChooseInfoSection />
                <Footer />
            </section>
        </>
    );
};

export default Contact;
