import React, { useRef, useState } from 'react';
import { Modal } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser, setUser } from '../../redux/reducers/userSlice';
import { useUpdateProfileMutation } from '../../redux/services/profileSlice';
import Swal from 'sweetalert2';
import { FaPencilAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { UPLOADS_URL } from '../../constants/api';

const EditProfile: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { email, fullName: name, image: userImage, token } = useSelector(selectUser);
    const [fullName, setFullName] = useState(name);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null)
    const inputRef = useRef<HTMLInputElement>(null);

    const [updateProfile, { isLoading }] = useUpdateProfileMutation()

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSave = async () => {
        try {
            if (!fullName) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Please enter your name',
                })
                return
            }

            const formData = new FormData();
            formData.append("fullName", fullName);
            if (imageFile) {
                formData.append("image", imageFile);
            }

            const response: any = await updateProfile(formData)
            if (response?.data?.success) {
                setIsModalOpen(true);
                dispatch(
                    setUser({
                        ...response?.data?.user,
                        token,
                    }),
                );

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.message || response?.error?.data?.message,
                })
            }
        } catch (error: any) {
            console.log("🚀 ~ handleSave ~ error:", error)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || error?.data?.message || 'Something went wrong',
            })

        }

    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center px-4 text-center py-14">
                <h2 className="text-2xl font-semibold text-[#d17f89] mb-6">Edit Profile</h2>

                <div className="rounded-xl shadow p-6 max-w-md w-full border border-white/10">
                    <div className="flex flex-col items-center">

                        <div className="relative mb-6">
                            <img
                                src={
                                    imagePreview ||
                                    (userImage ? UPLOADS_URL + userImage : null) ||
                                    "https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                }
                                className="w-24 h-24 rounded-full object-cover border border-white/10"
                                crossOrigin="anonymous"
                                alt="profile"
                            />

                            <input
                                ref={inputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    if (e.target.files && e.target.files[0]) {
                                        const file = e.target.files[0];
                                        setImagePreview(URL.createObjectURL(file));
                                        setImageFile(file);
                                    }
                                }}
                            />

                            <button
                                type="button"
                                onClick={() => inputRef.current?.click()}
                                className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#d17f89] flex items-center justify-center hover:bg-[#c26a75] transition-colors"
                            >
                                <FaPencilAlt className="text-black text-xs" />
                            </button>
                        </div>

                        {/* Input Fields */}
                        <div className="w-full text-left space-y-4 mb-8">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-md px-3 py-2.5 bg-white/5 border border-white/15 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d17f89] focus:ring-1 focus:ring-[#d17f89] transition-colors"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full rounded-md px-3 py-2.5 bg-white/5 border border-white/10 text-gray-400 cursor-not-allowed"
                                    value={email}
                                    disabled
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                            <button
                                onClick={() => navigate('/profile')}
                                className="py-2.5 px-6 rounded-full text-sm font-semibold uppercase tracking-wider border border-white/25 text-white transition-colors hover:border-[#d17f89] hover:text-[#d17f89]"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isLoading}
                                className="py-2.5 px-6 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#d17f89] text-black transition-colors hover:bg-[#c26a75]"
                            >
                                {isLoading ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ethicsBoundary-bg">
                <ChooseInfoSection />
                <Footer />
            </section>

            {/* Success Modal */}
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                centered
                closeIcon={false}
                styles={{
                    content: {
                        background: "#151515",
                        border: "1px solid rgba(255,255,255,0.1)",
                    },
                }}
            >
                <div className="text-center p-6">
                    <CheckCircleOutlined style={{ fontSize: '48px', color: '#d17f89' }} />
                    <h2 className="mt-4 text-xl font-semibold text-white">Profile Updated</h2>
                    <p className="text-gray-400 mt-2">Your changes have been saved successfully!</p>
                    <button
                        onClick={() => navigate('/profile')}
                        className="mt-6 bg-[#d17f89] text-black font-semibold px-6 py-2.5 rounded-full hover:bg-[#c26a75] transition-colors"
                    >
                        OK
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default EditProfile;