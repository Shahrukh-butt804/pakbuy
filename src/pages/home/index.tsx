import "animate.css";
import { useDispatch } from "react-redux";
import CategoriesCards from "../../components/categoriesCards";
import { ChooseFeatures } from "../../components/chooseFeatures";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import { EthicsBound } from "../../components/ethicsBound";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InfoCards from "../../components/infoCards";
import InfoCards2 from "../../components/infoCards2";
import { MemberBenefits } from "../../components/memberBenefits";
import { toggleRegisterModal } from "../../redux/reducers/modalSlice";
// import Mainvideo from '../../../public/images/ip.mp4';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { selectUser } from "../../redux/reducers/userSlice";
import { useSelector } from "react-redux";




const Home = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    function closeModal() {
        dispatch(toggleRegisterModal())
    }
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>

            <Header />
            <div className="home-top-bg">
                <div className="home-top-content" data-aos="fade-down" data-aos-delay="500">
                    <h1 className="home-top-title">
                        CHOOSE <span className="home-top-subtitle">well</span>
                    </h1>
                </div>
                <InfoCards />
                <div className="access-exclusive" data-aos="zoom-in" data-aos-delay="1000">
                    <h3>Access to exclusive</h3>
                </div>

                <div className="relative w-full collections-heading" data-aos="fade-up">
                    <h3 className="inset-0 flex items-center justify-center text-6xl font-bold text-white mix-blend-exclusion">
                        Collections
                    </h3>
                </div>
                <InfoCards2 />
                <CategoriesCards
                    memberBtn={user ? true : false}
                />
                <ChooseFeatures />
                <div className="py-10">
                    <section className="flex justify-center leave-bg-content">
                        <div className="container w-full text-center">
                            <h2
                                data-aos="fade-up"
                                data-aos-delay="1000"
                                data-aos-duration="800"
                                className="text-white text-xl md:text-2xl font-semibold mb-4"
                            >
                                A new marketplace for real health options{" "}
                                <span className="block text-[#f6c356]">only available to our members</span>
                            </h2>

                            <button
                                onClick={closeModal}
                                className="site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200"
                                data-aos="zoom-in"
                                data-aos-delay="800"
                                data-aos-duration="800"
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
            </div>

            {/* <div className="leave-bg">
                <section className="flex justify-center leave-bg-content">
                    <div className="container w-full text-center">
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            data-aos-duration="800"
                            className="text-white text-xl md:text-2xl font-semibold mb-4"
                        >
                            A new marketplace for real health options{" "}
                            <span className="block text-[#f6c356]">only available to our members</span>
                        </h2>

                        <button
                            onClick={closeModal}
                            className="site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200"
                            data-aos="zoom-in"
                            data-aos-delay="800"
                            data-aos-duration="800"
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
            </div> */}
            <div className="ticker">
                <div className="ticker-content">
                    <h6>
                        CHOOSE your <span>Collection</span> * &nbsp; CHOOSE your <span>Collection</span> * &nbsp;
                        CHOOSE your <span>Collection</span> * &nbsp; CHOOSE your <span>Collection</span> *
                    </h6>
                    <h6>
                        CHOOSE your <span>Collection</span> * &nbsp; CHOOSE your <span>Collection</span> * &nbsp;
                        CHOOSE your <span>Collection</span> * &nbsp; CHOOSE your <span>Collection</span> *
                    </h6>
                </div>
            </div>
            <section className="ethicsBoundary-bg">
                <div className="flex justify-center">
                    <div className="w-full">
                        <EthicsBound />
                    </div>
                </div>
                <div className="relative w-full collections-heading text-center">
                    <h5
                        className="inset-0 flex items-center justify-center text-6xl font-bold text-white mix-blend-exclusion"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="1000"
                    >
                        Member only marketplace
                    </h5>

                    <button
                        onClick={closeModal}
                        className="site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200 mt-4"
                        data-aos="zoom-in"
                        data-aos-delay="1100"
                        data-aos-duration="800"
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
