import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { useGetAllResourcesQuery } from "../../redux/services/resourceSlice";



const AboutUs: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const { data: resources } = useGetAllResourcesQuery({});
    const privacyPolicy = resources?.find((item: any) => item.name === "Privacy Policy")?.content;

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
                                        <h3 className="main-heading">Privacy Policy</h3>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ width: "100%", justifyContent: "center" }}>
                                <Col lg={24}>
                                    <div dangerouslySetInnerHTML={{ __html: privacyPolicy || "" }} />
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
                                {/* <li>We feature only companies with FDA-clearance, strong evidence, and clinical validation.</li> */}
                                <li>CHOOSE does NOT replace your doctor or insurance.</li>
                                <li>Member input and evolving evidence shape new CHOOSE Well Collections.</li>
                                <li><a className="text-blue-400 underline cursor-pointer" onClick={() => navigate("/tips")}>Learn more</a></li>
                            </ul>
                        </div>

                        {/* Right Card */}
                        <div
                            className="bg-[#000000c4] rounded-xl p-6 md:w-1/2"
                        >
                            <h3 className="text-lg font-semibold mb-4">CHOOSE standards:</h3>
                            <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
                                <li>FDA clearance (where applicable). and other relevant approvals</li>
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
