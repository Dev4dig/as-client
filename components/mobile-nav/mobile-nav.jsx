// import React from "react";

// const MobileNav = () => {
//     return (
//         <div className="  lg:hidden bg-black mob-nav w-full  flex h-[5.625rem] justify-between px-[2.563rem]">
//             <div className="log flex items-center">
//                 <img src="/images/logo2.png" className=" w-[114px] h-[56px]" />
//             </div>
//             <div className=" menu flex items-center">
//                 <img src="/images/menu.svg" alt="" />
//             </div>
//         </div>
//     );
// };

// export default MobileNav;

"use client";

import React, { useState } from "react";

const MobileNav = () => {
    // State to manage the visibility of links
    const [showLinks, setShowLinks] = useState(false);

    // Function to toggle the visibility of links
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <div className="lg:hidden bg-black mob-nav w-full  flex flex-col h-[5.625rem] justify-between items-center ">
            <div className=" flex justify-between items-center mt-2 bg-black-400 h-[50px] w-full px-[1.563rem] py-[2rem]">
                <div className="log flex items-center">
                    <img
                        src="/images/logo2.png"
                        className=" w-[114px] h-[56px]"
                    />
                </div>

                <div
                    className=" menu flex text-white items-center"
                    onClick={toggleLinks}
                >
                    {showLinks ? (
                        "Close"
                    ) : (
                        <img src="/images/menu.svg" alt="" />
                    )}
                </div>
            </div>

            {/* Conditionally render links based on the visibility state */}
            {showLinks && (
                <div className="links w-full bg-black z-10  p-[2rem]">
                    <ul className="menu-list z-20 ">
                        <li className="link active">
                            <a href="/">Home</a>
                        </li>
                        <li className="link">
                            <a href="/booking">Book</a>
                        </li>
                        <li className="link">
                            <a href="">Contact</a>
                        </li>
                        <li className="link">
                            <a href="">About</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
