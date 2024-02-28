import AdminLayout from "@/components/admin-layout/admin-layout";
import QueryCard from "@/components/query-card/query-card";
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

const Queries = () => {
    return (
        <AdminLayout>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
                {sampleQueries.map(query => (
                    <QueryCard key={query.id} query={query} />
                ))}
            </div>
        </AdminLayout>
    );
};

export default Queries;
