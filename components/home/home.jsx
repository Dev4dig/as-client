import React from "react";
import MobileNav from "../mobile-nav/mobile-nav";
// import "./home.scss";
const HomeContent = () => {
    return (
        <>
            {/* <!-- hero --> */}
            <MobileNav />
            <div class="hero bg-[url('/images/hero.png')] w-full h-[650px] lg:h-[1250px] bg-cover lg:bg-cover bg-no-repeat bg-left flex flex-col items-center box-border px-[1.563rem] py-0">
                <div class="containe px-[1rem] md:px-[6rem]">
                    <div class="nav hidden lg:flex ">
                        <div class="logo">
                            <img src="/images/logo2.png" alt="" />
                        </div>
                        <div class="menu">
                            <ul class="menu-list hidden md:flex">
                                <li class="link active">
                                    <a href="">Home</a>
                                </li>
                                <li class="link">
                                    <a href="">Book</a>
                                </li>
                                <li class="link">
                                    <a href="">Contact</a>
                                </li>
                                <li class="link">
                                    <a href="">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="content grow flex w-full flex-col justify-center items-end">
                        <div class="text flex flex-col items-end gap-[15px]">
                            <div class="social flex gap-3 ">
                                <span class="icon">
                                    <img src="/images/fb.svg" alt="" />
                                </span>
                                <span class="icon">
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
                        <div class="view-more pt-[6.938rem] ">
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
            <div className="beauty  h-[20.5rem] lg:h-[77.5rem]">
                <div class="container">
                    <div class="content-col">
                        <div className="side-border mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem]">
                            <div class="top-bar"></div>
                            <h2 className="text-2xl lg:text-7xl">BEAUTY</h2>
                            <p className="text-1xl lg:text-2xl  w-[50%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- potrait --> */}
            <div class="potrait h-[20.5rem] lg:h-[77.5rem]">
                <div class="container">
                    <div class="content-col">
                        <div class="side-border mt-[2.25rem] lg:mt-[16.25rem]  pl-[1.063rem] lg:pl-[2.063rem]">
                            <div class="top-bar"></div>
                            <h2 className="text-2xl lg:text-7xl">PORTRAIT</h2>
                            <p className="  text-1xl lg:text-2xl w-[50%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- fashion --> */}
            <div class="fashion h-[20.5rem] lg:h-[77.5rem]">
                <div class="container">
                    <div class="content-col">
                        <div class="side-border  mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem]">
                            <div class="top-bar"></div>
                            <h2 className="text-2xl lg:text-7xl">FASHION</h2>
                            <p className="  text-1xl lg:text-2xl w-[50%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- meeting --> */}
            <div class="meeting h-[20.5rem] lg:h-[77.5rem]">
                <div class="container">
                    <div class="content-col">
                        <div className="side-border mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem]">
                            <div class="top-bar"></div>
                            <h2 className="text-2xl lg:text-7xl">MEETING</h2>
                            <p className="text-1xl lg:text-2xl w-[50%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {/* <!-- people --> */}
            <div class="people h-[20.5rem] lg:h-[77.5rem]">
                <div class="container">
                    <div class="content-col">
                        <div class="side-border  mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem]">
                            <div class="top-bar"></div>
                            <h2 className="text-2xl lg:text-7xl">PEOPLE</h2>
                            <p className="  text-1xl lg:text-2xl w-[50%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- product --> */}
            <div class="product h-[20.5rem] lg:h-[77.5rem]">
                <div class="container">
                    <div class="content-col">
                        <div class="side-border mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem]">
                            <div class="top-bar"></div>
                            <h2 className="text-2xl lg:text-7xl">PRODUCT</h2>
                            <p className="  text-1xl lg:text-2xl w-[50%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- couple --> */}
            <div class="couple h-[20.5rem] lg:h-[77.5rem]">
                <div class="container">
                    <div class="content-col">
                        <div class="side-border mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem]">
                            <div class="top-bar"></div>
                            <h2 className="text-2xl lg:text-7xl">COUPLE</h2>
                            <p className="  text-1xl lg:text-2xl w-[50%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- nature --> */}
            <div class="nature h-[20.5rem] lg:h-[77.5rem]">
                <div class="container">
                    <div class="content-col">
                        <div class="side-border  mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem]">
                            <div class="top-bar"></div>
                            <h2 className="text-2xl lg:text-7xl">NATURE</h2>
                            <p className="  text-1xl lg:text-2xl w-[50%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- birthdays --> */}
            <div class="birthdays h-[20.5rem] lg:h-[77.5rem]">
                <div class="container">
                    <div class="content-col">
                        <div class="side-border mt-[2.25rem] lg:mt-[16.25rem] pl-[1.063rem] lg:pl-[2.063rem]">
                            <div class="top-bar"></div>
                            <h2 className="text-2xl lg:text-7xl">BIRTHDAYS</h2>
                            <p className="  text-1xl lg:text-2xl w-[50%] lg:w-[100%]">
                                m officiis quam neque. Fuga reprehenderit
                                reiciendis repellendus? m officiis quam neque.
                                Fuga reprehenderit reiciendis repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="content">
                    <div class="back-to-top">
                        <img src="/images/to-up.svg" alt="" />
                        <a href="">Back to top</a>
                    </div>
                    <div class="footer-content flex flex-col md:flex-row">
                        <div class="first footer-col">
                            <h2>25</h2>
                            <p>Years experience of freelance photography</p>
                        </div>
                        <div class="second footer-col">
                            <h2>49</h2>
                            <p>Projects worked on and counting</p>
                        </div>
                        <div class="third footer-col">
                            <h2>36</h2>
                            <p>
                                Stable client currently trust us and are booked
                            </p>
                        </div>
                    </div>
                    <button>Book Now</button>
                </div>
            </div>
        </>
    );
};

export default HomeContent;
