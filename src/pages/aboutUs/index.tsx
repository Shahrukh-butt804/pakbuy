import "animate.css";
// import Mainvideo from '../../../public/images/ip.mp4';
import ClientSlider from "../../components/clientSlider";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InnerBanner from "../../components/innerBanner";
import Aboutourstory from "../../components/aboutourstory";




const Home = () => {
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
            <InnerBanner title="About Us"/>
            <Aboutourstory />
            <div className="aboutpage-client-slider">
            <ClientSlider />
            </div>
            <Footer />
        </>
    );
};

export default Home;
