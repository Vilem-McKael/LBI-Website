import { useCallback, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
import NavBar2 from '../../Components/NavBar/NavBar2'
import SideBar from '../../Components/SideBar/SideBar'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Entities from '../Entities/Entities'
import Credits from '../Credits/Credits'

function App() {
  const [isShowingMenu, setIsShowingMenu] = useState(false)

  const updateIsShowingMenu = useCallback((bool) => {
    setIsShowingMenu(bool)
  }, [isShowingMenu])

  return (
    <main className='h-full w-full'>
      <NavBar2 isShowingMenu={isShowingMenu} updateIsShowingMenu={updateIsShowingMenu} />
      <div className='w-full h-full pt-[180px]'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/entities' element={<Entities />} />
          <Route path='/credits' element={<Credits />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <SideBar isShowingMenu={isShowingMenu} updateIsShowingMenu={updateIsShowingMenu} />
    </main>
  )
}

export default App
