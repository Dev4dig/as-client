import React from "react";

const Tag = ({ tag, selected, onClick }) => {
    const tagClasses = selected ? "bg-[#CCAF40] text-white" : "text-[#CCAF40]";

    return (
        <span
            className={`rounded-md tag border border-[#CCAF40] px-5 py-1 ${tagClasses}`}
            onClick={onClick}
        >
            {tag}
        </span>
    );
};

export default Tag;
