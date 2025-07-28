import { Col, Row } from 'antd';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavItem from './NavItem';

const navigationItems = [
    { id: 'home', label: 'New Collections', path: '/' },
    { id: 'about', label: 'Coming Soon', path: '/aboutUs' },
    {
        id: 'science',
        label: (
            <div className="times-font">
                CHOOSE <span className='mist-font'>Serenity</span>
            </div>
        ),
        path: '/ourScience',
    },
    {
        id: 'tests',
        label: (
            <div className="times-font">
                CHOOSE <span className='mist-font'>Relief</span>
            </div>
        ),
        path: '/shopTests',
    },
];

const Header: React.FC = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
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
                            <div className="mt-auto pb-8 flex flex-col space-y-4">

                                <button
                                    className="site-btn bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
                                >
                                    <span className="">Member Sign up</span>
                                </button>
                                <button
                                    className="site-btn bg-transparent hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-full border border-gray-600 transition-colors duration-200"
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
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                    👁️
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
                onClick={handleLogin}
                className="w-full bg-[#f1c7c2] hover:bg-[#e7b8b1] text-black font-semibold py-2 rounded-full transition"
              >
                LOGIN
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
                                    type="password"
                                    placeholder="Enter your Password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
                                />
                                <span className="absolute right-3 top-9 text-gray-400 cursor-pointer">
                                    👁️
                                </span>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <label className="block text-sm text-gray-700 mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your Password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-10"
                                />
                                <span className="absolute right-3 top-9 text-gray-400 cursor-pointer">
                                    👁️
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
                            <button className="w-full bg-[#f1c7c2] hover:bg-[#e7b8b1] text-black font-semibold py-2 rounded-full transition">
                                REGISTER
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
