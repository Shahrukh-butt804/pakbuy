import React, { useState, useEffect, useRef } from 'react';
import { Menu, User, X } from 'lucide-react';
import Logo from './Logo';
import NavItem from './NavItem';
import NextStepButton from './NextStepButton';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ImageUrl } from '../../utils/Functions';



const navigationItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/aboutUs' },
    { id: 'science', label: 'Our Science', path: '/ourScience' },
    { id: 'tests', label: 'Tests', path: '/shopTests' },
    // { id: 'providers', label: 'Providers', path: '/providers' },
    // { id: 'resources', label: 'Resources', path: '/resources' },
    { id: 'contact', label: 'Contact Us', path: '/contactUs' },
    {
        id: 'more',
        label: 'More',
        children: [
            { id: 'hereditary-cancer', label: 'Hereditary Cancer Panel', path: '/geneCancer' },
            // { id: 'consent-form', label: 'Consent Form', path: '/consentForm' },
            // { id: 'dpa', label: 'DPA', path: '/dpa' },
            { id: 'enterprise-licensing', label: 'Enterprise Licensing & Pharma Partnerships', path: '/enterpriseLicensing' },
            { id: 'real-stories', label: 'Real Stories. Real Impact', path: '/providers' },
            { id: 'privacy-policy', label: 'Privacy Policy', path: '/providers' },
            { id: 'media-kit', label: 'Media Kit', path: '/mediaKit' },
            { id: 'developer-api', label: 'Developer API Access', path: '/developerAccess' },
            { id: 'investor-relations', label: 'Investor Relations', path: '/investorRelations' },
            { id: 'conferences', label: 'Conferences & Events', path: '/conferencesEvents' },
            { id: 'research-library', label: 'Research Library', path: '/researchLibrary' },
            { id: 'news-article-expands', label: 'News Article Expands', path: '/newsArticleExpands' },
            { id: 'news-artical', label: 'News Artical', path: '/newsartical' },
            { id: 'dpa', label: 'DPA', path: '/dpa' },
            // { id: 'news-artical', label: 'News Artical', path: '/newsartical' },
            // { id: 'news-article-expands', label: 'News Article Expands', path: '/newsArticleExpands' },
            // { id: 'providers', label: 'Providers', path: '/providers' },
            // { id: 'resources', label: 'Resources', path: '/resources' },
        ]
    }
];

const Header: React.FC = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [moreOpen, setMoreOpen] = useState(false);

    const handleNavClick = (id: string, path: string) => {
        setActiveItem(id); // sets highlight
        setMobileMenuOpen(false); // closes mobile menu (not needed for desktop, but okay)
        navigate(path); // navigate using react-router
    };


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                desktopDropdownRef.current &&
                !desktopDropdownRef.current.contains(event.target as Node) &&
                mobileDropdownRef.current &&
                !mobileDropdownRef.current.contains(event.target as Node)
            ) {
                setMoreOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const desktopDropdownRef = useRef<HTMLDivElement>(null);
    const mobileDropdownRef = useRef<HTMLDivElement>(null);

    return (
        // <header className="py-4 pt-10 px-4 md:px-6 absolute w-full z-10 ">
        <header className="py-4 pt-10 px-4 md:px-6 fixed top-0 w-full z-10">
            <Row justify={"center"}>
                <Col lg={23} md={23} xs={23}>
                    <div className="bg-[#d9d9d938] backdrop-blur-lg px-10 py-3 mx-auto flex items-center justify-between rounded-full">
                        {/* Logo */}
                        <Logo />

                        {/* Mobile menu button */}
                        <button
                            style={{ color: "white" }}
                            className="block lg:hidden text-white p-2 z-50 relative"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>

                        {/* Desktop Navigation */}

                        <nav className="hidden lg:flex items-center space-x-1">
                            {navigationItems.map((item) =>
                                item.children ? (
                                    <div key={item.id} className="" ref={desktopDropdownRef}>
                                        <button
                                            className={`px-4 py-2 text-white hover:text-purple-400 header-nav-more ${activeItem === item.id ? 'font-bold' : ''}`}
                                            onClick={() => setMoreOpen(!moreOpen)}
                                        >
                                            {item.label}
                                        </button>

                                        {moreOpen && (
                                            <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-lg z-20 w-full p-4 grid grid-cols-3 gap-4">

                                                {/* First Column */}
                                                <div className="flex flex-col space-y-2">
                                                    {item.children.slice(0, Math.ceil(item.children.length / 2)).map((child) => (
                                                        <button
                                                            key={child.id}
                                                            onClick={() => {
                                                                handleNavClick(child.id, child.path);
                                                                setTimeout(() => setMoreOpen(false), 100);
                                                            }}
                                                            className="text-left text-sm text-gray-700 hover:bg-[#cdbbe191] px-2 py-2 rounded w-full"
                                                        >
                                                            {child.label}
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Second Column */}
                                                <div className="flex flex-col space-y-2">
                                                    {item.children.slice(Math.ceil(item.children.length / 2)).map((child) => (
                                                        <button
                                                            key={child.id}
                                                            onClick={() => {
                                                                handleNavClick(child.id, child.path);
                                                                setTimeout(() => setMoreOpen(false), 100);
                                                            }}
                                                            className="text-left text-sm text-gray-700 hover:bg-[#cdbbe191] px-2 py-2 rounded w-full"
                                                        >
                                                            {child.label}
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Third Column - Image */}
                                                <div className="flex items-center justify-center">
                                                    <img
                                                        src={ImageUrl("navimg.png")}
                                                        alt="Purple chromosomes"
                                                        className="relative rounded-2xl w-80  object-cover"
                                                    />
                                                </div>

                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <NavItem
                                        key={item.id}
                                        label={item.label}
                                        isActive={activeItem === item.id}
                                        onClick={() => handleNavClick(item.id, item.path)}
                                    />
                                )
                            )}
                        </nav>



                        {/* <nav className="hidden lg:flex items-center space-x-1">
                            {navigationItems.map((item) =>
                                item.children ? (
                                    <div key={item.id} className="relative group" ref={desktopDropdownRef}>
                                        <button
                                            className={`px-4 py-2 text-white hover:text-purple-400 ${activeItem === item.id ? 'font-bold' : ''}`}
                                            onClick={() => setMoreOpen(!moreOpen)}
                                        >
                                            {item.label}
                                        </button>
                                        {moreOpen && (
                                            <div className="absolute top-full mt-2 bg-white rounded shadow-lg z-20 min-w-[150px]">
                                                {item.children.map((child) => (
                                                    <button
                                                        key={child.id}
                                                        onClick={() => {
                                                            handleNavClick(child.id, child.path);
                                                            setTimeout(() => setMoreOpen(false), 100);
                                                        }}
                                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        {child.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <NavItem
                                        key={item.id}
                                        label={item.label}
                                        isActive={activeItem === item.id}
                                        onClick={() => handleNavClick(item.id, item.path)}
                                    />
                                )
                            )}
                        </nav> */}

                        {/* Right side buttons */}
                        <div className="hidden lg:flex items-center space-x-4 gap-2">
                            <button className="text-white  rounded-full hover:bg-gray-700 transition-colors duration-200 h-10 w-10 flex items-center justify-center" style={{ borderRadius: "100px", padding: "0", border: "1px solid #fff" }}>
                                <User className="h-5 w-5" />
                            </button>
                            <NextStepButton onClick={() => console.log('Next step clicked')} />
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {/* Mobile Navigation */}
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
                            }`}
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col h-full pt-6 px-4 relative">
                            {/* Close button */}
                            <button
                                className="absolute top-4 right-4 text-white p-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* Navigation */}
                            <nav className="flex flex-col space-y-1 mt-10">
                                {/* {navigationItems.map((item) => (
                                    <NavItem
                                        key={item.id}
                                        label={item.label}
                                        isActive={activeItem === item.id}
                                        onClick={() => handleNavClick(item.id, item.path)}
                                    />
                                ))} */}
                                {navigationItems.map((item) =>
                                    item.children ? (
                                        <div key={item.id} className="relative group text-center" ref={mobileDropdownRef}>
                                            <button
                                                className={`px-4 py-2 text-white hover:text-purple-400 ${activeItem === item.id ? 'font-bold' : ''}`}
                                                onClick={() => setMoreOpen(!moreOpen)}
                                            >
                                                {item.label}
                                            </button>
                                            {moreOpen && (
                                                <div className="absolute top-full mt-2 bg-white rounded shadow-lg z-20 min-w-[150px] max-h-[200px] overflow-auto">
                                                    {item.children.map((child) => (
                                                        <button
                                                            key={child.id}
                                                            onClick={() => {
                                                                handleNavClick(child.id, child.path);
                                                                setTimeout(() => setMoreOpen(false), 100);
                                                            }}
                                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            {child.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <NavItem
                                            key={item.id}
                                            label={item.label}
                                            isActive={activeItem === item.id}
                                            onClick={() => handleNavClick(item.id, item.path)}
                                        />
                                    )
                                )}
                            </nav>

                            {/* Buttons at the bottom */}
                            <div className="mt-auto pb-8 flex flex-col space-y-4">
                                <button className="text-white bg-gray-800 p-1.5 rounded-full hover:bg-gray-700 transition-colors duration-200 w-fit">
                                    <User className="h-5 w-5" />
                                </button>
                                <NextStepButton onClick={() => console.log('Next step clicked')} />
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>

        </header>
    );
};

export default Header;