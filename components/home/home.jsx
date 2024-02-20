import React from "react";
import MobileNav from "../mobile-nav/mobile-nav";
import Nav from "../nav/nav";
// import "./home.scss";
const HomeContent = () => {
    return (
        <>
            {/* <!-- hero --> */}
            <MobileNav page={"home"} />
            <div className="hero bg-[url('/images/hero.webp')] w-full h-[650px] lg:h-[1250px] bg-cover lg:bg-cover bg-no-repeat bg-top lg:bg-left flex flex-col items-center box-border px-[1.563rem] py-0">
                <div className="containe px-[1rem] md:px-[6rem]">
                <Nav page={"home"}/>
                    <div className="content grow flex w-full flex-col justify-center items-end">
                        <div className="text flex flex-col items-end gap-[15px]">
                            <div className="social flex gap-3 ">
                                <span className="icon">
                                    <img src="/images/fb.svg" alt="" />
                                </span>
                                <span className="icon">
                                    <img src="/images/insta.svg" alt="" />
                                </span>
                            </div>
                            <p className="text-white text-right text-[1.5rem] lg:text-[2.5rem] not-italic font-semibold leading-[normal];">
                                We take photos as
                                <br />
                                a return ticket to a <br />
                                moment otherwise gone
                            </p>
                            <button className="px-[1rem] py-[0.5rem] text-lg lg:text-3xl">
                                Book Now
                            </button>
                        </div>
                        <div className="view-more pt-[6.938rem] ">
                            <a href="" className="text-lg ">
                                View More
                            </a>
                            <img src="/images/to-down.svg" alt="" />
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- beauty --> */}
            <div className="beauty  h-[20.5rem] lg:h-[77.5rem] p-[1rem] lg:p-[2.563rem]">
                <div className="container ">
                    <div className="content-col w-full lg:w-[500px]">
                        <div className="side-border border-l-[3px] border-l-[#CC0909] mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem] sidebar-left-aligned">
                            <div className="top-bar w-[80px] md:w-[198px]"></div>
                            <h2 className="text-2xl lg:text-7xl">BEAUTY</h2>
                            <p className="text-1xl lg:text-2xl  w-[70%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- potrait --> */}
            <div className="potrait h-[20.5rem] lg:h-[77.5rem] p-[1rem] lg:p-[2.563rem]">
                <div className="container flex items-end">
                    <div className="content-col w-full lg:w-[500px]">
                        <div className="side-border mt-[2.25rem] lg:mt-[16.25rem]  pl-[1.063rem] lg:pl-[2.063rem] sidebar-right-aligned">
                            <div className="top-bar w-[80px] md:w-[198px]"></div>
                            <h2 className="text-2xl lg:text-7xl">PORTRAIT</h2>
                            <p className=" right-text text-1xl lg:text-2xl w-[70%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- fashion --> */}
            <div className="fashion h-[20.5rem] lg:h-[77.5rem] p-[1rem] lg:p-[2.563rem]">
                <div className="container">
                    <div className="content-col w-full lg:w-[500px]">
                        <div className="side-border  mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem] sidebar-left-aligned">
                            <div className="top-bar w-[80px] md:w-[198px]"></div>
                            <h2 className="text-2xl lg:text-7xl">FASHION</h2>
                            <p className="  text-1xl lg:text-2xl w-[70%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- meeting --> */}
            <div className="meeting h-[20.5rem] lg:h-[77.5rem] p-[1rem] lg:p-[2.563rem]">
                <div className="container  flex items-end">
                    <div className="content-col w-full lg:w-[500px]">
                        <div className="side-border  mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem] sidebar-right-aligned">
                            <div className="top-bar w-[80px] md:w-[198px] "></div>
                            <h2 className="text-2xl lg:text-7xl">MEETING</h2>
                            <p className=" right-text text-1xl lg:text-2xl w-[80%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {/* <!-- people --> */}
            <div className="people h-[20.5rem] lg:h-[77.5rem] p-[1rem] lg:p-[2.563rem]">
                <div className="container">
                    <div className="content-col w-full lg:w-[500px]">
                        <div className="side-border  mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem] sidebar-left-aligned">
                            <div className="top-bar w-[80px] md:w-[198px]"></div>
                            <h2 className="text-2xl lg:text-7xl">PEOPLE</h2>
                            <p className="  text-1xl lg:text-2xl w-[70%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- product --> */}
            <div className="product h-[20.5rem] lg:h-[77.5rem] p-[1rem] lg:p-[2.563rem]">
                <div className="container  flex items-end">
                    <div className="content-col w-full lg:w-[500px]">
                        <div className="side-border mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem] sidebar-right-aligned">
                            <div className="top-bar w-[80px] md:w-[198px]"></div>
                            <h2 className="text-2xl lg:text-7xl">PRODUCT</h2>
                            <p className=" right-text text-1xl lg:text-2xl w-[70%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- couple --> */}
            <div className="couple h-[20.5rem] lg:h-[77.5rem] p-[1rem] lg:p-[2.563rem]">
                <div className="container">
                    <div className="content-col w-full lg:w-[500px]">
                        <div className="side-border mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem] sidebar-left-aligned">
                            <div className="top-bar w-[80px] md:w-[198px]"></div>
                            <h2 className="text-2xl lg:text-7xl">COUPLE</h2>
                            <p className="  text-1xl lg:text-2xl w-[70%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- nature --> */}
            <div className="nature h-[20.5rem] lg:h-[77.5rem] p-[1rem] lg:p-[2.563rem]">
                <div className="container  flex items-end">
                    <div className="content-col w-full lg:w-[500px]">
                        <div className="side-border  mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem] sidebar-right-aligned">
                            <div className="top-bar w-[80px] md:w-[198px]"></div>
                            <h2 className="text-2xl lg:text-7xl">NATURE</h2>
                            <p className="right-text  text-1xl lg:text-2xl w-[80%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- birthdays --> */}
            <div className="birthdays h-[20.5rem] lg:h-[77.5rem] p-[1rem] lg:p-[2.563rem]">
                <div className="container">
                    <div className="content-col w-full lg:w-[500px]">
                        <div className="side-border mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem] sidebar-left-aligned">
                            <div className="top-bar w-[80px] md:w-[198px]"></div>
                            <h2 className="text-2xl lg:text-7xl">BIRTHDAYS</h2>
                            <p className=" text-1xl lg:text-2xl w-[70%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer min-h-[532px] w-full box-border bg-[black] pt-[4.188rem] pb-8 px-[2rem] lg:px-[4.313rem] py-0">
                <div className="content  w-full flex flex-col items-center gap-8">
                    <div className="back-to-top flex flex-col items-center justify-center">
                        <img
                            src="/images/to-up.svg"
                            className="flex w-[200px] h-[50px] "
                            alt=""
                        />
                        <a
                            href=""
                            className="text-white text-center text-2xl not-italic font-normal leading-[normal] no-underline"
                        >
                            Back to top
                        </a>
                    </div>
                    <div className="footer-content w-full flex flex-col md:flex-row">
                        <div className="first footer-col items-center md:items-start lg:px-16">
                            <h2 className="text-center lg:text-start">25</h2>
                            <p className="text-lg text-center md:text-start lg:text-2xl">
                                Years experience of freelance photography
                            </p>
                        </div>
                        <div className="second footer-col px-2 items-center flex md:items-start lg:px-16  text-white border-x-2 border-x-[#CC0909] border-solid">
                            <h2 className="text-center lg:text-start">49</h2>
                            <p className="text-lg text-center md:text-start lg:text-2xl">
                                Projects worked on and counting
                            </p>
                        </div>
                        <div className="third footer-col flex  items-center lg:items-start lg:px-16">
                            <h2 className="text-center lg:text-start">36</h2>
                            <p className="text-lg text-center md:text-start md:text-2xl">
                                Stable client currently trust us and are booked
                            </p>
                        </div>
                    </div>
                    <button className="text-lg lg:text-3xl">Book Now</button>
                </div>
            </div>
        </>
    );
};

export default HomeContent;
