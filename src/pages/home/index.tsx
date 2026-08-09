import "animate.css";
import { useDispatch } from "react-redux";
import CategoriesCards from "../../components/categoriesCards";
import { ChooseFeatures } from "../../components/chooseFeatures";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import { EthicsBound } from "../../components/ethicsBound";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InfoCards2 from "../../components/infoCards2";
import { MemberBenefits } from "../../components/memberBenefits";
import { toggleRegisterModal } from "../../redux/reducers/modalSlice";
// import Mainvideo from '../../../public/images/ip.mp4';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { HeroSection } from "../../components/heroSection/heroSection";
import { selectUser } from "../../redux/reducers/userSlice";

const Home = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function closeModal() {
    dispatch(toggleRegisterModal());
  }
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#141414] to-[#1a1a1a] text-white flex flex-col font-sans selection:bg-[#C97873]/30 selection:text-white">
      <Header />
      <HeroSection />
      <div className="ticker mt-2">
        <div className="ticker-content">
          <h6>
            Pak Buy <span>Collection</span> * &nbsp; Pak Buy{" "}
            <span>Collection</span> * &nbsp; Pak Buy <span>Collection</span> *
            &nbsp; Pak Buy <span>Collection</span> *
          </h6>
          <h6>
            Pak Buy <span>Collection</span> * &nbsp; Pak Buy{" "}
            <span>Collection</span> * &nbsp; Pak Buy <span>Collection</span> *
            &nbsp; Pak Buy <span>Collection</span> *
          </h6>
        </div>
      </div>
      <div className="home-top-bg">
        {/* <InfoCards /> */}
        <div
          className="access-exclusive"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <h3>Access to exclusive</h3>
        </div>

        <div className="relative w-full collections-heading" data-aos="fade-up">
          <h3 className="inset-0 flex items-center justify-center text-6xl font-bold text-white mix-blend-exclusion">
            Collections
          </h3>
        </div>

        <InfoCards2 />
        <CategoriesCards memberBtn={user ? true : false} />
        <ChooseFeatures />
        <div className="py-12 px-4 max-w-7xl mx-auto w-full">
          <section className="flex justify-center leave-bg-content my-6">
            <div className="w-full text-center bg-gradient-to-b from-[#18181b] to-[#101012] p-8 sm:p-12 rounded-3xl border border-[#C97873]/20 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C97873]/10 rounded-full blur-3xl pointer-events-none" />
              <h2
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="800"
                className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold mb-6 tracking-tight relative z-10"
              >
                A new marketplace for real health options{" "}
                <span className="block text-[#C97873] mt-2 font-semibold">
                  only available to our members
                </span>
              </h2>

              <button
                onClick={closeModal}
                className="relative z-10 py-3.5 px-8 rounded-full bg-[#C97873] hover:bg-[#b86762] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#C97873]/25 hover:shadow-[#C97873]/40 transition-all duration-300 active:scale-[0.98]"
                data-aos="zoom-in"
                data-aos-delay="800"
                data-aos-duration="800"
              >
                Become A Member
              </button>
            </div>
          </section>

          <section className="flex justify-center leave-bg-content">
            <div className="container w-full">
              <MemberBenefits />
            </div>
          </section>
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-content">
          <h6>
            Pak Buy <span>Collection</span> * &nbsp; Pak Buy{" "}
            <span>Collection</span> * &nbsp; Pak Buy <span>Collection</span> *
            &nbsp; Pak Buy <span>Collection</span> *
          </h6>
          <h6>
            Pak Buy <span>Collection</span> * &nbsp; Pak Buy{" "}
            <span>Collection</span> * &nbsp; Pak Buy <span>Collection</span> *
            &nbsp; Pak Buy <span>Collection</span> *
          </h6>
        </div>
      </div>
      <section className="ethicsBoundary-bg border-t border-white/10 mt-auto">
        <div className="flex justify-center">
          <div className="w-full">
            <EthicsBound />
          </div>
        </div>
        <div className="relative w-full collections-heading text-center py-10">
          <h5
            className="inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1000"
          >
            Member only marketplace
          </h5>

          <button
            onClick={closeModal}
            className="py-3.5 px-8 rounded-full bg-[#C97873] hover:bg-[#b86762] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#C97873]/25 hover:shadow-[#C97873]/40 transition-all duration-300 active:scale-[0.98] mt-6 inline-block"
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
    </div>
  );
};

export default Home;
