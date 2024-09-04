import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaAddressBook, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SidebarProps {
    isExpanded: boolean;
    onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, onToggle }) => {
    return (
        <aside
            className={`bg-white border-r border-r-gray-500 h-full p-4 fixed transition-all duration-300 ${isExpanded ? "w-44" : "w-24"
                }`}
        >
            <button
                onClick={onToggle}
                className="bg-blue-500 text-white p-2 rounded-full absolute -right-3 top-4 shadow-md hover:bg-blue-600"
            >
                {isExpanded ? <FaArrowLeft /> : <FaArrowRight />}
            </button>
            <nav className=" flex flex-col justify-center mt-14 space-y-10 ml-2 ">
                <div className="border border-gray-500 p-2 rounded items-center  hover:bg-blue-600 hover:text-white w-full ease-in-out transition-all duration-200">
                    <Link to="/" className={`flex h-7  text-lg ${isExpanded ? '' : 'justify-center'} font-medium`}>
                        <FaHome className={`${isExpanded ? 'mr-3' : ""}`} size={24} />
                        {isExpanded && "Home"}
                    </Link>
                </div>
                <div className="border border-gray-500 p-2 rounded items-center  hover:bg-blue-600 hover:text-white w-full ease-in-out transition-all duration-200">
                    <Link to="/dashboard" className={`flex h-7  text-lg ${isExpanded ? '' : 'justify-center'} font-medium`}>
                        <FaAddressBook className={`${isExpanded ? 'mr-3' : ""}`} size={24} />
                        {isExpanded && "Dashboard"}
                    </Link>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
