import BookingItem from "@/components/BookingItem/BookingItem";
import AdminLayout from "@/components/admin-layout/admin-layout";
import QueryCard from "@/components/query-card/query-card";
import Sidebar from "@/components/sidebar/sidebar";
import withAuth from "@/utils/withAuth";
import React from "react";

const sampleQueries = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        message: "This is a sample message from John Doe.",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        message: "Another sample message from Jane Smith.",
    },
];

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
const Dashboard = () => {
    return (
        <AdminLayout>
            <div className="dashboard-area  box-border p-5 flex flex-col gap-4 lg:flex-row w-full">
                <div className="bokings box-border p-2 flex-1 flex flex-col gap-3 rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
                    {/* Render list of bookings using BookingItem component */}
                    {sampleBookings.map(booking => (
                        <BookingItem key={booking.id} booking={booking} />
                    ))}
                </div>
                <div className="queries box-border p-2 flex-1   flex flex-col gap-3 rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
                    {sampleQueries.map(query => (
                        <QueryCard key={query.id} query={query} />
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default withAuth(Dashboard);
