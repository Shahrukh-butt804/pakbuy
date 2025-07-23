import "animate.css";
import { Col, Row } from "antd";
// import Mainvideo from '../../../public/images/ip.mp4';
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import InnerBanner from "../../components/innerBanner";
import { Link } from "react-router";




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
            <InnerBanner title="Waiver of Liability" />
            <Row justify={"center"} className='py-10'>
                <Col lg={16}>
                    <div className="sec-title text-center">
                        <div className="sec-title_title justify-center">
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            Waiver of Liability
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="sec-title_heading">
                            Waiver of Liability
                        </div>
                    </div>
                </Col>
                <Col lg={21}>
                    <section className="mb-20 translate-y-4 transition-all duration-1000 ease-out rounded-xl p-5 hipa-box">
                        <div className="hippa-content">
                            <h5> Effective Date: June 19, 2025</h5>
                            <p>This Waiver of Liability and Assumption of Risk ("Waiver") governs your access to and use of any service, product, platform, website, genetic test, software, or analysis provided by Gene Matrix LLC ("Gene Matrix", "we", "us", or "our"). This document is legally binding and applies to all individuals and entities using Gene Matrix services in any capacity, including but not limited to customers, patients, providers, healthcare professionals, distributors, franchisees, and business partners (“you” or “User”). <br /><br />

                                By accessing our services, you agree to the terms below. Please read carefully.</p>
                        </div>
                        <div className="hippa-content">
                            <h5> Voluntary Participation & Acknowledgment of Purpose</h5>
                            <p>By purchasing or using any Gene Matrix product or service (including DNA test kits and AI-generated reports), you explicitly acknowledge and agree that:</p>
                            <ul>
                                <li>You are voluntarily submitting personal, health, and/or biological information for analysis.</li>
                                <li>You understand the informational nature of the reports — they are not intended to diagnose, treat, or prevent any medical condition.</li>
                                <li>You acknowledge that Gene Matrix services do not replace professional medical advice, diagnosis, or treatment from licensed healthcare providers.</li>
                                <li>You take full responsibility for any decisions, actions, or lifestyle changes you make based on your results.</li>
                            </ul>
                        </div>
                        <div className="hippa-content">
                            <h5> Assumption of Risk</h5>
                            <p>Using Gene Matrix services involves inherent risks. By participating, you accept and assume all risks, known or unknown, including but not limited to:</p>
                            <ul>
                                <li>Emotional or psychological impacts resulting from learning about potential health risks, inherited conditions, or unknown family relationships.</li>
                                <li>Unintended family or social consequences, such as discovering non-paternity or unknown biological relatives.</li>
                                <li>Insurance or employment implications in jurisdictions where genetic information may be used for underwriting or eligibility (you are responsible for understanding local laws).</li>
                                <li>Evolving science: The interpretation of your genetic data may change over time as new research emerges, and previous insights may be updated or reclassified.</li>
                            </ul>
                            <p>You agree that you are solely responsible for the way in which you interpret, share, or act upon your genetic data.</p>
                        </div>

                        <div className="hippa-content">
                            <h5> Limitation of Liability</h5>
                            <p>To the maximum extent permitted by law, Gene Matrix, including its employees, partners, labs, affiliates, contractors, directors, and licensors, shall not be liable for any:</p>
                            <ul>
                                <li>Physical, emotional, or financial harm resulting from the use or misuse of your genetic information.</li>
                                <li>Medical decisions made without appropriate consultation with a licensed professional.</li>
                                <li>Delays, omissions, or inaccuracies in sample processing, data interpretation, or report delivery.</li>
                                <li>Third-party misuse of information, including unauthorized access to your account or report sharing by others.</li>
                                <li>Any harm caused by AI-generated or algorithm-based insights, even if based on clinically validated data sources.</li>
                            </ul>
                            <p>In any case, your exclusive remedy for dissatisfaction is to discontinue use of our services.</p>
                        </div>

                        <div className="hippa-content">
                            <h5> Data Security & Privacy Protection</h5>
                            <p>Gene Matrix is committed to protecting your data and follows international security protocols, including:</p>
                            <ul>
                                <li>AES-256 encryption for data in transit and at rest</li>
                                <li>Compliance with HIPAA (U.S.), GDPR (EU), and ISO 27001</li>
                                <li>Role-based access and audit trails within our data systems</li>
                            </ul>
                            <p>However, you acknowledge that:</p>
                            <ul>
                                <li>No system is immune to breaches caused by external actors, device loss, or account misuse.</li>
                                <li>Gene Matrix is not responsible for data accessed due to failure to follow recommended security practices (e.g., password sharing, insecure devices).</li>
                                <li>You are responsible for managing how and with whom you share your reports, whether digitally or in print.</li>
                            </ul>
                        </div>

                        <div className="hippa-content">
                            <h5> No Guarantee of Medical Outcomes</h5>
                            <p>Gene Matrix offers insights based on current genomic science. However, we make no warranties or guarantees about the outcome or accuracy of:</p>
                            <ul>
                                <li>Predicted drug responses or interactions</li>
                                <li>Risk or prevention of disease or health conditions</li>
                                <li>Your interpretation of the reports or reliance on external advisors or providers</li>
                                <li>Future changes in your health status based on genetics alone</li>
                            </ul>
                            <p>We provide a tool, not a treatment plan. For any health concerns, you must consult a licensed medical professional.</p>
                        </div>
                        <div className="hippa-content">
                            <h5> User Responsibilities</h5>
                            <p>As a User, you agree to:</p>
                            <ul>
                                <li>Use your genetic information responsibly and ethically, both for yourself and your family.</li>
                                <li>Not hold Gene Matrix liable for any personal, professional, legal, or financial decisions made based on our services.</li>
                                <li>Consult a qualified healthcare provider before making any health-related decisions, including but not limited to changes in medication, supplementation, or lifestyle.</li>
                            </ul>
                        </div>
                        <div className="hippa-content">
                            <h5> Genetic Counseling & Medical Follow-Up</h5>
                            <p>Gene Matrix strongly encourages users to:</p>
                            <ul>
                                <li>Seek guidance from a genetic counselor or physician when reviewing your report.</li>
                                <li>Share relevant findings with your healthcare team before initiating any medical treatment or procedure.</li>
                                <li>Use your results as a starting point for deeper medical evaluation, not as a standalone diagnosis.</li>
                            </ul>
                        </div>
                        <div className="hippa-content">
                            <h5> Questions, Concerns, or Legal Inquiries</h5>
                            <p>For further clarification or concerns related to this Waiver or your legal rights, you may contact us at:</p>
                            <ul>
                                <li><Link to={"https://www.legal@genematrix.io"}>legal@genematrix.io</Link> (Global inquiries)</li>
                                <li><Link to={"https://www.privacy@genematrix.io"}>privacy@genematrix.io</Link> (Data protection inquiries)</li>
                                <li><Link to={"https://www.contact@genematrix.eu"}>contact@genematrix.eu</Link> (EU-specific requests)</li>
                            </ul>
                        </div>

                        <div className="hippa-content">
                            <h5> Acknowledgment & Agreement</h5>
                            <p>By accessing or using any Gene Matrix product or service, you confirm that:</p>
                            <ul>
                                <li>You have read, understood, and agreed to the terms outlined in this Waiver of Liability.</li>
                                <li>You are at least 18 years of age or have the legal authority to act on behalf of a minor.</li>
                                <li>You accept that any use of Gene Matrix services is at your own risk.</li>
                            </ul>
                            <h6>Your genome is powerful. So is your responsibility. Use your results wisely.</h6>
                        </div>
                    </section>
                </Col>
            </Row>
            <Footer />
        </>
    );
};

export default Home;
