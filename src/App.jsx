import { useState } from 'react'
import './App.css'
import Header from './sections/Header'
import Bio from './sections/Bio'
import SkillList from './sections/SkillList'
import Education from './sections/Education'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Bio />
      <SkillList />
      <Education />
    </>
  )
}

export default App
