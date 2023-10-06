import React from 'react'
import videoFile from '../assests/Aesop_Othertopias.mp4'
import ReactPlayer from 'react-player'
import { BsArrowRightShort } from 'react-icons/bs'

const TheAthenaeum = () => {
  return (
    <div className='w-full py-20 text-[#333333]'>
        <div className='lg:pl-16 pl-4 sm:pl-20 flex lg:justify-between gap-5 flex-col lg:flex-row'>
      <div className='flex flex-col gap-8 lg:w-[30%] sm:w-[80%] pr-4 sm:pr-0 sm:pl-5 lg:pl-0'>
            <p className='text-[14px] font-[500]'>The Athenaeum</p>
            <p className='text-[30px]'>Ouranon: the sixth Othertopias fragrance </p>
            <p>Each of the six Othertopias fragrances is a doorway to another realm, real and imagined. Ouranon—a woody, spicy, resinous scent, distinguished by Frankincense, Hay and Myrrh—is the final chapter of that journey. </p>
            <button className='border-[1px] p-3 py-4 flex justify-between items-center group hover:bg-[#333] hover:border-[#333] duration-500 sm:max-w-[300px] text-[14px]'>
                <p className='group-hover:text-white'>Step inside Ouranon</p>
                <BsArrowRightShort size={25} className='text-[#333333] group-hover:text-white'/>
            </button>
      </div>

      <div className='flex justify-end'>
        <ReactPlayer url={videoFile} playing={true} loop={true} width={'100%'} height={'100%'} className='xl:!h-[510px] lg:!h-[400px]'/>
      </div>

    </div>
    </div>
  )
}

export default TheAthenaeum
