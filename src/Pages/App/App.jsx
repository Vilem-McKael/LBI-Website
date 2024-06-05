import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Entities from '../Entities/Entities'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-full w-full'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/entities' element={<Entities />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App
