import React from "react";
import { Row, Col, Typography } from "antd";
// import "./ProcessSection.css";

const { Title } = Typography;

const steps = [
    {
        number: "01",
        title: "Quick Qualification",
        text: "Fill out our secure, HIPAA-compliant form to see if you’re eligible for an insurance-covered DNA test, at no cost to you.",
        // topOffset: 0,
        className: "step-01",
        icon: "/images/s-icon.png",
    },
    {
        number: "02",
        title: "Get Your Kit",
        text: "If approved, we’ll ship your test kit right to your door, along with a login to track everything online.",
        // topOffset: 30,
        className: "step-02",
        icon: "/images/s-icon.png",
    },
    {
        number: "03",
        title: "Lab Processing & Results",
        text: "Send back your sample. Once it’s tested, you and your clinician will get notified when your results are ready in the portal.",
        // topOffset: -160,
        className: "step-02",
        icon: "/images/s-icon.png",
    },
    {
        number: "03",
        title: "Expert Review",
        text: "Need help? Your clinician can connect with our Medical Affairs team and walk you through what it means for your health.",
        // topOffset: -160,
        className: "step-03",
        icon: "/images/s-icon.png",
    },
];

const ProcessSection: React.FC = () => {
    return (
        <section className="process-one" style={{ padding: "60px 0" }}>
            <div className="auto-container">
                {/* Section Title */}
                <div className="sec-title">
                    <div className="sec-title_title">
                        How It Works
                        <div className="sec-title_dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <Title level={2} className="sec-title_heading">
                       How We Decode Your DNA
                    </Title>
                </div>

                {/* Steps */}
                <Row gutter={[32, 32]}>
                    {steps.map((step, index) => (
                        <Col key={index} xs={24} sm={12} lg={6} >
                            <div className={`step-block_one ${step.className}`}>
                                <div className="step-block_one-inner">
                                    <div
                                        className="step-block_one-bg"
                                        style={{
                                            backgroundImage: "url(/assets/images/background/pattern-5.png)"
                                        }}
                                    ></div>
                                    <div className="step-block_one-number">
                                        <span>{step.number}</span>Step
                                    </div>
                                    <h4 className="step-block_one-heading">{step.title}</h4>
                                    <div className="step-block_one-text">{step.text}</div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default ProcessSection;
