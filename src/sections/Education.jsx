import React from 'react'
import education from '../assets/data/education'


function Education() {
  return (
    <>
    {education.map((education, index) => {
      return (
        <div key={index}>
          <p>{education}</p>
        </div>
      )
    })}
    </>
  )
}

export default Education