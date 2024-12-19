import React from 'react'
import { ContainerScroll } from './ui/ContainerScroll'

const Experience = () => {
  return (
    <div className="py-20">
      <div className='flex flex-row items-center justify-center p-4 gap-x-24 gap-y-0 mt-10'>
        <div className='w-full flex flex-col mt-0'>
            <ContainerScroll titleComponent={
              <div > 
                PERSONAL WORK <span className='text-purple'>EXPERIENCE</span>
              </div>} 

              children={
              <div className='bg-white'>
                
              </div>
            }/>
        </div>
      </div>
    </div>
  )
}

export default Experience