import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { setIsSearch } from '../store/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isSearch} = useSelector((state) => state.items)
  return (
    <div className='border-2 h-[80px] bg-[#FFFEF2] text-[#333333] text-[14px] font-[500]  w-full justify-center items-center px-8 hidden sm:flex'>
    <div className='flex justify-between w-full'>
        <div className='flex xl:gap-6 gap-4 items-center'>
        <Link to={'/'} className='hidden lg:flex'>Skin Care</Link>
        <Link to={'/'} className='hidden lg:flex'>Body & Head</Link>
        <Link to={'/'} className='hidden lg:flex'>Hair</Link>
        <Link to={'/'} className='hidden lg:flex'>Fragrance</Link>
        <Link to={'/'} className='hidden lg:flex'>Home</Link>
        <Link to={'/'} className='hidden lg:flex'>Kits & Travel</Link>
        <Link to={'/'} className='hidden lg:flex'>Gifts</Link>
        <Link to={'/'} className='flex lg:hidden'>Shop</Link>
        <Link to={'/'}>Read</Link>
        <Link to={'/'}>Stores</Link>
        <Link to={'/'} className='hidden lg:flex'>Facial Appointments</Link>
        <BsSearch size={18} className='cursor-pointer' onClick={()=>dispatch(setIsSearch())}/>

        </div>

        <div className='flex xl:gap-6 gap-4'>
            <Link to={'/'}>Login</Link>
            <Link to={'/'}>Cabinet</Link>
            <Link to={'/'}>Cart</Link>
        </div>
      
    </div>
    </div>
  )
}

export default Navbar
