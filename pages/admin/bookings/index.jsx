import BookingItem from "@/components/BookingItem/BookingItem";
import AdminLayout from "@/components/admin-layout/admin-layout";
import React from "react";

const sampleBookings = [
    {
        id: 1,
        date: "2022-03-01",
        time: "10:00 AM",
        address: "123 Main St",
        name: "John Doe",
        phone: "123-456-7890",
        email: "john@example.com",
        tags: ["Engagement", "High Priority"],
    },
    {
        id: 2,
        date: "2022-03-05",
        time: "2:30 PM",
        address: "456 Oak St",
        name: "Jane Smith",
        phone: "987-654-3210",
        email: "jane@example.com",
        tags: ["Wedding", "Normal Priority"],
    },
];

const Bookings = () => {
    return (
        <AdminLayout>
            <div className="bordew-full">
                <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
                {/* Render list of bookings using BookingItem component */}
                {sampleBookings.map(booking => (
                    <BookingItem key={booking.id} booking={booking} />
                ))}
            </div>
        </AdminLayout>
    );
};

export default Bookings;
