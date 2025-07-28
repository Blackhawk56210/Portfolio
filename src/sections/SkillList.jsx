import React from "react";
import skills from '../assets/data/skills.js'


function SkillList() {
  return ( 
    <>
    {skills.map((skills, index) => {
      return (
      <div key={index}>
        <ul>
          <li>{skills}</li>
        </ul>
      </div>
      )
    })}
    </>
  )
}

export default SkillList;
