import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCard'
import { Drawings } from '@/data'

const ArtList = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A LIST OF MY <span className='text-purple'>ARTWORKS</span>
      </h1>
      <div className='flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10' >
        <InfiniteMovingCards
          items={Drawings}
          direction="right"
          speed="fast" />

        {/* <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10'>
          {companies.map(({id, img, name }) => (
            <div key={id} className='flex d:max-w-60 max-w-32 gap-2'>
              <img 
                src={img}
                alt={name}
                className='md:w-10 w-5'
              />
            </div>

          ))}
        </div> */}
      </div>
    </div>
  )
}

export default ArtList