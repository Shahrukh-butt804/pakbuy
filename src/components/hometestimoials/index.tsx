import { Col, Row, Typography } from 'antd';
import React, { useRef } from 'react';
import Slider, { Settings } from "react-slick";
import { ImageUrl } from '../../utils/Functions';
import { ChevronRight, Star } from 'lucide-react';
const { Title } = Typography;



const testimonials = [
    {
        name: "- Kevin M",
        role: "CEO & founder, Archin Studio",
        rating: 5,
        image: "testiPic.png",
        message:
            "For years, I was on the wrong anxiety meds. Gene Matrix showed me what actually works for my body, and it changed everything."
    },
    {
        name: "- Oliver P. ",
        role: "CTO, BrightTech",
        rating: 5,
        image: "testiPic.png",
        message:
            "I thought I was eating healthy, but nothing worked. After my GeneDiet report, I made a few simple changes and finally saw results."
    },
    {
        name: "- Lisa G.",
        role: "CTO, BrightTech",
        rating: 5,
        image: "testiPic.png",
        message:
            "I took the test out of curiosity. Turns out, I carry a hereditary cancer gene I didn’t know about. I got screened early, and I’m so thankful I did."
    },
    {
        name: "- Dennison T.",
        role: "CTO, BrightTech",
        rating: 5,
        image: "testiPic.png",
        message:
            "GeneSport helped me understand my muscle type, recovery needs, and even what supplements I actually need. My training has never been better."
    },
    {
        name: "- Dr. Maryam R.",
        role: "CTO, BrightTech",
        rating: 5,
        image: "testiPic.png",
        message:
            "As a physician, I use Gene Matrix for patients who need personalized medication plans. It’s helped me avoid trial-and-error and get better outcomes."
    },
    // Add more testimonials as needed
];

const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 480,
            settings: { slidesToShow: 1 }
        }
    ]
};

const TestOption: React.FC = () => {
    const sliderRef = useRef<Slider>(null);
    return (
        <Row justify={"center"}>
            <Col lg={21}>
                <section className="py-16 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

                        {/* Left: Content Box */}
                        <div className="mx-auto content-box">
                            <div className="sec-title">
                                <div className="sec-title_title">
                                    Testimonials
                                    <div className="sec-title_dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <Title level={2} className="sec-title_heading">
                                    See What Your DNA May Reveal
                                </Title>
                                <p className='text-white'>Curious what happens after you take the test? Hear from others who got to know some life-changing insights, like finding the right medication, and uncovering hidden health risks. Your DNA has a story. These are just a few of them.</p>
                                <button
                                    className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                >
                                    <span className="mr-2">Contact Us</span>
                                    <span className='btn-icon'>
                                        <ChevronRight className="h-5 w-5" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right: Slider */}
                        <div>
                            <Slider ref={sliderRef} {...sliderSettings}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index}>
                                        <div className="px-2 sm:px-4 testimo-box">
                                            <div className="relative z-10 space-y-4 sm:space-y-6">

                                                {/* Avatar and Info */}
                                                <div className="flex items-center gap-3 sm:gap-4 testi-title-box">
                                                    <div className="relative flex-shrink-0">
                                                        <img
                                                            src={ImageUrl(testimonial.image)}
                                                            alt={testimonial.name}
                                                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-purple-500"
                                                        />
                                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-purple-500 rounded-full flex items-center justify-center">
                                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                        </div>
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <h3 className="text-purple-400 font-bold text-sm sm:text-base lg:text-lg tracking-wide truncate">
                                                            {testimonial.name}
                                                        </h3>
                                                        <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
                                                            {testimonial.role}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Rating */}
                                                <div className="flex items-center gap-2 mt-16">
                                                    <span className="text-white font-bold text-base sm:text-lg">
                                                        {testimonial.rating.toFixed(1)}
                                                    </span>
                                                    <div className="flex gap-0.5 sm:gap-1">
                                                        {Array.from({ length: testimonial.rating }, (_, i) => (
                                                            <Star
                                                                key={i}
                                                                className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Message */}
                                                <blockquote className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                                                    “{testimonial.message}”
                                                </blockquote>
                                                <div className="mt-4 flex gap-2 testi-box-arrow">
                                                    <button
                                                        onClick={() => sliderRef.current?.slickPrev()}
                                                        className="text-white hover:text-purple-400 transition"
                                                    >
                                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="22.9911" cy="22.9911" r="22.4911" stroke="url(#paint0_linear_34_577)" />
                                                            <path d="M30.2869 14.8567C29.1447 17.5207 28.002 20.187 26.8587 22.8554C26.8378 22.8944 26.8262 22.9377 26.8248 22.9819C26.8233 23.0261 26.8321 23.0701 26.8504 23.1103C27.8966 25.5437 28.9411 27.9782 29.984 30.4138C30.1015 30.6869 30.2174 30.96 30.3481 31.2679L13.7946 22.9911L30.3481 14.7144L30.2869 14.8567Z" fill="white" />
                                                            <defs>
                                                                <linearGradient id="paint0_linear_34_577" x1="22.9911" y1="0" x2="22.9911" y2="45.9821" gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#BA23ED" />
                                                                    <stop offset="0.493202" stop-color="#8E32ED" />
                                                                    <stop offset="1" stop-color="#2953ED" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>


                                                    </button>
                                                    <button
                                                        onClick={() => sliderRef.current?.slickNext()}
                                                        className="text-white hover:text-purple-400 transition"
                                                    >
                                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="23.0091" cy="22.9911" r="22.4911" stroke="url(#paint0_linear_34_576)" />
                                                            <path d="M16.633 14.8567C17.7752 17.5207 18.918 20.187 20.0613 22.8554C20.0821 22.8944 20.0937 22.9377 20.0952 22.9819C20.0966 23.0261 20.0878 23.0701 20.0695 23.1103C19.0234 25.5437 17.9788 27.9782 16.936 30.4138C16.8184 30.6869 16.7026 30.96 16.5718 31.2679L33.1253 22.9911L16.5718 14.7144L16.633 14.8567Z" fill="white" />
                                                            <defs>
                                                                <linearGradient id="paint0_linear_34_576" x1="23.0091" y1="0" x2="23.0091" y2="45.9821" gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#BA23ED" />
                                                                    <stop offset="0.493202" stop-color="#8E32ED" />
                                                                    <stop offset="1" stop-color="#2953ED" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>


                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                    </div>
                </section>
            </Col>
        </Row>

    );
};

export default TestOption;