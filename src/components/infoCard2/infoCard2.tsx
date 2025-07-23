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
                            <div className="text-purple-800">
                                <p className="font-medium mb-4">The Benefits of Gene Matrix Tests for Patients</p>
                                <p className="mb-4">
                                    Discover how your DNA can help you take charge of your health and well-being:
                                </p>
                                <ul className="list-disc pl-5 mb-4 text-purple-800">
                                    <li>Learn how your body responds to medications</li>
                                    <li>Get personalized nutrition and wellness insights</li>
                                    <li>Understand your risks for hereditary conditions</li>
                                    <li>Receive clear, easy-to-follow health recommendations</li>
                                    <li>Make informed decisions with support from your clinician</li>
                                </ul>
                                <p>
                                    Your genes hold powerful answers. Gene Matrix helps you find them, safely, simply, and with confidence.
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
                            <div className="text-purple-800">
                                <p className="font-medium mb-4">A Portal Built for Everyone</p>
                                <p className="mb-2">
                                    Whether you’re curious about your health, managing a condition, or planning for the future, the Gene Matrix Patient Portal is made for you:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                                    <li>Adults of all ages</li>
                                    <li>Parents exploring early insights for their children</li>
                                    <li>Athletes optimizing performance and recovery</li>
                                    <li>Individuals managing anxiety, pain, or hormone imbalance</li>
                                    <li>Anyone interested in proactive, personalized care</li>
                                </ul>
                                <p className="mt-4">
                                    No medical background required, just a desire to understand your body better.
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
                            <div className="text-cyan-800">
                                <p className="font-medium mb-4">How to Get Started</p>
                                <p className="mb-3">
                                    Getting started is simple, secure, and guided every step of the way:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-cyan-800">
                                    <li>Complete a brief eligibility form to see if your test is covered by insurance</li>
                                    <li>Receive your DNA kit at home with prepaid return shipping</li>
                                    <li>Track your sample and view results in your private portal</li>
                                    <li>Review your insights on medication, nutrition, mental health, and more, with optional clinician guidance</li>
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
                            <div className="text-purple-800">
                                <p className="font-medium mb-4">Your Data Is Safe with Us</p>
                                <p className="mb-3">
                                    Your privacy is our priority. The Gene Matrix platform is built with the highest global standards for data protection:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-purple-800">
                                    <li>HIPAA- and GDPR-compliant</li>
                                    <li>AES-256 military-grade encryption</li>
                                    <li>ISO/IEC 27001:2013-certified hosting</li>
                                    <li>Role-based, zero-trust security architecture</li>
                                    <li>Aligned with U.S., EU, and Middle Eastern privacy laws</li>
                                </ul>
                                <p className="mt-4">
                                    Only you and authorized providers can access your genetic information.
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