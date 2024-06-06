import React from 'react'
import {CgMenuGridR} from 'react-icons/cg';

export default function NavBar({isShowingMenu, updateIsShowingMenu}) {

    const handleOnClick = () => {
        updateIsShowingMenu(!isShowingMenu)
    }

  return (
    <div className='w-full flex justify-center'>
        <div className='font-manrope flex flex-row justify-between items-end h-[180px] max-w-[1400px] w-full pb-2 fixed top-0'>
            <div className='flex flex-col ml-8'>
                <div className='text-8xl font-bold'>
                    LehBod Inc.
                </div>
                <div className='text-xl place-self-start w-full bg-black text-white px-2 py-1 my-1'>
                    The Lehmann Boddicker Group
                </div>
            </div>
            <button className='flex items-start text-2xl mr-8 hover:border-b-[2px] pb-2 border-black h-[32px] font-medium' onClick={handleOnClick}>
                <div className='flex items-center gap-2'>
                    <div>Menu</div>
                    <CgMenuGridR />
                </div>
            </button>
        </div>
    </div>
  )
}
