// Bookings.js
import { useEffect, useState } from "react";
import BookingItem from "@/components/BookingItem/BookingItem";
import AdminLayout from "@/components/admin-layout/admin-layout";
import { useRouter } from "next/router";

const Bookings = ({ bookings }) => {
    return (
        <AdminLayout>
            <div className="border-full">
                <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
                {/* Render list of bookings using BookingItem component */}
                {bookings.map(booking => (
                    <BookingItem key={booking.id} booking={booking} />
                ))}
            </div>
        </AdminLayout>
    );
};

export async function getServerSideProps(context) {
    const apiUrl = process.env.NEXT_PUBLIC_API_HOST;
    // const router = useRouter();

    // Access the Bearer token from localStorage on the client-side
    const token = context.req.headers.cookie
        ?.split("; ")
        .find(row => row.startsWith("token="))
        ?.split("=")[1];

    try {
        if (!token) {
            // Redirect to the login page if the token is missing
            return {
                redirect: {
                    destination: "login",
                    permanent: false,
                },
            };
        }

        // Fetch bookings from your server API with the Bearer token
        const response = await fetch(apiUrl + "/bookings", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            // Redirect to the login page if the response status is not okay
            return {
                redirect: {
                    destination: "login",
                    permanent: false,
                },
            };
        }

        const bookings = await response.json();

        return {
            props: {
                bookings,
            },
        };
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error fetching bookings:", error);

        // Redirect to the login page on error
        return {
            redirect: {
                destination: "ogin",
                permanent: false,
            },
        };
    }
}

export default Bookings;
