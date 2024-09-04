import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // State to track sidebar state
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    const handleSidebarToggle = () => {
        // Toggle sidebar state
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div className="flex h-screen">
            <Sidebar isExpanded={isSidebarExpanded} onToggle={handleSidebarToggle} className=" md:block min-[0px]:hidden max-[686px]:hidden" />
            <div
                className={`flex flex-col flex-grow transition-all duration-300  min-[0px]:ml-0 max-[686px]:ml-0 ${isSidebarExpanded ? "md:ml-44" : "md:ml-24"
                    }`}
            >
                <Header className="md:hidden" />
                <main className="px-6 flex-grow overflow-auto">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
