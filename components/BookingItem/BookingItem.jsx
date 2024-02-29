// components/BookingItem.js
import React from "react";

import {
    IoIosCalendar,
    IoIosTime,
    IoIosPin,
    IoIosCall,
    IoIosMail,
} from "react-icons/io";

const BookingItem = ({ booking }) => {
    return (
        <div className="border p-4 mb-4 flex items-center justify-between bg-white rounded-lg shadow-md">
            <div className="flex-1 flex flex-col bg-white rounded-lg p-1">
                <div className="text-1xl flex flex-col md:flex-row items-left md:items:center font-semibold mb-4">
                    Booking by{"   "}
                    <span className="bg-green-200 text-green-800 rounded-full px-4 ">
                        {booking.name}
                    </span>{" "}
                    ,{" "}
                    {booking.tags && (
                        <div className="flex flex-wrap gap-0 md:gap-2">
                            {booking.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`tag ${
                                        tag === "High Priority"
                                            ? "tag-high-priority"
                                            : "tag-normal"
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                        <IoIosCalendar className="w-6 h-6 mr-2" />
                        <p className="text-sm">{booking.date}</p>
                    </div>
                    <div className="flex items-center">
                        <IoIosTime className="w-6 h-6 mr-2" />
                        <p className="text-sm">{booking.time}</p>
                    </div>
                    <div className="flex items-center">
                        <IoIosPin className="w-6 h-6 mr-2" />
                        <p className="text-sm">{booking.address}</p>
                    </div>
                    <div className="flex items-center">
                        <IoIosCall className="w-6 h-6 mr-2" />
                        <p className="text-sm">{booking.phone}</p>
                    </div>
                    <div className="flex items-center">
                        <IoIosMail className="w-6 h-6 mr-2" />
                        <p className="text-sm">{booking.email}</p>
                    </div>
                </div>
                {/* Additional booking details can be added here */}
            </div>
            <div className="flex flex-col items-end">
                {/* Stylish tags from form can be added here */}
            </div>
        </div>
    );
};

export default BookingItem;
