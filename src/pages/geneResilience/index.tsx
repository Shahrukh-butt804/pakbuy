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
        title: "Targets Genes Linked to Cortisol, Inflammation & Antioxidant Response",
        text: "Includes COMT, NR3C1, IL6, SOD2, CRP, FKBP5, CLOCK, and more.",
        className: "step-01",
        icon: "s-icon.png",
    },
    {
        // number: "02",
        title: "Backed by Psychogenomics ",
        text: "Aligns with findings from stress biology, resilience studies, and mental health epigenetics.",
        className: "step-02",
        icon: "s-icon.png",
    },
    {
        // number: "03",
        title: "Validated in CLIA-Certified Labs ",
        text: "Uses next-generation sequencing and dynamic reporting that evolves as new science emerges.",
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
            <InnerBanner title="GeneResilience" image={ImageUrl("geneResilience.png")} />
             <>
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-2/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("geneResilience.png")}
                                        alt="Purple chromosomes"
                                        className="relative rounded-2xl w-full  object-cover"
                                    />
                                </div>
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <div>
                                        <div className="sec-title_title">
                                           GeneResilience
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
                                            GeneResilience™ analyzes how your body reacts to stress, heals from strain, and maintains mental and physical resilience. It simply does that by analyzing genes related to cortisol regulation, inflammation, oxidative stress, mood stabilization, and recovery. This way you can develop a personalized roadmap to foster inner strength and prevent burnout.
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="sec-title_heading">
                                            HOW IT HELPS
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            With this panel, you can now tailor your stress response, augment your recovery, and promote a state of well-being. Whether you're dealing with chronic fatigue or low energy, poor sleep, anxiety, or even burnout-GeneResilience™ synthesizes complex genetic data into easy-to-follow, practical strategies that return you back to life-even stronger and smarter.
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
                                        GeneResilience™ is a superb product for high achievers, caregivers, athletes, and those who usually suffer from chronic stress or are exhausted most of the time. This examination is what you need if you are facing anxiety, mood swings, flares in inflammation, or sleep deprivation. Besides showing you the underpinnings of your biological stress response, the test leads you into personalizing your lifestyle, nutrition, and rest according to your DNA.
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
            {/* <Corehelp image={ImageUrl("geneResilience.png")}/> */}
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
