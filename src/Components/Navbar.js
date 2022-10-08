import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'


export default function Navbar() {
  return (
    <div>
        <nav class="flex items-center justify-around flex-wrap bg-teal-500 p-2">
            <div className='text-2xl'>
                <h1 className='text-white-100 font-extrabold'>Wallpaper<span className='font-light'>Mania</span></h1>
            </div>
            <div className='text-sm'>
                <ul class="flex">
                    <li class="mr-6" key={'home'}>
                        <a class="text-[#05F591] hover:text-blue-800" href="#"><span>Home</span></a>
                    </li>
                    <li class="mr-6">
                        <a class="text-white-200 hover:text-blue-800" href="#">PC Wallpapers</a>
                    </li>
                    <li class="mr-6">
                        <a class="text-white-200 hover:text-blue-800" href="#">Phone Wallpapers</a>
                    </li>
                    <li class="mr-6">
                        <a class="text-white-200 hover:text-blue-800" href="#">4k Wallpapers</a>
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
