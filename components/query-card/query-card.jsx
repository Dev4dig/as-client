// components/QueryCard.js
import React from "react";
import { FaEnvelope, FaComment } from "react-icons/fa";

const QueryCard = ({ query }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 border">
            <h3 className="text-xl font-semibold mb-2">
                Query from {query.name}
            </h3>
            <div className="flex items-center mb-2">
                <FaEnvelope className="text-gray-500 mr-2" />
                <p className="text-gray-700">{query.email}</p>
            </div>
            <div className="flex items-center">
                <FaComment className="text-gray-500 mr-2" />
                <p className="text-gray-700">{query.message}</p>
            </div>
            {/* Additional query details can be added here */}
        </div>
    );
};

export default QueryCard;
