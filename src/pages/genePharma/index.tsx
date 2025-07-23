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
        title: "Backed by Clinical Guidelines",
        text: "Aligns with CPIC, FDA, and PharmGKB standards to support pharmacogenomic decision-making across multiple therapeutic areas.",
        className: "step-01",
        icon: "s-icon.png",
    },
    {
        title: "Covers Key PGx Genes",
        text: "This includes analysis of critical enzymes and transporters like CYP2D6, CYP2C19, CYP3A4, SLCO1B1, and more, which are essential for metabolism and drug efficacy.",
        className: "step-02",
        icon: "s-icon.png",
    },
    {
        title: "Validated for Use in Practice",
        text: "Developed in CLIA-certified labs and interpreted using AI to provide actionable reports ready for direct use by physicians, pharmacists, and specialists.",
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
            <InnerBanner title="GenePharma" image={ImageUrl("diet.png")} />
            <>
                <Row justify={"center"}>
                    <Col lg={21}>
                        <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                            <div className="overflow-hidden transition-all duration-300">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="md:w-2/5 p-4 flex items-center justify-center ">
                                        <img
                                            src={ImageUrl("diet.png")}
                                            alt="Purple chromosomes"
                                            className="relative rounded-2xl w-full  object-cover"
                                        />
                                    </div>
                                    <div className="md:w-3/5 p-6 md:p-8">
                                        <div>
                                            <div className="sec-title_title">
                                                GenePharma
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
                                                GenePharma™ looks at how your body processes over 800 medications, from antidepressants to blood pressure meds, and shows which ones may work best for you. It reveals if a drug is likely to help, cause side effects, or need a different dose, based entirely on your DNA.
                                            </p>
                                        </div>
                                        <div>
                                            <h2 className="sec-title_heading">
                                                HOW IT HELPS
                                            </h2>
                                            <p className="text-gray-300 leading-relaxed">
                                                GenePharma™ is here to remove all the guesswork when it comes to prescription medications. This test demonstrates how effective specific medications would perform against your DNA and how ineffectively or what kinds of side effects they might cause. You can now enjoy easy access to improved medications guided precisely for your body. Whether you are managing your pain, depression, or heart disease, one test will tell you what will likely work best for you personally.
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
                                            GenePharma™ is great if you're taking multiple prescriptions, have weird reactions to meds, or want to avoid trial-and-error. It’s also ideal for people managing mental health, heart conditions, or chronic pain, and for doctors who want to prescribe with confidence, not guesswork.
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
            {/* <Corehelp image={ImageUrl("diet.png")}/> */}
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
