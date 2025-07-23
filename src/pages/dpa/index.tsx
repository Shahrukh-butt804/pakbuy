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
            <InnerBanner title="Data Processing Addendum (DPA)" />
            <Row justify={"center"} className='py-10'>
                <Col lg={16}>
                    <div className="sec-title text-center">
                        <div className="sec-title_title justify-center">
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            (DPA)
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="sec-title_heading">
                            Data Processing Addendum (DPA)
                        </div>
                    </div>
                </Col>
                <Col lg={21}>
                    <section className="mb-20 translate-y-4 transition-all duration-1000 ease-out rounded-xl p-5 hipa-box">
  <div className="hippa-content">
    <h5>Last Updated: June 19, 2025</h5>
    <p>
      This Data Processing Addendum (“DPA”) forms an integral part of the Partner Agreement, Master Services Agreement, or any other agreement (“Agreement”) between Gene Matrix LLC (“Gene Matrix”, “Controller”, “Company”) and the authorized partner, client, vendor, or service provider (“Processor”, “Data Processor”) that processes personal data on behalf of Gene Matrix.
      <br /><br />
      This DPA outlines each party’s rights and obligations to ensure the proper handling of personal data in compliance with:
    </p>
    <ul>
      <li>General Data Protection Regulation (GDPR) – EU 2016/679</li>
      <li>UK Data Protection Act 2018</li>
      <li>Health Insurance Portability and Accountability Act (HIPAA) – U.S.</li>
      <li>Applicable U.S. state privacy laws (e.g., CCPA, CPRA)</li>
      <li>Other international, federal, or local data protection laws applicable to the data being processed</li>
    </ul>
  </div>

  <div className="hippa-content">
    <h5>1. Definitions</h5>
    <ul>
      <li><strong>Personal Data:</strong> Any information that directly or indirectly identifies a natural person, including names, email addresses, location data, health information, and genetic data.</li>
      <li><strong>Special Category Data:</strong> Sensitive information such as genetic data, biometric data, racial or ethnic origin, health data, and sexual orientation.</li>
      <li><strong>Processing:</strong> Any operation performed on personal data, including collection, storage, access, use, transmission, or deletion.</li>
      <li><strong>Data Controller:</strong> Gene Matrix LLC, the entity determining the purposes and means of processing.</li>
      <li><strong>Data Processor:</strong> The third party processing personal data on behalf of Gene Matrix.</li>
      <li><strong>Data Subject:</strong> The individual whose personal data is being processed.</li>
    </ul>
  </div>

  <div className="hippa-content">
    <h5>2. Subject Matter of Processing</h5>
    <p>
      This DPA applies to all processing performed by the Processor on behalf of Gene Matrix in connection with the services defined in the Agreement. Processing may include:
    </p>
    <ul>
      <li>Collection of biological samples and personal data from end-users</li>
      <li>Storage, analysis, or transmission of clinical and genetic data</li>
      <li>Access to Gene Matrix platforms, software, portals, or APIs</li>
      <li>Any handling of sensitive data related to Gene Matrix test kits or results</li>
    </ul>
  </div>

  <div className="hippa-content">
    <h5>3. Purpose and Scope</h5>
    <ul>
      <li>Process personal data only in accordance with Gene Matrix’s instructions</li>
      <li>Use data solely to provide services described in the Agreement</li>
      <li>Not use the data for independent research, commercial gain, or profiling</li>
      <li>Cooperate with regulatory compliance efforts and audits</li>
      <li>Promptly report any suspected misuse or violations</li>
    </ul>
  </div>

  <div className="hippa-content">
    <h5>4. Security Measures</h5>
    <p>The Processor must implement robust technical and organizational security, including:</p>
    <ul>
      <li>AES-256 encryption for data in transit and at rest</li>
      <li>Role-based access controls and multi-factor authentication</li>
      <li>Audit logs and system monitoring</li>
      <li>Pseudonymization or anonymization where applicable</li>
      <li>Use of ISO 27001-compliant infrastructure or equivalent</li>
      <li>Secure disposal of personal data records</li>
    </ul>
  </div>

  <div className="hippa-content">
    <h5>5. Cross-Border Data Transfers</h5>
    <p>
      International data transfers must comply with applicable law, including:
    </p>
    <ul>
      <li>Use of Standard Contractual Clauses (SCCs)</li>
      <li>Transfers to countries with Adequacy Decisions</li>
      <li>Binding Corporate Rules or other approved safeguards</li>
    </ul>
  </div>

  <div className="hippa-content">
    <h5>6. Use of Sub-Processors</h5>
    <ul>
      <li>Sub-processors require Gene Matrix's prior written approval</li>
      <li>Sub-processors must sign agreements with equivalent obligations</li>
      <li>The Processor remains responsible for sub-processor actions</li>
    </ul>
  </div>

  <div className="hippa-content">
    <h5>7. Data Subject Rights</h5>
    <p>Processor must assist with data subject rights, including:</p>
    <ul>
      <li>Access requests for personal data</li>
      <li>Rectification of inaccurate data</li>
      <li>Erasure of data upon request</li>
      <li>Data portability requests</li>
      <li>Ceasing processing upon consent withdrawal</li>
    </ul>
  </div>

  <div className="hippa-content">
    <h5>8. Data Breach Notification</h5>
    <p>In the event of a breach, the Processor must:</p>
    <ul>
      <li>Notify Gene Matrix within 24 hours</li>
      <li>Provide details of the breach, affected data, consequences, and mitigation</li>
      <li>Cooperate with investigations and regulatory notifications</li>
    </ul>
  </div>

  <div className="hippa-content">
    <h5>9. Data Return or Deletion</h5>
    <ul>
      <li>Securely return or delete all personal data upon request or agreement termination</li>
      <li>Confirm deletion or return in writing</li>
      <li>Delete backups on rotation or upon instruction</li>
    </ul>
  </div>

  <div className="hippa-content">
    <h5>10. Audits and Documentation</h5>
    <ul>
      <li>Gene Matrix may audit the Processor with reasonable notice</li>
      <li>Processor must provide security documentation, certifications, and logs</li>
      <li>Remediation plans required for any deficiencies</li>
    </ul>
  </div>

  <div className="hippa-content">
    <h5>11. Term and Termination</h5>
    <p>
      This DPA remains in effect for the Agreement’s duration and as long as processing occurs. Violations may result in termination, access restrictions, and legal penalties.
    </p>
  </div>

  <div className="hippa-content">
    <h5>Contact Information for Data Protection Inquiries</h5>
    <ul>
      <li><strong>Gene Matrix LLC – Global Data Controller:</strong> <a href="mailto:privacy@genematrix.io">privacy@genematrix.io</a></li>
      <li><strong>Gene Matrix EU – GDPR Representative:</strong> <a href="mailto:contact@genematrix.eu">contact@genematrix.eu</a></li>
    </ul>
  </div>
</section>

                </Col>
            </Row>
            <Footer />
        </>
    );
};

export default Home;
