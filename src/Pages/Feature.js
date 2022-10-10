import React from 'react'
import Keyfeatures from '../Components/Features/Keyfeatures'
import PricingPlans from '../Components/Features/PricingPlans'

export default function Feature() {
  return (
    <div className='min-w-screen min-h-screen py-12'>
        <div className='flex flex-col justify-center items-center px-4 py-12'>
            <div className='md:text-center md:w-1/3 pb-20'>
                <h1 className='text-white-100 text-6xl text-bold pb-7 tracking-tighter'>Key features</h1>
                <span className='text-white-300'>NetTracking has quickly become the go-to content marketing solution for over 600 clients around the world</span>
            </div>
            <div className='w-full rounded-xl bg-black text-white-100 py-12'>
                <div className='p-10'>
                    <Keyfeatures />
                </div>
            </div>
            <div className='text-center w-5/6 mt-40 pb-12'>
                <h1 className='text-white-100 text-6xl text-bold pb-7 tracking-tighter'>Our Pricing Plan</h1>
                <span className='text-[#999999]'>Onlien sales tracker thattracks the success of your online sales efforts.</span>
                <div className='mt-20'>
                    <PricingPlans />
                </div>
            </div>
        </div>
    </div>
  )
}
