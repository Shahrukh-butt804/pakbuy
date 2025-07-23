import { Col, Row, Typography } from 'antd';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import React from 'react';
import { ImageUrl } from '../../utils/Functions';

const { Title } = Typography;

const TestOption: React.FC = () => {
    const testOptions = [
        {
            id: 'pgx',
            title: 'PGX COMPLETE',
            price: (
                <>
                    <span className="text-purple-500">FREE</span>
                    <span className="text-gray-400 text-base">(IF ELIGIBLE)</span>
                </>
            ),
            image: 'optionimg1.png',
            description: 'PGx COMPLETE helps you and your clinician with genetic insights that optimize treatment, reduce side effects, and support safer, more effective care.',
            features: [
                'Know how your genes affect your response to common prescriptions.',
                'Avoid trial-and-error by knowing what works before you take it.',
                'Clinician-ready reports for making fast, informed treatment decisions.',
                'Covers 20+ Key Genes, including CYP450, HLA, and more.'
            ],
            primaryButton: {
                text: 'For Clinicians',
            }
        },
        {
            id: 'ngx',
            title: 'NGX COMPLETE',
            // price: '$499.00',
            price: (
                <>
                    <span className="text-purple-500">$499.00</span>
                </>
            ),
            image: 'optionimg2.png',
            description: 'It’s an all-in-one DNA analysis designed to give you a full picture of your health, diet, hormone balance, and athletic potential.',
            features: [
                'Comprehensive testing across 74+ genes ',
                'Clear guidance on diet, fitness, estrogen balance, inflammation, and detox',
                'Licensed physician oversight ensures reliable result',
                'Health predispositions highlighting inherited risk markers'
            ],
            primaryButton: {
                text: 'Learn More',
            },
            secondaryButton: {
                text: 'Add To Cart',
                icon: <ShoppingCart size={16} className="ml-1" />
            }
        }
    ];

    return (
        <Row justify={"center"}>
            <Col lg={21}>
                <section className="py-16 px-4">
                    <div className="mx-auto">
                        <div className="sec-title text-center">
                            <div className="sec-title_title justify-center">
                                <div className="sec-title_dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                Our DNA Test Kits
                                <div className="sec-title_dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <Title level={2} className="sec-title_heading">
                                Choose the Right Test for You
                            </Title>
                        </div>

                        <div className="space-y-8">
                            {testOptions.map(option => (
                                <div key={option.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20  test-options-box">
                                    <div className="flex flex-col md:flex-row">
                                        {/* Product Image */}
                                        <div className="md:w-2/5 p-4 flex items-center justify-center test-options-img-box">
                                            <img
                                                src={ImageUrl(option.image)}
                                                alt={`${option.title} Kit`}
                                                className="object-contain h-48 md:h-64 w-auto transition-all duration-300 hover:scale-105"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="md:w-3/5 p-6 md:p-8">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{option.title}</h3>
                                            <div className="text-xl md:text-2xl font-semibold mb-4">
                                                {option.price}
                                            </div>

                                            <p className="text-gray-300 mb-4">{option.description}</p>

                                            <ul className="space-y-2 mb-6">
                                                {option.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-purple-500 mr-2 mt-1">•</span>
                                                        <span className="text-gray-300 text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                                <button
                                                    className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                                >
                                                    <span className="mr-2">{option.primaryButton.text}</span>
                                                    <span className='btn-icon'>
                                                        <ChevronRight className="h-5 w-5" />
                                                    </span>
                                                </button>

                                                {option.secondaryButton && (
                                                    // <button className="flex items-center justify-center px-5 py-2 border border-purple-600 text-purple-400 hover:bg-purple-900/20 rounded-full transition-all duration-200 group">
                                                    //     {option.secondaryButton.text}
                                                    //     {option.secondaryButton.icon || (
                                                    //         <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                                                    //     )}
                                                    // </button>
                                                    <button className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200">
                                                        {option.secondaryButton.text}
                                                        <span className='btn-icon'>
                                                            <ShoppingCart className="h-5 w-5 p-1" />
                                                        </span>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Col>
        </Row>

    );
};

export default TestOption;