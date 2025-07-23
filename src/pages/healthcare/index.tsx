import "animate.css";
import { Col, Row } from "antd";
import { UserPlus } from "lucide-react";
// import Mainvideo from '../../../public/images/ip.mp4';
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InfoCards from "../../components/infoCards/infoCards";
import InnerBanner from "../../components/innerBanner";
import { ImageUrl } from '../../utils/Functions';

const Home = () => {
    // const navigate = useNavigate();
    const franchiseData = [
        {
            img: "regional.png",
            title: "Access & Manage Patient Reports",
            desc: "View, organize, and interpret genetic test results across all Gene Matrix panels in one secure dashboard.",
        },
        {
            img: "regional2.png",
            title: "Document Clinical Actions",
            desc: "Add notes, track decisions, and maintain continuity of care directly within each patient’s report.",
        },
        {
            img: "regional3.png",
            title: "Integrate with EHR Systems",
            desc: "Seamlessly sync genetic data with your existing EMR/EHR using FHIR-based integration.",
        },
        {
            img: "regional3.png",
            title: "Order Test Kits & Monitor Samples",
            desc: "Easily request kits, track shipping, and get real-time updates on lab processing and results.",
        },
    ];


   


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
            <InnerBanner title="Health CARE PROVIDER Portal" />
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <div>
                                        <div className="sec-title_title">
                                           For Clinicians, Labs, & Specialists
                                            <div className="sec-title_dots">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <h2 className="sec-title_heading">
                                            Get Genetic Intelligence into Your Practice
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            At Gene Matrix, we make it easy for you to bring precision medicine into your daily workflow. With our secure provider portal, you can quickly access patient reports, get AI-powered recommendations, and make more confident treatment decisions. Whether you’re prescribing meds, assessing genetic risk, or building personalized care plans, everything you need is in one place.  <br /><br />
                                            You can order test kits, track samples, and even connect with your EHR system without any hassle. From primary care to oncology and beyond, we’re here to help you deliver smarter, more personalized care with the power of genetics.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-2/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("health.png")}
                                        alt="Purple chromosomes"
                                        className="relative rounded-2xl w-full  object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col lg={16}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="">
                                <div className="sec-title text-center">
                                    <div className="sec-title_title justify-center">
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        Exclusive Regional Rights
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="sec-title_heading">
                                       Features You Get with the Healthcare Provider Portal
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    {franchiseData.map((item, index) => (
                                        <div key={index} className="franchise-card">
                                            <img
                                                src={ImageUrl(item.img)}
                                                alt={item.title}
                                                className="relative rounded-2xl object-cover"
                                            />
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col lg={21} md={23}>
                    <InfoCards />
                </Col>
            </Row>

            <div className="register-clinic">
                <Row justify={"center"}>
                    <Col xl={14} lg={15} md={18}>
                        <Row align={"middle"} justify={"center"}>
                            <Col lg={12} md={14} xs={22}>
                                <h4>Register Your Clinic with Gene Matrix Today!</h4>
                            </Col>
                            <Col lg={12} md={10} xs={22}>
                                <button
                                    className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                // onClick={onClick}
                                >
                                    <span className="mr-2">For Clinicians</span>
                                    <span className='btn-icon'>
                                        <UserPlus className="h-5 w-5" />
                                    </span>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    );
};

export default Home;
