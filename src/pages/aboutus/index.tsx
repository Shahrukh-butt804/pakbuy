import React, { useEffect } from "react";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { ImageUrl } from "../../utils/Functions";

const AboutUs: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0d0d] via-[#141414] to-[#1a1a1a] text-white flex flex-col font-sans selection:bg-[#C97873]/30 selection:text-white">
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

        {/* Hero Section */}
        <div className="relative mb-16 pb-12 border-b border-[#C97873]/20 overflow-hidden">
          {/* Ambient Glow background decorative elements */}
          <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#C97873]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#C97873]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Info Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97873]/15 border border-[#C97873]/30 text-[#C97873] text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C97873] animate-pulse"></span>
                Our Mission & Vision
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  About <span className="text-[#C97873]">Pak Buy</span>
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#C97873]/90 mt-2">
                  Empowering Health, One Choice At A Time
                </h2>
              </div>

              <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                <p className="p-4 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                  Pak Buy is a marketplace for proven health options.
                </p>
                <p>
                  The Pak Buy team has selected the best from a variety of companies
                  located throughout the world and have brought them together to
                  form the Pak Buy Collections™ with common sense pricing.
                </p>
                <p className="text-gray-400">
                  By thoughtfully combining complementary options, we equip our
                  members to make informed decisions and move forward on their path
                  to better health.
                </p>
              </div>
            </div>

            {/* Right Column - Image Showcase */}
            <div className="relative flex justify-center items-center py-8 min-h-[360px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C97873]/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative w-full max-w-md h-80 flex justify-center items-center">
                <img
                  src={ImageUrl("tree-purple1.png")}
                  alt="Our Story 1"
                  className="rounded-2xl max-w-[260px] sm:max-w-xs shadow-2xl absolute top-0 right-4 rotate-6 border border-[#C97873]/30 hover:rotate-3 transition-transform duration-500 hover:scale-105 z-10"
                />
                <img
                  src={ImageUrl("tree-purple2.png")}
                  alt="Our Story 2"
                  className="rounded-2xl max-w-[280px] sm:max-w-sm h-72 shadow-2xl absolute top-12 left-4 -rotate-6 border border-white/15 hover:rotate-0 transition-transform duration-500 hover:scale-105 z-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-b from-[#18181b] to-[#101012] p-6 sm:p-10 rounded-3xl border border-[#C97873]/20 shadow-2xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#C97873]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl group">
                <img
                  src={ImageUrl("tree-purple.png")}
                  alt="Our Story"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-[#C97873] text-xs font-bold uppercase tracking-widest">
                  <span className="w-2 h-0.5 bg-[#C97873]"></span>
                  Our Journey
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Our <span className="text-[#C97873]">Story</span>
                </h3>

                <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Pak Buy™ was born in response to growing demand for proven health
                    options that aren’t typically covered by insurance—and may not be
                    recommended by physicians.
                  </p>
                  <p>
                    Millions begin their health journey with hope, only to feel lost
                    and frustrated in a sea of influencers, sponsored content, ads,
                    and endless conflicting reviews. This inspired us to change the
                    game.
                  </p>
                  <p className="p-4 rounded-xl bg-[#C97873]/10 border border-[#C97873]/20 text-white font-medium">
                    Today, Pak Buy is more than a brand—it means joining an
                    exclusive community of conscious consumers who care deeply about
                    health and quality of life for themselves and their loved ones.
                    Our mission is to make choosing health feel intuitive and
                    empowering, not confusing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <section className="ethicsBoundary-bg border-t border-white/10 mt-auto">
        <ChooseInfoSection />
        <Footer />
      </section>
    </div>
  );
};

export default AboutUs;

