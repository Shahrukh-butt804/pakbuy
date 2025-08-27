import { Col, List, Row } from "antd";
import React, { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";



const data = [
    "●	Full payment will be collected at the time of purchase of a Membership, or a Collection. ",
    "●	CHOOSE never takes a profit on the sale of any Collection. We negotiate strenuously with each solution provider to discount their product or service and pass that savings directly through to our Members.",
    "●	CHOOSE never automatically renews Memberships. Prior to expiration the Member will receive renewal offers and will be entitled to renew their Membership only if they choose",
    "●	Stripe handles all payments and is a highly respect industry leader in securely managing customer payments.  As a result, CHOOSE never collects or stores credit card or banking information from our Members within our own server.",
    "●	We accept payment by all major methods as supported by Stripe.",
];
const data2 = [
    "●	Memberships may be cancelled within 60 days of purchase for a full refund, provided no Collections have been purchased. If a Member purchases one or more Collections within the 60-day introductory period, the Membership fee is non-refundable.",
    "●	Collections contain products and services from third parties. Therefore Collections are non-refundable. However, dissatisfaction with any particular product or service may be directed to the respective service provider. Since we only select vendors with high levels of customer satisfaction, we expect appropriate responsiveness and ultimate satisfaction.",
];



const AboutUs: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <Header />
            <section className=" text-white py-16 px-4 md:px-20">
                <div className="term">
                    <Row style={{ width: "100%", justifyContent: "center" }}>
                        <Col xs={23} md={18}>
                            <Row style={{ width: "100%", justifyContent: "center" }}>
                                <Col lg={24}>
                                    <div className="arrow-box">
                                        <FaArrowLeftLong
                                            className="arrow"
                                            onClick={() => navigate(-1)}
                                        />
                                        <h3 className="main-heading">Terms & Conditions</h3>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ width: "100%", justifyContent: "center" }}>
                                <Col lg={24}>
                                    <p className="web-p">
                                        Effective Date: August 20, 2025
                                        <br />
                                        <br />
                                        Welcome to CHOOSE ("CHOOSE Well," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our website and services (Collections).
                                        <br />
                                        <br />
                                        By accessing or using our website or services, you agree to be bound by these Terms.
                                        <br />
                                        <br />
                                        <h5 className="booking-card-name">Services</h5>
                                        CHOOSE Well provides exclusive Memberships, and access to health and lifestyle-oriented Collections. Each Collection contains four products or services addressing specific health or wellness areas, and can be purchased only by Members
                                        <br />
                                        <br />
                                        <h5 className="booking-card-name">Payment.</h5>
                                        <List
                                            bordered
                                            dataSource={data}
                                            renderItem={(item) => <List.Item>{item}</List.Item>}
                                        />
                                        <br />
                                        <h5 className="booking-card-name">Returns and Refunds</h5>
                                        <List
                                            bordered
                                            dataSource={data2}
                                            renderItem={(item) => <List.Item>{item}</List.Item>}
                                        />
                                        <br />
                                        <br />
                                        <h5 className="booking-card-name">Liability</h5>
                                        CHOOSE is not liable for any injuries, illnesses, or deaths that occur with any product or service contained in any Collection. CHOOSE is not a healthcare company nor is it a substitute for health insurance. CHOOSE does not provide direct care or offer medical advice. All statements are true to the best of our knowledge and have been verified by independent evaluation. As new information and more advanced options develop in the future, CHOOSE will update Members and may modify our Collections.
                                        <br />
                                        <br />
                                        <h5 className="booking-card-name">Limitation of Liability</h5>
                                       Our liability is limited to the total amount paid by you for the Membership and Collection.
                                        <br />
                                        <br />
                                        <h5 className="booking-card-name">Governing Law</h5>
                                        These Terms will be governed by and construed in accordance with the laws of the State of Washington, without regard to its conflict of law provisions.
                                        <br />
                                        <br />
                                        <h5 className="booking-card-name">Entire Agreement</h5>
                                        These Terms constitute the entire agreement between you and CHOOSE Inc. regarding the use of our website and services.
                                        <br />
                                        <br />
                                        <h5 className="booking-card-name">Severability</h5>
                                        If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.
                                        <br />
                                        <br />
                                        <h5 className="booking-card-name">Waiver</h5>
                                        No waiver by CHOOSE Inc. of any breach of these Terms shall be deemed a waiver of any subsequent breach.
                                        <br />
                                        <br />
                                        <h5 className="booking-card-name">Updates to these Terms</h5>
                                       We may update these Terms from time to time. We will post any changes on this page.
                                        <br />
                                        <br />
                                        <h5 className="booking-card-name">Contact Us</h5>
                                        If you have any questions about these Terms, please contact us via email at: <Link to="mailto:mh@choose-well.today">mh@choose-well.today</Link>
                                        <br />
                                        <br />
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>


            </section>
            <section className="ethicsBoundary-bg">
                <section className="text-white px-6 py-12">
                    <div className="max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between">
                        {/* Left Card */}
                        <div
                            className="bg-[#000000c4] rounded-xl p-6 md:w-1/2"
                        >
                            <h3 className="text-lg font-semibold mb-4">What you need to know</h3>
                            <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
                                <li>We feature only companies with FDA-clearance, strong evidence, and clinical validation.</li>
                                <li>CHOOSE does NOT replace your doctor or insurance.</li>
                                <li>Member input and evolving evidence shape new CHOOSE Well Collections.</li>
                                <li><a href="#" className="text-blue-400 underline">Learn more</a></li>
                            </ul>
                        </div>

                        {/* Right Card */}
                        <div
                            className="bg-[#000000c4] rounded-xl p-6 md:w-1/2"
                        >
                            <h3 className="text-lg font-semibold mb-4">CHOOSE standards:</h3>
                            <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
                                <li>FDA clearance (where applicable)</li>
                                <li>Clinical and peer-reviewed evidence</li>
                                <li>Outstanding consumer reviews and customer support</li>
                                <li>Common sense pricing, with no mark-up</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Disclaimer */}
                    <div
                        className="max-w-6xl mx-auto mt-8 text-xs text-center px-4 leading-relaxed footerinfo-p"
                    >
                        <p>
                            CHOOSE is not a healthcare company nor is it substitute for health insurance. CHOOSE does not provide direct care or offer
                            medical advice. All statements are true to the best of our knowledge and have been verified by independent evaluation. As new
                            information and more advanced options develop in the future, CHOOSE will update Members and may modify our Collections.
                        </p>
                    </div>
                </section>
                <Footer />
            </section>
        </>
    );
};

export default AboutUs;
