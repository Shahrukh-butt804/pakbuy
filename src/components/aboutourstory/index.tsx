import { Col, Row } from 'antd';
import React from 'react';
import { ImageUrl } from '../../utils/Functions';


const MissionVisionSection: React.FC = () => {
    return (
        <>
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 ">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <div className="sec-title_title">
                                        our story
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title_heading">
                                        We Work at the Intersection of Biotech and AI
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        At Gene Matrix, we bring cutting-edge biotechnology and artificial intelligence together to redefine how the world interprets and navigates health. We're committed to making precision medicine personal, predictive, and accessible. From gene testing to gene therapy and editing, we're developing smarter, safer, and more meaningful ways to use DNA and empowering individuals and clinicians to make informed, data-driven decisions about health and wellness.
                                    </p>
                                </div>
                                <div className="md:w-2/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("storypic.png")}
                                        alt="Purple chromosomes"
                                        className="relative rounded-2xl w-full max-w-lg object-cover "
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 ">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-3/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("storypic2.png")}
                                        alt="Purple chromosomes"
                                        className="relative rounded-2xl w-full  object-cover"
                                    />
                                </div>
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <div className="sec-title_title">
                                        our Mission and VISION
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title_heading">
                                        Genetics for Good
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        <strong>Mission:</strong> Empower individuals with personalized health solutions through AI and genetic science.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        <strong>Vision:</strong> To become the global standard in preventive, predictive, and personalized care.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="sec-title text-center">
                        <div className="sec-title_title justify-center">
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            TRUSTED WORLDWIDE
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="sec-title_heading">
                            Partnerships and Certification
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default MissionVisionSection;