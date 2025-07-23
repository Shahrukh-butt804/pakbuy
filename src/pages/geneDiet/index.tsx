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
        title: "Evidence-Based Gene Selection",
        text: "Analyzes 35+ genes, including FTO, MTHFR, CYP1A2, and VDR, all backed by global nutrigenomic studies linking genetics to metabolism, absorption, and food response.",
        className: "step-01",
        icon: "s-icon.png",
    },
    {
        // number: "02",
        title: "Built on Trusted Databases",
        text: "Informed by resources like the NHGRI-EBI GWAS Catalog, Nutrigenomics Europe, and PubMed Clinical Trials to ensure every insight is rooted in current, peer-reviewed research.",
        className: "step-02",
        icon: "s-icon.png",
    },
    {
        // number: "03",
        title: "Validated for Clinical Use",
        text: "Used by nutritionists, functional medicine practitioners, and health coaches to guide personalized diet plans, supplementation strategies, and lifestyle interventions based on genetic profiles.",
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
            <InnerBanner title="GeneDiet" image={ImageUrl("diet.png")} />
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
                                                GeneDiet
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
                                                GeneDiet™ is a precision DNA test that investigates how your body uniquely processes its nutrients, food sensitivities, and dietary triggers. It combines next-generation sequencing and AI interpretation to analyze key genes associated with fat metabolism, vitamin absorption, carb processing, etc., such that you can make nutrition choices that really work with your biology.
                                                Stop guessing what your body needs; GeneDiet™ makes it clear for yo
                                            </p>
                                        </div>
                                        <div>
                                            <h2 className="sec-title_heading">
                                                HOW IT HELPS
                                            </h2>
                                            <p className="text-gray-300 leading-relaxed">
                                                GeneDiet™ reveals what the body truly needs, making a smart meal plan work for you. From food sensitivities to vitamin absorption, GeneDiet™ gives personalized insights for clear choices. Eliminate the guesswork, feel good, and trust in your health.
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
                                            GeneDiet™ is meant for every person looking to nourish themselves according to their genetic signatures. It is best suited for:
                                        </p>
                                        <ul className='gene-ul'>
                                            <li>People who are struggling with weight loss or have unexplained fatigue</li>
                                            <li>People suffering from bloating or any kind of inflammation, or have food sensitivity</li>
                                            <li>Athletes or fitness-oriented people who optimize their regular diet for performance</li>
                                            <li>Health coaches and dietitians who help their patients with diet plans based on DNA</li>
                                            <li>Anyone wanting to know how their genes influence the food they eat</li>
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
