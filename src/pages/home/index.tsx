import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesCards from "../../components/categoriesCards";
import { ChooseFeatures } from "../../components/chooseFeatures";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import { EthicsBound } from "../../components/ethicsBound";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { HeroSection } from "../../components/heroSection/heroSection";
import InfoCards2 from "../../components/infoCards2";
import { MemberBenefits } from "../../components/memberBenefits";
import { toggleRegisterModal } from "../../redux/reducers/modalSlice";
import { selectUser } from "../../redux/reducers/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function openRegisterModal() {
    dispatch(toggleRegisterModal());
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col font-sans selection:bg-[#C97873]/30 selection:text-white overflow-x-hidden">
      {/* Header and HeroSection MUST NOT BE CHANGED per user request */}
      <Header />
      <HeroSection />

      {/* Main Home Content Container */}
      <div className="w-full bg-gradient-to-b from-[#0a0a0c] via-[#101014] to-[#141418] border-b border-[#C97873]/20">
        {/* Info Cards Section */}
        <InfoCards2 />

        {/* Collections Overview Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 text-[#C97873] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Selections
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Explore All <span className="text-[#C97873]">Collections</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Click any collection card below to preview its clinical rationale and member pricing.
          </p>
        </div>

        <CategoriesCards memberBtn={user ? true : false} />

        {/* Core Methodology Features */}
        <ChooseFeatures />

        {/* Become a Member Highlight Section */}
        <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <section className="my-6">
            <div className="w-full text-center bg-gradient-to-b from-[#18181b] via-[#141417] to-[#101012] p-8 sm:p-12 md:p-14 rounded-3xl border border-[#C97873]/30 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C97873]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C97873]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 text-[#C97873] text-xs font-bold uppercase tracking-widest">
                  Member Opportunity
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug">
                  A new marketplace for real health options{" "}
                  <span className="block text-[#C97873] mt-2 font-semibold">
                    only available to our members
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
                  Join Pak Buy to unlock curated health bundles, direct member-only savings, and full transparency on every single order.
                </p>

                <div>
                  <button
                    onClick={openRegisterModal}
                    className="group relative inline-flex items-center gap-2 py-4 px-9 rounded-full bg-[#C97873] hover:bg-[#b86762] text-white font-extrabold text-xs sm:text-sm tracking-widest uppercase shadow-xl shadow-[#C97873]/25 hover:shadow-[#C97873]/40 transition-all duration-300 active:scale-95"
                  >
                    <span>Become A Member</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Member Benefits */}
          <MemberBenefits />
        </div>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="w-full bg-gradient-to-r from-[#1c1213] via-[#C97873] to-[#1c1213] py-3.5 overflow-hidden border-y border-[#C97873]/40 shadow-inner">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center space-x-8 text-white font-bold text-xs sm:text-sm uppercase tracking-widest font-mono">
            <span>Pak Buy <strong className="text-black font-extrabold">Collection</strong> ✦</span>
            <span>Member Exclusive Pricing ✦</span>
            <span>Pak Buy <strong className="text-black font-extrabold">Collection</strong> ✦</span>
            <span>Clinically Evaluated Solutions ✦</span>
            <span>Pak Buy <strong className="text-black font-extrabold">Collection</strong> ✦</span>
            <span>Zero Markup Marketplace ✦</span>
            <span>Pak Buy <strong className="text-black font-extrabold">Collection</strong> ✦</span>
            <span>Member Exclusive Pricing ✦</span>
          </div>
          <div className="flex items-center space-x-8 text-white font-bold text-xs sm:text-sm uppercase tracking-widest font-mono ml-8">
            <span>Pak Buy <strong className="text-black font-extrabold">Collection</strong> ✦</span>
            <span>Member Exclusive Pricing ✦</span>
            <span>Pak Buy <strong className="text-black font-extrabold">Collection</strong> ✦</span>
            <span>Clinically Evaluated Solutions ✦</span>
            <span>Pak Buy <strong className="text-black font-extrabold">Collection</strong> ✦</span>
            <span>Zero Markup Marketplace ✦</span>
            <span>Pak Buy <strong className="text-black font-extrabold">Collection</strong> ✦</span>
            <span>Member Exclusive Pricing ✦</span>
          </div>
        </div>
      </div>

      {/* Bottom Ethics & Info Section */}
      <section className="bg-gradient-to-b from-[#101014] via-[#0d0d0f] to-[#08080a] border-t border-white/10 mt-auto">
        <EthicsBound />

        <div className="relative w-full text-center py-14 px-4 bg-gradient-to-b from-transparent via-[#C97873]/10 to-transparent my-4">
          <div className="max-w-4xl mx-auto space-y-4">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Member only <span className="text-[#C97873]">marketplace</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-300 max-w-lg mx-auto">
              Empowering individuals with direct access to vetted, high-value health collections.
            </p>

            <button
              onClick={openRegisterModal}
              className="py-3.5 px-8 rounded-full bg-[#C97873] hover:bg-[#b86762] text-white font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg shadow-[#C97873]/25 hover:shadow-[#C97873]/40 transition-all duration-300 active:scale-95 inline-block mt-4"
            >
              GET MEMBERSHIP
            </button>
          </div>
        </div>

        <ChooseInfoSection />
        <Footer />
      </section>
    </div>
  );
};

export default Home;

