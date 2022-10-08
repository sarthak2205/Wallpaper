import React from 'react'
import { BsArrow90DegDown } from 'react-icons/bs'

export default function Leftcomponent() {
  return (
    <div>
        <div className='flex flex-col text-left max-w-lg'>
            <div className='text-3xl md:text-5xl font-extrabold text-white-100'>
                <h1>Best 4k <span className='bg-gradient-to-r from-[#05F591] to-[#05F5D9] text-gradient'>Wallpapers!</span></h1>
            </div>
            <div className='text-2xl md:text-4xl font-extralight text-white-100 tracking-tighter'>
                <h1>
                    for the People, by the People.
                </h1>
            </div>
            <div className='text-white-100 md:text-lg tracking-wide mt-6'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis posuere mi tellus et dictum nam.</span>
            </div>
            <div className='flex flex-row mt-12 justify-between md:justify-evenly items-center'>
                <div className='flex flex-row justify-between md:justify-center items-center text-sm md:text-lg text-tertiary font-bold bg-gradient-to-r from-[#05F591] to-[#05F5D9] px-2 md:px-4 py-2 rounded-xl '>
                    <div className='text-sm md:text-lg'>
                        <BsArrow90DegDown/>
                    </div>
                    <button className='pl-2'>
                        Explore Wallpapers
                    </button>
                </div>
                <div className='text-white-100 underline'>
                    <a className='cursor-pointer'>
                        <span>Know more</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
