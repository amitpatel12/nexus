import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineTwitter, AiOutlineInstagram,  } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-[#252525] text-[#fffef2] text-[14px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[40px] lg:px-[40px] lg:py-[50px] border-b-[3px] sm:py-[40px] sm:px-[34px] py-[35px] px-[20px]">
        <div className="w-full col-span-2 sm:col-span-3 lg:col-span-2 grid gap-4 h-fit">
          <p className="font-[500] text-[15px]">
            Subscribe to Aesop communications
          </p>
          <div className="h-[1px] bg-white"></div>
          <div className="relative">
            <input
              type="text"
              placeholder="Email address"
              className="text-[18px] border-[1px] bg-transparent w-full p-2 rounded-[4px] outline-none placeholder:text-[#fffef2] placeholder:font-[500]"
            />
            <BsArrowRightShort
              color="#fffef2"
              size={25}
              className="absolute top-1/2 -translate-y-1/2 right-3"
            />
          </div>
          <div>
            <input type="checkbox" id="check" />
            <label for="check">
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our{" "}
              <Link to={"/"} className="underline">
                privacy policy.
              </Link>
            </label>
          </div>
        </div>

        <div className="w-full grid gap-4 h-fit">
          <p className="font-[500] text-[15px]">Orders and support</p>
          <div className="h-[1px] bg-white"></div>
          <div className="flex flex-col gap-4">
            <Link
              to={"/"}
              className="flex items-center justify-center w-fit gap-1"
            >
              <p>Contact us</p>
              <GoArrowUpRight size={17}/>
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              <p>FAQs</p>
              <GoArrowUpRight size={17}/>
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              <p>Shipping </p>
              <GoArrowUpRight size={17}/>
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              <p>Returns</p>
              <GoArrowUpRight size={17}/>
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              <p>Order history</p>
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              <p>Terms and conditions</p>
            </Link>
          </div>
        </div>

        <div className="w-full grid gap-4 h-fit">
          <p className="font-[500] text-[15px]">Services</p>
          <div className="h-[1px] bg-white"></div>
          <div className="flex flex-col gap-4">
            <Link
              to={"/"}
              className="flex items-center justify-center w-fit gap-1"
            >
              Live assistance
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              Corporate gifts
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              Facial Appointments
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              Click and Collect
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              Video consultation
            </Link>
          </div>
        </div>


        <div className="w-full grid gap-4 h-fit">
          <p className="font-[500] text-[15px]">Location preferences</p>
          <div className="h-[1px] bg-white"></div>
          <div className="flex flex-col gap-4">
            <p
             
              className="flex items-center justify-center w-fit gap-1 font-[500]"
            >
             Shipping:
            </p>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit underline"
            >
              Hong Kong SAR, China
            </Link>

            </div>

            <div className="flex flex-col gap-4 mt-7">
            <p
             
              className="flex items-center justify-center w-fit gap-1 font-[500]"
            >
             Shipping:
            </p>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit underline"
            >
              Hong Kong SAR, China
            </Link>

            </div>

            
        </div>


        <div className="w-full lg:col-span-2 grid gap-4 h-fit">
          <p className="font-[500] text-[15px]">
          Sustainability
          </p>
          <div className="h-[1px] bg-white"></div>
          <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
          </div>


          <div className="w-full grid gap-4 h-fit">
          <p className="font-[500] text-[15px]">About</p>
          <div className="h-[1px] bg-white"></div>
          <div className="flex flex-col gap-4">
            <Link
              to={"/"}
              className="flex items-center justify-center w-fit gap-1"
            >
             Our story
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
            Foundation
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
             Careers
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              Privacy policy
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              Accessibility
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              Cookie Policy
            </Link>
          </div>
        </div>

        <div className="w-full gap-4 h-fit hidden lg:grid">
          <p className="font-[500] text-[15px]">Social media</p>
          <div className="h-[1px] bg-white"></div>
          <div className="flex flex-col gap-4">
            <Link
              to={"/"}
              className="flex items-center justify-center w-fit gap-1"
            >
              <p>Instagram</p>
              <GoArrowUpRight size={17}/>
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              <p>Twitter</p>
              <GoArrowUpRight size={17}/>
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              <p>LinkedIn</p>
              <GoArrowUpRight size={17}/>
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              <p>WeChat</p>
            
            </Link>

            <Link
              to={"/"}
              className="flex items-center justify-center gap-1 w-fit"
            >
              <p>Weibo</p>
              <GoArrowUpRight size={17}/>
            </Link>

            
          </div>
        </div>

      </div>
      <div className="lg:px-[40px] sm:px-[34px] px-[20px] py-[20px] flex justify-between">
        <p>© Aesop</p>
        <div className="flex gap-6 text-[25px] lg:hidden">
            <AiOutlineInstagram color="white"/>
            <AiOutlineTwitter color="white"/>
            <FaLinkedinIn color="white"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
