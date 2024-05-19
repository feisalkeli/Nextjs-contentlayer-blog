import React from "react";

const Skills = () => {
  const SkillList = [
    "next.js/React",

    "tailwind css/Bootstrap/MaterialUi",
    "figma",
    "JavaScript/Python/Ruby on Rails",
    "web design",
    "BackendDevelopment",

    "firebase",
    "superBase",
    // "generative AI",

    "SEO",
    "framer motion",
  ];

  return (
    <div className="w-full flex flex-col p-20 border-b-2 border-solid border-dark text-dark">
      <span className="font-semibold text-4xl text-accent">
        I'm comfortable in....
      </span>
      <ul className="flex flex-wrap mt-8 justify-start">
        {SkillList.map((item, index) => {
          return (
            <li className="font-semibold inline-block capitalize text-2xl py-5 px-2 border-2 border-solid border-dark rounded mr-6 mb-6 hover:scale:105 transition-all ease duration-200 cursor-pointer">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
