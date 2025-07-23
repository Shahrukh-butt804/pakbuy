import { Col, Row } from 'antd';
import React from 'react';
// import { ImageUrl } from '../../utils/Functions';

interface InnerBannerProps {
    title: string;
    image?: string;
}

const InnerBanner: React.FC<InnerBannerProps> = ({ title, image }) => {
    return (
        <div id="home" className="relative min-h-screen flex items-center banner overflow-hidden home-banner">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-1 opacity-80"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="./images/baner-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}

            <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
                <Row justify={"center"}>
                    <Col lg={22}>
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="w-full text-white mb-12 md:mb-0 text-center">
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 uppercase flex justify-center items-center gap-3">
                                    {title}
                                    {image && (
                                        <img
                                            src={image}
                                            alt={title}
                                            className="relative rounded-2xl w-full max-w-lg object-cover inner-banner-img"
                                        />
                                    )}
                                </h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        </div>
    );
};

export default InnerBanner;
