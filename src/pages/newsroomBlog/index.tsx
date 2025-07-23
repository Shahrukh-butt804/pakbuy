import "animate.css";
import { Col, Row } from "antd";
import Slider from 'react-slick';
// import Mainvideo from '../../../public/images/ip.mp4';
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InnerBanner from "../../components/innerBanner";
import { ImageUrl } from '../../utils/Functions';
import { UserPlus } from "lucide-react";



const newsData = [
    {
        title: "New AI Engine Enhances Genetic Variant Interpretation",
        author: "Danny Dennis",
        date: "22 July 2024",
        image: "news1.png",
        description: ""
    },
    {
        title: "Gene Matrix Publishes Landmark Study on Preventive Genomics",
        author: "Danny Dennis",
        date: "Feb 4, 2023",
        image: "news2.png",
        description: ""
    },
    {
        title: "Gene Matrix is now extending its precision medicine solutions beyond the U.S.",
        author: "Danny Dennis",
        date: "Feb 4, 2023",
        image: "news3.png",
        description: ""
    },
    {
        title: "Gene Matrix Partners with Leading Hospital Network to Expand Precision",
        author: "Danny Dennis",
        date: "Feb 4, 2023",
        image: "",
        description:
            "Gene Matrix has joined forces with one of the nation’s top hospital networks to integrate advanced genetic screening into clinical care pathways—bringing personalized treatment one step closer to everyday patients."
    },
    {
        title: "Gene Matrix Unveils Genomic Insights Platform for Clinicians",
        author: "Danny Dennis",
        date: "Feb 4, 2023",
        image: "",
        description:
            "We’re excited to introduce our new Genomic Insights Platform—an AI-powered tool that enables healthcare providers to access, interpret, and act on genetic data faster and more accurately than ever before."
    },
    {
        title: "Gene Matrix Publishes Landmark Study on Preventive Genomics",
        author: "Danny Dennis",
        date: "Feb 4, 2023",
        image: "news4.png",
        description: ""
    },
    {
        title: "Gene Matrix Publishes Landmark Study on Preventive Genomics",
        author: "Danny Dennis",
        date: "Feb 4, 2023",
        image: "news5.png",
        description: ""
    }
];


type VideoItem = {
    id: number;
    image: string;
    date: string;
    title: string;
    description: string;
};

const videos: VideoItem[] = [
    {
        id: 1,
        image: '/blog1.png',
        date: '22 July 2024 . 4 min',
        title: 'How to Read Your Genetic Report',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        image: '/blog2.png',
        date: '22 July 2024 . 4 min',
        title: 'Genes vs. Lifestyle: What Matters?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 3,
        image: '/blog3.png',
        date: '22 July 2024 . 4 min',
        title: 'The Ethics of Genetic Testing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 4,
        image: '/blog4.png',
        date: '22 July 2024 . 4 min',
        title: 'Top 5 Health Risks DNA Can Reveal',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 5,
        image: '/blog5.png',
        date: '22 July 2024 . 4 min',
        title: 'How Genetics Impacts Women’s Health',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 6,
        image: '/blog3.png',
        date: '22 July 2024 . 4 min',
        title: 'Animations in React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 7,
        image: '/blog2.png',
        date: '22 July 2024 . 4 min',
        title: 'Testing React Apps',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 8,
        image: '/blog5.png',
        date: '22 July 2024 . 4 min',
        title: 'Deploying to Vercel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
];

const Home = () => {



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.2,
        slidesToScroll: 1,
        centerPadding: "80px",
        centerMode: true,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };
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
            <InnerBanner title="newsroom & blog" />
            <Row justify={"center"}>
                <Col lg={22}>
                    <div className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 ">
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="md:w-3/6 p-6 md:p-8">
                                <div className="sec-title_title">
                                    Latest news
                                    <div className="sec-title_dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <h2 className="sec-title_heading">
                                    Stay updated with the latest from Gene Matrix.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="text-white px-4 pb-8 font-sans">
                        <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {newsData.map((item, index) => (
                                <div
                                    key={index}
                                    className={` relative rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] shadow-md hover:shadow-lg transition-all duration-300 ${index === 2 ? "md:col-span-3 lg:col-span-2 row-span-2" : ""
                                        }`}
                                >
                                    {item.image && (
                                        <img
                                            src={ImageUrl(item.image)}
                                            alt="news"
                                            className={`w-full ${index === 2 ? "h-72" : "h-48"} object-cover`}
                                        />
                                    )}
                                    <div className="p-4 ">
                                        <p className="text-xs text-gray-400 mb-1">
                                            By {item.author} | {item.date}
                                        </p>
                                        <h3 className="text-base font-semibold mb-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        {item.description && (
                                            <p className="text-sm text-gray-300 leading-normal">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col lg={22}>
                    <div className="carousel-section testi-slidr">
                        <div className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 ">
                            <div className="flex flex-col md:flex-row items-start">
                                <div className="md:w-3/6 p-6 md:p-8">
                                    <div className="sec-title_title">
                                        oUR bLOGS
                                        <div className="sec-title_dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title_heading">
                                        Discover the Future of Personalized Healthcare
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <Slider {...settings}>
                            {videos.map((video) => (
                                <div className="video-card" key={video.id}>
                                    <div className="thumbnail-container1">
                                        <img src={ImageUrl(video.image)} alt="Thumbnail" className="thumbnail" />
                                    </div>
                                    <div className="blog-info">
                                        <p className="blog-date">{video.date}</p>
                                        <h3 className="blog-title">{video.title}</h3>
                                        <p className="blog-description">{video.description}</p>
                                        <button
                                            className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                        >
                                            <span className="mr-2">Learn More</span>
                                            <span className='btn-icon'>
                                                <UserPlus className="h-5 w-5" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Col>
            </Row>

            <Footer />
        </>
    );
};

export default Home;
