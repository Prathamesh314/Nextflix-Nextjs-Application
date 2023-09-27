import React from 'react'
import Image from 'next/image'
import exapleGif from '../../public/Loadingsvg.svg'
const Loader = () => {
  return (
    <div className='flex flex-col gap-y-4 items-center justify-center'>
      <Image src={exapleGif} alt="Loading GIF" width={60} height={60} className='w-[80px] h-[80px]' />
      <h2 className='font-sans text-2xl italic text-gray-600 font-semibold animate-pulse'>Loading...</h2>
  </div>
  )
}

export default Loader