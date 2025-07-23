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
        title: "Built on Leading Medical Guidelines",
        text: "Based on recommendations from NCCN, ACMG, and ClinVar for hereditary cancer screening and counseling.",
        className: "step-01",
        icon: "s-icon.png",
    },
    {
        title: "Targets the Most Impactful Genes",
        text: "Screens 108 high-penetrance genes, including BRCA1/2, MLH1, TP53, CHEK2, APC, and RAD51C, linked to over 15 types of cancer.",
        className: "step-02",
        icon: "s-icon.png",
    },
    {
        title: "CLIA-Certified & Expert-Reviewed",
        text: "Sequenced in CLIA labs, interpreted by AI, and reviewed by licensed clinical geneticists for maximum accuracy and relevance.",
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
            <InnerBanner title="GeneCancer" image={ImageUrl("geneEstrogen.png")} />
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
                                                GeneCancer
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
                                                GeneCancer ™ is an affordable hereditary cancer risk DNA test that tests 108 clinically validated genes, which have been implicated by evidence in inherited susceptibility to cancers such as breast, ovarian, colon, prostate, pancreatic, and numerous others. Next-generation sequencing, along with artificial intelligence-driven interpretation, will analyze and uncover variants that carry risks in silence and offer proactive and early, realizable results.
                                            </p>
                                        </div>
                                        <div>
                                            <h2 className="sec-title_heading">
                                                HOW IT HELPS
                                            </h2>
                                            <p className="text-gray-300 leading-relaxed">
                                                GeneCancer™ gives you time to act before the cancer becomes catastrophic. With this test, you can collaborate with your health care adviser on personalized screening plans, consider preventive options, and share information that is critical to the family. It's the science of transforming fear and eagerness into preparedness through an innovative manner.
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
                                            This test is highly recommended if you:
                                        </p>
                                        <ul className="gene-ul">
                                            <li>Have a personal or family history of cancer, especially before age 50</li>
                                            <li>Have multiple relatives with the same or related cancers</li>
                                            <li>Belong to a high-risk ancestry group</li>
                                            <li>Want to pursue proactive prevention or family planning</li>
                                            <li>Are a clinician developing personalized care plans for patients</li>
                                        </ul>

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
