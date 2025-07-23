import "animate.css";
import { Col, Row, Tag } from "antd";
// import Mainvideo from '../../../public/images/ip.mp4';
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InnerBanner from "../../components/innerBanner";
import { ImageUrl } from '../../utils/Functions';
import { ChevronRight } from "lucide-react";



type JobItem = {
    id: number;
    title: string;
    tags: string[];
    description: string;
};

const jobs: JobItem[] = [
    {
        id: 1,
        title: 'Data Scientist (AI & Genomics)',
        tags: ['Onsite', 'Full-time'],
        description: 'Engage in processes to analyze data related to hereditary diseases into actionable insights that ultimately facilitate personalized healthcare.',
    },
    {
        id: 2,
        title: 'Biotechnology Research Scientist',
        tags: ['Onsite', 'Full-time'],
        description: 'Drive innovation in genomic testing and gene therapy through cutting-edge biological research and experiments.',
    },
    {
        id: 3,
        title: 'Clinical Operations Manager',
        tags: ['Onsite', 'Full-time'],
        description: 'Oversee the logistics of tests, compliance, and lab coordination in order to fulfill highly effective and smooth-running clinical workflows.',
    },
    {
        id: 4,
        title: 'Product Development Specialist',
        tags: ['Onsite', 'Full-time'],
        description: 'Bridge the gap between genetic science and scalable digital products by connecting research, user needs, and technical implementation.',
    }
];

const growingStats = [
    {
        img: "growingbox-icon1.png",
        label: "Flexible working hours",
    },
    {
        img: "growingbox-icon3.png",
        label: "Sport compensation",
    },
    {
        img: "growingbox-icon2.png",
        label: "Health care Insurance",
    },
    {
        img: "growingbox-icon4.png",
        label: "Marriage bonus",
    },
    {
        img: "growingbox-icon4.png",
        label: "Fun team events",
    },
    {
        img: "growingbox-icon4.png",
        label: "Marriage bonus",
    },
    {
        img: "growingbox-icon4.png",
        label: "Fun team events",
    },
    {
        img: "growingbox-icon4.png",
        label: "Perfessional grow budget",
    },
    {
        img: "growingbox-icon4.png",
        label: "30 days paid vacation",
    },
    {
        img: "growingbox-icon4.png",
        label: "Competitive salary",
    },
    {
        img: "growingbox-icon4.png",
        label: "Compensation for eyeglasses",
    },
    {
        img: "growingbox-icon4.png",
        label: "Allowance for first-graders",
    },
    {
        img: "growingbox-icon4.png",
        label: "Compensation for eyeglasses",
    },
    {
        img: "growingbox-icon4.png",
        label: "Allowance for first-graders",
    },
];


type FeatureItem = {
    id: number;
    image: string;
    title: string;
    description: string;
};

const features: FeatureItem[] = [
    {
        id: 1,
        image: 'team.png',
        title: 'Team Collaboration',
        description: 'Thrive in a culture where cross-functional teamwork drives discovery and shared success.',
    },
    {
        id: 2,
        image: 'secured.png',
        title: 'Secured Future',
        description: 'Join a mission-driven company offering stability, growth, and a long-term vision in precision health.',
    },
    {
        id: 3,
        image: 'learning.png',
        title: 'Learning Opportunity',
        description: 'Expand your expertise with access to cutting-edge science, tech mentors, and global innovation.',
    },
    {
        id: 4,
        image: 'skill.png',
        title: 'Skill Development',
        description: 'Build your skills through real-world projects, continuous feedback, and hands-on experience in genomics and AI.',
    },
    {
        id: 5,
        image: 'innovate.png',
        title: 'Innovate with Impact',
        description: 'Use your talent to create tools and therapies that transform lives worldwide.',
    },
];

const Home = () => {

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
            <InnerBanner title="CAREERS" />
            <Row justify={"center"}>
                <Col lg={22}>
                    <div className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 ">
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="md:w-5/6 p-6 md:p-8">
                                <div className="sec-title_title">
                                    Explore Our Job Opportunities
                                    <div className="sec-title_dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <h2 className="sec-title_heading">
                                    JOIN OUR GLOBAL TEAM OF INNOVATORS IN BIOTECH, DATA SCIENCE, & MEDICINE
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-8 font-sans">
                        <Row gutter={[16, 16]}>
                            {jobs.map((job) => (
                                <Col key={job.id} lg={12}>
                                    <div className="carrer-box h-full rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] shadow-md hover:shadow-lg transition-all duration-300 p-6">
                                        <h4 className="text-white text-lg font-semibold mb-2">{job.title}</h4>
                                        <div className="mb-2 space-x-2">
                                            {job.tags.map((tag, index) => (
                                                <Tag key={index}>{tag}</Tag>
                                            ))}
                                        </div>
                                        <p className="text-gray-400 text-sm mb-4">{job.description}</p>
                                        <button
                                            className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                        >
                                            <span className="mr-2">See Position</span>
                                            <span className='btn-icon'>
                                                <ChevronRight className="h-5 w-5" />
                                            </span>
                                        </button>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col lg={22}>
                    <div className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 ">
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="md:w-5/6 p-6 md:p-8">
                                <div className="sec-title_title">
                                    Culture & Benefits
                                    <div className="sec-title_dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <h2 className="sec-title_heading">
                                    A Collaborative, Innovative, and Inclusive Workplace
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-8 font-sans">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-6 career-box2">
                            {growingStats.map((item, index) => (
                                <div key={index} className="growingbox">
                                    <img
                                        src={ImageUrl(item.img)}
                                        alt={item.label}
                                        className="relative rounded-2xl object-cover"
                                    />
                                    <div>
                                        <p>{item.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>


            <Row justify={"center"}>
                <Col lg={22}>
                    <div className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 ">
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="md:w-5/6 p-6 md:p-8">
                                <div className="sec-title_title">
                                    Internship Opportunities
                                    <div className="sec-title_dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <h2 className="sec-title_heading">
                                    Launch Your Career with Us
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pb-8 font-sans">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-5">
                            {features.map((feature) => (
                                <div key={feature.id} className="items-start space-x-6">
                                    <div className="text-purple-500 text-3xl">
                                        <img
                                            src={ImageUrl(feature.image)}
                                            alt={feature.title}
                                            className=""
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 pt-4 text-white">{feature.title}</h3>
                                        <p className="text-gray-300">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                        >
                            <span className="mr-2">Explore openings</span>
                            <span className='btn-icon'>
                                <ChevronRight className="h-5 w-5" />
                            </span>
                        </button>
                    </div>
                </Col>
            </Row>
            <Footer />
        </>
    );
};

export default Home;
