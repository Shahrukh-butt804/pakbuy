import { Col, Row } from 'antd';
import { useState } from 'react';
import Slider from 'react-slick';
import { ImageUrl } from '../../utils/Functions';


type VideoItem = {
    id: number;
    image: string;
    videoUrl: string;
};

const videos: VideoItem[] = [
    { id: 1, image: '/test-slidr.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 2, image: '/test-slidr.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 3, image: '/test-slidr.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 4, image: '/test-slidr.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 5, image: '/test-slidr.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 6, image: '/test-slidr.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 7, image: '/test-slidr.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 8, image: '/test-slidr.png', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];


const VideoCarousel = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);

    const openModal = (videoUrl: string) => {
        setCurrentVideo(videoUrl);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentVideo(null);
    };

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

    return (
        <Row justify={"center"}>
            <Col lg={22}>
                <div className="carousel-section testi-slidr">
                    <div className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 ">
                        <div className="flex flex-col md:flex-row items-start">
                            <div className="md:w-4/6 p-6 md:p-8">
                                <div className="sec-title_title">
                                    testimonials
                                    <div className="sec-title_dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <h2 className="sec-title_heading">
                                    Hear from patients, doctors, and partners who trust Gene Matrix.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {videos.map((video) => (
                            <div className="video-card" key={video.id}>
                                <div className="thumbnail-container">
                                    <img src={ImageUrl(video.image)} alt="Thumbnail" className="thumbnail" />
                                    <div className="overlay">
                                        <div
                                            className="play-button"
                                            onClick={() => openModal(video.videoUrl)}
                                        >
                                            &#9658;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Modal */}
                    {showModal && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <span className="close-button" onClick={closeModal}>
                                    &times;
                                </span>
                                <video controls autoPlay className="modal-video">
                                    {currentVideo && (
                                        <source src={currentVideo} type="video/mp4" />
                                    )}
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}

                </div>
            </Col>
        </Row>

    );
};

export default VideoCarousel;
