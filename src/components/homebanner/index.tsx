import React from 'react';
import { UserPlus } from 'lucide-react';
import { Col, Row } from 'antd';
// import { ImageUrl } from '../../utils/Functions';

const Hero: React.FC = () => {
    return (
        <div id="home" className="relative min-h-screen flex items-center banner overflow-hidden home-banner">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-1 opacity-80"
                autoPlay
                loop
                muted
                playsInline
            >
                {/* <source src="https://react.customdev.solutions/genematrix-assets/baner-video-new2.mp4" type="video/mp4" /> */}
                <source src="https://react.customdev.solutions/genematrix-assets/banner-video-new3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}

            <div className="relative z-10  w-full mx-auto px-4 sm:px-6 lg:px-8">
                <Row justify={"center"}>
                    <Col lg={22}>
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="w-full md:w-1/2 text-white mb-12 md:mb-0">
                                <div className="flex items-center mb-4">
                                    <div className="h-1 w-12 bg-purple-600"></div>
                                    <span className="ml-4 text-purple-400 font-medium tracking-wider">GENE MATRIX</span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                                    Find All Answers 
                                    <br />
                                    Your DNA Holds 
                                </h1>
                                <p className="text-gray-100 text-lg max-w-lg mb-8">
                                    We decode your genes with next-gen sequencing and AI to give you actionable insights on medication, disease risk, mental wellness, and performance, all from one swab.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                        // onClick={onClick}
                                    >
                                        <span className="mr-2">For Patients</span>
                                        <span className='btn-icon'>
                                            <UserPlus className="h-5 w-5" />
                                        </span>
                                    </button>
                                    <button
                                        className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                        // onClick={onClick}
                                    >
                                        <span className="mr-2">For Clinicians</span>
                                        <span className='btn-icon'>
                                            <UserPlus className="h-5 w-5" />
                                        </span>
                                    </button>

                                    {/* <a
                                        href="#patients"
                                        className="px-6 py-3 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors flex items-center justify-center sm:justify-start"
                                    >
                                        For Patients
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </a>
                                    <a
                                        href="#clinicians"
                                        className="px-6 py-3 rounded-md border border-purple-500 text-white hover:bg-purple-500 transition-colors flex items-center justify-center sm:justify-start"
                                    >
                                        For Clinicians
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </a> */}
                                </div>
                            </div>

                            {/* <div className="w-full md:w-1/2 banner-img">
                                <div className="relative mx-auto">
                                    <div className="transform hover:scale-105 transition-transform duration-500">
                                        <img
                                            src={ImageUrl("blackbox.png")}
                                            alt="Gene Matrix DNA Testing Kit"
                                            className="object-cover img-fluid"
                                        />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        </div>
    );
};

export default Hero;
