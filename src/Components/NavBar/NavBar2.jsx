import React from 'react'
import { CgMenuGridR } from 'react-icons/cg'

export default function NavBar2({isShowingMenu, updateIsShowingMenu}) {
  
    const handleOnClick = () => {
        updateIsShowingMenu(!isShowingMenu)
    }

  return (
    <div className='flex flex-col w-full items-center px-8 mt-8 h-[180px] fixed top-0'>
        <div className='w-full h-full flex-col justify-end max-w-[1400px]'>
            <div className='text-8xl font-bold'>
                LehBod Inc.
            </div>
            <div className='font-manrope flex flex-row justify-between items-center w-full mt-2 bg-black h-[40px]'>
                <div className='text-xl w-full text-white pl-2'>
                    The Lehmann Boddicker Group
                </div>
                <button className='flex items-center text-2xl text-white font-medium' onClick={handleOnClick}>
                    <div className='flex items-center gap-2 pr-2'>
                        <div>Menu</div>
                        <CgMenuGridR />
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}
