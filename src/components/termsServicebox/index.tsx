import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Col, Row } from 'antd';

const sections = [
    { id: 'intro', title: '1. Introduction' },
    { id: 'general', title: '2. General Disclaimer' },
    { id: 'medical', title: '3. No Medical Advice' },
    { id: 'force', title: '4. Force Majeure' },
    { id: 'limitation', title: '5. Limitation of Liability' },
    { id: 'agreement', title: '6. Users Agreement' },
    { id: 'representations', title: '7. Users’ Representations' },
    { id: 'privileges', title: '8. Termination of Privileges' },
    { id: 'health', title: '9. Protected Health Information' },
    { id: 'provisions', title: '10. Miscellaneous Provisions' },
    { id: 'copyright', title: '11. Copyright and Trademarks' },
    { id: 'kits', title: '12. Test Kits and Other Services' },
    { id: 'notices', title: '13. Notices' },
    { id: 'links', title: '14. Links and Advertisements ' },
    { id: 'cookies', title: '15. Cookies' },
    { id: 'jurisdiction', title: '16. Jurisdiction' },
    { id: 'contacting', title: '17. Contacting Us' },
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
                            GENE MATRIX LLC presents to you the website, genematrix.io, encompassing all its contents, software, portals, products, communications, and services (“Site”), subject to your full acceptance of all the stated terms, conditions, guidelines, and notices. Kindly review these Terms and Conditions of Use (“Terms and Conditions”) thoroughly before navigating or utilizing the Site. In these Terms and Conditions, GENE MATRIX LLC may also be referred to as “our company” or “us”, while you, the visitor or patron, may be addressed as “you” or “visitor”. <br /><br />
                            Your engagement with the Site signifies your agreement to these Terms and Conditions. If these terms aren’t agreeable to you, please refrain from using our Site. We retain the discretion to amend these Terms and Conditions at any interval. Such alterations will take effect instantly upon their posting on the Site. By accessing our Site, you commit to abiding by the currently posted Terms and Conditions each time you visit. We recommend that you regularly inspect the Site’s Terms and Conditions to remain informed about any changes. In legal or administrative matters related to the Site’s use, a printed copy of these Terms and Conditions will be acceptable in the same manner as other traditionally generated and conserved business documents.
                        </Section>

                        <Section id="general" title="2. General Disclaimer">
                            <p>ALL CONTENT AND SERVICES ON THE SITE ARE PROVIDED ON AN “AS IS” BASIS. THIS IMPLIES THAT THE MATERIALS AND INFORMATION ON OR AVAILABLE THROUGH THIS SITE ARE FOR GENERAL AWARENESS AND INSTRUCTIONAL PURPOSES. YOUR CHOICE TO ACCESS THIS SITE IS ENTIRELY VOLUNTARY. ANY ENGAGEMENT WITH THIS SITE WILL BE CONSIDERED VOLUNTARY AND AT YOUR OWN DISCRETION AND RISK. <br /><br />
                                We don’t manage, oversee, furnish, vouch for, or ensure any services, products, or information that isn’t explicitly ascribed to us. Furthermore, we do not assure or confirm that files available for downloading from the Site will be devoid of detrimental elements like viruses, malware, worms, or other harmful components. <br /><br />
                                We, along with our content contributors, do not assure immunity from errors, lapses, delays, disruptions, or data loss. It’s the responsibility of the Site’s users to have mechanisms outside of the Site for the restoration of any misplaced data.<br /><br />
                                We retain the prerogative, whenever deemed necessary, to adjust, suspend temporarily or permanently, or halt the Site or any segment of it, with or without prior notice.</p>
                        </Section>

                        <Section id="medical" title="3. No Medical Advice or Services">
                            <p>The content on this site is curated to furnish pertinent insights regarding pharmacogenetics, medical testing, wellness evaluations, and related topics. However, it’s pivotal to acknowledge that the information on the Site is presented with a clear understanding that neither GENE MATRIX LLC, its staff, agents, contractors, or associated service providers are offering medical guidance, diagnoses, or therapeutic interventions. The Site doesn’t aim to replace professional medical counsel, diagnostic procedures, or treatments. <br /><br />
                                For those not in the medical profession, we ardently recommend seeking counsel from a physician or a competent health care practitioner concerning individual health concerns or conditions. Do not sideline, sidestep, or postpone seeking medical counsel due to content encountered on the Site. If there’s a suspicion or confirmation of a health issue, it’s imperative to consult a qualified medical expert promptly. For those in the United States, in the face of a medical crisis, dial 911 or engage immediate medical assistance via the closest phone.<br /><br />
                                At no point does GENE MATRIX LLC, its team, agents, contractors, or service providers engage in direct or indirect medical practices or provide medical services via this Site. Interactions with GENE MATRIX LLC or its affiliates should never be misinterpreted as fostering a medical professional-patient rapport.<br /><br />
                                Any reliance on insights shared by GENE MATRIX LLC, its affiliates, or any other contributors to the Site is at your sole discretion. Conversations, opinions, or any content within discussion zones or similar areas should not be mistaken for professional directives, even if presented by individuals with professional qualifications. Such content solely mirrors the perspectives of its author, not necessarily GENE MATRIX LLC’s stance. GENE MATRIX LLC remains neutral and doesn’t advocate for specific medical methods or viewpoints articulated on the Site.</p>
                        </Section>

                        <Section id="force" title="4. Force Majeure">
                            <p>You acknowledge and concur that GENE MATRIX LLC shall not bear responsibility for any losses, damages, expenses, claims, or any other obligations stemming from delays, interruptions, non-deliveries, missed deliveries, or failures of the Site and its associated services. This extends to scenarios that are outside the manageable purview of GENE MATRIX LLC or its staff, agents, contractors, or affiliated service providers. Such scenarios encompass, but are not restricted to, natural calamities like fires, lightning strikes, explosions, warfare, civil unrest, floods, industrial conflicts, acts of sabotage, extreme weather conditions, or directives and interventions from local or federal governance or any authoritative entities.</p>
                        </Section>

                        <Section id="limitation" title="5. Warranties and Limitation of Liability">
                            <p>GENE MATRIX LLC OFFERS NO DIRECT OR IMPLIED GUARANTEES, AFFIRMATIONS, OR APPROVALS OF ANY SORT (INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, OR SUITABILITY FOR A PARTICULAR USE) PERTAINING TO THE SITE, OR RELATING TO ANY DATA, PRODUCT, SERVICE, OR OTHER ITEM PRESENTED ON OR VIA THE SITE. Neither GENE MATRIX LLC nor its associates, agents, independent contractors, or other third-party collaborators claim that the Site will operate without disruptions, interruptions, or free from errors. No individual or entity representing GENE MATRIX LLC is authorized to extend any guarantees regarding the Site. GENE MATRIX LLC holds the prerogative to modify or cease any aspect or feature of the Site as it deems fit. <br /><br />
                                IN NO EVENT SHALL GENE MATRIX LLC OR ITS PARTNERS ENGAGED IN DESIGNING, DEVELOPING, MAINTAINING, OR DISTRIBUTING THE SITE BE ACCOUNTABLE FOR ANY FORM OF DAMAGES (WHETHER DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL) OR EXPENSES (INCLUDING, BUT NOT LIMITED TO, LOSS OF PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS INTERRUPTIONS) LINKED TO THE USE OR INABILITY TO USE THE SITE OR FROM ANY INFORMATION, SOFTWARE, PRODUCTS, OR SERVICES ACQUIRED FROM THE SITE. THIS APPLIES REGARDLESS OF THE LEGAL THEORY, INCLUDING CONTRACTUAL, TORTIOUS, OR OTHER BASES, EVEN IF PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOU ACKNOWLEDGE AND AGREE THAT NO THIRD-PARTY PROVIDER, LICENSOR, OR INFORMATION SOURCE TO GENE MATRIX LLC OR ITS RELATED PARTIES SHALL BE LIABLE TO YOU UNDER ANY CIRCUMSTANCE OR FOR ANY REASON, BASED ON THE INFORMATION DISPENSED VIA THE SITE.<br /><br />
                                GENE MATRIX LLC ASSUMES NO RESPONSIBILITY FOR EXTERNAL WARRANTIES OR FOR ANY EFFECTS THE SERVICES MIGHT HAVE ON THOSE GUARANTEES. WARRANTIES FOR THIRD-PARTY ITEMS REMAIN SOLELY GOVERNED BY AGREEMENTS BETWEEN THE USER AND THE PRODUCERS OF SUCH ITEMS. “THIRD-PARTY ITEMS” REFER TO ANY HARDWARE, SOFTWARE, OR SERVICES THAT A USER BRINGS INTO PLAY OR DEEMS NECESSARY IN RELATION TO THE SITE.</p>
                        </Section>

                        <Section id="agreement" title="6. Users Agreement">
                            <p>Users agree not to submit or share any content or communications that violate the rights of any party or breach any local, state, national, or international regulations. Uploading or sharing identifiable “protected health information” as outlined by the Health Insurance Portability and Accountability Act (“HIPAA”) on this Site is strictly prohibited. Users will refrain from using the Site to disseminate unsolicited content or promotions to third parties. Any content deemed illegal, inappropriate, defamatory, aggressive, prejudicial, or disparaging, as solely determined by us, is forbidden. Pretending to be someone else is strictly prohibited. <br /><br />
                                Users acknowledge that neither GENE MATRIX LLC nor any of its affiliated entities will be held responsible for any damages, including but not limited to, financial losses, missed earnings, or business disruptions resulting from the Site’s services. If users are unsatisfied with the services rendered by the Site, their sole recourse is to discontinue its use.<br /><br />
                                Users recognize that the products and services made available through the Site may not be under the direct jurisdiction or ownership of GENE MATRIX LLC. Therefore, users accept that GENE MATRIX LLC is not responsible for any outcomes, errors, or concerns stemming from the products or services available on the Site, including the accuracy of genetic testing.<br /><br />
                                Users commit to shielding us, along with our parent, subsidiary, or affiliated companies, successors, licensees, and their respective employees, directors, officers, agents, and independent contractors, from any claims, losses, liabilities, expenses, or damages (including legal fees) resulting from third-party claims due to their use of the Site, violation of these Terms and Conditions, or any other guidelines provided on the Site. Users pledge to adhere to all responsibilities and obligations as detailed in these Terms and Conditions.</p>
                        </Section>

                        <Section id="representations" title="7. Users’ Representations">
                            <p>All individuals accessing the Site affirm that they are a minimum of 18 years old and have the legal authority to accept these Terms and Conditions and to utilize the Site in adherence to them. By using the Site, users confirm their age and their capability to engage in binding agreements.</p>
                        </Section>

                        <Section id="privileges" title="8. Termination of Privileges">
                            <p>GENE MATRIX LLC maintains the right, though it is not under any obligation, to suspend your access to any part of this Site should you violate any of the following Terms and Conditions. Should GENE MATRIX LLC become aware that you have posted content that infringes on a third party’s copyright or trademark rights, infringes on a third party’s privacy, or is deemed illegal, abusive, or disruptive, GENE MATRIX LLC may terminate your Site access. This includes the potential suspension of any privileges or accounts associated with the Site. <br /><br />
                                Furthermore, GENE MATRIX LLC has the authority, though not the obligation, to remove any data and communications that do not align with the Terms and Conditions. This includes the power to edit or delete any communications, regardless of whether they breach the Terms and Conditions. GENE MATRIX LLC reserves the right, at its sole discretion, to discontinue offering the Site or any of its sections.<br /><br />
                                Please note that these actions are supplementary and do not replace or limit any other legal rights or remedies available to us. Additionally, GENE MATRIX LLC cannot be held liable to you or any third party for any such termination or discontinuation.</p>
                        </Section>

                        <Section id="health" title="9. Protected Health Information">
                            <p>We acknowledge the sensitive nature of Protected Health Information (PHI) and are deeply committed to safeguarding its accessibility, integrity, and security. Our unwavering dedication is to uphold your privacy and ensure that your PHI is utilized strictly in accordance with our Privacy Policy, as authorized by your consent. To enhance privacy protection, we also take measures to de-identify your PHI in compliance with HIPAA standards, and we store it securely using robust encryption methods to maintain compliance with regulatory requirements. Your trust and the security of your PHI remain paramount to us.</p>
                        </Section>

                        <Section id="provisions" title="10. Miscellaneous Provisions">
                            <p>We want to emphasize that we cannot guarantee continuous, uninterrupted, or completely secure access to our services. The operation of this Site may be subject to interference from various factors beyond our control. By using our services, you agree that the Terms and Conditions, as well as all associated agreements between GENE MATRIX LLC and yourself, may be transferred by GENE MATRIX LLC, at our sole discretion, to a third party in the event of a merger, acquisition, or liquidation. <br /><br />
                                Please note that we reserve the right to make modifications to the Site or remove features at our discretion and without prior notice. We also retain the authority to cancel or suspend your access to any services provided on our Site at any time, with or without cause, and without prior notice. Upon cancellation, your right to use the services provided on the site ceases immediately.<br /><br />
                                Our failure to take action in response to a breach of the Terms and Conditions by you or others does not waive our right to take action in response to subsequent or similar breaches.
                                These Terms and Conditions, in conjunction with GENE MATRIX LLC’s Privacy Policy and any applicable End User License Agreement, constitute the entire understanding and agreement between GENE MATRIX LLC and any Site user regarding the Site, its uses, and services.<br /><br />
                                If any of the provisions in the Terms and Conditions are deemed unenforceable by a court or another competent authority, those provisions will be limited or eliminated to the minimum extent necessary to ensure that the Terms and Conditions otherwise remain in full force and effect.
                                The Terms and Conditions cannot be altered, either in part or in whole, except as explicitly stated elsewhere within the Terms and Conditions. Any content on the Site that contradicts or conflicts with the terms of the Terms and Conditions is superseded by the Terms and Conditions. If you have any confidentiality obligations related to the Site, those obligations remain in effect. The section titles in the Terms and Conditions do not restrict the terms themselves.</p>
                        </Section>

                        <Section id="copyright" title="11. Copyright and Trademarks">
                            <p>The trademarks “Gene Matrix,” “Gene Matrix Logo,” “GENE MATRIX LLC,” and “Gene Matrix DNA” are owned by GENE MATRIX LLC and are safeguarded by state and federal trademark laws, whether or not they are officially registered trademarks. Any other trademarks featured on the Site are used with permission from their respective owners. Your access to this Site does not grant you authorization to use any of these trademarks. If you intend to use them, please reach out to GENE MATRIX LLC to obtain the necessary consent. Unauthorized use of trademarks found on the Site may constitute trademark infringement, which can lead to significant civil penalties.<br /><br />
                                With the exception of materials in the public domain under United States copyright law, all content on the Site, including software, HTML code, Java applets, Active X controls, and other code, is protected by both United States and foreign copyright laws. Unless expressly provided otherwise in these Terms and Conditions, you are not permitted to copy, distribute, transmit, display, perform, reproduce, publish, license, modify, rewrite, create derivative works from, transfer, or sell any material from the Site without obtaining prior consent from the copyright owner. None of the materials on the Site may be reverse-engineered, disassembled, decompiled, transcribed, stored in a retrieval system, translated into any language or computer language, retransmitted in any form or by any means, resold, or redistributed without the prior written consent of GENE MATRIX LLC. Violation of this provision may result in severe civil and criminal penalties.</p>
                        </Section>

                        <Section id="kits" title="12. Test Kits and Other Services">
                            <p>By placing an order for a genetic test or any other test kits or services offered now or in the future through the Site or by GENE MATRIX LLC, you are agreeing to abide by these Terms and Conditions. GENE MATRIX LLC, at its sole discretion, may grant health care providers and other users access to test results and other services and information provided by GENE MATRIX LLC through the Site. GENE MATRIX LLC, along with its employees, agents, independent contractors, and service providers, will make every reasonable effort to deliver test results to users within a timeframe consistent with standard business practices.<br /><br />
                                When you order a test kit or services through the Site, you are granting us permission to transmit any necessary data, information, results, and other related details to third parties or healthcare professionals. When using the Site to access or inquire about test results and other information and services provided by or through GENE MATRIX LLC, you are required to adhere to the Terms and Conditions as well as any relevant End User License Agreement.<br /><br />
                                Failure to comply with the Terms and Conditions and any applicable End User License Agreement may result in GENE MATRIX LLC, at its discretion, immediately terminating your access to the Site and any services offered by or through GENE MATRIX LLC, without the obligation to provide a refund of payment, with or without prior notice.</p>
                        </Section>

                        <Section id="notices" title="13. Notices">
                            <p>These Terms and Conditions are presented in electronic form. Certain information about the Site and the services offered through it may be legally required to be provided to you. We may deliver this information to you in electronic format. The required information may be provided to you in one of the following ways: through email sent to the email address you provided when you signed up for a service on the Site (if applicable); through access to a designated website, which will be specified in an email notification sent to you when the information becomes available; or through access to a website that is generally designated for this purpose in advance.<br /><br />
                                Notices sent to you via email will be considered as given and received on the date the email is transmitted. Provided that you have the means to access and use the Site, along with the necessary software and hardware to receive these notices, you are deemed capable of receiving them electronically. If you do not agree to receive notices electronically, you must discontinue your use of the Site.</p>
                        </Section>

                        <Section id="links" title="14. Links and Advertisements to Third Parties">
                            <p>The Site may include hyperlinks to websites operated by parties other than GENE MATRIX LLC. These hyperlinks are provided for your convenience and reference only. GENE MATRIX LLC is not responsible for the privacy practices or the content of such external websites. Inclusion of these hyperlinks on our Site does not imply endorsement of the materials on these websites or any association with their operators, including websites that may indicate a special relationship or partnership with GENE MATRIX LLC, such as co-branded pages or relationships labeled as “powered by” or “in cooperation with.”
                                Unless explicitly stated otherwise on this Site, GENE MATRIX LLC does not endorse any product or service nor make any representations regarding the reliability, quality, or accuracy of any products or services featured in or linked to any advertisements, articles, or other content found on this Site.<br /><br />
                                GENE MATRIX LLC does not disclose personally identifiable information or unique identifiers to the operators of the linked websites. However, it’s important to note that these linked websites may collect personal information from you, and GENE MATRIX LLC has no control over their data practices. To safeguard your privacy, we recommend that you always review the privacy policy of any websites you visit via links from this Site.</p>
                        </Section>

                        <Section id="cookies" title="15. Cookies">
                            <p>At genematrix.io, we utilize cookies to enhance your overall user experience. These cookies serve various purposes, including:</p>
                            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                <li>Tracking Usage: Cookies are employed to monitor how you access and utilize the services provided on our website. This allows us to understand when and how you visit the website, as well as the search terms you use.</li>
                                <li>Referral Tracking: Cookies help us identify which websites have directed you to our Site.</li>
                                <li>Improving User Convenience: We use cookies to enhance your enjoyment and convenience when browsing or utilizing the website. For instance, cookies can help us remember your contact and other relevant information, making it easier for you to access and use the Site.</li>
                            </ul>
                            <p>Please note that by continuing to use our website, you consent to the use of cookies for these purposes. You have the option to manage or disable cookies through your browser settings if you prefer not to have them active while using our site. However, disabling cookies may affect certain functionalities and the overall user experience on genematrix.io.</p>
                        </Section>

                        <Section id="jurisdiction" title="16. Jurisdiction">
                            <p>The Site is operated and controlled by GENE MATRIX LLC from its primary office located in Illinois, United States of America. GENE MATRIX LLC does not make any representation that the materials on the Site are suitable or accessible for use in other geographic locations. Individuals who choose to access the Site from locations outside the United States are responsible for complying with local laws, to the extent that such laws are applicable. <br /><br />
                                By using the Site, you agree that these Terms and Conditions are governed by and will be interpreted in accordance with the laws of the State of Illinois, without regard to its choice of law or conflict of law provisions. In any claim or legal action brought by you directly or indirectly arising from these Terms and Conditions or related to the Site, both you and we irrevocably consent to the exclusive personal jurisdiction of the courts located in Cook County, Illinois. Additionally, both you and we waive any objections related to jurisdiction, venue, or an inconvenient forum in relation to such courts. In the event that legal action is taken to enforce these Terms and Conditions, the prevailing party shall be entitled to reasonable attorney’s fees and associated costs.</p>
                        </Section>

                        <Section id="contacting" title="17. Contacting Us">
                            <p>If you have any questions about the Terms and Conditions, the practices of the Site, or your dealing with GENE MATRIX LLC, you may contact us at: info@genematrix.io</p>
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
