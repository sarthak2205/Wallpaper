import React from 'react'
import Card from '../../Components/Card'

export default function Rightcomponent() {
  return (
    <div className='grid grid-cols-3 gap-5 md:gap-10 md:gap-y-12'>
        <div>
            <Card/>
        </div>
        <div className='mt-20'>
            <Card/>
        </div>
        <div>
            <Card/>
        </div>
    </div>
  )
}
