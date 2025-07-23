import { Col, Row } from 'antd';
import React from 'react';
import { ImageUrl } from '../../utils/Functions';
import { UserPlus } from 'lucide-react';


const MissionVisionSection: React.FC = () => {
    return (
        <>
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20 translate-y-4 transition-all duration-1000 ease-out py-8">
                        <div className="overflow-hidden transition-all duration-300 hover:shadow-xl ">
                            <div className="flex flex-col md:flex-row items-start">
                                <div className="md:w-4/6 p-6 md:p-8">
                                    <div className="sec-title_title">
                                        sample reports
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title_heading">
                                        Sample Reports & What to Expect
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Get a preview of the insights you’ll receive after testing.
                                        What’s Included in Each Report:
                                    </p>

                                    <section className="text-white py-4">
                                        <ul className='list-disc'>
                                            <li className='pb-3'>Clear Breakdown of Genetic Markers: Easy-to-read analysis of relevant genes.</li>
                                            <li className='pb-3'>Personalized Recommendations: Actionable steps tailored to your results — from diet to medication options.</li>
                                            <li className='pb-3'>Clinical Insights: For tests like Pharmacogenomics and Cancer Risk, reports are clinician-ready.</li>
                                            <li className='pb-3'>Lifestyle Guidance: For Wellness and Mental Health, reports focus on fitness, nutrition, and mental performance.</li>
                                            <li className='pb-3'>Visuals & Charts: Infographics, gene function visuals, and easy scoring for better understanding.</li>
                                        </ul>
                                        <button
                                            className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                        // onClick={onClick}
                                        >
                                            <span className="mr-2">View All Tests</span>
                                            <span className='btn-icon'>
                                                <UserPlus className="h-5 w-5" />
                                            </span>
                                        </button>
                                    </section>

                                </div>
                                <div className="md:w-2/6 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("sample.png")}
                                        alt="Purple chromosomes"
                                        className="relative rounded-2xl  object-cover "
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
        </>
    );
};

export default MissionVisionSection;