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
            <InnerBanner title="User Consent Form" />
            <Row justify={"center"} className='py-10'>
                <Col lg={16}>
                    <div className="sec-title text-center">
                        <div className="sec-title_title justify-center">
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            Consent Form
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="sec-title_heading">
                            User Consent Form
                        </div>
                    </div>
                </Col>
                <Col lg={21}>
                  <section className="mb-20 translate-y-4 transition-all duration-1000 ease-out rounded-xl p-5 hipa-box">
    <div className="hippa-content">
        <h5>Last Updated: June 19, 2025</h5>
        <p>
            This User Consent Form (“Consent Form”) outlines the terms, scope, and conditions under which you, as a user (“you,” “your,” or “User”), voluntarily agree to participate in genetic testing and related services provided by Gene Matrix LLC (“Gene Matrix,” “we,” “our,” or “us”).
        </p>
        <p>
            By agreeing to this Consent Form, you confirm that you have read, understood, and accepted the conditions under which your personal and genetic information will be collected, processed, stored, and, where applicable, shared.
        </p>
    </div>

    <div className="hippa-content">
        <h5>1. Purpose of the Test</h5>
        <p>
            You are voluntarily submitting a biological sample (such as saliva) for the purpose of obtaining genetic insights that may include, but are not limited to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Nutritional recommendations</li>
            <li>Medication response (pharmacogenomics)</li>
            <li>Wellness and fitness optimization</li>
            <li>Risk screening for inherited conditions or traits</li>
        </ul>
        <p>
            This test is not intended to diagnose any disease or serve as a substitute for professional medical care. Results are for informational, preventive, and educational purposes only and should be interpreted with the guidance of a licensed healthcare provider.
        </p>
    </div>

    <div className="hippa-content">
        <h5>2. Information You Consent to Provide</h5>
        <p>By proceeding, you authorize Gene Matrix to collect and process the following data:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Personal Information: Name, email address, phone number, date of birth, and mailing address</li>
            <li>Health Information: Health conditions, medications, lifestyle, and nutrition habits</li>
            <li>Biological Sample: A saliva or buccal swab sample for DNA extraction and sequencing</li>
            <li>Electronic Acknowledgment: Agreement to this Consent Form, our Terms of Service, and Privacy Policy</li>
        </ul>
        <p>
            You acknowledge that providing accurate and complete information is your responsibility and may impact the quality of your results.
        </p>
    </div>

    <div className="hippa-content">
        <h5>3. How Your DNA and Data Will Be Used</h5>
        <p>By submitting your sample, you consent to the following uses:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Extraction and sequencing of your DNA using advanced laboratory technology</li>
            <li>Analysis and interpretation of your genetic markers using AI-assisted tools, research databases, and clinical algorithms</li>
            <li>Report generation, delivered in digital format via secure portal or PDF download</li>
            <li>Storage of data on encrypted, access-controlled, HIPAA- and GDPR-compliant infrastructure</li>
            <li>Optional future re-analysis in accordance with new scientific findings (with opt-in)</li>
        </ul>
        <p>Your personal data and sample will not be used beyond these purposes without additional consent.</p>
    </div>

    <div className="hippa-content">
        <h5>4. Your Privacy Rights</h5>
        <p>Gene Matrix is committed to the security, privacy, and confidentiality of your data. We comply with:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>HIPAA (Health Insurance Portability and Accountability Act – U.S.)</li>
            <li>GDPR (General Data Protection Regulation – EU)</li>
            <li>ISO/IEC 27001 information security certification</li>
        </ul>
        <p>Your rights under these laws include:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>The right to access, correct, or delete your personal and genetic information</li>
            <li>The right to withdraw consent at any time, without penalty</li>
            <li>The right to control sharing of your report with third parties, including family members or healthcare professionals</li>
            <li>The right to request anonymization, restriction of processing, or data portability</li>
        </ul>
        <p>Details are further outlined in our full Privacy Policy.</p>
    </div>

    <div className="hippa-content">
        <h5>5. Risks and Limitations</h5>
        <p>By proceeding, you acknowledge and accept the following risks and limitations:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Emotional or psychological impact: Genetic findings may reveal unexpected health risks, inherited traits, or conditions that may be distressing</li>
            <li>Family implications: Your results may indicate information relevant to your biological relatives</li>
            <li>Insurance or employment implications: Although laws such as GINA (U.S.) protect against misuse, limitations may apply in some jurisdictions</li>
            <li>Scientific limitations: Genetic science evolves, and current interpretations may change as new research becomes available</li>
            <li>Non-clinical intent: These tests are not certified for clinical diagnosis or emergency treatment decisions</li>
        </ul>
        <p>Gene Matrix is not liable for decisions made based on interpretations of results without medical consultation.</p>
    </div>

    <div className="hippa-content">
        <h5>6. Optional Sharing with Healthcare Providers and Relatives</h5>
        <p>You may elect to share your results in the following ways:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>With licensed healthcare professionals for clinical interpretation or preventive guidance</li>
            <li>With family members to compare genetic traits or inherited risks</li>
            <li>With authorized third parties such as research institutions (only with explicit, separate consent)</li>
        </ul>
        <p>Gene Matrix will never share your identifiable information or report with any third party without your formal permission.</p>
    </div>

    <div className="hippa-content">
        <h5>7. Future Research and Use of De-Identified Data</h5>
        <p>You may choose to contribute your anonymized or de-identified data to research efforts that aim to improve health outcomes, develop new algorithms, or expand scientific knowledge. Participation in research is completely optional and does not affect your access to services.</p>
        <p>If you agree, your genetic and health information may be used for:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Research publications</li>
            <li>Statistical modeling</li>
            <li>Product development</li>
            <li>Public health and genomics research</li>
        </ul>
        <p>To participate, you must opt in via the checkbox below or through your user account preferences.</p>
    </div>

    <div className="hippa-content">
        <h5>8. Consent Statement</h5>
        <ul className="list-disc pl-5 space-y-2">
            <li>You are at least 18 years of age or the legal guardian of the minor participant</li>
            <li>You have read and understood the information presented in this Consent Form</li>
            <li>You voluntarily agree to undergo genetic testing and related data processing by Gene Matrix</li>
            <li>You understand that you may withdraw consent at any time, in writing, without affecting prior lawful use</li>
        </ul>
        <p className="mt-4">
            Participant Name: _______________________________<br />
            Signature: _______________________________________<br />
            Date: ___________________
        </p>
        <p className="mt-4">
            <input type="checkbox" id="consentCheck" className="mr-2" />
            <label htmlFor="consentCheck">I provide my informed consent electronically by checking this box and completing my online test registration.</label>
        </p>
    </div>

    <div className="hippa-content">
        <h5>9. Contact Information</h5>
        <p>If you have questions, concerns, or wish to withdraw your consent, please contact:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Gene Matrix LLC – Data Privacy Office: <a href="mailto:privacy@genematrix.io" className="text-blue-500">privacy@genematrix.io</a></li>
            <li>Gene Matrix EU – Data Protection Officer: <a href="mailto:contact@genematrix.eu" className="text-blue-500">contact@genematrix.eu</a></li>
        </ul>
        <p className="mt-4 font-semibold">Note: Your DNA belongs to you. Gene Matrix respects your autonomy, privacy, and right to control your genetic information at all times.</p>
    </div>
</section>

                </Col>
            </Row>
            <Footer />
        </>
    );
};

export default Home;
