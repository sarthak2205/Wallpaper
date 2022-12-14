import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'


export default function Navbar() {
  return (
    <div>
        <nav className="flex items-center justify-around flex-wrap bg-none p-2">
            <div className='text-2xl'>
                <h1 className='text-white-100 font-extrabold'>Wallpaper<span className='font-light'>Mania</span></h1>
            </div>
            <div className='text-sm'>
                <ul className="flex">
                    <li className="mr-6" key={'home'}>
                        <a className="text-[#05F591] hover:text-blue-800" href="/"><span>Home</span></a>
                    </li>
                    <li className="mr-6">
                        <a className="text-white-200 hover:text-blue-800" href="/features">Features</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-white-200 hover:text-blue-800" href="/phonewallpapers">Phone Wallpapers</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-white-200 hover:text-blue-800" href="/4kwallpapers">4k Wallpapers</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-white-200 hover:text-blue-800" href="/contactus">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className='bg-secondary px-5 py-2 flex rounded-xl '>
                <button className='flex'>
                    <div className='text-2xl'>
                    <AiOutlineCloudUpload/>   
                    </div>
                    <span className='ml-2 font-bold'>
                        Upload
                    </span>
                </button>
            </div>
        </nav>
    </div>
  )
}
