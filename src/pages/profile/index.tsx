import React from 'react';
import { ChooseInfoSection } from "../../components/chooseInfoSection";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
      const navigate = useNavigate();
    return (
        <>
            <Header />

            <div className="flex flex-col items-center justify-center px-4 bg-white text-center py-14">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Profile</h2>

                <div className="bg-white rounded-lg shadow p-6 max-w-md w-full border-1">
                    <div className="flex flex-col items-center">
                        {/* Profile Image */}

                        {/* <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                            <img
                                src="https://via.placeholder.com/100x100?text=Image"
                                alt="Profile"
                                className="w-16 h-16 object-cover"
                            />
                        </div>

                        <p className="text-[#d46b08] text-sm mb-6">User ID: 001</p> */}

                        {/* User Info */}
                        <div className="grid grid-cols-2 gap-4 w-full text-left mb-6">
                            <div>
                                <p className="text-sm text-gray-500">Name</p>
                                <p className="font-semibold">Samantha</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email Address</p>
                                <p className="font-semibold">Abc@xyz.com</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <button className="border border-green-800 text-[#d46b08] py-2 px-4 rounded-full hover:bg-[#D7C6B7] transition" onClick={() => navigate('/profile/changePassword')}>
                                Change Password
                            </button>
                            <button className="site-btn py-2 px-4 rounded-full hover:bg-green-900 transition" onClick={() => navigate('/profile/edit')}>
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
