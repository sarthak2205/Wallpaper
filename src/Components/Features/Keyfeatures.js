
import React from 'react'
import { BsFillBookFill, BsFillPieChartFill, BsFillBarChartLineFill, BsFillPlayFill } from 'react-icons/bs';
import { RiComputerFill } from 'react-icons/ri';

const features =[
    {title:"Real-time Email Alerts", details:"NetTracking is a very powerful Web 2.0 site seach engine allows you to find email allerts.", icon:<BsFillBookFill />},
    {title:"Monitor Inbound traffic", details:"The biggest challenge for marketers is being heard inbound taffic in market.", icon: <RiComputerFill /> },
    {title:"Track Multiple Sites", details:"NetTracking gives you an innovative web-based tool that manages miltiple sites.", icon: <BsFillPieChartFill />},
    {title:"Aggregate Statistics", details:"Filters and reportson your websites search engine ranking results." , icon: <BsFillBarChartLineFill />},
    {title:"Edit Exclude", details:"In short, netTracking gives you the information that allows you to changes in your website's ranking", icon: <BsFillPlayFill />},
    {title:"Easy to Implement", details:"Accurately track organis (or natural) search engine movement over time.", icon: <BsFillBookFill />},
];

export default function Keyfeatures() {
  return (
    <div className='grid md:grid-cols-3 place-items-center md:place-items-start gap-y-20 gap-x-10 md:ml-20'>
        {features.map((item, index) => {
            return (
                <div key={item?.title} className='text-white-100 w-3/4 relative'>
                    <div className='h-10 w-10 rounded-full bg-white-100 flex justify-center items-center'>
                        <div className='text-black '>
                            {item?.icon}
                        </div>
                    </div>
                    <h1 className='text-bold py-5'>
                        {item?.title}
                    </h1>
                    <span className='text-[#999999]'>
                        {item?.details}
                    </span>
                </div>
            )
            
        })}

    </div>
  )
}

