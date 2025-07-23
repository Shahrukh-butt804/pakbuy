import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Col, Row } from 'antd';

const sections = [
    { id: 'intro', title: '1. Introduction' },
    { id: 'definitions', title: '2. Key Definitions' },
];

const PrivacyPolicy: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleSidebar = () => setMenuOpen(!menuOpen);
    const closeSidebar = () => setMenuOpen(false);

    return (
        <Row justify={"center"}>
            <Col lg={22}>
                <div className="relative flex flex-col md:flex-row min-h-screen  text-white gap-4 my-10">
                    {/* Mobile Top Bar */}
                    <div className="md:hidden flex justify-between items-center p-4  sticky top-0 z-20">
                        <h2 className="text-lg font-bold">Our Policies</h2>
                        <button onClick={toggleSidebar}>
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Sidebar - Slide in from right */}
                    <div
                        className={`fixed top-0 right-0 h-full w-3/4 bg-gray-800 z-30 privacy-sidebar transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <nav className="p-6 space-y-4">
                            <button onClick={toggleSidebar} className="flex justify-end w-full mb-4">
                                <X size={24} />
                            </button>
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="block text-sm hover:text-blue-400"
                                    onClick={closeSidebar}
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Desktop Sidebar (left side) */}
                    <aside className="hidden md:inline-block md:w-1/4 bg-gray-800 p-4 space-y-4 sticky top-0  privacy-sidebar h-fit">
                        {/* <h2 className="text-xl font-bold mb-2">Our Policies</h2> */}
                        <nav className="space-y-2 text-sm">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="block hover:text-blue-400"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 p-6 space-y-10 privicy-main-content">
                        <Section id="intro" title="1. INTRODUCTION">
                            GENE MATRIX LLC is committed to protecting your privacy and developing technology that gives you the most powerful and safe online experience. This Privacy Policy (“Privacy Policy”) applies to the genematrix.io web site (“Site”) and governs data collection and usage. By using the Site, you consent to the data practices described in this Privacy Policy. Please be sure to review the Full Privacy Policy. Throughout this Privacy Policy, GENE MATRIX LLC is also referred to as “we” or “us.” Throughout this Privacy Policy, you are referred to as “you” or “user(s).” This Privacy Policy applies to all websites owned and operated by GENE MATRIX LLC, including genematrix.io, and any other websites, pages, features, or content we own or operate, and to products offered by us, our affiliates, parent companies, partners, etc., and any related services (collectively, the “Services”). Our products, such as Gene Matrix MindWell or a Gene Matrix MaxRx, will be referred to collectively as the “GENE MATRIX LLC Tests.” Our Privacy Policy is designed to help you better understand how we collect, use, store, process, and transfer your information when using our Services. <br />
                            Please carefully review this Privacy Policy and our Terms and Conditions. By using our Site and our Services, you acknowledge all of the policies and procedures described in the foregoing documents. If you do not agree with or you are not comfortable with any aspect of this Privacy Policy or our Terms and Conditions, you should immediately discontinue use of our Site and/or Services.
                        </Section>

                        <Section id="definitions" title="2. KEY DEFINITIONS">
                           <p><strong>Aggregate Information:</strong>  Information that has been combined with that of other users and analyzed or evaluated as a whole, such that no specific individual may be reasonably identified.</p>
                           <p><strong>De-identified Information:</strong>  information that has been stripped of your Registration Information (e.g., your name and contact information) and other identifying data such that you cannot reasonably be identified as an individual, also known as pseudonymized information.</p>
                           <p>
                            <strong>Individual-level Information:</strong> information about a single individual’s genotypes, but which is not necessarily tied to Registration Information.</p>
                            <p>
                            <strong>Personal Information:</strong> information that can be used to identify you, either alone or in combination with other information. GENE MATRIX LLC collects and stores the following types of Personal Information:</p>
                            <p>
                            <strong>Registration Information:</strong> information you provide about yourself when registering for and/or purchasing our Services (e.g., name, email, address, user ID and password, and payment information).</p>
                            <p>
                            <strong>Genetic Information:</strong> information regarding your genotypes generated through processing of your Test Kits by GENE MATRIX LLC or by its affiliates, contractors, successors, or assignees; or otherwise processed by and/or contributed to GENE MATRIX LLC.</p>
                            <p>
                            <strong>Self-Reported Information:</strong> information you provide directly to us, including but not limited to current medications you may be taking, ethnicity, gender, age, and other information that you enter into surveys, forms, or features while signed in to your GENE MATRIX LLC account.</p>
                            <p>
                            <strong>Sensitive Information:</strong> information about your health, Genetic Information, and certain Self-Reported Information, such as racial and ethnic origin, and sexual orientation.</p>
                            <p>
                            <strong>User Content: </strong>all information, data, text, software, music, audio, photographs, graphics, video, messages, or other materials – other than genetic Information and Self-Reported Information – generated by users of GENE MATRIX LLC Services and transmitted, whether publicly or privately, to or through GENE MATRIX LLC.</p>
                            <p>
                            <strong>Web-Behavior Information:</strong> information on how you use GENE MATRIX LLC Services collected through log files, cookies, web beacons, and similar technologies, (e.g., browser type, domains, page views).</p>
                        </Section>
                    </main>
                </div>
            </Col>
        </Row>

    );
};

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
    <section id={id} className="scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
    </section>
);

export default PrivacyPolicy;
