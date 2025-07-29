import React from "react";
import skills from "../assets/data/skills.js";

function SkillList() {
  return (
    <>
      <h1>Skills</h1>
      <div className="mask-contain mask-[url()]  bg-[url(https://www.creativefabrica.com/wp-content/uploads/2020/09/22/Set-of-punk-graffiti-doodle-Graphics-5605235-1.jpg)] rounded-md h-150 w-300 bg-cover text-black text-xl">
        {skills.map((skills, index) => {
          return (
            <div key={index}>
              <ul>
                <li>{skills}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SkillList;
