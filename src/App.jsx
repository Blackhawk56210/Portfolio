import { useState } from 'react'
import './App.css'
import Header from './pages/Header'
import Bio from './pages/Bio'
import SkillList from './pages/SkillList'
import Education from './pages/Education'


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
