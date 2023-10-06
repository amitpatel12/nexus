import React from 'react'
import { Link } from 'react-router-dom'

const Offer1 = () => {
  return (
    <div className='bg-[#C2C2AF] text-[#333333] text-[14px] text-center flex lg:px-[20px] py-[10px] w-full justify-center items-center md:gap-2 flex-wrap'>
      <p>Trained Aesop consultants are available to provide bespoke skin care advice.</p>
      <Link to={'/'} className='font-bold hover:underline block'>Book a video consultation</Link>
    </div>
  )
}

export default Offer1
