import { Col, Row } from 'antd';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import { useLoginMutation, useLogoutMutation, useRegisterMutation } from '../../redux/services/authSlice';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { logout, selectUser, setUser } from '../../redux/reducers/userSlice';
import { useSelector } from 'react-redux';

const navigationItems = [
    { id: 'home', label: 'New Collections', path: '/' },
    { id: 'about', label: 'Coming Soon', path: '/shop' },
    {
        id: 'science',
        label: (
            <div className="times-font">
                CHOOSE <span className='mist-font'>Serenity</span>
            </div>
        ),
        path: '/shop',
    },
    {
        id: 'tests',
        label: (
            <div className="times-font">
                CHOOSE <span className='mist-font'>Relief</span>
            </div>
        ),
        path: '/shop',
    },
];

const Header: React.FC = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRegPassword, setShowRegPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();


    const dispatch = useDispatch();
    const user = useSelector(selectUser);



    const [signupData, setSignupData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value
        });
    };

    const [register, { isLoading }] = useRegisterMutation();
    const [login, { isLoading: loginLoading }] = useLoginMutation()
    const [logoutUser, { isLoading: logoutLoading }] = useLogoutMutation();



    const handleNavClick = (id: string, path: string) => {
        setActiveItem(id);
        setMobileMenuOpen(false);
        navigate(path);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        try {
            const response: any = await login({ email, password }).unwrap();
            if (response.success) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: response.message,
                });
                dispatch(setUser(response.user));
                setIsModalOpen(false);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: response.message,
                });
            }
        } catch (error: any) {
            console.error('Error registering user:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.data.message,
            });
        }

    };


    const handleSignup = async () => {

        if (signupData.password !== signupData.confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Passwords do not match!",
            });
        }

        const formData = new FormData();
        formData.append('fullName', signupData.fullName);
        formData.append('email', signupData.email);
        formData.append('password', signupData.password);
        formData.append('confirmPassword', signupData.confirmPassword);

        try {
            const response = await register(formData).unwrap();
            if (response.success) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: response.message,
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: response.message,
                });
            }
        } catch (error: any) {
            console.error('Error registering user:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.error || error.data.message || "Something went wrong!",
            })

        }
    };

    const handleLogout = async () => {
        try {
            const response = await logoutUser({}).unwrap();
            if (response.success) {
                dispatch(logout());
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: response.message,
                })
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: response.message,
                })
            }
        } catch (error: any) {
            console.error('Error logging out:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.error || error.data.message || "Something went wrong!",
            })
        }
    }




    return (
        <header className="w-full z-10 bg-[#374159]">
            <Row justify="center">
                <Col lg={22} md={24} xs={24}>
                    <div className="bg-[#374159] backdrop-blur-lg px-10 py-3 mx-auto flex items-baseline justify-end">
                        {/* <Logo /> */}
                        <button
                            style={{ color: 'white' }}
                            className="block lg:hidden text-white p-2 z-50 relative"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-baseline space-x-1 ">
                            {navigationItems.map((item) => (
                                <NavItem
                                    key={item.id}
                                    label={item.label}
                                    isActive={activeItem === item.id}
                                    onClick={() => handleNavClick(item.id, item.path)}
                                />
                            ))}
                        </nav>

                        {/* Right Buttons */}
                        {user && user._id ? <button
                            disabled={logoutLoading}
                            className=" hidden lg:flex justify-center items-center site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200"
                        >
                            <span className="" onClick={() => {
                                Swal.fire({
                                    title: 'Are you sure you want to logout?',
                                    text: "You won't be able to revert this!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes, logout!'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        handleLogout();
                                    }
                                })
                            }}>logout</span>
                        </button> :

                            <div className="hidden lg:flex items-center space-x-4 gap-2">
                                <button
                                    className="site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200"
                                >
                                    <span className="" onClick={() => setIsRegisterModalOpen(true)}>Member Sign up</span>
                                </button>
                                <button
                                    className="site-btn bg-transparent hover:bg-gray-700 font-medium  rounded-full border border-gray-600 transition-colors duration-200"
                                >
                                    <span className="" onClick={() => setIsModalOpen(true)}>Login</span>
                                </button>
                            </div>
                        }
                    </div>

                    {/* Overlay */}
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
                            }`}
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Mobile Sidebar Menu */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-10 transform transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col h-full pt-6 px-4 relative">
                            <button
                                className="absolute top-4 right-4 text-white p-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </button>

                            <nav className="flex flex-col space-y-1 mt-10">
                                {navigationItems.map((item) => (
                                    <NavItem
                                        key={item.id}
                                        label={item.label}
                                        isActive={activeItem === item.id}
                                        onClick={() => handleNavClick(item.id, item.path)}
                                    />
                                ))}
                            </nav>

                            {/* Bottom Buttons */}
                            {user && user._id ? <button
                                className="site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200 "
                            >
                                <span className="" onClick={() => {
                                    Swal.fire({
                                        title: 'Are you sure you want to logout?',
                                        text: "You won't be able to revert this!",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: 'Yes, logout!'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            handleLogout();
                                        }
                                    })
                                }}>logout</span>
                            </button> :
                                <div className="mt-auto pb-8 flex flex-col space-y-4 nav-btns">

                                    <button
                                        className="site-btn bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                    >
                                        <span className="" onClick={() => setIsRegisterModalOpen(true)}>Member Sign up</span>
                                    </button>
                                    <button
                                        className="site-btn bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                    >
                                        <span className="" onClick={() => setIsModalOpen(true)}>Login</span>
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </Col>
            </Row>




            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm transition-opacity duration-300">
                    <div className="relative bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl text-left transform transition-all duration-300 ease-out">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
                        >
                            ✕
                        </button>

                        {/* Heading */}
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Welcome !</h3>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Login</h2>
                        <p className="text-sm text-gray-500 mb-6">Enter Membership credentials.</p>

                        {/* Form */}
                        <div className="space-y-4">
                            {/* Username */}
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your user name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your Password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
                                    />
                                    <span
                                        className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "🙈" : "👁️"}
                                    </span>
                                </div>
                            </div>

                            {/* Options */}
                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="accent-black" />
                                    Remember Me
                                </label>
                                <button className="hover:underline">Forgot Password ?</button>
                            </div>

                            {/* Login Button */}
                            <button
                                disabled={loginLoading}
                                onClick={handleLogin}
                                className="site-btn w-full bg-[#f1c7c2] hover:bg-[#e7b8b1] text-black font-semibold py-2 rounded-full transition"
                            >
                                {loginLoading ? "LOGGING-IN" : "LOGIN"}
                            </button>

                            {/* Footer */}
                            <p className="text-sm text-center text-gray-600 mt-4">
                                Don’t have an Account?{" "}
                                <span className="font-semibold text-black cursor-pointer hover:underline">
                                    Register Here
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            )}


            {isRegisterModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm transition-opacity duration-300">
                    <div className="relative bg-white rounded-2xl p-8 w-full max-w-2xl shadow-xl text-left transform transition-all duration-300 ease-out">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsRegisterModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
                        >
                            ✕
                        </button>

                        {/* Heading */}
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Welcome !</h3>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Register Now</h2>
                        <p className="text-sm text-gray-500 mb-6">Enter Membership credentials.</p>

                        {/* Form */}
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Full Name</label>
                                <input
                                    value={signupData.fullName}
                                    onChange={onChange}
                                    name='fullName'
                                    type="text"
                                    placeholder="Enter your user name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Email</label>
                                <input
                                    value={signupData.email}
                                    onChange={onChange}
                                    name='email'
                                    type="email"
                                    placeholder="Enter your user name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <label className="block text-sm text-gray-700 mb-1">Password</label>
                                <input
                                    value={signupData.password}
                                    onChange={onChange}
                                    name='password'
                                    type={showRegPassword ? "text" : "password"}
                                    placeholder="Enter your Password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
                                />
                                <span
                                    className="absolute right-3 top-9 text-gray-400 cursor-pointer"
                                    onClick={() => setShowRegPassword(!showRegPassword)}
                                >
                                    {showRegPassword ? "🙈" : "👁️"}
                                </span>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <label className="block text-sm text-gray-700 mb-1">Confirm Password</label>
                                <input
                                    value={signupData.confirmPassword}
                                    onChange={onChange}
                                    name='confirmPassword'
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Enter your Password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
                                />
                                <span
                                    className="absolute right-3 top-9 text-gray-400 cursor-pointer"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? "🙈" : "👁️"}
                                </span>
                            </div>
                        </form>

                        {/* Checkbox */}
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
                            <input type="checkbox" className="accent-black" />
                            <label>
                                I agree to the privacy policy and terms of condition.
                            </label>
                        </div>

                        {/* Register Button */}
                        <div className="mt-6">
                            <button
                                disabled={isLoading}
                                onClick={handleSignup}
                                className="site-btn w-full bg-[#f1c7c2] hover:bg-[#e7b8b1] text-black font-semibold py-2 rounded-full transition">
                                {isLoading ? "REGISTERING..." : "REGISTER"}
                            </button>
                        </div>

                        {/* Footer */}
                        <p className="text-sm text-center text-gray-600 mt-4">
                            Already have an Account ?{" "}
                            <span className="font-semibold text-black cursor-pointer hover:underline">
                                Login
                            </span>
                        </p>
                    </div>
                </div>
            )}



        </header>
    );
};

export default Header;
