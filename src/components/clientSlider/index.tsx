import React from "react";
import Slider, { Settings } from "react-slick";
import { Row, Col, Typography } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageUrl } from '../../utils/Functions';
// import "./ClientSlider.css";

const { Title } = Typography;

const clientImages: string[] = [
    "client-logo1.png",
    "client-logo2.png",
    "client-logo3.png",
    "client-logo4.png",
    "client-logo5.png",
    "client-logo6.png",
    "client-logo3.png",
];

const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 480,
            settings: { slidesToShow: 1 }
        }
    ]
};

const ClientSlider: React.FC = () => {
    return (
        <section className="clients-one">
            <Row justify={"center"}>
                <Col lg={22}>
                    <div className="client-slider-box backdrop-blur-md">
                        <Row gutter={[32, 32]} align="middle">
                            {/* Left Column */}
                            <Col xs={24} lg={6}>
                                <Title level={4} className="clients-one_title">
                                    Worked with world famous <br /> brands and partners
                                </Title>
                            </Col>

                            {/* Right Column */}
                            <Col xs={24} lg={18}>
                                <Slider {...sliderSettings}>
                                    {clientImages.map((src, index) => (
                                        <div key={index} className="client-image">
                                            <a href="#">
                                                <img
                                                    src={ImageUrl(src)}
                                                    alt={`Client ${index + 1}`}
                                                    style={{
                                                        maxWidth: "100%",
                                                        height: "auto",
                                                        display: "block",
                                                        margin: "0 auto"
                                                    }}
                                                />
                                            </a>
                                        </div>
                                    ))}
                                </Slider>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

        </section>
    );
};

export default ClientSlider;
