import LeftCol from "@/components/left-col/left-col";
import Nav from "../../components/nav/nav";
import React from "react";
import ContactForm from "@/components/contact-form/contact-form";
import MobileNav from "@/components/mobile-nav/mobile-nav";

const Contact = () => {
    return (
        <>
            <div className="page-contact  bg-black min-h-[100vh] w-full">
                <Nav page={"contact"}/>
                <MobileNav page={"contact"}  />
                <div className="content flex h-full w-full  ">
                    <div className="left hidden lg:flex items-start justify-center h-[500px] p-2 pt-[80px] w-2/5">
                        <img className="h-[900px]" src={"/images/cali.png"} />
                    </div>
                    <div className="right p-5  w-full lg:w-3/5  flex flex-col items-end gap-10 pt-[80px] lg:px-[5.563rem] ">
                        <div className=" w-full lg:w-[570px] lg:flex flex-col gap-7">
                            <h2 className="text-white text-[4rem] font-sans]">
                                Contact-us
                            </h2>
                            <ContactForm />
                            <div className="links flex flex-col text-white gap-5 mt-[5rem] w-full lg:w-[570px]">
                                <div className="phone flex justify-end gap-3">
                                    <p>+92-334-4567890</p>
                                    <span>icon</span>
                                </div>
                                <div className="address flex justify-end gap-3">
                                    <p>Lane 3, Gulshan-e-Hadeed, Lahore</p>
                                    <span>icon</span>
                                </div>
                                <div className="mail flex justify-end gap-3">
                                    <p>alistudiophotography@gmail.com</p>
                                    <span>icon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
