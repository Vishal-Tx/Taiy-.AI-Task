import React from "react";
import { FaAddressBook, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`bg-blue-600 text-white flex justify-center p-4 shadow-md gap-8 ${className}`}>
            <Link to="/" className={`flex h-7  text-lg  font-medium`}>
                <FaHome size={24} className="mr-2" />
                Home
            </Link>
            <Link to="/dashboard" className={`flex h-7  text-lg  font-medium`}>
                <FaAddressBook size={24} className="mr-2" />
                Dashboard
            </Link>
        </header>
    );
};

export default Header;
