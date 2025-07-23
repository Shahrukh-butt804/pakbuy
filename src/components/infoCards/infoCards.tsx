import InfoCard from '../../components/infoCard/infoCard';

const InfoCards = () => {
    return (
        <section className="py-8 md:py-16 note-box">
            <div className="container mx-auto px-4">
                <div className="flex flex-col xl:flex-row gap-6 md:gap-4 lg:gap-6">
                    {/* Learn More Card */}
                    <div className="w-full md:w-3/4 min-w-[250px]">
                        <InfoCard
                            color="bg-purple-200"
                            rotation="-rotate-3"
                        >
                            {/* <div className="text-purple-800">
                                <p className="font-medium mb-4">Learn More about Gene Matrix® Testing</p>
                                <p className="mb-4">
                                    If you are a current registered provider or tested patient,
                                    please <a href="#contact" className="text-purple-700 hover:text-purple-900 underline">contact us</a>.
                                </p>
                                <p>
                                    If you are a patient or caregiver and would like to request a copy
                                    of your results, please complete the{' '}
                                    <a href="#form" className="text-purple-700 hover:text-purple-900 underline">
                                        Patient Report Request form here
                                    </a>.
                                </p>
                            </div> */}
                            <div className="text-purple-800">
                                <p className="font-medium mb-4">The Benefits of Gene Matrix Tests for Healthcare Providers</p>
                                <p className="mb-4">
                                    Take a look at how our genetic tests can help you in your practice as a healthcare provider:
                                </p>
                                <ul className="list-disc pl-5 mb-4 text-purple-800">
                                    <li>Minimize trial-and-error prescribing</li>
                                    <li>Improve medication efficacy and safety</li>
                                    <li>Identify hereditary risks before symptoms arise</li>
                                    <li>Guide patients with real, personalized plans</li>
                                    <li>Position your practice at the forefront of precision medicine</li>
                                </ul>
                                <p>
                                    90% of prescriptions today are still written without genetic insight. Let’s change that together!
                                </p>
                            </div>

                        </InfoCard>
                    </div>

                    {/* Who Can Benefit Card */}
                    <div className="w-full md:w-3/4 min-w-[250px]">
                        <InfoCard
                            color="bg-purple-200"
                            rotation="rotate-2"
                        >
                            {/* <div className="text-purple-800">
                                <p className="font-medium mb-4">Who Can Benefit from the Gene Matrix test?</p>
                                <p className="mb-2">New patients who have previously encountered medication failures:</p>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>Patients who are currently facing a lower-than-desired response to medication.</li>
                                    <li>Patients who are currently experiencing undesirable side effects.</li>
                                    <li>Elderly patients.</li>
                                    <li>Patients with liver damage.</li>
                                </ol>
                            </div> */}
                            <div className="text-purple-800">
                                <p className="font-medium mb-4">Our Portal Supports All Practice Types</p>
                                <p className="mb-2">Gene Matrix is built for every healthcare practice:</p>
                                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                                    <li>Family Medicine & Primary Care</li>
                                    <li>Psychiatry & Behavioral Health</li>
                                    <li>Functional & Integrative Medicine</li>
                                    <li>Pediatrics & OB/GYN</li>
                                    <li>Oncology & Preventive Care</li>
                                    <li>Sports & Performance Clinics</li>
                                    <li>Nutritionists, Naturopaths, and Health Coaches</li>
                                </ul>
                                <p className="mt-4">
                                    Whether you run a solo clinic or a national network, our system scales with you.
                                </p>
                            </div>

                        </InfoCard>
                    </div>

                    {/* Affordability Card */}
                    <div className="w-full md:w-3/4 min-w-[250px]">
                        <InfoCard
                            color="bg-cyan-100"
                            rotation="-rotate-2"
                        >
                            {/* <div className="text-cyan-800">
                                <p className="font-medium mb-4">Affordability for Your Mental Wellness Matters</p>
                                <p className="mb-3">Here's how we handle billing for the Gene Matrix test:</p>
                                <div className="space-y-3">
                                    <div>
                                        <p className="font-medium">Medicare (Part B) Covered Tests:</p>
                                        <p>$0 out of pocket cost for your patient</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Medicaid:</p>
                                        <p>Typically, $0 out of pocket cost</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Medicare Advantage Covered Tests:</p>
                                        <p>Patient may be expected to cover a portion of the cost</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">Uninsured:</p>
                                        <p>Learn more at our website or contact our customer service team at 847-302-9688</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="text-cyan-800">
                                <p className="font-medium mb-4">How to Get Started</p>
                                <p className="mb-3">Gene Matrix makes it quite easy for healthcare providers to take advantage of AI-based genetics:</p>
                                <ul className="list-disc pl-5 space-y-2 text-cyan-800">
                                    <li>Apply for provider access by submitting your credentials to join our clinician network.</li>
                                    <li>You’ll be granted secure access to your dashboard and onboarding materials.</li>
                                    <li>Start ordering directly, or link your patients’ tests to your portal for instant results access.</li>
                                </ul>
                            </div>

                        </InfoCard>
                    </div>

                    {/* Study Results Card */}
                    <div className="w-full md:w-3/4 min-w-[250px]">
                        <InfoCard
                            color="bg-purple-200"
                            rotation="rotate-3"
                        >
                            {/* <div className="text-purple-800">
                                <p className="font-medium mb-4">Study Results</p>
                                <p className="mb-3">
                                    In a post-hoc analysis of data from the GUIDED study, the Gene Matrix Genetic DNA test
                                    demonstrated significant enhancements:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Remission</li>
                                    <li>Response</li>
                                    <li>Symptom Improvement</li>
                                </ul>
                            </div> */}
                            <div className="text-purple-800">
                                <p className="font-medium mb-4">You Get a HIPAA-Compliant & ISO-Certified Platform</p>
                                <p className="mb-3">
                                    Gene Matrix is a HIPAA-compliant and ISO-certified platform that is trusted globally by healthcare providers.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                                    <li>HIPAA- and GDPR-compliant</li>
                                    <li>Hosted on ISO/IEC 27001:2013-certified servers</li>
                                    <li>Protected with AES-256 military-grade encryption</li>
                                    <li>Built with zero-trust, role-based access controls</li>
                                </ul>
                                <p className="mt-4">
                                    Compatible with U.S., EU, and Middle Eastern regulatory standards
                                </p>
                            </div>

                        </InfoCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoCards;