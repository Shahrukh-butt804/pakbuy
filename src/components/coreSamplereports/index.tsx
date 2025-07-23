import { Col, Row } from 'antd';
import React from 'react';
import { ImageUrl } from '../../utils/Functions';


const MissionVisionSection: React.FC = () => {
    const reports = ["report.png", "report.png", "report.png", "report.png"];
    return (
        <>
            <Row justify={"center"}>
                <Col lg={18}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="">
                                <div className="sec-title text-center">
                                    <div className="sec-title_title justify-center">
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        sample reports
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="sec-title_heading">
                                        preview sample reports
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    {reports.map((report, index) => (
                                        <div key={index} className="report-style">
                                            <img
                                                src={ImageUrl(report)}
                                                alt={`Report ${index + 1}`}
                                                className="relative object-cover w-full"
                                            />
                                        </div>
                                    ))}
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