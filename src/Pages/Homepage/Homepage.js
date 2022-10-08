import React from 'react'
import Leftcomponent from './Leftcomponent'
import Rightcomponent from './Rightcomponent'

export const Homepage = () => {
  return (
    <div className='pt-12'>
      <div className='grid md:grid-cols-2 relative'>
        <div className='md:pt-40 flex justify-center'>
          <div className=''>
            <Leftcomponent />
          </div>
        </div>
        <div className=''>
          <div className='md:fixed md:right-40'>
            <Rightcomponent />
          </div>
        </div>
      </div>
    </div>
  )
}
