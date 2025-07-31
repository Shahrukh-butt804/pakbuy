import React, { useState } from 'react';
import { Modal } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { useNavigate } from 'react-router-dom';
import { useChangePasswordMutation } from '../../redux/services/authSlice';
import Swal from 'sweetalert2';

const ChangePassword: React.FC = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [changePassword] = useChangePasswordMutation()

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'New password and confirm password do not match.',
            })
            return;
        }

        try {
            const response: any = await changePassword({ oldPassword: currentPassword, newPassword });
            console.log(response);
            if (response?.data?.success) {
                setIsSuccessModalOpen(true);

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.message || response?.error?.data?.message,
                })
            }

        } catch (error: any) {
            console.log("🚀 ~ handleChangePassword ~ error:", error)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || error?.data?.message || 'Something went wrong',
            })

        }
    };



    const handleModalOk = () => {
        setIsSuccessModalOpen(false);
        // Optional: Reset form or redirect
    };

    const navigate = useNavigate();







    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center  px-4 bg-white text-center py-14 ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Change Password</h2>

                <div className="bg-white rounded-lg shadow p-6 max-w-md w-full border-1">
                    <div className="w-full text-left space-y-4 mb-6">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Current Password</label>
                            <input
                                type="password"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-[#D7C6B7]"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">New Password</label>
                            <input
                                type="password"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-[#D7C6B7]"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Confirm New Password</label>
                            <input
                                type="password"
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-[#D7C6B7]"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <button
                            onClick={() => navigate('/profile')}
                            className="border border-green-800 text-green-800 py-2 px-4 rounded-full hover:bg-[#D7C6B7] transition"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleChangePassword}
                            className="site-btn py-2 px-4 rounded-full hover:bg-[#D7C6B7] transition"
                        >
                            Change Password
                        </button>
                    </div>
                </div>

                {/* Styled Success Modal */}
                <Modal
                    open={isSuccessModalOpen}
                    onOk={handleModalOk}
                    onCancel={() => setIsSuccessModalOpen(false)}
                    footer={null}
                    centered
                    closeIcon={false}
                    className="custom-success-modal"
                >
                    <div className="text-center p-6">
                        <CheckCircleOutlined style={{ fontSize: '48px', color: '#52c41a' }} />
                        <h2 className="mt-4 text-xl font-semibold text-gray-800">Password Changed</h2>
                        <p className="text-gray-600 mt-2">Your password has been changed successfully!</p>
                        <button
                            onClick={() => navigate('/profile')}
                            className="mt-6 site-btn px-6 py-2 rounded-full hover:[#D7C6B7] transition"
                        >
                            OK
                        </button>
                    </div>
                </Modal>
            </div>
            <section className="ethicsBoundary-bg">
                <ChooseInfoSection />
                <Footer />
            </section>
        </>
    );
};

export default ChangePassword;
