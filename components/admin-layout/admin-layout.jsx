import Sidebar from "@/components/sidebar/sidebar";
import withAuth from "@/utils/withAuth";
import React from "react";

const AdminLayout = ({ children }) => {
    return (
        <div className="dashboard">
            <div className="w-full  flex gap-2">
                <Sidebar />
                <div className="content flex-1 flex flex-col items-center h-[100vh] ">
                    <div className="w-full flex justify-center">
                        <div className="topbar w-[40%] h-[60px] border m-2 shadow-lg rounded-full"></div>
                    </div>
                    <div className="w-full px-2">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(AdminLayout);
