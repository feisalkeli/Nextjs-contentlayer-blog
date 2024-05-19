import React from "react";

const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full bg-accent text-lighr overflow-hidden whitespace-nowrap">
      <div className="w-full animate-roll py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-base">
        {insights.map((text, index) => (
          <div key={index}>
            {text}
            <span className="px-4"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
