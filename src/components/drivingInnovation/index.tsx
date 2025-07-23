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
                            <div className="flex flex-col md:flex-row items-start">
                                <div className="md:w-3/6 p-6 md:p-8">
                                    <div className="sec-title_title">
                                        Innovating Today for the Cures of Tomorrow
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title_heading">
                                        Rethinking What’s Possible in Gene Therapy and Editing
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Gene Matrix is committed to find out the new possibilities with the study of genes. From CRISPR editing to groundbreaking gene therapy, our research involves the real cures instead of treatments. Your health in the future will certainly require more than guesswork; it deserves great accuracy.
                                    </p>

                                    <section className="text-white py-16">
                                        <div className="container mx-auto px-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                                                {/* Feature 1 */}
                                                <div className="items-start space-x-6">
                                                    <div className="text-purple-500 text-3xl">
                                                        <img
                                                            src={ImageUrl("bon.png")}
                                                            alt="Genetic Discovery"
                                                            className=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-2">Next-Gen Genetic Discovery</h3>
                                                        <p className="text-gray-300">
                                                            We identify novel genetic markers and variants using AI-enhanced analysis to build smarter, more predictive DNA test panels for global populations.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Feature 2 */}
                                                <div className="items-start space-x-6">
                                                    <div className="text-purple-500 text-3xl">
                                                        <img
                                                            src={ImageUrl("cri.png")}
                                                            alt="AI Diagnostics"
                                                            className=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-2">AI-Powered Diagnostics & Insights</h3>
                                                        <p className="text-gray-300">
                                                            Our proprietary algorithms analyze massive genomic datasets, interpret clinical research, and deliver continuously evolving health insights with unmatched speed and precision.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Feature 3 */}
                                                <div className="items-start space-x-6">
                                                    <div className="text-purple-500 text-3xl">
                                                        <img
                                                            src={ImageUrl("dug.png")}
                                                            alt="Gene Therapy Research"
                                                            className=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-2">Research for Real-World Therapies</h3>
                                                        <p className="text-gray-300">
                                                            Gene Matrix is advancing gene therapies and digital health tools for chronic, hormonal, and autoimmune conditions, bringing personalized care from lab to life.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Feature 4 */}
                                                <div className="items-start space-x-6">
                                                    <div className="text-purple-500 text-3xl">
                                                        <img
                                                            src={ImageUrl("detection.png")}
                                                            alt="Healthcare Innovation"
                                                            className=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-2">Innovation That Impacts Lives</h3>
                                                        <p className="text-gray-300">
                                                            Every breakthrough we pursue, whether in testing, software, or treatment, is designed to make health more personal, proactive, and accessible for all.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </section>

                                </div>
                                <div className="md:w-3/6 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("rnd.png")}
                                        alt="Purple chromosomes"
                                        className="relative rounded-2xl  object-cover "
                                    />
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