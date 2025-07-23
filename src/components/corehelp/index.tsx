import { Col, Row } from 'antd';
import React from 'react';
import { ImageUrl } from '../../utils/Functions';


interface CorehelpProps {
  image: string;
}

// const MissionVisionSection: React.FC = () => {
const MissionVisionSection: React.FC<CorehelpProps> = ({image}) => {
    return (
        <>
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-2/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={image}
                                        alt="Purple chromosomes"
                                        className="relative rounded-2xl w-full  object-cover"
                                    />
                                </div>
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <div>
                                        <div className="sec-title_title">
                                            Genecore
                                            <div className="sec-title_dots">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <h2 className="sec-title_heading">
                                            What It Does
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Excepteur sint occaecat cupidatat non proident.
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="sec-title_heading">
                                            HOW IT HELPS
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Excepteur sint occaecat cupidatat non proident.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <h2 className="sec-title_heading">
                                        WHO SHOULD TAKE IT?
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Gene Matrix envisions a future where healthcare is precisely tailored to the unique genetic makeup of every individual. By
                                        integrating cutting-edge technologies—including artificial intelligence, machine learning, and advanced genetic testing methods—
                                        we aim to revolutionize the field of precision medicine. Our goal is to empower both patients and healthcare providers with
                                        insights that lead to earlier detection, more accurate diagnoses, and highly personalized treatment plans.
                                    </p>
                                </div>
                                <div className="md:w-3/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("it.png")}
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