import React from "react";

const LeftCol = () => {
    return (
        <div className="left-col flex flex-col justify-between self-start h-[1000px] ">
            <div className="text flex flex-col items-center w-full]">
                <h2 className="fancy text-white ">{"Ali’s Studio"}</h2>

                <h2 className="plain text-white ">PHOTOGRAPHY</h2>
            </div>
            <div className="social w-full h-[50px] border "></div>
        </div>
    );
};

export default LeftCol;
