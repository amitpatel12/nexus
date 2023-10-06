import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import Img from '../assests/effi.avif'

const Efficacious = () => {
  return (
    <div className='w-full py-20 text-[#333333]'>
        <div className=' flex lg:justify-between gap-10 flex-col lg:flex-row w-full'>
            <div className='lg:w-[60%] sm:w-[90%] w-[97%]'>
                <img src={Img} className='w-full'/>
            </div>
      <div className='flex flex-col gap-8 sm:px-28 lg:w-[40%] w-full p-5 lg:px-20 lg:py-0'>
        <div className='w-fit lg:gap-8 gap-5 flex flex-col'>
            <p className='text-[14px] font-[600]'>Facial Appointments</p>
            <p className='text-[30px]'>Composure for the skin and senses </p>
            <p>For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.</p>
            <button className='border-[1px] p-3 py-4 flex justify-between items-center group hover:bg-[#333] hover:border-[#333] duration-500 sm:max-w-[300px] text-[14px]'>
                <p className='group-hover:text-white'>Learn more</p>
                <BsArrowRightShort size={25} className='text-[#333333] group-hover:text-white'/>
            </button>
            </div>
      </div>
      </div>
      
    </div>
  )
}

export default Efficacious
