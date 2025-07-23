import "animate.css";
import { Col, Row } from "antd";
import { UserPlus } from "lucide-react";
// import Mainvideo from '../../../public/images/ip.mp4';
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InfoCard2 from "../../components/infoCard2/infoCard2";
import InnerBanner from "../../components/innerBanner";
import { ImageUrl } from '../../utils/Functions';

const Home = () => {
    // const navigate = useNavigate();
    const franchiseData = [
        {
            img: "regional.png",
            title: "Access Your Genetic Insights",
            desc: "Get full access to your results, including detailed gene summaries, system-wide health maps, and personalized recommendations.",
        },
        {
            img: "regional2.png",
            title: "View AI-Enhanced Reports",
            desc: "Our portal uses real-time AI interpretation to simplify your data and provide clear, actionable steps, no science degree required.",
        },
        {
            img: "regional3.png",
            title: "Download and Share Secure Reports",
            desc: "Export your report as a shareable PDF for your physician, wellness provider, or care team.",
        },
        {
            img: "regional3.png",
            title: "Schedule a Consultation",
            desc: "Book a 1-on-1 consultation with a genomic expert to review your results and build a health action plan.",
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
            <InnerBanner title="PATIENTS Portal" />
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <div>
                                        <div className="sec-title_title">
                                            For Patients & Wellness Seekers
                                            <div className="sec-title_dots">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <h2 className="sec-title_heading">
                                           A Personalized Portal for Your DNA Data 
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            Your journey with Gene Matrix does not stop at tests. It all begins with a personalized portal. This portal contains genetic results with the power of AI insights and an understanding of what your DNA says about you regarding your health, nutrition, mental wellness, and many others.  <br /><br />
                                            Simple to use, you can track sample status, get reports, and share results with your clinician. All in one secure place. For everyone, from those managing an illness to those optimizing personal wellness, or even just being a little concerned about their genes, your portal provides clarity and control, with a healthy dose of confidence.
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
                                       Inside the Portal
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="sec-title_heading">
                                        Features You Get with the Patient Portal
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
                    <InfoCard2 />
                </Col>
            </Row>

            <div className="register-clinic">
                <Row justify={"center"}>
                    <Col xl={14} lg={15} md={18}>
                        <Row align={"middle"} justify={"center"}>
                            <Col lg={12} md={14} xs={22}>
                                <h4>Activate Your Gene Matrix Portal Today!</h4>
                            </Col>
                            <Col lg={12} md={10} xs={22}>
                                <button
                                    className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                // onClick={onClick}
                                >
                                    <span className="mr-2">For Patients</span>
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
