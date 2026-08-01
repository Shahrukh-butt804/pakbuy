import React, { useState } from 'react';
import { Modal } from 'antd';
import { CheckCircleOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
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

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    };

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center px-4 text-center py-14">
                <h2 className="text-2xl font-semibold text-[#d17f89] mb-6">Change Password</h2>

                <div className="rounded-xl shadow p-6 max-w-md w-full border border-white/10">
                    <div className="w-full text-left space-y-4 mb-8">
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                                Current Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showCurrentPassword ? "text" : "password"}
                                    className="w-full rounded-md px-3 py-2.5 pr-10 bg-white/5 border border-white/15 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d17f89] focus:ring-1 focus:ring-[#d17f89] transition-colors"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowCurrentPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#d17f89] transition-colors"
                                    tabIndex={-1}
                                >
                                    {showCurrentPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    className="w-full rounded-md px-3 py-2.5 pr-10 bg-white/5 border border-white/15 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d17f89] focus:ring-1 focus:ring-[#d17f89] transition-colors"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#d17f89] transition-colors"
                                    tabIndex={-1}
                                >
                                    {showNewPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5">
                                Confirm New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="w-full rounded-md px-3 py-2.5 pr-10 bg-white/5 border border-white/15 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d17f89] focus:ring-1 focus:ring-[#d17f89] transition-colors"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#d17f89] transition-colors"
                                    tabIndex={-1}
                                >
                                    {showConfirmPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                        <button
                            onClick={() => navigate('/profile')}
                            className="py-2.5 px-6 rounded-full text-sm font-semibold uppercase tracking-wider border border-white/25 text-white transition-colors hover:border-[#d17f89] hover:text-[#d17f89]"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleChangePassword}
                            className="py-2.5 px-6 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#d17f89] text-black transition-colors hover:bg-[#c26a75]"
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
                    styles={{
                        content: {
                            background: "#151515",
                            border: "1px solid rgba(255,255,255,0.1)",
                        },
                    }}
                >
                    <div className="text-center p-6">
                        <CheckCircleOutlined style={{ fontSize: '48px', color: '#d17f89' }} />
                        <h2 className="mt-4 text-xl font-semibold text-white">Password Changed</h2>
                        <p className="text-gray-400 mt-2">Your password has been changed successfully!</p>
                        <button
                            onClick={() => navigate('/profile')}
                            className="mt-6 bg-[#d17f89] text-black font-semibold px-6 py-2.5 rounded-full hover:bg-[#c26a75] transition-colors"
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