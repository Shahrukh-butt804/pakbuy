import { Col, Row } from 'antd';
import { ImageUrl } from '../../utils/Functions';




// const MissionVisionSection: React.FC = () => {
// const MissionVisionSection: React.FC<CorehelpProps> = ({}) => {
const MissionVisionSection = () => {
    return (
        <>
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-2/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("genebaby.png")}
                                        alt="Purple chromosomes"
                                        className="relative rounded-2xl w-full  object-cover"
                                    />
                                </div>
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <div>
                                        <div className="sec-title_title">
                                            Genebaby
                                            <div className="sec-title_dots">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <h2 className="sec-title_heading">
                                            What It Does
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            Its investigation involves a safe mouth swab DNA test for all newborns and very young children, revealing genetic traits affecting immunity, nutrition, and development as well as inherited health risks for useful insights right from the beginning.
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="sec-title_heading">
                                            HOW IT HELPS
                                        </h2>
                                        <p className="text-gray-300 leading-relaxed">
                                            The panel helps parents and providers work smartly from early on. From modifying infant feeding and supplements to fostering the development of the brain and preventing allergies, GeneBaby™ empowers you to promote your child's health according to their unique biology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-20  translate-y-4 transition-all duration-1000 ease-out">
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <h2 className="sec-title_heading">
                                        WHO SHOULD TAKE IT?
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Perfect for children aged 0–5, GeneBaby™ is ideal for families focused on early-life health optimization, those with a family history of immune or developmental concerns, or any parent who wants to give their child a data-backed head start.
                                    </p>
                                    <ul className='gene-ul'>
                                        <li>New Parents</li>
                                        <li>Children Ages 0–5</li>
                                        <li>Families with Genetic Health Histories</li>
                                        <li>Holistic Pediatricians & Wellness Clinics</li>
                                        <li>Caregivers Seeking Guidance</li>
                                    </ul>

                                </div>
                                <div className="md:w-3/5 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("it.png")}
                                        alt="Purple chromosomes"
                                        className="relative rounded-2xl  object-cover "
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
        </>
    );
};

export default MissionVisionSection;