import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCard'
import { Drawings } from '@/data'

const ArtList = () => {
  return (
    <div className="py-20" id='gallery'>
      <h1 className="heading">
        A LIST OF MY <span className='text-purple'>ARTWORKS</span>
      </h1>
      <div className='flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10' >
        <InfiniteMovingCards
          items={Drawings}
          direction="right"
          speed="fast" />

      </div>
    </div>
  )
}

export default ArtList