import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Col, Row } from 'antd';

const sections = [
    { id: 'intro', title: '1. Introduction' },
    { id: 'definitions', title: '2. Key Definitions' },
    { id: 'collect', title: '3. Information We Collect' },
    { id: 'use', title: '3.1 How We Use Information' },
    { id: 'access', title: '3.2 Access to Your Information' },
    { id: 'secure', title: '4. How We Secure Information' },
    { id: 'security', title: '4.1. Security' },
    { id: 'additional', title: '5. Additional Information' },
    { id: 'children-privacy', title: '6. Children’s Privacy' },
    { id: 'contacting', title: '7. Contacting Us' },
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
                        <h2 className="text-xl font-bold mb-2">Our Policies</h2>
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

                        <Section id="collect" title="3. INFORMATION WE COLLECT">
                            GENE MATRIX LLC collects personally identifiable information, such as your e-mail address, name, home or work address, telephone number, and other information you may provide to us, including but not limited to services of interest to you, and/or medications you may be taking. GENE MATRIX LLC also collects anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences, interests and favorites. <br /> <br />
                            We collect Web-Behavior Information via cookies and other similar tracking technologies when you use and access our Site (our website, products, and other services). <br /><br />
                            GENE MATRIX LLC also collects information you share directly with us. We collect and process your information when you or your healthcare provider place an order for one of our products or services, create an account, complete research surveys, contact GENE MATRIX LLC, or when you are contacted by GENE MATRIX LLC. This information can generally be categorized as Registration Information, Self-Reported Information, and/or User Content. <br />
                            GENE MATRIX LLC or its affiliates, contractors, and assignees may collect information from DNA testing services offered through the Site. With your consent, you, we or our affiliates, extract your DNA from your Test Kits and analyze it to produce your Genetic Information in order to provide you or your doctor with the results for the ordered product.
                        </Section>

                        <Section id="use" title="3.1 HOW WE USE INFORMATION">
                            We generally process Personal Information for the following reasons:
                            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                <li>To provide our Services. We process Personal Information in order to provide our Service, which may include, without limitation, processing payments, shipping kits to you or your doctors, creating customer accounts and authenticating logins, analyzing buccal swab samples and DNA, generating test reports, and delivering results.</li>
                                <li>To analyze and improve our Services. We constantly work to improve and provide new reports, tools, and Services. We may also need to fix software bugs or issues, analyze use of our website to improve the customer experience or assess our marketing campaigns.</li>
                                <li>For Interest-based Advertising, with the ability to opt out. We use third parties such as network advertisers to serve advertisements on third-party websites or other media (e.g., social networking platforms).</li>
                                <li>To Communicate with You. We may use your personal information to respond to questions you submit or to communicate with you regarding news, updates, educational material, or in connection to our Services</li>
                                <li>As Required by Permitted Law. We may use your personal information to comply with any applicable legal or regulatory obligations or for any other purpose permitted by law or with your lawful consent. We may de-identify your personal information, which means that information that can be reasonably used to identify you will be removed.</li>
                            </ul>
                        </Section>

                        <Section id="access" title="3.2 ACCESS TO YOUR INFORMATION">
                            Your Personal Information may be shared with our service providers and third party vendors, as necessary for them to provide their services to us, in order to allow us to provide our services to you. <br /><br />
                            GENE MATRIX LLC will not sell, lease, or rent your identifiable individual information to any third party without your explicit consent.
                        </Section>

                        <Section id="secure" title="4. HOW WE SECURE INFORMATION">
                            GENE MATRIX LLC implements reasonable and appropriate measures and systems to ensure confidentiality, integrity, and availability of GENE MATRIX LLC data, in compliance with applicable laws. In particular, the connections to and from our website where we collect and exchange data using encrypted technology. We also ensure that all data collected is stored in accordance with HIPAA and other healthcare laws and regulations. <br /><br />
                            <h6>Information Shared With Third Parties</h6>
                            <p><strong>General service providers:</strong> We share the information described above with our third party service providers, as necessary for them to provide their services to us and help us perform our contract with you. Service providers are third parties (other companies or individuals) that help us to provide, analyze and improve our Services. While GENE MATRIX LLC directly conducts the majority of data processing activities required to provide our Services to you, we engage some third party service providers to assist in supporting our Services, including in the following areas.</p>

                            <p><strong>Aggregate information:</strong> We may share Aggregate Information, which is information that has been stripped of your name and contact information and combined with information of others so that you cannot reasonably be identified as an individual, with third parties. This Information is different from “Individual-level” information and is not Personal Information because it does not identify any particular individual or disclose any particular individual’s data.</p>

                            <p><strong>Information we share with commonly owned entities:</strong> We may share some or all of your Personal Information with other companies under common ownership or control of GENE MATRIX LLC, which may include our subsidiaries or affiliates, in order to provide you better service and improve user experience. Generally, sharing such information is necessary for us to perform our contract with you. We may provide additional notice and ask for your prior consent if we wish to share your Personal Information with our commonly owned entities in a materially different way than discussed in this Privacy Statement.</p>

                            <p><strong>As required by law:</strong> Under certain circumstances, your Personal Information may be subject to processing pursuant to laws, regulations, judicial or other government subpoenas, warrants, or orders. GENE MATRIX LLC will preserve and disclose any and all information to law enforcement agencies or others if required to do so by law or in the good faith belief that such preservation or disclosure is reasonably necessary to: (a) comply with legal or regulatory process (such as a judicial proceeding, court order, or government inquiry) or obligations that GENE MATRIX LLC may owe pursuant to ethical and other professional rules, laws, and regulations; (b) enforce the GENE MATRIX LLC Terms of Service and other policies; (c) respond to claims that any content violates the rights of third parties; or (d) protect the rights, property, or personal safety of GENE MATRIX LLC, its employees, its users, its clients, and the public.</p>

                            <p><strong>Business transactions:</strong>  In the event that GENE MATRIX LLC goes through a business transition such as a merger, acquisition by another company, or sale of all or a portion of its assets your Personal Information will likely be among the assets transferred. In such a case, your information would remain subject to the promises made in any pre-existing Privacy Statement.</p>

                            <p><strong>Third Party and Digital Advertising:</strong> We may partner with third-party advertising networks to manage our advertising on other sites. We may also share information about you with third parties only in ways expressed in this statement. We do this in order to have those third parties, directly serve advertising to you on their websites on our behalf.</p>
                        </Section>

                        <Section id="security" title="4.1. Security">
                            <p>GENE MATRIX LLC takes seriously the trust you place in us. In order to maintain data accuracy, and to ensure the appropriate use of information, GENE MATRIX LLC uses a variety of reasonable technical, physical and administrative measures to safeguard your Personal Information, in accordance with current technological standards, and in full compliance with applicable Health Insurance Portability and Accountability Act of 1996 (HIPAA) and Genetic Information Nondiscrimination Act of 2008 (GINA) requirements. While we use commercially reasonable and appropriate means to protect your personal information, we cannot guarantee its absolute security. <br /><br />
                                Your information collected through the Service may be stored and processed in the United States or any other country in which GENE MATRIX LLC or its subsidiaries, affiliates or service providers maintain facilities and, therefore, your information may be subject to the laws of those other jurisdictions, which may be different from the laws of your country of residence.</p>
                        </Section>

                        <Section id="additional" title="5. Additional Information Concerning Your Personal Information">
                            <p>Depending on your state of residence, you may be entitled to additional privacy rights regarding your Personal Information. For example, if you are a resident of California, you may be entitled to the privacy rights described below under the California Consumer Privacy Act (“CCPA”) and other applicable laws. Please note that certain categories of Personal Information, such as PHI, are not covered by state law privacy rights, but may be protected by HIPAA and other laws that provide similar protections:</p>
                            <p>The Right to Know. You have the right to request:</p>
                            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                <li>The specific pieces of Personal Information we have about you;</li>
                                <li>The categories of Personal Information we have collected about you in the last 12 months, if any.</li>
                                <li>The purpose of collecting your personal information.</li>
                            </ul>
                            <p>The Right to Deletion. You have the right to request that we delete the Personal Information that we have collected or maintain about you. We may deny your request under certain circumstances, such as if we need to comply with our legal obligations or complete a transaction for which your Personal Information was collected.</p>
                        </Section>

                        <Section id="children-privacy" title="6. Children’s Privacy">
                            <p>This Privacy Policy may be revised from time to time as we add new features and services, as laws change, and as industry privacy and security best practices evolve. We display an effective date on the policy in the upper right corner of this Privacy Policy so that it will be easier for you to know when there has been a change.</p>
                        </Section>

                        <Section id="contacting" title="7. Contacting Us">
                            <p>If you have questions about this Privacy Policy, or wish to submit a complaint, please email GENE MATRIX LLC’s Privacy Administrator at info@genematrix.io</p>
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
