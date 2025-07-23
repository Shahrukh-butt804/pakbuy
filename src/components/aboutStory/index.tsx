import React from "react";
import { Row, Col,  Typography } from "antd";
// import "./ProcessSection.css";
import { ImageUrl } from '../../utils/Functions';

const { Title  } = Typography;

const steps = [
  {
    // number: "01",
    title: "Genetic Testing",
    text: "We offer AI-enhanced DNA testing panels that deliver personalized insights into health, nutrition, mental wellness, athletic performance, and disease risk.",
    // topOffset: 0,
    className: "step-01",
    icon: "s-icon.png",
  },
  {
    // number: "02",
    title: "Gene Therapy Research & Development",
    text: "Our cutting-edge gene therapy programs aim to treat genetic conditions at the source, repairing or replacing faulty genes for long-term healing.",
    // topOffset: 30,
    className: "step-02",
    icon: "s-icon.png",
  },
  {
    // number: "03",
    title: "Next-Generation Gene Editing",
    text: "Through CRISPR, base editing, and AI-guided simulations, we’re pioneering safer, smarter ways to correct mutations and rewrite the future of medicine.",
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
            About Us
            <div className="sec-title_dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <Title level={2} className="sec-title_heading">
           Changing Lives Through the Power of Your DNA
          </Title>
          <p className="story-p">Genetics Matrix is a global biotechnology and health-tech enterprise that is redefining modern medicine through AI-enabled genetic diagnostics. Founded by Tarek Younis and Saso Poposki, our objective is to provide secure, precise healthcare that makes individuals and providers worldwide feel empowered.</p>
        </div>

        {/* Steps */}
        <Row gutter={[32, 32]}>
          {steps.map((step, index) => (
            <Col key={index} xs={24} sm={24} md={24} lg={8} >
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
          <h3 className="process-one_content-text">You Just Have to Read it Thoroughly</h3>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
