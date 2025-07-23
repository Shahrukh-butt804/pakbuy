import "animate.css";
import { Col, Row } from "antd";
// import Mainvideo from '../../../public/images/ip.mp4';
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InnerBanner from "../../components/innerBanner";
import { ImageUrl } from '../../utils/Functions';
import ClientSlider from "../../components/clientSlider";

const Home = () => {
    // const navigate = useNavigate();
    const growingStats = [
        {
            img: "growingbox-icon1.png",
            number: "9+",
            label: "Countries Active",
        },
        {
            img: "growingbox-icon3.png",
            number: "20+",
            label: "Partner Clinics",
        },
        {
            img: "growingbox-icon2.png",
            number: "2M+",
            label: "People Reached",
        },
        {
            img: "growingbox-icon4.png",
            number: "12",
            label: "Franchise Partners",
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
            <InnerBanner title="Global impact" />
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <div>
                                        <div className="sec-title_title">
                                            Expanding Global Health Access
                                            <div className="sec-title_dots">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <h2 className="sec-title_heading">
                                            GLOBAL PRESENCE WITH GROWING PARTNERSHIPS
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            The Gene Matrix instigates a worldwide network of genomic innovation, which connects people, providers, and populations across the globe. Working throughout North America, Europe, the Middle East, and Asia-Pacific, we are distributing AI-powered genetic testing and personalized health tools to clinics, pharmacies, and wellness brands in every corner of the world. From population health initiatives to direct-to-consumer wellness platforms, our scalable model is built to serve local needs without compromising on the highest scientific standards. Every region we touch becomes a part of a smarter, well-connected tomorrow, where healthcare ceases to be an all-size-fits-all paradigm and becomes, instead, a system of true personal preventative medicine that is globally available.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-2/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("pertshp.png")}
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
                <Col lg={20}>
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
                                        Where We Operate
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="sec-title_heading">
                                        Explore our global footprint
                                    </div>
                                </div>
                                <div className="">
                                    <img
                                        src={ImageUrl("map.png")}
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
                <Col lg={18}>
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
                                        Regional Statistics
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="sec-title_heading">
                                        Our Growing Reach
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    {growingStats.map((item, index) => (
                                        <div key={index} className="growingbox">
                                            <img
                                                src={ImageUrl(item.img)}
                                                alt={item.label}
                                                className="relative rounded-2xl object-cover"
                                            />
                                            <div>
                                                <h6>{item.number}</h6>
                                                <p>{item.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
            <div className="aboutpage-client-slider">
                <div className="sec-title text-center">
                    <div className="sec-title_title justify-center">
                        <div className="sec-title_dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        TRUSTED WORLDWIDE
                        <div className="sec-title_dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="sec-title_heading">
                        Partnerships and Certification
                    </div>
                </div>
                <ClientSlider />
            </div>
            <Footer />
        </>
    );
};

export default Home;
