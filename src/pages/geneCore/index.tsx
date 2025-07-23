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
        title: "Validated Gene Markers",
        text: "Analyzes over 50 clinically relevant genes including MTHFR, APOE, NRF2, and SOD2, linked to inflammation, detox, metabolism, and aging.",
        className: "step-01",
        icon: "s-icon.png",
    },
    {
        // number: "02",
        title: "Evidence-Based Insights",
        text: "Built on data from peer-reviewed sources like PubMed, ClinVar, and longevity science registries to ensure medically actionable recommendations.",
        className: "step-02",
        icon: "s-icon.png",
    },
    {
        // number: "03",
        title: "Functional & Preventive Use",
        text: "Trusted by integrative and functional medicine providers to guide supplementation, chronic disease risk management, and personalized lifestyle planning.",
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
            <InnerBanner title="genecore" image={ImageUrl("core.png")} />
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-2/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("core.png")}
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
                                            GeneCore™ evaluates your genetic architecture in key newly defined areas of importance like inflammation, detoxification, metabolism, and immune function. It decodes your body's cellular-level functioning and conveys the strengths, risks, and opportunities for optimization of long-term health and vitality.
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="sec-title_heading">
                                            HOW IT HELPS
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            GeneCore™ provides clear and personalized recommendations to turn genetic data into something useful for increasing energy, delaying the onset of chronic conditions, and enhancing the process of healthy aging. It serves as a platform for proactive wellness decisions specific to your genetic profile.
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
                                        It's perfect for those seeking a proactive, rather personalized approach to health. Whether you are struggling with fatigue, inflammation, or just want to live well and long, this test is all you need to get started. It's ideal for you if you are a patient with chronic conditions or a wellness professional looking to create holistic care plans based on genetic insights. You can go for it to make diagnostics easier.
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
            {/* <Corehelp image={ImageUrl("core.png")}/> */}
            <CoreSamplereports />
            {/* <Relevance /> */}
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
