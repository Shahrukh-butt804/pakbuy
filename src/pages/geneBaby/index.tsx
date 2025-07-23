import "animate.css";
// import Mainvideo from '../../../public/images/ip.mp4';
import Corebabyinner from "../../components/corebabyinner";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InnerBanner from "../../components/innerBanner";
// import Relevance from "../../components/relevance";
import CoreSamplereports from "../../components/coreSamplereports";
import { ImageUrl } from '../../utils/Functions';
import { Col, Row } from "antd";


const steps = [
    {
        // number: "01",
        title: "Rooted in Pediatric Genomic Science",
        text: "References trusted pediatric genomic resources like PediGENE, OMIM, and ClinVar",
        className: "step-01",
        icon: "s-icon.png",
    },
    {
        // number: "02",
        title: "Tests Key Early-Life Genes",
        text: "Tests key genes like MTHFR, SOD2, IL10, HLA-DQ, and DRD4 related to nutrition, behavior, and immunity",
        className: "step-02",
        icon: "s-icon.png",
    },
    {
        // number: "03",
        title: "Lab-Verified and Clinically Aligned",
        text: "Developed using clinical-grade sequencing in CLIA-certified labs for accuracy and reliability",
        className: "step-03",
        icon: "s-icon.png",
    },
];



const Home = () => {
    // const navigate = useNavigate();
    return (
        <>
            <video
                id="background-video"
                autoPlay
                loop
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
            >
                <source
                    src={"https://react.customdev.solutions/genematrix-assets/ip.mp4"}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <Header />
            <InnerBanner title="GeneBaby" image={ImageUrl("genebaby.png")} />
            <Corebabyinner />
            <CoreSamplereports />
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
            <Footer />
        </>
    );
};

export default Home;
