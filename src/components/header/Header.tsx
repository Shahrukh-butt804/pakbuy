import { Button, Col, Divider, Drawer, Image, List, Row } from 'antd';
import { Menu, ShoppingCart, Star, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import { CloseOutlined } from "@ant-design/icons";
import { ImageUrl } from '../../utils/Functions';
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



interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: number;
}

const addOns: Product[] = [
    {
        id: 1,
        title: "Muse S Athena",
        price: 200,
        image: "product1.png",
        rating: 5,
    },
    {
        id: 2,
        title: "Brain HQ",
        price: 150,
        image: "product1.png",
        rating: 4,
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

    const handleNavClick = (id: string, path: string) => {
        setActiveItem(id);
        setMobileMenuOpen(false);
        navigate(path);
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };



    const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);

    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [showResetConfirmPassword, setShowResetConfirmPassword] = useState(false);


    const handleCartClick = () => {
        const alreadyExists = localStorage.getItem('myBooleanFlag');
        if (!alreadyExists || alreadyExists === 'false') {
            localStorage.setItem('myBooleanFlag', 'true');
            window.dispatchEvent(new Event('localStorageUpdated'));

            console.log('Boolean value set in localStorage');
        } else {
            console.log('Already exists in localStorage');
        }
    };



    const [showCart, setShowCart] = useState(false);
    useEffect(() => {
        const checkStorage = () => {
            const storedVar = localStorage.getItem('myBooleanFlag');
            if (storedVar === 'true') {
                setShowCart(true);
            } else {
                setShowCart(false);
            }
        };

        checkStorage(); // check once on mount

        window.addEventListener('localStorageUpdated', checkStorage);
        return () => window.removeEventListener('localStorageUpdated', checkStorage);
    }, []);
    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState<Product[]>([
        {
            id: 999,
            title: "CHOOSE Mind",
            price: 600,
            image: "product1.png",
            rating: 5,
        },
    ]);

    const showDrawer = () => setOpen(true);
    const onClose = () => {
        setOpen(false)
        setShowCart(false);
        localStorage.setItem('myBooleanFlag', 'false');
    };

    const handleAddToCart = (product: Product) => {
        setCartItems((prev) => [...prev, product]);
    };

    const handleRemove = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    const tax = subtotal * 0.2;
    const total = subtotal + tax;



    return (
        <header className="w-full z-10 bg-[#374159]">
            <Row justify="center">
                <Col lg={22} md={24} xs={24}>
                    <div className="bg-[#374159] backdrop-blur-lg px-10 py-3 mx-auto flex  justify-end items-center">
                        {/* <Logo /> */}

                        <button className="text-white lg:hidden  rounded-full hover:bg-gray-700 transition-colors duration-200 h-10 w-10 flex items-center justify-center" style={{ borderRadius: "100px", padding: "0", border: "1px solid #fff" }} onClick={handleCartClick}>
                            <ShoppingCart className="h-5 w-5" />
                        </button>

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
                        <div className="hidden lg:flex items-center space-x-4 gap-2">
                            <button
                                onClick={handleCartClick}
                                className="text-white rounded-full hover:bg-gray-700 transition-colors duration-200 h-10 w-10 flex items-center justify-center"
                                style={{ borderRadius: "100px", padding: "0", border: "1px solid #fff" }}
                            >
                                <ShoppingCart className="h-5 w-5" />
                            </button>
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
                            <div className="mt-auto pb-8 flex flex-col space-y-4 nav-btns">

                                <button
                                    className="site-btn bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                    onClick={() => setIsRegisterModalOpen(true)}
                                >
                                    <span className="">Member Sign up</span>
                                </button>
                                <button
                                    className="site-btn bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <span className="">Login</span>
                                </button>
                            </div>
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
                                <label className="block text-sm text-gray-700 mb-1">User name</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                                <button className="hover:underline" onClick={() => {
                                    setIsModalOpen(false);
                                    setIsForgotModalOpen(true);
                                }}>Forgot Password ?</button>
                            </div>

                            {/* Login Button */}
                            <button
                                onClick={handleLogin}
                                className="site-btn w-full bg-[#f1c7c2] hover:bg-[#e7b8b1] text-black font-semibold py-2 rounded-full transition"
                            >
                                LOGIN
                            </button>

                            {/* Footer */}
                            <p className="text-sm text-center text-gray-600 mt-4">
                                Don’t have an Account?{" "}
                                <span className="font-semibold text-black cursor-pointer hover:underline" onClick={() => {
                                    setIsModalOpen(false);
                                    setIsRegisterModalOpen(true);
                                }}>
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
                                    type="text"
                                    placeholder="Enter your user name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your user name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <label className="block text-sm text-gray-700 mb-1">Password</label>
                                <input
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
                            <button className="site-btn w-full bg-[#f1c7c2] hover:bg-[#e7b8b1] text-black font-semibold py-2 rounded-full transition">
                                REGISTER
                            </button>
                        </div>

                        {/* Footer */}
                        <p className="text-sm text-center text-gray-600 mt-4">
                            Already have an Account ?{" "}
                            <span className="font-semibold text-black cursor-pointer hover:underline" onClick={() => {
                                setIsRegisterModalOpen(false);
                                setIsModalOpen(true);
                            }}>
                                Login
                            </span>
                        </p>
                    </div>
                </div>
            )}


            {isForgotModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm">
                    <div className="relative bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl">
                        <button
                            onClick={() => setIsForgotModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Forgot Password</h2>
                        <p className="text-sm text-gray-500 mb-4">Enter your email to receive an OTP</p>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        <button
                            className="site-btn w-full mt-4 bg-[#f1c7c2] hover:bg-[#e7b8b1] text-black font-semibold py-2 rounded-full"
                            onClick={() => {
                                setIsForgotModalOpen(false);
                                setIsOtpModalOpen(true);
                            }}
                            style={{ marginTop: '16px' }}
                        >
                            Send OTP
                        </button>
                    </div>
                </div>
            )}

            {isOtpModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm">
                    <div className="relative bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl">
                        <button
                            onClick={() => setIsOtpModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Enter OTP</h2>
                        <p className="text-sm text-gray-500 mb-4">We've sent a code to {email}</p>

                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />

                        <button
                            className="site-btn w-full mt-4 bg-[#f1c7c2] hover:bg-[#e7b8b1] text-black font-semibold py-2 rounded-full"
                            onClick={() => {
                                setIsOtpModalOpen(false);
                                setIsResetModalOpen(true);
                            }}
                            style={{ marginTop: '16px' }}
                        >
                            Verify OTP
                        </button>
                    </div>
                </div>
            )}


            {isResetModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1b1b81] backdrop-blur-sm">
                    <div className="relative bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl">
                        <button
                            onClick={() => setIsResetModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Reset Password</h2>
                        <p className="text-sm text-gray-500 mb-4">Set a new password for your account</p>

                        {/* New Password */}
                        <div className="relative mb-4">
                            <input
                                type={showResetPassword ? "text" : "password"}
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
                            />
                            <span
                                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                                onClick={() => setShowResetPassword(!showResetPassword)}
                            >
                                {showResetPassword ? "🙈" : "👁️"}
                            </span>
                        </div>

                        {/* Confirm New Password */}
                        <div className="relative mb-4">
                            <input
                                type={showResetConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
                            />
                            <span
                                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                                onClick={() => setShowResetConfirmPassword(!showResetConfirmPassword)}
                            >
                                {showResetConfirmPassword ? "🙈" : "👁️"}
                            </span>
                        </div>

                        <button
                            className="site-btn w-full bg-[#f1c7c2] hover:bg-[#e7b8b1] text-black font-semibold py-2 rounded-full"
                            onClick={() => {
                                if (newPassword === confirmNewPassword && newPassword) {
                                    alert("Password reset successful!");
                                    setIsResetModalOpen(false);
                                    setIsModalOpen(true); // Go back to login
                                } else {
                                    alert("Passwords do not match.");
                                }
                            }}
                            style={{ marginTop: '16px' }}
                        >
                            Reset Password
                        </button>
                    </div>
                </div>
            )}




            {showCart && <Drawer
                title="Bonus Add-On Options"
                placement="right"
                onClose={onClose}
                open={showCart}
                width={600}
                extra={<Button icon={<CloseOutlined />} onClick={onClose} />}
            >

                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4`}>
                    {addOns.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1f2638] p-4 rounded-lg shadow hover:shadow-lg transition-all"
                        >
                            <div className="bg-white">
                                <img
                                    src={ImageUrl(item.image)}
                                    alt={item.title}
                                    className="rounded object-cover w-full h-44"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-1 text-white">{item.title}</h3>
                                <div className="flex items-center text-sm text-yellow-400 mb-1">
                                    {Array.from({ length: item.rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-white font-semibold text-lg">${item.price.toFixed(2)}</p>

                                <button
                                    className="site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200 w-full mt-3 text-white"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <Divider />

                <div>
                    <h3 className="text-lg font-bold mb-2">My Cart</h3>
                    <List
                        itemLayout="horizontal"
                        dataSource={cartItems}
                        renderItem={(item) => (
                            <List.Item
                                actions={[
                                    <Button
                                        size="small"
                                        type="text"
                                        danger
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        ✕
                                    </Button>,
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={<Image src={ImageUrl(item.image)} width={60} />}

                                    title={item.title}
                                    description={`$${item.price.toFixed(2)}`}
                                />
                            </List.Item>
                        )}
                    />

                    <Divider />
                    <div className="text-right space-y-1">
                        <p>
                            Sub-total: <strong>${subtotal.toFixed(2)}</strong>
                        </p>
                        <p>
                            Tax (20%): <strong>${tax.toFixed(2)}</strong>
                        </p>
                        <p className="text-xl">
                            Total: <strong>${total.toFixed(2)}</strong>
                        </p>
                        <Button
                            type="primary"
                            onClick={() => navigate("/checkout")}
                            className="mt-2 w-full site-btn bg-transparent hover:bg-gray-700 font-medium rounded-full border border-gray-600 transition-colors duration-200"
                        >
                            CHECKOUT
                        </Button>
                    </div>
                </div>
            </Drawer>}

        </header>
    );
};

export default Header;
