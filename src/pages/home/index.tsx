import "animate.css";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InfoCards from "../../components/infoCards";
import InfoCards2 from "../../components/infoCards2";
import CategoriesCards from "../../components/categoriesCards";
import { ChooseFeatures } from "../../components/chooseFeatures";
import { MemberBenefits } from "../../components/memberBenefits";
import { EthicsBound } from "../../components/ethicsBound";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
// import Mainvideo from '../../../public/images/ip.mp4';




const Home = () => {
    // const navigate = useNavigate();


    return (
        <>

            <Header />
            <div className="home-top-bg">
                <div className="home-top-content">
                    <h1 className="home-top-title">CHOOSE <span className="home-top-subtitle">well</span></h1>
                    {/* <p className="home-top-subtitle">well</p> */}
                </div>
                <InfoCards />

                <div className="access-exclusive">
                    <h3>Access to exclusive</h3>
                </div>
                <div className="relative w-full collections-heading">
                    <h3 className="inset-0 flex items-center justify-center text-6xl font-bold text-white mix-blend-exclusion">
                        Collections
                    </h3>
                </div>
                <InfoCards2 />
                <CategoriesCards />
                <ChooseFeatures />
            </div>

            <div className="leave-bg">
                <section className="flex justify-center leave-bg-content ">
                    <div className="container w-full">
                        <h2>A new marketplace for real health options <span>only available to our members</span> </h2>
                        <button
                            className="site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200"
                        >
                            Become A member
                        </button>
                    </div>
                </section>

                <section className="flex justify-center leave-bg-content ">
                    <div className="container w-full ">
                        <MemberBenefits />
                    </div>
                </section>
            </div>
            <section className="ethicsBoundary-bg">
                <div className="flex justify-center">
                    <div className="w-full">
                        <EthicsBound />
                    </div>
                </div>
                <div className="relative w-full collections-heading text-center">
                    <h5 className="inset-0 flex items-center justify-center text-6xl font-bold text-white mix-blend-exclusion">
                        Member only marketplace
                    </h5>
                    <button
                        className="site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200"
                    >
                        GET MEMBERSHIP
                    </button>
                </div>
                <CategoriesCards />
                <ChooseInfoSection />
                <Footer />
            </section>
        </>
    );
};

export default Home;
