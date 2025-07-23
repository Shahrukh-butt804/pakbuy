import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router';


const MissionVisionSection: React.FC = () => {
    return (
        <>
            <Row justify={"center"} className='py-10'>
                <Col lg={16}>
                    <div className="sec-title text-center">
                        <div className="sec-title_title justify-center">
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            Your Privacy, Our Priority
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="sec-title_heading">
                            Gene Matrix meets HIPAA & GDPR — to keep your health data secure.
                        </div>
                    </div>
                </Col>
                <Col lg={21}>
                    <section className="mb-20 translate-y-4 transition-all duration-1000 ease-out rounded-xl p-5 hipa-box">
                        <div className="hippa-content">
                            <h5> HIPAA & GDPR Compliance</h5>
                            <p>At Gene Matrix, safeguarding your genetic and personal health data is not just a regulatory requirement but a foundational part of our commitment to ethical, transparent, and personalized healthcare. We are deeply invested in maintaining the highest standards of data protection, privacy, and compliance across all our systems, services, and partnerships.
                                We proudly operate within leading data protection frameworks, including:</p>
                            <ul>
                                <li>HIPAA – Health Insurance Portability and Accountability Act (United States)</li>
                                <li>GDPR – General Data Protection Regulation (European Union)</li>
                                <li>ISO/IEC 27001:2013 – International standard for information security management systems (ISMS)</li>
                                <li>Local and regional health data laws across North America, Europe, the Gulf Cooperation Council (GCC), and other jurisdictions</li>
                            </ul>
                        </div>
                        <div className="hippa-content">
                            <h5> HIPAA Compliance – U.S. Health Data Protection</h5>
                            <p>As a U.S.-based health technology company, Gene Matrix is fully compliant with all provisions of the HIPAA Privacy Rule, Security Rule, and Breach Notification Rule, which govern the use and protection of Protected Health Information (PHI).</p>
                            <p>Our HIPAA-compliant protocols include:</p>
                            <ul>
                                <li>End-to-End Encryption: All PHI is encrypted both in transit and at rest using advanced encryption standards (AES-256).</li>
                                <li>Access Control & Audit Trails: Every access to sensitive information is logged and subject to strict role-based permissions.</li>
                                <li>Business Associate Agreements (BAAs): We maintain signed BAAs with all laboratories, clinical partners, and subcontractors handling PHI on our behalf.</li>
                                <li>Employee Training & Monitoring: Staff members receive regular training in HIPAA compliance, and all systems are monitored for access, use, and anomalies.</li>
                                <li>De-identification & Segmentation: Genetic data is de-identified and segmented from personally identifiable information (PII) to minimize re-identification risk.</li>
                            </ul>
                            <p>Gene Matrix treats genetic information as a medical asset, protected and handled with the same care and confidentiality as a clinical record.</p>
                        </div>

                        <div className="hippa-content">
                            <h5> GDPR Compliance, EU Data Protection and Rights</h5>
                            <p>For our customers, partners, and data subjects in the European Union, we comply fully with the General Data Protection Regulation (EU 2016/679). We recognize and respect your right to privacy and control over your data.</p>
                            <p>Gene Matrix ensures:</p>
                            <ul>
                                <li>Explicit, Informed Consent: No data is collected or processed without clear, affirmative, and freely given consent.</li>
                                <li>Individual Rights: You retain the right to access, correct, delete, restrict, or export your data at any time.</li>
                                <li>Designated EU Privacy Contacts: All data requests and inquiries from EU citizens are handled directly through our EU team.</li>
                                <li>Lawful Bases for Processing: All data processing activities rely on valid legal grounds, including consent, contractual necessity, or legitimate interest.</li>
                                <li>Cross-Border Data Protections: Data transfers from the EU to other regions are governed by Standard Contractual Clauses (SCCs) or other GDPR-compliant mechanisms.</li>
                            </ul>
                            <p>Our platforms are designed with data minimization, purpose limitation, and privacy by design principles embedded into every workflow.</p>
                        </div>

                        <div className="hippa-content">
                            <h5> Global Information Security Standards</h5>
                            <p>All Gene Matrix systems and services operate within a tightly secured environment that meets or exceeds international information security benchmarks.</p>
                            <p>Our infrastructure and practices include:</p>
                            <ul>
                                <li>ISO/IEC 27001:2013 Certification: We maintain a certified Information Security Management System (ISMS) covering all critical infrastructure.</li>
                                <li>AES-256 Encryption: Applied to all genetic, personal, and medical data both during storage and transmission.</li>
                                <li>Zero-Trust Security Architecture: Multi-layered identity and access management, limiting exposure across the entire system.</li>
                                <li>Comprehensive Data Lifecycle Controls: From collection to deletion, every piece of data follows a fully documented path subject to access logs and review.</li>
                                <li>Pseudonymization and Tokenization: Genetic data is tokenized and pseudonymized to prevent re-identification, even in the event of unauthorized access.</li>
                            </ul>
                        </div>


                        <div className="hippa-content">
                            <h5> Compliance Support and Requests</h5>
                            <p>Gene Matrix provides a dedicated channel for all regulatory inquiries, data subject access requests, and institutional compliance documentation</p>
                            <p>We support:</p>
                            <ul>
                                <li>Requests for access, correction, or deletion of your data (under GDPR or HIPAA)</li>
                                <li>Breach disclosure protocols and reporting mechanisms</li>
                                <li>Audit documentation for enterprise clients and government institutions</li>
                                <li>Assistance with data processing agreements, SCCs, and privacy reviews</li>
                            </ul>
                        </div>
                        <div className="hippa-content">
                            <h5> Contact Information for Privacy and Compliance Inquiries</h5>
                            <h6>United States (HIPAA & General Compliance)</h6>
                            <h6>Email: <Link to={"https://www.privacy@genematrix.io"}>privacy@genematrix.io</Link></h6>
                            <h6>European Union (GDPR Compliance and Data Rights)</h6>
                            <h6>Email: <Link to={"https://www.contact@genematrix.eu"}>contact@genematrix.eu</Link></h6>
                            <h6>Email: <Link to={"https://www.genematrix.eu/"}>www.genematrix.eu</Link></h6>
                        </div>

                        <div className="hippa-content">
                            <h5> Our Commitment to You</h5>
                            <p>At Gene Matrix, we understand the sensitivity and significance of genetic data. Our mission is not only to provide innovative and personalized health insights but to do so with the utmost respect for your rights, your privacy, and your trust. <br /><br />
                                We do not treat data protection as an afterthought. It is embedded in our DNA, just like the science we are built upon.</p>
                        </div>


                        {/* <div className="hippa-content">
                            <h5>Data Security First</h5>
                            <p>All patient information is encrypted and stored using advanced security protocols.</p>
                        </div>
                        <div className="hippa-content">
                            <h5>Fully Compliant</h5>
                            <p>We meet global data regulations, including HIPAA (USA) and GDPR (EU).</p>
                        </div>
                        <div className="hippa-content">
                            <h5>You’re in Control</h5>
                            <p>Your health data is only accessed with your consent — transparent, private, and protected.</p>
                        </div>
                        <button
                            className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                        >
                            <span className="mr-2">Find a provider</span>
                            <span className='btn-icon'>
                                <ChevronRight className="h-5 w-5" />
                            </span>
                        </button> */}
                    </section>
                </Col>
            </Row>
        </>
    );
};

export default MissionVisionSection;