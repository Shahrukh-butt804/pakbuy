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
    const navigate = useNavigate();

    const handleNavClick = (id: string, path: string) => {
        setActiveItem(id);
        setMobileMenuOpen(false);
        navigate(path);
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
                                <span className="">Member Sign up</span>
                            </button>
                            <button
                                className="site-btn bg-transparent hover:bg-gray-700 font-medium  rounded-full border border-gray-600 transition-colors duration-200"
                            >
                                <span className="">Login</span>
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
        </header>
    );
};

export default Header;
