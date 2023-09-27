import React from 'react'
import Image from 'next/image'
import exapleGif from '../../public/loading.gif'
const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mt-20'>
      <Image src={exapleGif} alt="Loading GIF" width={60} height={80} className='w-[80px] h-[80px]' />
      <h2 className='font-sans text-2xl italic text-gray-400 font-semibold animate-pulse'>Loading...</h2>
  </div>
  )
}

export default Loader