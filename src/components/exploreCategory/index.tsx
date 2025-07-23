import { Col, Row } from 'antd';
import React from 'react';
import BrowsebyCategory from "../../components/browsebyCategory";


const MissionVisionSection: React.FC = () => {
    return (
        <>
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 ">
                            <div className="flex flex-col md:flex-row items-start">
                                <div className="md:w-4/6 p-6 md:p-8">
                                    <div className="sec-title_title">
                                        explore by category
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title_heading">
                                        Find the right DNA test for your health, lifestyle, or medical needs.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <BrowsebyCategory />
                    </section>
                </Col>
            </Row>
        </>
    );
};

export default MissionVisionSection;