import React from "react";

const Nav = () => {
    return (
        <div className="nav w-full  hidden  bg-black lg:flex h-[7.625rem] justify-between px-[5.563rem]">
            <div className="log flex items-center">
                <img src="/images/logo2.png" className=" w-[164px] h-[86px]" />
            </div>
            <div className="hidden menu md:flex items-center">
                <ul className="menu-list flex items-start gap-[6.25rem] list-none">
                    <li className="nav-link fontO active">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-link">
                        <a href="/booking">Book</a>
                    </li>
                    <li className="nav-link">
                        <a href="">Contact</a>
                    </li>
                    <li className="nav-link">
                        <a href="">About</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
