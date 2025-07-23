import React from "react";
import { Row, Col } from "antd";
// import "./ProcessSection.css";
import { ImageUrl } from '../../utils/Functions';


const steps = [
    {
        // number: "01",
        title: "Blockchain-secured data",
        text: "Your have genetic variants that impact how you metabolize medications. Gene Matrix helps identify the best medications based on your unique DNA",
        className: "step-01",
        icon: "s-icon.png",
    },
    {
        // number: "02",
        title: "Real-time variant interpretation",
        text: "A Gene Matrix pharmacogenomic test incorporates the most up-to-date clinical guidance, including evidence-based recommendations.",
        className: "step-02",
        icon: "s-icon.png",
    },
    {
        // number: "03",
        title: "Patent-pending gene panels",
        text: "Find out which mediations are right for you. Gain insights that you and your doctor can use to create a precise medication plan.",
        className: "step-03",
        icon: "s-icon.png",
    },
];

const ProcessSection: React.FC = () => {
    return (
        <>
            <div className="sec-title text-center">
                <div className="sec-title_title justify-center">
                    <div className="sec-title_dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    relevance
                    <div className="sec-title_dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="sec-title_heading">
                    clinical relevance
                </div>
            </div>
            <section className="process-one test-inner-card" style={{ padding: "60px 0" }}>
                <div className="auto-container">
                    {/* Section Title */}
                    {/* Steps */}
                    <Row gutter={[32, 32]}>
                        {steps.map((step, index) => (
                            <Col key={index} xs={24} sm={12} lg={8} >
                                <div className={`step-block_one text-center ${step.className}`}>
                                    <div className="step-block_one-inner">
                                        <div className="step-block_one-image">
                                            <img src={ImageUrl(step.icon)} alt={`Step ${step}`} className="mx-auto" />
                                        </div>
                                        <div
                                            className="step-block_one-bg"
                                            style={{
                                                backgroundImage: "url(/assets/images/background/pattern-5.png)"
                                            }}
                                        ></div>
                                        <h4 className="step-block_one-heading">{step.title}</h4>
                                        <div className="step-block_one-text">{step.text}</div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </>
    );
};

export default ProcessSection;
