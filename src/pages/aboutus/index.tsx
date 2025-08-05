import React from "react";
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { ImageUrl } from '../../utils/Functions';
import CategoriesCards from "../../components/categoriesCards";


const AboutUs: React.FC = () => {



    return (
        <>
            <Header />
            <section className=" text-white py-16 px-4 md:px-20">
                <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10">
                    {/* Left Column */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 web-font">About Us</h2>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 web-font">Empowering Health, One Choice <br /> At A Time</h2>
                        <p className="text-sm md:text-base mb-4 web-font">
                            CHOOSE Well is a marketplace for proven health options.
                        </p>
                        <p className="text-sm md:text-base mb-4 web-font">
                            The CHOOSE team has selected the best from a variety of companies located throughout the world and have brought them together to form the CHOOSE Well Collections™ with common sense pricing.
                        </p>
                        <p className="text-sm md:text-base">
                            By thoughtfully combining complementary options, we equip our members to make informed decisions and move forward on their path to better health.
                        </p>
                    </div>

                    {/* Right Column - Images */}
                    <div className="relative flex justify-center items-center about-pic">
                        <img
                            src={ImageUrl("tree-purple1.png")}
                            alt="Our Story"
                            className="rounded-xl max-w-80  shadow-md absolute top-0 right-0 rotate-3"
                        />
                        <img
                            src={ImageUrl("tree-purple2.png")}
                            alt="Our Story"
                            className="rounded-xl  shadow-md absolute top-24 right-12 rotate-[-6deg]"
                        />
                    </div>
                </div>

                {/* Our Story Section */}
                <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
                    <img
                        src={ImageUrl("tree-purple.png")}
                        alt="Our Story"
                        className="rounded-xl w-full shadow-xl"
                    />
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4 web-font">Our Story</h3>
                        <p className="text-sm md:text-base leading-relaxed web-font">
                            CHOOSE™ was born in response to growing demand for proven health options that aren’t typically covered by insurance—and may not be recommended by physicians.
                            <br /><br />
                            Millions begin their health journey with hope, only to feel lost and frustrated in a sea of influencers, sponsored content, ads, and endless conflicting reviews. This inspired us to change the game.
                            <br /><br />
                            Today, CHOOSE Well is more than a brand—it means joining an exclusive community of conscious consumers who care deeply about health and quality of life for themselves and their loved ones. Our mission is to make choosing health feel intuitive and empowering, not confusing.
                        </p>
                    </div>
                </div>
            </section>
            <section className="ethicsBoundary-bg">
                <div className="relative w-full collections-heading text-center">
                    <h5 className="inset-0 flex items-center justify-center text-6xl font-bold text-white mix-blend-exclusion">
                        WHAT WE OFFER
                    </h5>
                </div>
                <CategoriesCards />
                <ChooseInfoSection />
                <Footer />
            </section>
        </>
    );
};

export default AboutUs;
