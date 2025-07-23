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
            <InnerBanner title="Medical Disclaimer" />
             <Row justify={"center"} className='py-10'>
                <Col lg={16}>
                    <div className="sec-title text-center">
                        <div className="sec-title_title justify-center">
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            Medical Use Disclaimer
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="sec-title_heading">
                            Medical Disclaimer
                        </div>
                    </div>
                </Col>
                <Col lg={21}>
                    <section className="mb-20 translate-y-4 transition-all duration-1000 ease-out rounded-xl p-5 hipa-box">
    <div className="hippa-content">
        <h5>Last Updated: June 19, 2025</h5>
        <p>The information provided by Gene Matrix LLC (“Gene Matrix”), including all content distributed through our websites, genetic reports, digital platforms, test kits, educational materials, and communications (collectively referred to as the “Services”), is intended for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.</p>
    </div>

    <div className="hippa-content">
        <h5>No Medical Diagnosis, Treatment, or Clinical Practice</h5>
        <p>Gene Matrix is not a healthcare provider and does not engage in the practice of medicine. Our Services, including but not limited to pharmacogenomics (PGx), nutrigenomics (NGx), hereditary cancer risk panels, and wellness-focused DNA testing, are:</p>
        <ul>
            <li>Not designed to detect, diagnose, or cure any medical condition or disease</li>
            <li>Not intended to serve as a sole basis for health-related decisions</li>
            <li>Not a replacement for consultations with licensed physicians, clinicians, or specialists</li>
        </ul>
        <p>Always seek the advice of your healthcare provider before making medical, pharmaceutical, dietary, or lifestyle decisions based on any information provided by Gene Matrix.</p>
    </div>

    <div className="hippa-content">
        <h5>About Our Genetic Reports</h5>
        <p>Our reports are derived from current genomic research, clinical literature, peer-reviewed studies, and well-established genetic databases. They may include insights based on genetic associations, known polymorphisms, or emerging clinical evidence. However:</p>
        <ul>
            <li>Not all genes, variants, or health risks are included in any single panel</li>
            <li>Interpretations may change over time as genetic science evolves</li>
            <li>Report findings do not guarantee clinical symptoms, disease onset, or treatment response</li>
            <li>The presence or absence of a genetic marker does not constitute a clinical diagnosis</li>
        </ul>
        <p>Gene Matrix reports are reviewed and enhanced by AI-assisted tools, but final medical interpretation must always be conducted by a licensed healthcare provider.</p>
    </div>

    <div className="hippa-content">
        <h5>Pharmacogenomics (PGx) Advisory</h5>
        <p>The GenePharma™ test is designed to provide information about your genetic predisposition to drug metabolism and gene-drug interactions. This data is intended to support, not replace, the prescribing decisions of your physician.</p>
        <ul>
            <li>PGx insights are not therapeutic recommendations</li>
            <li>Medication adjustments should not be made solely on the basis of PGx results</li>
            <li>All prescribing decisions must be made within the context of a full clinical evaluation</li>
        </ul>
        <p>Gene Matrix assumes no liability for medication changes made without clinical oversight.</p>
    </div>

    <div className="hippa-content">
        <h5>Pediatric Testing and Guardian Responsibility</h5>
        <p>For pediatric-focused panels (such as GeneBaby™), a parent or legal guardian is responsible for:</p>
        <ul>
            <li>Obtaining professional medical interpretation of the results</li>
            <li>Ensuring that any follow-up decisions or interventions are age-appropriate and clinically justified</li>
            <li>Consulting a pediatrician or licensed specialist for any concerns related to a child's health or development</li>
        </ul>
        <p>Genetic data for minors must be used with caution, ethical consideration, and proper medical supervision.</p>
    </div>

    <div className="hippa-content">
        <h5>Limitations of Liability and Data Interpretation</h5>
        <p>Gene Matrix makes every effort to ensure accuracy, clarity, and scientific integrity across all its Services. Nevertheless, we do not provide any guarantee regarding:</p>
        <ul>
            <li>The completeness or relevance of any genetic interpretation</li>
            <li>The accuracy of risk assessments in individual medical contexts</li>
            <li>The outcome of any personal health decision based on our reports</li>
            <li>The consistency of scientific consensus over time as research advances</li>
        </ul>
        <p>Use of Gene Matrix Services is at the user’s own discretion and risk. Gene Matrix shall not be held liable for any direct, indirect, incidental, or consequential harm resulting from reliance on its Services.</p>
    </div>

    <div className="hippa-content">
        <h5>In the Event of a Medical Emergency</h5>
        <p>Gene Matrix does not offer medical, urgent care, or telehealth services. If you are experiencing a medical emergency, contact your physician or call emergency medical services in your area immediately.</p>
    </div>

    <div className="hippa-content">
        <h5>Questions or Support</h5>
        <p>If you are uncertain about how to interpret your results, or if you have questions regarding this disclaimer, please contact us at:</p>
        <ul>
            <li><a href="mailto:support@genematrix.io">General Support: support@genematrix.io</a></li>
            <li><a href="mailto:clinical@genematrix.io">Clinical Inquiries: clinical@genematrix.io</a></li>
            <li><a href="mailto:contact@genematrix.eu">EU Region Support: contact@genematrix.eu</a></li>
        </ul>
    </div>

    <div className="hippa-content">
        <p>Gene Matrix is committed to providing accurate and responsible genomic information. However, the use of this information must be done in collaboration with licensed medical professionals who can evaluate your complete health profile.</p>
        <p>Genomic insights can be powerful tools, but they are not a replacement for qualified medical expertise. Use responsibly. Consult wisely. Act with care.</p>
    </div>
</section>

                </Col>
            </Row>
            <Footer />
        </>
    );
};

export default Home;
