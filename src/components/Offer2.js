import React from 'react'
import { Link } from 'react-router-dom'

const Offer2 = () => {
  return (
    <div className='bg-[#252525] text-[#FFFEF2] sm:px-[20px] flex  w-full justify-center items-center flex-col flex-wrap py-[10px]'>
        <div className='flex w-fit flex-col group  cursor-pointer flex-wrap'>
    <div className='text-[14px] text-center flex w-full justify-center items-center md:gap-2 flex-wrap'>
      <span className=''>Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on orders over $400.</span>
      <span className='font-bold'>+</span>
    </div>
    <div className='h-[1px] invisible bg-white w-full group-hover:duration-500  group-hover:visible'></div>
    </div>
    </div>
  )
}

export default Offer2
