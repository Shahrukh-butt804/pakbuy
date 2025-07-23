import "animate.css";
import { Col, Row } from "antd";
// import Mainvideo from '../../../public/images/ip.mp4';
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InnerBanner from "../../components/innerBanner";




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
            <InnerBanner title="Gene Matrix Expands" />
            <Row justify={"center"} className='py-10'>
                <Col lg={16}>
                    <div className="sec-title text-center">
                        <div className="sec-title_title justify-center">
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            Gene Matrix Expands into Clinical Genomics 
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="sec-title_heading">
                            with New AI-Powered PGx Panel
                        </div>
                    </div>
                </Col>
                <Col lg={21}>
                   <section className="mb-20 translate-y-4 transition-all duration-1000 ease-out rounded-xl p-5 hipa-box">
    <div className="hippa-content">
        <h5>Gene Matrix Expands into Clinical Genomics with New AI-Powered PGx Panel</h5>
        <p><strong>Revolutionizing Prescription Safety with Personalized DNA Insights</strong></p>
        <p>Gene Matrix, a precision health company known for its AI-powered DNA testing platform, has just announced a major leap forward: the launch of its new clinical-grade pharmacogenomics (PGx) panel. Designed for use by healthcare providers, pharmacists, and integrative medicine practitioners, this panel marks Gene Matrix’s formal expansion into the clinical genomics space.</p>
        <p>Pharmacogenomics, the study of how genes affect a person’s response to drugs, has rapidly gained traction in medical settings around the world. With more than 800 medications influenced by known genetic markers, the need for DNA-guided prescribing is no longer a futuristic concept. It’s a growing standard of care.</p>
        <p>“Our new PGx panel, GenePharma™, is built to meet that standard,” said Tarek Younis, Founder and CEO of Gene Matrix. “We’ve combined the latest pharmacogenomic science with our proprietary AI interpretation engine to deliver actionable, physician-ready reports that can help reduce trial-and-error prescribing, adverse drug reactions, and patient frustration.”</p>
    </div>

    <div className="hippa-content">
        <h5>What Makes GenePharma™ Unique</h5>
        <p>GenePharma™ analyzes 40+ key genes, including CYP2D6, CYP2C19, SLCO1B1, TPMT, UGT1A1, and VKORC1, all of which have been studied extensively in relation to drug metabolism and side effects. These insights can influence how patients respond to common prescriptions, including:</p>
        <ul>
            <li>Antidepressants</li>
            <li>Pain medications</li>
            <li>Statins</li>
            <li>Blood thinners</li>
            <li>Chemotherapy agents</li>
        </ul>
        <p>But what sets GenePharma™ apart isn’t just the panel itself — it’s the delivery.</p>
        <p>Each GenePharma™ report is powered by Gene Matrix’s AI-enhanced interpretation engine, which combines clinical guidelines (like those from CPIC and PharmGKB) with the patient’s genotype to generate personalized dosage and risk recommendations. Reports are designed to be readable by clinicians and understandable by patients, no genetic degree required.</p>
        <p>“We believe in making complex science simple and usable,” said Younis. “Healthcare providers don’t need another raw genetic report. They need something that can inform real decisions, in real time.”</p>
    </div>

    <div className="hippa-content">
        <h5>Supporting Clinical Integration</h5>
        <p>The launch also includes provider onboarding tools, a HIPAA-compliant portal for patient management, and integration options for EMR systems. This positions Gene Matrix to serve not only direct-to-consumer users but also hospitals, clinics, functional medicine practices, and even pharmacies.</p>
        <p>Early adopters in the U.S. and GCC region are already seeing results. A pharmacist in Abu Dhabi shared, “We had a patient who had been on three different antidepressants with poor outcomes. GenePharma™ helped us identify a genetic mismatch with CYP2D6. The next medication we chose, based on the report, worked within two weeks.”</p>
    </div>

    <div className="hippa-content">
        <h5>A Timely Advancement in Personalized Medicine</h5>
        <p>As the global conversation around personalized medicine continues to grow, Gene Matrix’s move into clinical PGx is timely. According to Precedence Research, the pharmacogenomics market is expected to exceed $14 billion by 2030. With medication errors still accounting for thousands of preventable hospitalizations annually, the push toward genetic safety tools is long overdue.</p>
    </div>

    <div className="hippa-content">
        <h5>What’s Next</h5>
        <p>Gene Matrix’s GenePharma™ panel is now available for licensed providers, with clinical support and onboarding included. The company will be rolling out regional workshops and webinars to support healthcare teams looking to integrate genomics into their daily practice.</p>
        <p>In a world where one-size-fits-all medicine is increasingly outdated, Gene Matrix is betting on precision and giving providers the tools to treat patients, not just conditions.</p>
    </div>

    <div className="hippa-content">
        <p>To learn more about GenePharma™ or request a provider account, visit <a href="https://www.genematrix.io" target="_blank" rel="noopener noreferrer">www.genematrix.io</a>.</p>
    </div>
</section>

                </Col>
            </Row>
            <Footer />
        </>
    );
};

export default Home;
