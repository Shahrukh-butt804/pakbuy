import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';

const EditProfile: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { email, fullName: name } = useSelector(selectUser);
    const [fullName, setFullName] = useState(name);


    const [updateProfile] = useUpdateProfileMutation()

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSave = async () => {
        try {

            const response: any = await updateProfile({ fullName })
            if (response?.data?.success) {
                setIsModalOpen(true);
                dispatch(setUser(response?.data?.user))

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
            <div className="flex flex-col items-center justify-center px-4 bg-white text-center py-14">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Profile</h2>

                <div className="bg-white rounded-lg shadow p-6 max-w-md w-full border-1">
                    <div className="flex flex-col items-center">
                        {/* Input Fields */}
                        <div className="w-full text-left space-y-4 mb-6 text-black">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-500"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-500"
                                    value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    disabled
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">

                            <button
                                onClick={() => navigate('/profile')}
                                className="site-btn bg-green-700  py-2 px-4 rounded-full hover:bg-green-900 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="site-btn bg-green-700  py-2 px-4 rounded-full hover:bg-green-900 transition"
                            >
                                Save
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
            >
                <div className="text-center p-6">
                    <CheckCircleOutlined style={{ fontSize: '48px', color: '#52c41a' }} />
                    <h2 className="mt-4 text-xl font-semibold text-gray-800">Profile Updated</h2>
                    <p className="text-gray-600 mt-2">Your changes have been saved successfully!</p>
                    <button
                        onClick={() => navigate('/profile')}
                        className="mt-6 bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition"
                    >
                        OK
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default EditProfile;
