// Queries.js
import AdminLayout from "@/components/admin-layout/admin-layout";
import QueryCard from "@/components/query-card/query-card";
import React, { useEffect, useState } from "react";

const Queries = ({ contacts }) => {
    return (
        <AdminLayout>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
                {contacts.map(contact => (
                    <QueryCard key={contact.id} query={contact} />
                ))}
            </div>
        </AdminLayout>
    );
};

import { useRouter } from "next/router";

export async function getServerSideProps(context) {
    const apiUrl = process.env.NEXT_PUBLIC_API_HOST;

    // Access the Bearer token from localStorage on the client-side
    const token = context.req.headers.cookie
        ?.split("; ")
        .find(row => row.startsWith("token="))
        ?.split("=")[1];

    // const router = useRouter();

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

        // Fetch contacts from your server API with the Bearer token
        const response = await fetch(apiUrl + "/contact", {
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

        const contacts = await response.json();

        return {
            props: {
                contacts,
            },
        };
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error fetching contacts:", error);

        // Redirect to the login page on error
        return {
            redirect: {
                destination: "login",
                permanent: false,
            },
        };
    }
}

export default Queries;
