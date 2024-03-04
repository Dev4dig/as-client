// Dashboard.js
import { useEffect, useState } from "react";
import BookingItem from "@/components/BookingItem/BookingItem";
import AdminLayout from "@/components/admin-layout/admin-layout";
import QueryCard from "@/components/query-card/query-card";
import withAuth from "@/utils/withAuth";

const Dashboard = ({ isAuthenticated, bookings, queries }) => {
    // Check if authenticated, redirect if not
    useEffect(() => {
        if (!isAuthenticated) {
            // Redirect to the login page if not authenticated
            window.location.href = "login";
        }
    }, [isAuthenticated]);

    return (
        <AdminLayout>
            <div className="dashboard-area box-border p-5 flex flex-col gap-4 lg:flex-row w-full">
                <div className="bokings box-border p-2 flex-1 flex flex-col gap-3 rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
                    {/* Render list of bookings using BookingItem component */}
                    {bookings?.map(booking => (
                        <BookingItem key={booking.id} booking={booking} />
                    ))}
                </div>
                <div className="queries box-border p-2 flex-1 flex flex-col gap-3 rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
                    {queries.map(query => (
                        <QueryCard key={query.id} query={query} />
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export const getServerSideProps = async context => {
    // Access the isAuthenticated flag from the context
    const isAuthenticated = !!context.req.headers.cookie
        ?.split("; ")
        .find(row => row.startsWith("token="))
        ?.split("=")[1];

    // Fetch bookings and queries from your server API with the Bearer token
    const apiUrl = process.env.NEXT_PUBLIC_API_HOST;
    const token = context.req.headers.cookie
        ?.split("; ")
        .find(row => row.startsWith("token="))
        ?.split("=")[1];

    console.log("isAuthenticated");
    console.log(isAuthenticated);
    console.log("token");
    console.log(token);

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
        const bookingsResponse = await fetch(apiUrl + "/bookings", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // if (!bookingsResponse.ok) {
        //     // Redirect to the login page if the response status is not okay
        //     return {
        //         redirect: {
        //             destination: "login",
        //             permanent: false,
        //         },
        //     };
        // }

        const bookings = await bookingsResponse.json();

        // Fetch queries from your server API with the Bearer token
        const queriesResponse = await fetch(apiUrl + "/contact", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // if (!queriesResponse.ok) {
        //     // Redirect to the login page if the response status is not okay
        //     return {
        //         redirect: {
        //             destination: "login",
        //             permanent: false,
        //         },
        //     };
        // }

        const queries = await queriesResponse.json();

        return {
            props: {
                isAuthenticated,
                bookings,
                queries,
            },
        };
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error fetching data:", error);

        // // Redirect to the login page on error
        // return {
        //     redirect: {
        //         destination: "login",
        //         permanent: false,
        //     },
        // };

        return {
            props: {
                isAuthenticated,
                booking: [],
                queries: [],
            },
        };
    }
};

export default withAuth(Dashboard);
