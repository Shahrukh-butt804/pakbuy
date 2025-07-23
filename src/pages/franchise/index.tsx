import "animate.css";
import { Col, Row } from "antd";
// import Mainvideo from '../../../public/images/ip.mp4';
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InnerBanner from "../../components/innerBanner";
import { ImageUrl } from '../../utils/Functions';

const Home = () => {
    // const navigate = useNavigate();
    const franchiseData = [
        {
            img: "regional.png",
            title: "Exclusive Territory License",
            desc: "Run your own Gene Matrix unit with full rights to your designated area.",
        },
        {
            img: "regional2.png",
            title: "Tailored for Local Markets",
            desc: "Customize services, language, and operations for cultural and regional alignment.",
        },
        {
            img: "regional3.png",
            title: "Own the Future Locally",
            desc: "No internal competition. Build brand loyalty and long-term equity in your region.",
        },
    ];

    const franchiseStories = [
        {
            img: "slovenia.png",
            title: "Slovenia",
            desc: "“We opened the first Gene Matrix franchise here, and the response was overwhelming. Within three months, we were testing clients from clinics, pharmacies, and elite fitness centers. This isn’t just a business. It’s a healthcare movement.\"",
        },
        {
            img: "balkans.png",
            title: "Balkans",
            desc: "“As a wellness clinic, adding Gene Matrix gave us an edge no one else had. The AI reports are next-level, and patients actually understand and act on their results. We’ve seen retention and referrals skyrocket.”",
        },
        {
            img: "uae.png",
            title: "UAE",
            desc: "“We wanted to bring global healthcare innovation to UAE, and Gene Matrix delivered. We’ve launched at three locations and plan to expand to five more. Their training, backend support, and science are unbeatable.”",
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
            <InnerBanner title="Franchise Opportunities" />
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <div>
                                        <div className="sec-title_title">
                                            Launch your own Gene Matrix lab or clinic
                                            <div className="sec-title_dots">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <h2 className="sec-title_heading">
                                            Own a Gene Matrix lab powered by AI and innovation
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            Gene Matrix allows you to set up your own high-tech genomics lab or wellness clinic with artificial intelligence, fabulous science, and a brand that is already changing the healthcare world. Our franchise model allows any physician, lab owner, or investor to run a practice in their own exclusive territory with full support. Ranging from DNA-based diagnostics to personalized health platforms, you'll be offering an in-demand, future-ready service. Join an innovative ecosystem worldwide, and help advance precision medicine into your city, region, or country with speed and intent.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-2/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("clinic.png")}
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
                <Col lg={14}>
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
                                        Operate exclusively in your region
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                <Col lg={14}>
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
                                        Global Franchise Success
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="sec-title_heading">
                                        Franchise success stories
                                    </div>
                                    <p className="text-white">See how partners in Slovenia, the Balkans, and UAE are building successful Gene Matrix labs.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {franchiseStories.map((story, index) => (
                                        <div key={index} className="franchise-stories">
                                            <img
                                                src={ImageUrl(story.img)}
                                                alt={story.title}
                                                className="relative rounded-2xl object-cover"
                                            />
                                            <h5>{story.title}</h5>
                                            <p>{story.desc}</p>
                                        </div>
                                    ))}
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
