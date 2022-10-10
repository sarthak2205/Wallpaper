import React from 'react'
import { BsCheck } from 'react-icons/bs';

const plans = [
    {title: "Free", price: "$00", duration:"3 month trial", button:"Start free trial"},
    {title: "Basic", price: "$29", duration:"3 month trial", button:"Get Started"},
    {title: "Premium", price: "$99", duration:"3 month trial" , button:"Get Started"},
];
const points = [
    {one: "B2B marketing", two:"Cloud-Based solution", three:"Marketing strategies", four:"Automated follow up"}
];

export default function PricingPlans() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0 md:space-x-8'>
        {plans.map((item, index) => {
           return ( 
            <div key={index} className="p-10 bg-[#a9a9a9] text-white-100 flex flex-col md:justify-start rounded-xl text-center md:text-left"> 
                    <div className='pb-3 text-base'>
                        {item.title}
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='text-extrabold text-6xl'>
                            {item.price}
                        </div>
                        <div className='text-black md:text-xl ml-1 mt-3'>{item?.duration}</div>
                    </div>
                    <div>
                        {points.map((point) =>{
                            return (
                                <ul className='mt-5'>
                                    <li className='flex py-2'><div className='text-2xl'><BsCheck/></div>{point.one}</li>
                                    <li className='flex py-2'><div className='text-2xl'><BsCheck/></div>{point.two}</li>
                                    <li className='flex py-2'><div className='text-2xl'><BsCheck/></div>{point.three}</li>
                                    <li className='flex py-2'><div className='text-2xl'><BsCheck/></div>{point.four}</li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className=' mt-5 '>
                        <button className='bg-yellow-400 rounded-xl py-2 w-2/3 md:w-1/2'>{item?.button}</button>
                    </div>
            </div>
            )
        })}
    </div>
  )
}
