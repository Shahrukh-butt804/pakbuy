import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { useSubmitFormMutation } from "../../redux/services/contactSlice";
import { useNavigate } from 'react-router';
import { Phone, Mail, MapPin, ArrowLeft, Send, Sparkles, Info } from "lucide-react";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const navigate = useNavigate();

    const [submitForm, { isLoading }] = useSubmitFormMutation();

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
            if (response?.data?.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: response?.data?.message || 'Message sent successfully!',
                    timer: 2000,
                    confirmButtonColor: '#C97873'
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response?.message || response?.error?.data?.message || 'Failed to send message',
                    confirmButtonColor: '#C97873'
                });
            }
        } catch (error: any) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error?.message || error?.data?.message || 'Something went wrong',
                confirmButtonColor: '#C97873'
            });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-[#C97873] selection:text-white flex flex-col justify-between">
            <Header />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Back Button */}
                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#C97873]/20 border border-white/10 hover:border-[#C97873]/40 text-xs font-bold tracking-wider text-white transition-all duration-200 mb-8 active:scale-95"
                >
                    <ArrowLeft className="w-4 h-4 text-[#C97873]" />
                    <span>Back</span>
                </button>

                {/* Hero Section Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
                    {/* Left Column: Contact Details */}
                    <div className="space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 text-[#C97873] text-xs font-bold uppercase tracking-widest mb-3">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Get In Touch</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                                Contact <span className="text-[#C97873]">Us</span>
                            </h1>
                            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                                We love connecting with our members and vendors! Whether you have a question about your order,
                                want to learn more about becoming a vendor, or need assistance with anything else, our team is here
                                to help. Reach out to us and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#121215]/80 border border-[#C97873]/20 backdrop-blur-md">
                                <div className="w-10 h-10 rounded-xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873] shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Phone Support</h4>
                                    <p className="text-sm sm:text-base font-semibold text-white">+92 317 2183987</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#121215]/80 border border-[#C97873]/20 backdrop-blur-md">
                                <div className="w-10 h-10 rounded-xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873] shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email Us</h4>
                                    <a
                                        href="mailto:pakbuy.pk"
                                        className="text-sm sm:text-base font-semibold text-[#C97873] hover:text-[#E08A83] transition-colors"
                                    >
                                        pakbuy.pk
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#121215]/80 border border-[#C97873]/20 backdrop-blur-md">
                                <div className="w-10 h-10 rounded-xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873] shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Location</h4>
                                    <p className="text-sm sm:text-base text-gray-200">
                                        Karachi, Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-[#121215]/90 border border-[#C97873]/25 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C97873]/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-1">Send a Message</h2>
                            <p className="text-xs text-gray-400 mb-6">Fill out the form below and our team will get back to you shortly.</p>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] text-white placeholder-gray-600 border border-[#C97873]/30 focus:outline-none focus:border-[#C97873] text-sm transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="name@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] text-white placeholder-gray-600 border border-[#C97873]/30 focus:outline-none focus:border-[#C97873] text-sm transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="How can we help?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] text-white placeholder-gray-600 border border-[#C97873]/30 focus:outline-none focus:border-[#C97873] text-sm transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Write your message here..."
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] text-white placeholder-gray-600 border border-[#C97873]/30 focus:outline-none focus:border-[#C97873] text-sm transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    disabled={isLoading}
                                    type="submit"
                                    className="w-full py-3.5 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider text-white bg-[#C97873] hover:bg-[#b86762] shadow-lg shadow-[#C97873]/25 hover:shadow-[#C97873]/40 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    <span>{isLoading ? 'Submitting...' : 'Send Message'}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {/* Left Card */}
                    <div className="bg-[#121215]/80 border border-[#C97873]/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
                        <h3 className="text-lg font-extrabold text-white mb-4 flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873]">
                                <Info className="w-4 h-4" />
                            </div>
                            What you need to know
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#C97873] mt-1.5 shrink-0" />
                                <span>Pak Buy does NOT replace your doctor or health insurance.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#C97873] mt-1.5 shrink-0" />
                                <span>Member input and evolving clinical evidence shape new Pak Buy Collections.</span>
                            </li>
                            <li className="flex items-start gap-2.5 pt-1">
                                <span className="w-2 h-2 rounded-full bg-[#C97873] mt-1.5 shrink-0" />
                                <a
                                    onClick={() => navigate("/tips")}
                                    className="text-[#C97873] underline font-semibold cursor-pointer hover:text-[#E08A83] transition-colors"
                                >
                                    Learn more details
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Card */}
                    <div className="bg-[#121215]/80 border border-[#C97873]/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
                        <h3 className="text-lg font-extrabold text-white mb-4 flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#C97873]/15 border border-[#C97873]/30 flex items-center justify-center text-[#C97873]">
                                <Sparkles className="w-4 h-4" />
                            </div>
                            Pak Buy Standards
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#C97873] mt-1.5 shrink-0" />
                                <span>FDA clearance (where applicable) and relevant clinical approvals.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#C97873] mt-1.5 shrink-0" />
                                <span>Clinical and peer-reviewed scientific evidence.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#C97873] mt-1.5 shrink-0" />
                                <span>Outstanding consumer reviews and customer support.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#C97873] mt-1.5 shrink-0" />
                                <span>Common sense pricing, with no mark-up added.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Legal Disclaimer */}
                <div className="text-center text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed pb-8">
                    <p>
                        Pak Buy is not a healthcare company nor is it a substitute for health insurance. Pak Buy does not provide direct care or offer
                        medical advice. All statements are true to the best of our knowledge and have been verified by independent evaluation. As new
                        information and more advanced options develop in the future, Pak Buy will update Members and may modify our Collections.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
