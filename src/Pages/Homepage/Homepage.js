import React from 'react'
import Leftcomponent from '../../Components/Homepage/Leftcomponent'
import Rightcomponent from '../../Components/Homepage/Rightcomponent'

export const Homepage = () => {
  return (
    <div className='pt-12'>
      <div className='grid md:grid-cols-2 relative'>
          <Leftcomponent />
        <div className='md:fixed md:right-40'>
          <Rightcomponent />
        </div>
      </div>
    </div>
  )
}
