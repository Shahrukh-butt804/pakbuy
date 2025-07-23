import "animate.css";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import Homebanner from "../../components/homebanner";
import ClientSlider from "../../components/clientSlider";
import AboutStory from "../../components/aboutStory";
import Genematrix from "../../components/genematrix";
import HowItWorks from "../../components/howItWorks";
import TestOption from "../../components/testOption";
import Hometestimoials from "../../components/hometestimoials";
// import Mainvideo from '../../../public/images/ip.mp4';




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
            <Homebanner />
            <ClientSlider />
            <AboutStory />
            <Genematrix />
            <HowItWorks />
            <TestOption />
            <Hometestimoials />
            <Footer />
        </>
    );
};

export default Home;
