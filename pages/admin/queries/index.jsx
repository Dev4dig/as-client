import AdminLayout from "@/components/admin-layout/admin-layout";
import QueryCard from "@/components/query-card/query-card";
import React, { useEffect, useState } from "react";

const Queries = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // Fetch data from your API endpoint
        const apiUrl = process.env.NEXT_PUBLIC_API_HOST;
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl + "/contact");
                if (response.ok) {
                    const data = await response.json();
                    setContacts(data);
                } else {
                    console.error("Failed to fetch contacts.");
                }
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        };

        fetchData();
    }, []);

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

export default Queries;
