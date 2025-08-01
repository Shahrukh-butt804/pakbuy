import React, { useState } from "react";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { useSubmitFormMutation } from "../../redux/services/contactSlice";
import Swal from "sweetalert2";


const Contact: React.FC = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitForm, { isLoading }] = useSubmitFormMutation()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response: any = await submitForm(formData);
            console.log("Response Data:", response);
            if (response?.data?.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: response?.data?.message,
                    timer: 2000
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.message || response?.error?.data?.message,
                })
            }
        } catch (error: any) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || error?.data?.message || 'Something went wrong',
            })

        }

    };


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
                        <form className="space-y-4 flex flex-col gap-3" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-[#3a3f50] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-[#3a3f50] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-[#3a3f50] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-[#3a3f50] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="site-btn w-full bg-[#e4cfc2] text-black py-2 rounded-full font-semibold hover:opacity-90 transition"
                            >
                                {isLoading ? 'Submitting...' : 'Submit'}
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
