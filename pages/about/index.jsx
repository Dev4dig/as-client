import MobileNav from "@/components/mobile-nav/mobile-nav";
import Nav from "@/components/nav/nav";
import React from "react";

const About = () => {
    return (
        <div className="page-about  min-h-[100vh] bg-black h-fit w-full">
            <Nav page={"about"} />
            <MobileNav page={"about"} />
            <div className="content flex min-content h-full w-full  ">
                <div className="left hidden lg:flex  flex-col items-center gap-3 justify-center min-h-[500px] p-2 pt-[80px] w-2/5">
                    <img
                        className="h-[800px] w-[280]"
                        src={"/images/cali.png"}
                    />
                    <div className="flex w-[280px]  gap-4 ">
                        <div className="social w-[280px] justify-between flex gap-3 ">
                            <span className="icon">
                                <img src="/images/behance.svg" alt="" />
                            </span>
                            <span className="icon">
                                <img src="/images/fb.svg" alt="" />
                            </span>
                            <span className="icon">
                                <img src="/images/insta.svg" alt="" />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="right p-5  w-full lg:w-3/5  flex flex-col items-end gap-10 lg:pt-[80px] lg:px-[5.563rem] ">
                    <div className=" w-full lg:w-[570px] lg:flex flex-col gap-7">
                        <h2 className="text-white text-[4rem] font-normal font-sans]">
                            About
                        </h2>

                        <p className="text-white font-normal text-[1.25rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Non nunc eleifend id pulvinar. Id pretium
                            feugiat dignissim quisque. Duis purus tellus duis
                            nunc rhoncus, ultrices id in ipsum. Eget sit tempor
                            habitant id turpis imperdiet ut.
                        </p>

                        <p className="mt-5 text-white font-normal text-[1.25rem]">
                            If you are looking to make enquiries, kindly{" "}
                            <a className="text-[#CC0909]" href="/contact">
                                contact
                            </a>{" "}
                            us or make your booking{" "}
                            <a href="/contact" className="text-[#CC0909]">
                                here
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
