import React from 'react';

interface NavItemProps {
label: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}


const NavItem: React.FC<NavItemProps> = ({ label, isActive = false, onClick }) => {
    return (
        <button
            className={`px-3 py-2 text-sm transition-colors duration-200 header-navs`}
            onClick={onClick}
        >
            <span className={isActive
                ? 'text-white font-medium'
                : 'text-white hover:text-white'
            }>
                {label}
            </span>
            {/* <span className={isActive
                ? 'text-white font-medium'
                : 'text-gray-300 hover:text-white'
            }>
                {label}
            </span> */}
        </button>
    );
};


export default NavItem;