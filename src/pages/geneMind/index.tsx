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
        title: "Neurogenetic Marker Coverage",
        text: "Includes clinically relevant genes like COMT, MAOA, SLC6A4, DRD2, and MTHFR, all tied to neurotransmitter pathways, cognitive function, and mood regulation.",
        className: "step-01",
        icon: "s-icon.png",
    },
    {
        // number: "02",
        title: "Validated for Mental Health Use Cases",
        text: "Developed with input from psychiatric research, DSM-V symptom profiles, and pharmacogenomic datasets, ideal for use in clinical psychology, psychiatry, and integrative mental wellness.",
        className: "step-02",
        icon: "s-icon.png",
    },
    {
        // number: "03",
        title: "AI-Enhanced Interpretation",
        text: "Uses machine learning models trained on thousands of published studies to support therapy selection, medication response prediction, and targeted lifestyle recommendations.",
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
            <InnerBanner title="GeneMind" image={ImageUrl("geneMind.png")} />
            <>
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-2/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("geneMind.png")}
                                        alt="Purple chromosomes"
                                        className="relative rounded-2xl w-full  object-cover"
                                    />
                                </div>
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <div>
                                        <div className="sec-title_title">
                                            GeneMind
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
                                            GeneMind™ goes behind the scenes to discuss how your genes affect your brain and emotional health. It looks into your personal genetic blueprint to describe factors involved in your ability to create and regulate the important brain neurotransmitters serotonin and dopamine; your ability to handle stress; your ability to sleep well; and whether, genetically, you may be predisposed to certain mood disorders, such as anxiety, depression, or ADHD. 
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="sec-title_heading">
                                            HOW IT HELPS
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            GeneMind™ tells you all about how your DNA would affect your mood, focus, and emotional flexibility. Whether managing anxiety, looking at medication side effects, or finding ways to improve mental clarity, the insights from a test can help you take control based on DNA evidence that applies specifically to your unique brain chemistry.
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
                                        GeneMind is for everyone seeking greater clarity on their mental and emotional health. It is especially useful when in moments of stress, anxiety, low energy, or sleep problems, or if trying to find the right therapy or medication has been a long struggle. This applies to parents seeking to understand the genetic basis of their children's behavior or clinicians interested in using DNA to inform and personalize their care. 
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
            {/* <Corehelp image={ImageUrl("geneMind.png")}/> */}
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
