import "animate.css";
import { Col, Row } from "antd";
import { ChevronRight } from "lucide-react";
// import Mainvideo from '../../../public/images/ip.mp4';
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InnerBanner from "../../components/innerBanner";
import { ImageUrl } from '../../utils/Functions';




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
            <InnerBanner title="Enterprise Licensing & Pharma Partnerships" />
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-start">
                                <div className="md:w-4/6 p-6 md:p-8">
                                    <div className="sec-title_title">
                                        Enterprise-Ready Genomics
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title_heading">
                                        Empowering Institutions with Scalable Genomics
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Gene Matrix partners with research institutions, diagnostic labs, and pharmaceutical companies to accelerate innovation through BioCore™—our AI-powered genetic analysis engine. From reprocessing existing DNA files to full workflow integration, we offer flexible enterprise solutions.Gene Matrix partners with research institutions, diagnostic labs, and pharmaceutical companies to accelerate innovation through BioCore™—our AI-powered genetic analysis engine. From reprocessing existing DNA files to full workflow integration, we offer flexible enterprise solutions.
                                    </p>

                                    <section className="text-white py-16">
                                        <div className="container mx-auto px-6">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                                {/* Feature 1 */}
                                                <div className="items-start space-x-6">
                                                    <div className="text-purple-500 text-3xl">
                                                        <img
                                                            src={ImageUrl("bon.png")}
                                                            alt="Purple chromosomes"
                                                            className=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-2 pt-4">Reprocess Existing DNA Files</h3>
                                                        <p className="text-gray-300">
                                                            Leverage data from services like 23andMe to extract deeper clinical insights and actionable reports.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Feature 2 */}
                                                <div className="items-start space-x-6">
                                                    <div className="text-purple-500 text-3xl">
                                                        <img
                                                            src={ImageUrl("cri.png")}
                                                            alt="Purple chromosomes"
                                                            className=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-2 pt-4">BioCore™ Integration</h3>
                                                        <p className="text-gray-300">
                                                            Embed our AI-driven analytics into your internal workflow or digital health platform with ease.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Feature 3 */}
                                                <div className="items-start space-x-6">
                                                    <div className="text-purple-500 text-3xl">
                                                        <img
                                                            src={ImageUrl("dug.png")}
                                                            alt="Purple chromosomes"
                                                            className=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold mb-2 pt-4">Research Collaborations & API Access</h3>
                                                        <p className="text-gray-300">
                                                            Accelerate discovery through research partnerships or direct access to our genomic API suite.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                            // onClick={onClick}
                                            >
                                                <span className="mr-2">Contact Us</span>
                                                <span className='btn-icon'>
                                                    <ChevronRight className="h-5 w-5" />
                                                </span>
                                            </button>
                                        </div>
                                    </section>

                                </div>
                                <div className="md:w-2/6 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("enterprise.png")}
                                        alt="Purple chromosomes"
                                        className="relative rounded-2xl  object-cover "
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
            <Footer />
        </>
    );
};

export default Home;
