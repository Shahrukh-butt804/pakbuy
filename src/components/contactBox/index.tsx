import { Col, Row } from 'antd';
import { ChevronRight, Mail, MapPin, Phone, Upload } from 'lucide-react';
import React, { useState } from 'react';
import { ImageUrl } from '../../utils/Functions';


interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    file?: File | null;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}


const MissionVisionSection: React.FC = () => {


    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
        file: null,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear the error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors({
                ...errors,
                [name]: undefined,
            });
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData({
            ...formData,
            file,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Form submitted:', formData);
            setSubmitSuccess(true);

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                file: null,
            });

            // Reset success message after 3 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Row justify={"center"}>
                <Col lg={21}>
                    <section className="mb-20 translate-y-4 transition-all duration-1000 ease-out rounded-xl p-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                        <div className="overflow-hidden transition-all duration-300 ">
                            <div className="flex flex-col md:flex-row items-start">
                                <div className="md:w-3/6 p-6 md:p-8">
                                    <h2 className="sec-title_heading" style={{ marginBottom: "0" }}>
                                        get in touch
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        We are here to answer any question you may have.
                                    </p>

                                    <div className="w-full max-w-4xl mx-auto">
                                        <form
                                            onSubmit={handleSubmit}
                                            className=" rounded-xl shadow-2xl overflow-hidden p-6 md:p-8"
                                        >
                                            <div className="mb-6">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Name"
                                                    className={`w-full bg-transparent border border-white rounded-full px-5 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-all duration-300 ${errors.name ? 'border-red-500' : ''}`}
                                                />
                                                {errors.name && <p className="text-red-500 text-xs mt-1 ml-4">{errors.name}</p>}
                                            </div>

                                            <div className="mb-6">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Email"
                                                    className={`w-full bg-transparent border border-white rounded-full px-5 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-all duration-300 ${errors.email ? 'border-red-500' : ''}`}
                                                />
                                                {errors.email && <p className="text-red-500 text-xs mt-1 ml-4">{errors.email}</p>}
                                            </div>

                                            <div className="mb-6">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    placeholder="Subject"
                                                    className={`w-full bg-transparent border border-white rounded-full px-5 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-all duration-300 ${errors.subject ? 'border-red-500' : ''}`}
                                                />
                                                {errors.subject && <p className="text-red-500 text-xs mt-1 ml-4">{errors.subject}</p>}
                                            </div>

                                            <div className="mb-6">
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Message"
                                                    rows={5}
                                                    className={`w-full bg-transparent border border-white rounded-2xl px-5 py-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : ''}`}
                                                />
                                                {errors.message && <p className="text-red-500 text-xs mt-1 ml-4">{errors.message}</p>}
                                            </div>

                                            <div className="mb-8">
                                                <label className="cursor-pointer w-full flex items-center justify-center border border-white rounded-full px-5 py-3 text-gray-400 hover:border-gray-500 transition-all duration-300">
                                                    <Upload size={18} className="mr-2" />
                                                    <span>{formData.file ? formData.file.name : 'Upload file (optional)'}</span>
                                                    <input
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                    />
                                                </label>
                                            </div>

                                            <div className="flex justify-center mb-8">
                                                {/* <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="relative bg-transparent border border-gray-700 text-gray-200 rounded-full px-10 py-2 hover:bg-gray-800 transition-all duration-300 group flex items-center"
                                                >
                                                    <span className="mr-2">Submit</span>
                                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                                </button> */}

                                                <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                    className="site-btn flex items-center justify-between bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                                >
                                                    <span className="mr-2">Submit</span>
                                                    <span className='btn-icon'>
                                                        <ChevronRight className="h-5 w-5" />
                                                    </span>
                                                </button>
                                            </div>

                                            {submitSuccess && (
                                                <div className="text-center mb-4">
                                                    <p className="text-green-500">Message sent successfully!</p>
                                                </div>
                                            )}

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-800 text-gray-400">
                                                <div className="flex items-center">
                                                    <Phone size={18} className="mr-2 text-gray-400" />
                                                    <span>847-202-9668</span>
                                                </div>

                                                <div className="flex items-center">
                                                    <MapPin size={18} className="mr-2 text-gray-400" />
                                                    <span>853 Grove Rd, Palatine, IL</span>
                                                </div>

                                                <div className="flex items-center">
                                                    <Mail size={18} className="mr-2 text-gray-400" />
                                                    <span>info@genematrix.io</span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                                <div className="md:w-3/6 p-4 flex items-center justify-center ">
                                    <img
                                        src={ImageUrl("map2.png")}
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