import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // State to track sidebar state
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    const handleSidebarToggle = () => {
        // Toggle sidebar state
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div className="flex h-screen">
            <Sidebar isExpanded={isSidebarExpanded} onToggle={handleSidebarToggle} />
            <div
                className={`flex flex-grow transition-all duration-300 ${isSidebarExpanded ? "ml-44" : "ml-24"
                    }`}
            >
                <main className="px-6 flex-grow overflow-auto">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
