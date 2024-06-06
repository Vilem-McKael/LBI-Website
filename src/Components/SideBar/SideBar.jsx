import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function SideBar({isShowingMenu, updateIsShowingMenu}) {
  return (
    <div className={`h-full fixed top-0 w-full flex flex-col items-start p-8 lg:w-[500px] lg:fixed lg:transition-transform lg:transform ${isShowingMenu ? 'translate-x-0' : 'translate-x-full'} lg:top-0 lg:border-l duration-300 lg:right-0 border-black bg-gradient-to-b from-gray-800 to-gray-600 text-white z-10`}>
        <div className='flex w-full items-center justify-evenly p-4 text-xl font-semibold'>
            <div>
                Menu
            </div>
            <button className='flex items-center gap-2 text-red-600' onClick={() => updateIsShowingMenu(false)}>
                <div>
                    Close
                </div>
                <FaArrowRight />
            </button>
        </div>
        <div className='flex flex-col w-full' onClick={() => updateIsShowingMenu(false)}>
            <Link to="/" onClick={() => updateIsShowingMenu(false)}>
                Home
            </Link>
            <Link to="/about" onClick={() => updateIsShowingMenu(false)}>
                About
            </Link>
            <Link to="/entities" onClick={() => updateIsShowingMenu(false)}>
                Entities
            </Link>
            <Link to="/credits" onClick={() => updateIsShowingMenu(false)}>
                Credits
            </Link>
            <Link to="/contact" onClick={() => updateIsShowingMenu(false)}>
                Contact
            </Link>
        </div>
    </div>
  )
}
