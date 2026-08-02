import { Col, Row, Button, Input, Space } from "antd";
import React, { useState } from "react";
// import { ImageUrl } from '../../utils/Functions';
import { Link } from "react-router";
import fbIcon from "../../assets/fb.png";
import twIcon from "../../assets/tw.png";
import inIcon from "../../assets/in.png";
import ytIcon from "../../assets/yt.png";
import instaIcon from "../../assets/insta.png";
import { useAddToNewsLetterMutation } from "../../redux/services/newsLetterSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

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
    <Row className="px-2 lg:px-0" justify={"center"}>
      <Col lg={22}>
        <footer className="w-full text-white py-12 px-8 font-sans footer-box bg-gradient-to-b from-[#18181b] to-[#101012] border-t border-[#C97873]/20 backdrop-blur-2xl">
          <div className=" mx-auto">
            <div className=" text-white py-10">
              <Row>
                <Col lg={8}>
                  <div>
                    <h2 className="text-lg font-semibold mb-4 text-[#C97873]">Pak Buy</h2>
                    <p className="text-sm text-gray-400 w-[90%] footer-p leading-relaxed">
                      Pak Buy is a marketplace for proven health options. The
                      Pak Buy team has selected the best from a variety of
                      companies located throughout the world and have brought
                      them together to form the Pak Buy Collections® with
                      common sense pricing.
                    </p>
                  </div>
                </Col>
                <Col lg={8}>
                  <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h2 className="text-sm font-bold mb-4 text-[#C97873] uppercase tracking-widest">QUICK LINKS</h2>
                      {/* <ul className="space-y-2 text-sm text-gray-300">
                                                <li><a href="/" className="hover:text-white">Home</a></li>
                                                <li><a href="/aboutus" className="hover:text-white">About Us</a></li>
                                                <li><a href="/shop" className="hover:text-white">Shop</a></li>
                                                <li><a href="/contactUs" className="hover:text-white">Contact Us</a></li>
                                                <li><a href="/my-orders" className="hover:text-white">My Orders</a></li>
                                            </ul> */}
                      <ul className="space-y-2 text-sm text-gray-400">
                        {footerLinks.map((link) => (
                          <li key={link.path}>
                            <Link to={link.path} className="hover:text-[#C97873] transition-colors duration-300">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-sm font-bold mb-4 text-[#C97873] uppercase tracking-widest">USEFUL LINKS</h2>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                          <a
                            className="hover:text-[#C97873] transition-colors duration-300 cursor-pointer"
                            onClick={() => navigate("/privacypolicy")}
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a
                            className="hover:text-[#C97873] transition-colors duration-300 cursor-pointer"
                            onClick={() => navigate("/termsconditions")}
                          >
                            Terms & Conditions
                          </a>
                        </li>
                        <li>
                          <a
                            className="hover:text-[#C97873] transition-colors duration-300 cursor-pointer"
                            onClick={() => navigate("/tips")}
                          >
                            Tips
                          </a>
                        </li>
                        {/* <li><a href="#" className="hover:text-white">Resource</a></li> */}
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col lg={8}>
                  <div className="bg-gradient-to-b from-[#1e1e22] to-[#151517] border border-[#C97873]/20 p-6 rounded-2xl shadow-2xl text-white email-box">
                    <h3 className="font-semibold text-sm mb-2 text-[#C97873] uppercase tracking-widest">
                      STAY IN TOUCH
                    </h3>
                    <p className="text-xs mb-3 !text-gray-400">
                      Provide your email address and we'll keep you updated with
                      Pak Buy Collections.
                    </p>
                    <Space
                      direction="vertical"
                      size="middle"
                      className="mb-4 w-full"
                    >
                      <div
                        style={{ display: "flex", gap: "4px", width: "100%" }}
                      >
                        <Input
                          onChange={(e: any) => setEmail(e.target.value)}
                          value={email}
                          type="email"
                          placeholder="Enter your email"
                          className="!bg-[#0d0d0d] !text-white !border-[#C97873]/30 !placeholder-gray-500"
                        />
                        <Button
                          onClick={handleNewsLetter}
                          loading={isLoading}
                          disabled={isLoading}
                          type="primary"
                          style={{ backgroundColor: '#C97873', borderColor: '#C97873' }}
                          className="hover:!bg-[#b86762]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                          >
                            <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                          </svg>
                        </Button>
                      </div>
                    </Space>
                    <p className="text-[10px] mt-2 !text-gray-500">
                      By clicking Send, you agree to receive periodic emails
                      from Pak Buy. We will never disclose your email address to
                      anyone else.
                    </p>
                  </div>
                </Col>
              </Row>
              {/* </div> */}
            </div>

            {/* Copyright */}
            <div className="border-t border-[#C97873]/20 pt-2 ">
              <div className="flex space-x-2 mt-4 justify-between items-center copyright-section">
                <p className="text-gray-400 text-sm">
                  Pak Buy © {currentYear} Copyright 2025. All rights reserved
                </p>
                <div className="flex space-x-4 copyright-icons">
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <img src={fbIcon} alt="well" className="w-7" />
                  </a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <img src={twIcon} alt="well" className="w-7" />
                  </a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <img src={inIcon} alt="well" className="w-7" />
                  </a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <img src={ytIcon} alt="well" className="w-7" />
                  </a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <img src={instaIcon} alt="well" className="w-7" />
                  </a>
                  {/* <a href="#"><img src="/icons/youtube.svg" alt="YouTube" className="w-4 h-4" /></a> */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Col>
    </Row>
  );
};

export default Footer;
