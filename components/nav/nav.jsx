import React from "react";

const Nav = ({ page }) => {
    
    // Determine if the current page is the home page
    const isHomePage = page === "home";

    return (
        <div className={`nav w-full ${isHomePage ? "bg-transparent " : "bg-black px-[5.563rem]"} hidden lg:flex h-[7.625rem] justify-between `}>
            <div className="log flex items-center">
                <a href="/">
                    <img src="/images/logo2.png" className="w-[164px] h-[86px]" alt="Logo" />
                </a>
            </div>
            <div className="hidden menu md:flex items-center">
                <ul className="menu-list flex items-start gap-[6.25rem] list-none">
                    <li className={`nav-link ${page === "home" ? "active" : ""}`}>
                        <a href="/">Home</a>
                    </li>
                    <li className={`nav-link ${page === "booking" ? "active" : ""}`}>
                        <a href="/booking">Book</a>
                    </li>
                    <li className={`nav-link ${page === "contact" ? "active" : ""}`}>
                        <a href="/contact">Contact</a>
                    </li>
                    <li className={`nav-link ${page === "about" ? "active" : ""}`}>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
