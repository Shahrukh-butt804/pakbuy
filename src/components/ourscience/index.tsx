import React from "react";
import { Row, Col,  Typography } from "antd";
// import "./ProcessSection.css";
import { ImageUrl } from '../../utils/Functions';

const { Title  } = Typography;

const steps = [
  {
    // number: "01",
    title: "Patent-Pending Panel Design",
    text: "Our custom genetic panels target clinically relevant genes across key health areas, offering unmatched depth, accuracy, and real-world impact.",
    // topOffset: 0,
    className: "step-01",
    icon: "s-icon.png",
  },
  {
    // number: "02",
    title: "Next-Generation Sequencing (NGS)",
    text: "We use high-throughput NGS technology in CLIA-certified labs to ensure reliable, clinical-grade DNA analysis for every sample.",
    // topOffset: 30,
    className: "step-02",
    icon: "s-icon.png",
  },
  {
    // number: "03",
    title: "AI-Powered Interpretation",
    text: "Our proprietary AI engine analyzes complex genetic data, cross-references biomedical research, and delivers clear, personalized insights for each individual.",
    // topOffset: -160,
    className: "step-03",
    icon: "s-icon.png",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="process-one" style={{ padding: "60px 0" }}>
      <div className="auto-container">
        {/* Section Title */}
        <div className="sec-title">
          <div className="sec-title_title">
            AI, Genomics, & Diagnostics 
            <div className="sec-title_dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <Title level={2} className="sec-title_heading">
           The Science Behind Our Genetic Testing
          </Title>
          <p className="story-p">Take a look at how Gene Matrix combines advanced genomics, AI-driven interpretation, and clinical diagnostics to deliver accurate, actionable genetic insights. Our science gives you personalized health solutions through studying raw DNA, helping with better decisions for patients, providers, and the future of medicine.</p>
        </div>

        {/* Steps */}
        <Row gutter={[32, 32]}>
          {steps.map((step, index) => (
            <Col key={index} xs={24} sm={12} lg={8} >
              <div className={`step-block_one text-center ${step.className}`}>
                <div className="step-block_one-inner">
                  <div className="step-block_one-image">
                    <img src={ImageUrl(step.icon)} alt={`Step ${step}`} className="mx-auto"/>
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

        {/* Bottom Content */}
        <div className="process-one_content">
          <h3 className="process-one_content-text">We Tell You What Your DNA Means</h3>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
