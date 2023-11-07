import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsBand from './Components/NewsBand'

const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory ={setCategory} />
      <NewsBand category={category}/>
    </div>
  )
}

export default App
