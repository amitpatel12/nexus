import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "../assests/1.avif";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { BsArrowRightShort } from 'react-icons/bs'


const SliderContainer = ({data}) => {
  const slideRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log("current slide: ", currentSlide);
  return (
    <div className="relative group w-full overflow-hidden py-6">
      <Slider {...settings} ref={slideRef} className="">
        {
          data.map((item, i)=> (
            i === 0 ? (
            
<div className="hidden lg:flex">
        <div className='w-fit gap-3 flex flex-col px-10 text-[#333333]'>
            <p className='text-[14px] font-[600]'>{item.heading}</p>
            <p className='text-[30px]'>{item.para1}</p>
            <p>{item.para2}</p>
            <button className='p-3 py-4 flex justify-between items-center duration-500 text-[14px] text-[#333333] w-fit gap-1'>
                <p className='text-[#333333]'>{item.button}</p>
                <BsArrowRightShort size={25} className='text-[#333333] '/>
            </button>
            </div>
        </div>
      
              
            ) : 
              (
                <div className="flex flex-col items-center place-content-center justify-center h-[450px]">
                  <div className="grid place-content-center">
                <img src={item.img} className="w-fit h-[400px]" />
                </div>
                <p className="text-center hover:underline cursor-pointer">{item.para1}</p>
                <p className="text-center font-[300] mt-2">{item.para2}</p>
              </div>
              )
            
            
          ))
        }
      </Slider>

      {currentSlide > 0 && (
        <div className="w-fit absolute top-1/2 -translate-y-1/2 left-0">
          <Fade direction="left" className="w-fit" duration={500} cascade={true}>
            <button
              className=" font-[400] lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] bg-[#333333]  text-[40px] place-content-center grid lg:hidden lg:group-hover:grid duration-500"
              onClick={() => slideRef.current.slickPrev()}
            >
              <MdOutlineNavigateNext color="white" className='rotate-180'/>
            </button>
          </Fade>
        </div>
      )}


        <div className="w-fit absolute top-1/2 -translate-y-1/2 right-0">
          <Fade direction="right" className="w-fit" duration={500} cascade={true}>
            <button
              className=" font-[400] lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] bg-[#333333]  text-[40px] place-content-center grid lg:hidden lg:group-hover:grid duration-500"
              onClick={() => slideRef.current.slickNext()}
            >
              <MdOutlineNavigateNext color="white" className=''/>
            </button>
          </Fade>
        </div>
    
    
      
      {/* <div className="py-10">
      <div className="h-[1px] bg-black"></div>
      </div> */}
    </div>
  );
};

export default SliderContainer;
