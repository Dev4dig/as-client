import React from "react";

const MobileNav = () => {
    return (
        <div className="  lg:hidden bg-black mob-nav w-full  flex h-[5.625rem] justify-between px-[2.563rem]">
            <div className="log flex items-center">
                <img src="/images/logo2.png" className=" w-[114px] h-[56px]" />
            </div>
            <div className=" menu flex items-center">
                <img src="/images/menu.svg" alt="" />
            </div>
        </div>
    );
};

export default MobileNav;
