import React, { useState } from "react";
// import { ImageUrl } from '../../utils/Functions';
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import fbIcon from "../../assets/fb.png";
import inIcon from "../../assets/in.png";
import instaIcon from "../../assets/insta.png";
import twIcon from "../../assets/tw.png";
import ytIcon from "../../assets/yt.png";
import { useAddToNewsLetterMutation } from "../../redux/services/newsLetterSlice";

const Footer: React.FC = () => {
  const [addToNewsLetter, { isLoading }] = useAddToNewsLetterMutation();
  const [email, setEmail] = useState("");

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Shop", path: "/shop" },
    { label: "Contact Us", path: "/contactUs" },
    { label: "My Orders", path: "/my-orders" },
  ];

  async function handleNewsLetter(e: any) {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter your email",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter a valid email address",
      });
    }

    try {
      const response: any = await addToNewsLetter({ email });
      if (response?.data?.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response?.data?.message,
        });
        setEmail("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.message || response?.error?.data?.message,
        });
      }
    } catch (error: any) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || error?.data?.message || "Something went wrong",
      });
    }
  }

  const navigate = useNavigate();

  return (
    <footer className="w-full text-white py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#18181b] via-[#141417] to-[#0d0d0f] border-t border-[#C97873]/25 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xl font-extrabold text-[#C97873] tracking-wider uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C97873]"></span>
              Pak Buy
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Pak Buy is a marketplace for proven health options. The Pak Buy team has selected the best from a variety of companies located throughout the world and brought them together to form the Pak Buy Collections® with common sense pricing.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-bold !mb-4 text-[#C97873] uppercase tracking-widest">
                QUICK LINKS
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-400">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="hover:text-[#C97873] transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold !mb-4 text-[#C97873] uppercase tracking-widest">
                USEFUL LINKS
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <a
                    className="hover:text-[#C97873] transition-colors duration-200 cursor-pointer block"
                    onClick={() => navigate("/privacypolicy")}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#C97873] transition-colors duration-200 cursor-pointer block"
                    onClick={() => navigate("/termsconditions")}
                  >
                    Terms & Conditions
                  </a>
                </li>
                {/* <li>
                  <a
                    className="hover:text-[#C97873] transition-colors duration-200 cursor-pointer block"
                    onClick={() => navigate("/tips")}
                  >
                    Tips & Support
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-b from-[#1e1e22] to-[#141417] border border-[#C97873]/25 p-6 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C97873]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-extrabold text-sm mb-2 text-[#C97873] uppercase tracking-widest">
                STAY IN TOUCH
              </h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Provide your email address to receive exclusive updates on new Pak Buy Collections.
              </p>

              <form onSubmit={handleNewsLetter} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    onChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-[#0d0d0f] text-white text-xs rounded-xl border border-[#C97873]/30 px-3.5 py-2.5 outline-none focus:border-[#C97873] transition-colors placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#C97873] hover:bg-[#b86762] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center min-w-[44px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    >
                      <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 leading-snug">
                  We respect your privacy and will never share your details.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom copyright & icons */}
        <div className="border-t border-[#C97873]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            Pak Buy © {currentYear}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-70 hover:opacity-100 hover:border-[#C97873] transition-all duration-200">
              <img src={fbIcon} alt="Facebook" className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-70 hover:opacity-100 hover:border-[#C97873] transition-all duration-200">
              <img src={twIcon} alt="Twitter" className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-70 hover:opacity-100 hover:border-[#C97873] transition-all duration-200">
              <img src={inIcon} alt="LinkedIn" className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-70 hover:opacity-100 hover:border-[#C97873] transition-all duration-200">
              <img src={ytIcon} alt="YouTube" className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-70 hover:opacity-100 hover:border-[#C97873] transition-all duration-200">
              <img src={instaIcon} alt="Instagram" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

