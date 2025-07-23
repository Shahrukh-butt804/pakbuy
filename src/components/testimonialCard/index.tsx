import React from "react";
import { Row, Col, Typography } from "antd";
// import "./ProcessSection.css";
import { ImageUrl } from '../../utils/Functions';

const { Title } = Typography;

interface steps2 {
    title: string;
    points: string[];
    className: string;
    icon: string;
}

const steps1 = [
    {
        title: "Dr. Sarah Malik",
        text: "Before using GenePharma™, I’d often rely on trial-and-error when prescribing antidepressants or pain management meds. Now, I walk into every consult with clarity. Patients are more confident in their treatment plans, and I’m no longer second-guessing myself.",
        className: "step-01",
        icon: "testiPic.png",
    },
    {
        title: "Jorge M.",
        text: "I tried everything, keto, vegan, intermittent fasting, nothing seemed to work long-term. GeneDiet™ finally explained why. I learned about my metabolism and nutrient processing at a genetic level. It felt like turning on the lights after years in the dark.",
        className: "step-02",
        icon: "testiPic.png",
    },
    {
        title: "Kevin Q.",
        text: "For years, I felt foggy, forgetful, and emotionally reactive, and every blood test came back normal. GeneMind™ showed how my brain processes serotonin and stress. With my therapist and doctor, we adjusted supplements and made simple changes. I finally feel like myself again.",
        className: "step-03",
        icon: "testiPic.png",
    },
];

const steps2 = [
    {
        title: "GenePharma™ Impact",
        points: [
            "Reduced adverse drug reactions by over 40% in chronic pain and anxiety patients.",
            "Shortened treatment onboarding time.",
            "Improved trust and satisfaction scores across repeat visits."
        ],
        className: "step-01",
        icon: "s-icon.png",
    },
    {
        title: "GeneDiet™ Impact",
        points: [
            "Enabled personalized diet changes that led to 12kg weight loss in 3 months.",
            "Reduced supplement spending by 60%.",
            "Helped avoid a Type 2 diabetes risk through early dietary adjustments."
        ],
        className: "step-02",
        icon: "s-icon.png",
    },
    {
        title: "GeneMind™ Impact",
        points: [
            "Helped identify MTHFR and 5-HTTLPR variants affecting mental resilience.",
            "Led to customized mental wellness protocols supported by the care team.",
            "Reduced daily anxiety and improved productivity at work within 6 weeks."
        ],
        className: "step-03",
        icon: "s-icon.png",
    },
];

const ProcessSection: React.FC = () => {
    return (
        <>
            <section className="process-one testi-card1" style={{ padding: "60px 0" }}>
                <div className="auto-container">
                    {/* Section Title */}
                    <div className="sec-title">
                        <Title level={2} className="sec-title_heading">
                            REVIEWS FROM THE PATIENTS/HEALTHCARE PROVIDERS
                        </Title>
                    </div>

                    {/* Steps */}
                    <Row gutter={[32, 32]}>
                        {steps1.map((step, index) => (
                            <Col key={index} xs={24} sm={12} lg={8} >
                                <div className={`step-block_one text-center ${step.className}`}>
                                    <div className="step-block_one-inner flex gap-3">
                                        <div className="step-block_one-image">
                                            <img src={ImageUrl(step.icon)} alt={`Step ${step}`} className="mx-auto w-52" />
                                        </div>
                                        <div
                                            className="step-block_one-bg"
                                        ></div>
                                        <div>
                                            <h4 className="step-block_one-heading">{step.title}</h4>
                                            <div className="step-block_one-text text-left">{step.text}</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

            <section className="process-one" style={{ padding: "60px 0" }}>
                <div className="auto-container">
                    {/* Section Title */}
                    <div className="sec-title">
                        <Title level={2} className="sec-title_heading">
                            use case impact
                        </Title>
                    </div>

                    {/* Steps */}
                    <Row gutter={[32, 32]}>
                        {steps2.map((step, index) => (
                            <Col key={index} xs={24} sm={12} lg={8}>
                                <div className={`step-block_one text-center ${step.className}`}>
                                    <div className="step-block_one-inner">
                                        <div className="step-block_one-image">
                                            <img src={ImageUrl(step.icon)} alt={`Step ${step.title}`} className="mx-auto" />
                                        </div>
                                        <div
                                            className="step-block_one-bg"
                                            style={{
                                                backgroundImage: "url(/assets/images/background/pattern-5.png)"
                                            }}
                                        ></div>
                                        <h4 className="step-block_one-heading">{step.title}</h4>

                                        <ul className="list-disc pl-5 text-gray-300 space-y-2 text-left">
                                            {step.points.map((point: string, idx: number) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>

                                        {/* If you ever want plain text, you can use:
                <div className="step-block_one-text">{step.text}</div> */}
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
