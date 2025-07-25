import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Globe } from 'lucide-react';
import { Col, Row } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageUrl } from '../../utils/Functions';
import { Link } from 'react-router';


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Row justify={"center"}>
            <Col lg={22}>
                <footer className="w-full text-white py-12 px-8 font-sans footer-box">
                    <div className=" mx-auto">

                        <Row gutter={[32, 32]}>
                            <Col xl={4} lg={5} md={24}>
                                <div className="lg:col-span-2">
                                    <img
                                        src={ImageUrl("logo.png")}
                                        alt={""}
                                        className="mb-4"
                                    />
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        The tests offered through the Gene Matrix LLC® are not intended to diagnose or treat disease. Our tests are not intended to be a substitute for seeking professional medical advice. Do not make any changes to your current medications or dosing without consulting your healthcare provider.
                                    </p>
                                </div>
                            </Col>
                            <Col xl={20} lg={19} md={24}>
                                <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 mb-12">
                                    {/* Navigation Columns */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold mb-3">Company</h3>
                                        <ul className="space-y-2">
                                            {[
                                                { name: 'About Us', path: '/aboutUs' },
                                                { name: 'Contact Us', path: '/contactUs' },
                                                { name: 'Our Science', path: '/ourScience' },
                                                { name: 'R&D and Innovation', path: '/rdInnovation' },
                                                { name: 'Franchise', path: '/franchise' },
                                                { name: 'Testimonials', path: '/testimonials' },
                                                { name: 'Newsroom & Blog', path: '/newsroomBlog' },
                                            ].map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        to={item.path}
                                                        className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold mb-3">Learn</h3>
                                        <ul className="space-y-2">
                                            {[
                                                { name: 'Patients Portal', path: '/patientsPortal' },
                                                { name: 'Healthcare Providers Portal', path: '/healthcare' },
                                                { name: 'Careers', path: '/careers' },
                                                { name: 'Global Impact', path: '/globalImpact' },
                                            ].map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        to={item.path}
                                                        className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>


                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold mb-3">Tests</h3>
                                        <ul className="space-y-2">
                                            {[
                                                { name: 'Shop All Tests', path: '/shop-all-tests' },
                                                { name: 'GeneCore', path: '/geneCore' },
                                                { name: 'GeneDiet', path: '/geneDiet' },
                                                { name: 'GeneMind', path: '/geneMind' },
                                                { name: 'GenePain', path: '/genePain' },
                                                { name: 'GeneEstrogen', path: '/geneEstrogen' },
                                                { name: 'GeneBaby', path: '/geneBaby' },
                                                { name: 'GeneSport', path: '/geneSport' },
                                                { name: 'GeneHealth', path: '/geneHealth' },
                                                { name: 'GeneResilience', path: '/geneResilience' },
                                                { name: 'GeneCancer', path: '/geneCancer' },
                                                { name: 'GenePharma', path: '/genePharma' },
                                            ].map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        to={item.path}
                                                        className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>


                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold mb-3">Legal</h3>
                                        <ul className="space-y-2">
                                            {[
                                                { name: 'Privacy Policy', path: '/privacyPolicy' },
                                                { name: 'Terms of Service', path: '/termsService' },
                                                { name: 'HIPAA / GDPR Compliance', path: '/hipaa' },
                                                { name: 'Medical Disclaimer', path: '/medicalDisclaimer' },
                                                { name: 'Waiver of Liability', path: '/waiverLiability' },
                                                { name: 'DPA', path: '/dpa' },
                                                { name: 'News Artical', path: '/newsartical' },
                                                { name: 'News Article Expands', path: '/newsArticleExpands' },
                                                { name: 'Consent Form', path: '/consentForm' },
                                            ].map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        to={item.path}
                                                        className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-4 ">
                                        <h3 className="text-lg font-semibold mb-3">Social</h3>
                                        <div className="flex flex-wrap gap-2 mb-12">
                                            {[
                                                { icon: <Facebook size={18} />, label: 'Facebook' },
                                                { icon: <Twitter size={18} />, label: 'Twitter' },
                                                { icon: <Instagram size={18} />, label: 'Instagram' },
                                                { icon: <Youtube size={18} />, label: 'YouTube' },
                                                { icon: <Globe size={18} />, label: 'Website' }
                                            ].map((social, index) => (
                                                <a
                                                    key={index}
                                                    href="#"
                                                    className="w-6 h-10 bg-white/10 rounded-full flex items-center  hover:bg-purple-600 transition-all duration-300 hover:-translate-y-1"
                                                    aria-label={social.label}
                                                >
                                                    {social.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {/* Top Section */}


                        {/* Social Media Section */}


                        {/* Trust Badges */}
                      

                        {/* Copyright */}
                        <div className="border-t border-white/10 pt-6 text-center">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} Gene Matrix LLC | All Rights Reserved
                            </p>
                        </div>
                    </div>
                </footer>
            </Col>
        </Row>
    );
};

export default Footer;