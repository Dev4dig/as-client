import MobileNav from "@/components/mobile-nav/mobile-nav";
import Nav from "@/components/nav/nav";
import React from "react";

const Booking = () => {
    const tags = [
        {
            tag: "Engagement",
            selected: true,
        },
        {
            tag: "Business Event",
            selected: false,
        },
        {
            tag: "Birthday",
            selected: false,
        },
        {
            tag: "Wedding",
            selected: true,
        },
        {
            tag: "Maternity",
            selected: false,
        },
        {
            tag: "Graduation",
            selected: false,
        },
        {
            tag: "Product",
            selected: false,
        },
        {
            tag: "Honeymoon",
            selected: false,
        },
        {
            tag: "Fashion",
            selected: true,
        },
        {
            tag: "Aniversary",
            selected: false,
        },
        {
            tag: "Food",
            selected: false,
        },
        {
            tag: "Conference",
            selected: false,
        },
        {
            tag: "Team And Workspace",
            selected: true,
        },
        {
            tag: "Conference",
            selected: false,
        },
        {
            tag: "Personal Potrait",
            selected: true,
        },
        {
            tag: "Family",
            selected: false,
        },
        {
            tag: "Travel Shoot",
            selected: false,
        },
        {
            tag: "Baby",
            selected: false,
        },
        {
            tag: "Others",
            selected: true,
        },
    ];
    return (
        <div>
            <MobileNav />
            <Nav />
            <div className="heading flex flex-col items-center mt-10">
                <h2 className="text-center text-4xl font-semibold">
                    Welcome to the booking page!
                </h2>
                <p className="text-center font-normal text-2xl">
                    Kindly provide necessary informations by attending to the
                    questions below.
                </p>
            </div>

            <div className="tags w-full  flex flex-col mt-10">
                <div className="heading w-full flex flex-col items-center">
                    <h3 className=" text-center text-2xl font-semibold">
                        What you are booking for?
                    </h3>
                    <p className="text-center ">
                        (You can select multiple options)
                    </p>
                    <div className="tags-list flex flex-wrap justify-center px-[1rem] lg:px-[7rem] gap-5 mt-5">
                        {tags.map((tag, index) => {
                            let classes = tag.selected
                                ? "bg-[#CCAF40] text-white"
                                : "text-[#CCAF40]";
                            return (
                                <span
                                    key={index}
                                    className={`rounded-md tag border border-[#CCAF40] px-5 py-1 ${classes}`}
                                >
                                    {tag.tag}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className=" mb-10 form mt-[5rem]  w-full px-[5rem] flex flex-col items-center">
                <form action="" className="flex flex-col gap-[3rem]">
                    <div className="first-row flex flex-col items-center">
                        <h3 className="font-semibold text-2xl">
                            When and where is the photoshoot?
                        </h3>
                        <div className="fields flex flex-col lg:flex-row mt-10 gap-5">
                            <div className="field relative w-[328px] h-[56px] border border-[#CCAF40]">
                                <span className="absolute top-[-13px] left-4 px-3 bg-white">
                                    Date
                                </span>
                                <input
                                    type="text"
                                    className="border-0 text-black h-full w-full"
                                />
                            </div>
                            <div className="field relative w-[328px] h-[56px] border border-[#CCAF40]">
                                <span className="absolute top-[-13px] left-4 px-3 bg-white">
                                    Time
                                </span>
                                <input
                                    type="text"
                                    className="border-0 text-black h-full w-full"
                                />
                            </div>
                            <div className="field relative w-[328px] h-[56px] border border-[#CCAF40]">
                                <span className="absolute top-[-13px] left-4 px-3 bg-white">
                                    Address
                                </span>
                                <input
                                    type="text"
                                    className="border-0 text-black h-full w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="first-row flex flex-col items-center">
                        <h3 className="font-semibold text-2xl">
                            When and where is the photoshoot?
                        </h3>
                        <div className="fields flex-col lg:flex-row flex mt-10 gap-5">
                            <div className="field relative w-[328px] h-[56px] border border-[#CCAF40]">
                                <span className="absolute top-[-13px] left-4 px-3 bg-white">
                                    Name
                                </span>
                                <input
                                    type="text"
                                    className="border-0 text-black h-full w-full"
                                />
                            </div>
                            <div className="field relative w-[328px] h-[56px] border border-[#CCAF40]">
                                <span className="absolute top-[-13px] left-4 px-3 bg-white">
                                    Phone
                                </span>
                                <input
                                    type="text"
                                    className="border-0 text-black h-full w-full"
                                />
                            </div>
                            <div className="field relative w-[328px] h-[56px] border border-[#CCAF40]">
                                <span className="absolute top-[-13px] left-4 px-3 bg-white">
                                    Email
                                </span>
                                <input
                                    type="text"
                                    className="border-0 text-black h-full w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <button className="self-center px-8 py-3 bg-[#CCAF40] rounded-full text-white font-semibold max-w-fit">
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking;
