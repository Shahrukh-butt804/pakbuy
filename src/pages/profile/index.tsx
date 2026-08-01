import React from 'react';
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/reducers/userSlice';
import { UPLOADS_URL } from '../../constants/api';

const Profile: React.FC = () => {
    const navigate = useNavigate();

    const user = useSelector(selectUser);

    return (
        <>
            <Header />

            <div className="flex flex-col items-center justify-center px-4 text-center py-14">
                <h2 className="text-2xl font-semibold text-[#d17f89] mb-6">Profile</h2>

                <div className="rounded-xl shadow p-6 max-w-md w-full border border-white/10">
                    <div className="flex flex-col items-center">
                        {/* Profile Image */}
                        <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 overflow-hidden">
                            <img
                                src={
                                    user.image
                                        ? UPLOADS_URL + user.image
                                        : "https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
                                }
                                className="w-24 h-24 rounded-full object-cover"
                                crossOrigin="anonymous"
                                alt="profile"
                            />
                        </div>

                        {/* User Info */}
                        <div className="grid grid-cols-2 gap-6 w-full text-left mb-8 pb-6 border-b border-white/10">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Name</p>
                                <p className="font-semibold text-white">{user.fullName}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Email Address</p>
                                <p className="font-semibold text-white break-all">{user.email}</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                            <button
                                className="py-2.5 px-6 rounded-full text-sm font-semibold uppercase tracking-wider border border-white/25 text-white transition-colors hover:border-[#d17f89] hover:text-[#d17f89]"
                                onClick={() => navigate('/profile/changePassword')}
                            >
                                Change Password
                            </button>
                            <button
                                className="py-2.5 px-6 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#d17f89] text-black transition-colors hover:bg-[#c26a75]"
                                onClick={() => navigate('/profile/edit')}
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ethicsBoundary-bg">
                <ChooseInfoSection />
                <Footer />
            </section>
        </>
    );
};

export default Profile;