import "animate.css";
// import Mainvideo from '../../../public/images/ip.mp4';
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InnerBanner from "../../components/innerBanner";
import ExploreCategory from "../../components/exploreCategory";
import ComparingFeatures from "../../components/comparingFeatures";
import Samplereports from "../../components/samplereports";





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
            <InnerBanner title="Shop Genetic Tests" />
            <ExploreCategory />
            <ComparingFeatures />
            <Samplereports />
            <Footer />
        </>
    );
};

export default Home;
