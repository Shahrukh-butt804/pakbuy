import "animate.css";
// import Mainvideo from '../../../public/images/ip.mp4';
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InnerBanner from "../../components/innerBanner";
import CoreSamplereports from "../../components/coreSamplereports";
import { ImageUrl } from '../../utils/Functions';
import { Col, Row } from "antd";

const steps = [
    {
        // number: "01",
        title: "Targets Critical Hormonal Pathways",
        text: "It analyzes genes like CYP1A1, CYP1B1, COMT, ESR1, and UGT1A1 that influence estrogen production, metabolism, and detoxification, offering insights into hormonal balance and disease risk.",
        className: "step-01",
        icon: "s-icon.png",
    },
    {
        // number: "02",
        title: "Supports Evidence-Based Hormone Therapy",
        text: "Aligned with clinical guidelines from ACOG and NCCN, GeneEstrogen™ helps guide decisions around HRT, fertility treatment, and cancer prevention with precision",
        className: "step-02",
        icon: "s-icon.png",
    },
    {
        // number: "03",
        title: "Validated in Certified Clinical Labs",
        text: "Sequenced using Next-Generation Sequencing (NGS) technology in CLIA-certified labs to ensure high accuracy, reliability, and clinical-grade results for integrative and OB/GYN practices.",
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
            <InnerBanner title="GeneEstrogen" image={ImageUrl("geneEstrogen.png")} />
             <>
                        <Row justify={"center"}>
                            <Col lg={21}>
                                <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                                    <div className="overflow-hidden transition-all duration-300">
                                        <div className="flex flex-col md:flex-row items-center">
                                            <div className="md:w-2/5 p-4 flex items-center justify-center ">
                                                <img
                                                    src={ImageUrl("geneEstrogen.png")}
                                                    alt="Purple chromosomes"
                                                    className="relative rounded-2xl w-full  object-cover"
                                                />
                                            </div>
                                            <div className="md:w-3/5 p-6 md:p-8">
                                                <div>
                                                    <div className="sec-title_title">
                                                        GeneEstrogen
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
                                                        GeneEstrogen™ demonstrates the body's ability to decode the most precise mechanisms of metabolism, processing, and kidney clearance regarding the endogenous estrogen hormone. At the genetic level, it shows the hormonal patterns as well as the implications of the hormone on health. Such risks include the development of some diseases, such as pre-menstrual syndrome, fibroids, mood changes, and cancers sensitive to estrogen, without forgetting detox pathways for purposes of general wellness.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h2 className="sec-title_heading">
                                                        HOW IT HELPS
                                                    </h2>
                                                    <p className="text-gray-300 leading-relaxed">
                                                       GeneEstrogen™ provides you with evidence-based recommendations on testing and DNA for hormonal balance. Whether using supplementation for symptom management, or considering use of HRT or prevention methods, you would personalize your supplements, nutrition, and lifestyle with confidence.
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
                                                    This panel is ideal for women navigating PMS, menopause, PCOS, or fertility concerns, as well as those with a family history of hormone-related cancers. It’s also useful for anyone exploring hormone therapy or working with an integrative or OB/GYN specialist.
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
            {/* <Corehelp image={ImageUrl("geneEstrogen.png")}/> */}
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
            {/* <Relevance /> */}
            <Footer />
        </>
    );
};

export default Home;
