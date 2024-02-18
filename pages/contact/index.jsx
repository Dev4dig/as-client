import LeftCol from "@/components/left-col/left-col";
import Nav from "../../components/nav/nav";
import React from "react";
import ContactForm from "@/components/contact-form/contact-form";

const Contact = () => {
    return (
        <>
            <div className="page-contact  bg-black min-h-[100vh] w-full">
                <Nav />
                <div className="content  flex h-full w-full  ">
                    <div className="left flex items-start h-[500px] p-2 border border-red-700 w-2/5">
                        LEFT
                    </div>
                    <div className="right w-3/5  flex flex-col items-end gap-10 pt-[100px] border px-[5.563rem] ">
                        <h2 className="text-white text-4xl font-sans w-[570px]">
                            Contact-us
                        </h2>
                        <ContactForm />
                        <div className="links flex flex-col text-white gap-5 mt-[5rem] max-w-md">
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
        </>
    );
};

export default Contact;
