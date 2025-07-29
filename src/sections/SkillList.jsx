import React, { useRef} from "react";
import skills from "../assets/data/skills.js";

function SkillList() {
    const skillsRef = useRef(null);
  
    const animateCSS = (element, animation, prefix = "animate__") => {
      return new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        element.classList.add(`${prefix}animated`, animationName);
  
        function handleAnimationEnd(event) {
          event.stopPropagation();
          element.classList.remove(`${prefix}animated`, animationName);
          resolve("Animation ended");
        }
  
        element.addEventListener("animationend", handleAnimationEnd, {
          once: true,
        });
      });
    };
  
    const handleClick = () => {
      if (skills.current) {
        animateCSS(skills.current, "animate__slideOutLeft");
      }
    };
  return (
    <>
    <div>
      <h1 ref={skillsRef} onClick={handleClick}>Skills</h1>
      <div className="flex sp flex-wrap bg-linear-to-bl/hsl from-yellow-400 from-20% to-pink-500 via-80% rounded-md h-150 w-300 bg-cover text- font-semibold text-xl
      hover:bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%">
        {skills.map((skills, index) => {
          return (
            <div key={index}>
              <ul>
                <li className="p-5">{skills}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
      
    </>
  );
}

export default SkillList;
