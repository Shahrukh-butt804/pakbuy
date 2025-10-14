import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
// import { useGetAllResourcesQuery } from "../../redux/services/resourceSlice";



const AboutUs: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => { window.scrollTo(0, 0); }, []);

    // const { data: resources } = useGetAllResourcesQuery({});
    // const termsConditions = resources?.find((item: any) => item.name === "Terms And Conditions")?.content;


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
                                        <h3 className="main-heading">Tips</h3>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ width: "100%", justifyContent: "center" }}>
                                <Col lg={24}>
                                    <div>
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            Where do you find your experts to evaluate the health products and services?
                                        </p>
                                        <p><strong>Answer:</strong>  We utilize academic level AI to provide research that is unbiased by any third-party interests. This is augmented by select medical specialists who have no financial interest in Choose or any products on our platform. We remain committed to unbiased quality. </p>
                                        <br />
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                           Why can’t people just buy these products and services directly online or through AI?
                                        </p>
                                        <p><strong>Answer:</strong> They can, if they know where to look and how to sort through all the hype. The value that Choose provides is to match up 4 products and services from different companies to create a collection where everything fits together in a complementary way. Also they can’t beat our group pricing. </p>
                                        <br />
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                          Will there be more collections coming?
                                        </p>
                                        <p><strong>Answer:</strong> Yes, we are building more collections and will tailor them to meet customer interests. Women' s health, men’s health, headaches, anxiety, to name a few.</p>
                                        <br />
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                          What if a member doesn’t want everything in a particular collection or already has a component?
                                        </p>
                                        <p><strong>Answer:</strong> They can gift one of the components to a family member or friend. We also have a substitution process if needed.</p>
                                        <br />
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                          Why doesn’t Choose also do online medications and healthcare like so many others?
                                        </p>
                                        <p><strong>Answer:</strong> We want to be a valued addition to a member's health,  not a replacement. We want our members to keep their current health care providers if they like them</p>
                                        <br />
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                          Are you going to sell vitamins and supplements too?
                                        </p>
                                        <p><strong>Answer:</strong> Not at this point. The vitamins/supplement market is already overcrowded and consumers are generally brand-loyal. We do believe in food as the best supplement and have this integrated into our platform</p>
                                        <br />
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                          Is Choose going to market itself to physicians?
                                        </p>
                                        <p><strong>Answer:</strong> Yes! In fact we expect many physicians to recommend Choose to their patient for the additional health needs that they may want (but are not offered through the practice). Many of our services are ‘concierge’ adjacent but without the cost or hassle of switching providers.</p>
                                        <br />
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                          Some of the collections have the same service, why?
                                        </p>
                                        <p><strong>Answer:</strong> We wanted to go with the solution providers that are leaders in their field. We also believe that identification with recognizable brands is important for our Choose members.</p>
                                        <br />
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                          Aren’t these the same things that you see on social media?
                                        </p>
                                        <p><strong>Answer:</strong> Not everything on FB/Instagram/and TikTok is bad but much of it is!. We do the research and there are some items that may be publicly available. Other features of the Choose-Well Collections are the consumer-friendly versions of high level medical technology only offered to doctors or hospitals.</p>
                                        <br />
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                          Are you going to have an App?
                                        </p>
                                        <p><strong>Answer:</strong> Our customer research shows that people don’t want to have yet another app. Since most members won’t be checking in with us on a daily basis, our engaging website will be the best experience on their phones and desktops.</p>
                                        <br />
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                          Since members won’t be purchasing Collections every day, how will they stay engaged?
                                        </p>
                                        <p><strong>Answer:</strong> Members will receive periodic access to special access services and mini-collections, as well as unique social features and superior health content.</p>
                                        <br />
                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                                          Does being a health company limit you with channel partnerships?
                                        </p>
                                        <p><strong>Answer:</strong> No. Since we define ourselves as a lifestyle company will have many channel partnership opportunities in retail, etc, for those who want a retail shopping experience for health services.</p>
                                    </div>
                                    {/* <div dangerouslySetInnerHTML={{ __html: termsConditions || "" }} /> */}
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
                                <li><a className="text-blue-400 underline" onClick={() => navigate("/tips")}>Learn more</a></li>
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
