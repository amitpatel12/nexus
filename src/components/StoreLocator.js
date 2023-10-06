import React, { useRef, useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assests/store1.avif'
import img2 from '../assests/store2.avif'
import img3 from '../assests/store3.jpg'
import { MdOutlineNavigateNext } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const StoreLocator = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => {
          setCurrentSlide(current);
        },
    }

    const slideRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className='w-full py-20 text-[#333333]'>
        <div className='lg:pl-16 pl-4 lg:pr-0 lg:py-0 sm:pl-20 flex lg:justify-between gap-5 flex-col lg:flex-row p-4 '>
      <div className='flex flex-col gap-8 lg:w-[25%] sm:w-[80%] lg:pr-4 sm:pr-0 sm:pl-5 lg:pl-0 '>
            <p className='text-[24px] font-[500]'>Store locator</p>
            <p className=''>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
            <button className='border-[1px] p-3 py-4 flex justify-between items-center group hover:bg-[#333] hover:border-[#333] duration-500 sm:max-w-[300px] text-[14px]'>
                <p className='group-hover:text-white'>Find a nearby store</p>
                <BsArrowRightShort size={25} className='text-[#333333] group-hover:text-white'/>
            </button>
      </div>

      
      <div className="lg:w-[63%] w-full relative group pb-7 overflow-hidden">
      <Slider {...settings} ref={slideRef} className="flex flex-col w-full">
            <div  className='max-h-[70vh] '>
                <img src={img1} alt='hell' className='object-fit'/>
            </div>

            <div className='max-h-[50vh] lg:w-[80%]'>
                <img src={img2}/>
            </div>

            <div className='max-h-[50vh] lg:w-[80%]'>
                <img src={img3}/>
            </div>
        </Slider>

     
        <div className="w-fit absolute top-1/2 -translate-y-1/2 left-0 ">
          <Fade direction="left" className="w-fit" duration={500} cascade={true}>
            <button
              className=" font-[400] lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] bg-[#333333]  text-[40px] place-content-center grid lg:hidden lg:group-hover:grid duration-500"
              onClick={() => slideRef.current.slickPrev()}
            >
             <MdOutlineNavigateNext color="white" className='rotate-180'/>
            </button>
          </Fade>
        </div>
   


        <div className="w-fit absolute top-1/2 -translate-y-1/2 right-0">
          <Fade direction="right" className="w-fit" duration={500} cascade={true}>
            <button
              className=" font-[400] lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] bg-[#333333]  text-[40px] place-content-center grid lg:hidden lg:group-hover:grid duration-500"
              onClick={() => slideRef.current.slickNext()}
            >
              <MdOutlineNavigateNext color="white"/>
            </button>
          </Fade>
        </div>
      
      </div>
</div>
    </div>
 
  )
}

export default StoreLocator
