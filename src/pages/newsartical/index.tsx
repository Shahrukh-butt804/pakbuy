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
            <InnerBanner title="News Artical" />
            <Row justify={"center"} className='py-10'>
                <Col lg={16}>
                    <div className="sec-title text-center">
                        <div className="sec-title_title justify-center">
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            Gene Matrix Achieves ISO 27001
                            <div className="sec-title_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="sec-title_heading">
                           Certification for Global Data Security
                        </div>
                    </div>
                </Col>
                <Col lg={21}>
                   <section className="mb-20 translate-y-4 transition-all duration-1000 ease-out rounded-xl p-5 hipa-box">
    <div className="hippa-content">
        <h5>Gene Matrix Achieves ISO 27001 Certification for Global Data Security</h5>
        <p><strong>Raising the Bar for Privacy and Trust in Genetic Testing</strong></p>
        <p>In a major step toward advancing both user trust and international data protection standards, Gene Matrix has officially received ISO/IEC 27001:2013 certification, the world’s leading standard for information security management systems.</p>
        <p>For a company operating at the intersection of genetics, healthcare, and AI, this certification isn’t just a nice-to-have. It’s a core commitment to safeguarding the most personal kind of data there is: your DNA.</p>
    </div>

    <div className="hippa-content">
        <h5>Why It Matters</h5>
        <p>ISO 27001 certification is not handed out lightly. It requires organizations to implement, document, and continually improve a robust framework for managing sensitive data. That includes everything from how data is encrypted and stored to how internal access is monitored and breaches are prevented.</p>
        <p>For Gene Matrix, the achievement is especially significant. With customers in the U.S., EU, GCC, and Asia-Pacific, and a growing presence in clinical settings, ensuring global compliance and secure handling of genetic and health data has always been a top priority.</p>
        <p>“Our entire platform is built on trust,” said Tarek Younis, Founder and CEO of Gene Matrix. “We’re asking users to share deeply personal information with us, from their DNA to their health histories. This certification is one more way we’re showing them that their privacy isn’t negotiable.”</p>
    </div>

    <div className="hippa-content">
        <h5>What ISO 27001 Certification Means</h5>
        <p>At its core, ISO 27001 is a rigorous, independent audit of an organization’s information security system. It evaluates everything from data encryption and user access controls to risk assessments, disaster recovery planning, and ongoing compliance checks.</p>
        <p>For users, this means that Gene Matrix now operates under:</p>
        <ul>
            <li>Military-grade encryption (AES-256) for all data at rest and in transit</li>
            <li>Strict role-based access controls for internal systems</li>
            <li>Continuous security audits and employee training</li>
            <li>Clearly defined protocols for incident response, breach notifications, and vendor management</li>
        </ul>
        <p>Importantly, the certification also complements the company’s adherence to HIPAA (U.S.) and GDPR (EU), giving Gene Matrix a truly global compliance footprint.</p>
    </div>

    <div className="hippa-content">
        <h5>Not Just a Check-the-Box Achievement</h5>
        <p>While many companies treat certifications as static milestones, Gene Matrix sees ISO 27001 as part of a living, breathing security culture.</p>
        <p>“It’s not about passing a test once,” Younis explained. “It’s about embedding security into our daily operations, from how we code, to how we train staff, to how we support our users. ISO gives us the structure, but it’s our team that brings it to life.”</p>
        <p>The certification also sets Gene Matrix apart in the crowded field of genetic testing, where not all players prioritize data privacy at the same level. With headlines frequently spotlighting health tech breaches and misuse of genetic data, achieving ISO 27001 sends a clear message: Gene Matrix is playing the long game.</p>
    </div>

    <div className="hippa-content">
        <h5>What’s Next</h5>
        <p>As the company continues to expand its offerings, including its recently launched pharmacogenomics (PGx) panel and clinical integration tools, the security infrastructure will play a key role in scaling trust alongside technology.</p>
        <p>“We want to be the gold standard not just in the science of personalized health,” said Younis, “but in the responsibility that comes with it.”</p>
    </div>

    <div className="hippa-content">
        <p>To learn more about how Gene Matrix protects your data, visit the Privacy & Security section at <a href="https://www.genematrix.io" target="_blank" rel="noopener noreferrer">www.genematrix.io</a>.</p>
    </div>
</section>


                </Col>
            </Row>
            <Footer />
        </>
    );
};

export default Home;
