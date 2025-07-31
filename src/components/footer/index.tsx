import { Col, Row, Button, Input, Space } from 'antd';
import React from 'react';
import { ImageUrl } from '../../utils/Functions';



const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/aboutus" },
        { label: "Shop", path: "/shop" },
        { label: "Contact Us", path: "/contactUs" },
        { label: "My Orders", path: "/my-orders" },
    ];

    return (
        <Row justify={"center"}>
            <Col lg={22}>
                <footer className="w-full text-white py-12 px-8 font-sans footer-box bg-white/10 backdrop-blur-2xl">
                    <div className=" mx-auto">

                        <div className=" text-white py-10">
                            {/* <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"> */}
                            <Row>
                                <Col lg={8}>
                                    <div>
                                        <h2 className="text-lg font-semibold mb-4">CHOOSE</h2>
                                        <p className="text-sm text-white w-[90%] footer-p">
                                            CHOOSE Well is a marketplace for proven health options. The CHOOSE team has selected
                                            the best from a variety of companies located throughout the world and have brought them
                                            together to form the CHOOSE Well Collections® with common sense pricing.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div>
                                            <h2 className="text-sm font-bold mb-4">QUICK LINKS</h2>
                                            {/* <ul className="space-y-2 text-sm text-gray-300">
                                                <li><a href="/" className="hover:text-white">Home</a></li>
                                                <li><a href="/aboutus" className="hover:text-white">About Us</a></li>
                                                <li><a href="/shop" className="hover:text-white">Shop</a></li>
                                                <li><a href="/contactUs" className="hover:text-white">Contact Us</a></li>
                                                <li><a href="/my-orders" className="hover:text-white">My Orders</a></li>
                                            </ul> */}
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                {footerLinks.map((link) => (
                                                    <li key={link.path}>
                                                        <a href={link.path} className="hover:text-white">
                                                            {link.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 className="text-sm font-bold mb-4">USEFUL LINKS</h2>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                                                <li><a href="#" className="hover:text-white">Help</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="bg-white p-6 rounded-3xl shadow-md text-black email-box">
                                        <h3 className="font-semibold text-sm mb-2">STAY IN TOUCH</h3>
                                        <p className="text-xs mb-3 text-gray-700">
                                            Provide your email address and we'll keep you updated with CHOOSE Well Collections.
                                        </p>
                                        <Space direction="vertical" size="middle" className='mb-4 w-full'>
                                            <Space.Compact style={{ width: '100%' }}>
                                                <Input defaultValue="Enter Your Email Here" />
                                                <Button type="primary"><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="20" height="20">
                                                    <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                                                </svg></Button>
                                            </Space.Compact>
                                        </Space>
                                        <p className="text-[10px] mt-2 text-gray-600">
                                            By clicking Send, you agree to receive periodic emails from CHOOSE. We will never disclose your email address to anyone else.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            {/* </div> */}
                        </div>

                        {/* Copyright */}
                        <div className="border-t border-white/10 pt-2 ">

                            <div className="flex space-x-2 mt-4 justify-between items-center copyright-section">
                                <p className="text-white text-sm">
                                    CHOOSE  © {currentYear}  Copyright 2025. All rights reserved
                                </p>
                                <div className="flex space-x-4 copyright-icons">
                                    <a href="#"><img
                                        src={ImageUrl("fb.png")}
                                        alt="well"
                                        className="w-7"
                                    /></a>
                                    <a href="#"><img
                                        src={ImageUrl("tw.png")}
                                        alt="well"
                                        className="w-7"
                                    /></a>
                                    <a href="#"><img
                                        src={ImageUrl("in.png")}
                                        alt="well"
                                        className="w-7"
                                    /></a>
                                    <a href="#"><img
                                        src={ImageUrl("yt.png")}
                                        alt="well"
                                        className="w-7"
                                    /></a>
                                    <a href="#"><img
                                        src={ImageUrl("insta.png")}
                                        alt="well"
                                        className="w-7"
                                    /></a>
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