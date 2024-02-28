import { useState } from "react";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { RiChatSmile3Line } from "react-icons/ri";

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div
            className={`h-screen bg-black text-white ${
                isSidebarOpen ? "w-64" : "w-16"
            } transition-all ease-in-out m-2 shadow-lg rounded-lg`}
        >
            <div className="p-4">
                <button className="text-white" onClick={toggleSidebar}>
                    {isSidebarOpen ? "Close" : "Open"}
                </button>
            </div>
            {isSidebarOpen ? (
                <nav className="flex flex-col gap-3 pl-4">
                    <Link href="dashboard">
                        <div className="p-2 hover:bg-gray-700 flex items-center">
                            <IoMdHome />
                            <span className="ml-2">Dashboard</span>
                        </div>
                    </Link>
                    <Link href="bookings">
                        <div className="p-2 hover:bg-gray-700 flex items-center">
                            <SlCalender />

                            <span className="ml-2">Bookings</span>
                        </div>
                    </Link>{" "}
                    <Link href="queries">
                        <div className="p-2 hover:bg-gray-700 flex items-center">
                            <RiChatSmile3Line />

                            <span className="ml-2">Queries</span>
                        </div>
                    </Link>
                    {/* Add more links as needed */}
                </nav>
            ) : (
                <nav className="flex flex-col pl-4 gap-3">
                    <Link href="dashboard">
                        <div className="p-2 hover:bg-gray-700 flex items-center">
                            <IoMdHome />
                        </div>
                    </Link>
                    <Link href="bookings">
                        <div className="p-2 hover:bg-gray-700 flex items-center">
                            <SlCalender />
                        </div>
                    </Link>
                    <Link href="queries">
                        <div className="p-2 hover:bg-gray-700 flex items-center">
                            <RiChatSmile3Line />
                        </div>
                    </Link>
                    {/* Add more links as needed */}
                </nav>
            )}
        </div>
    );
};

export default Sidebar;
