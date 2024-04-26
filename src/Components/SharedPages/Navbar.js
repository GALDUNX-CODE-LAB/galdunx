import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { navlinks } from '../Data/Arrays';

const Navbar = () => {
    const [open, setopen] = useState(false)

    const togglenavbar = () =>{
        setopen(!open)
    }
  return (
    <div className='flex justify-between items-center bg-gradient-to-br from-[#4B7B2A] to-[#343633] py-4 px-8 z-10 w-full sticky top-0 right-0 backdrop-blur-lg md:px-20 shadow-lg'>
      <div>Galdunx Logo</div>
      <div className=' flex gap-3 md:gap-7'>
        <button className='px-3 py-2.5 rounded-3xl bg-white  text-black font-semibold text-[13px] md:text-sm' >Start a project</button>
         <button className='inline-block font-extrabold text-[25px] text-white' onClick={togglenavbar}> {open ? <FaTimes />  : <CiMenuBurger className='font-extrabold' />} </button>

         <div>
            {open && (
                <div className='fixed top-0 right-0 z-[-1] flex flex-col justify-center items-center w-full h-[450px] p-12 bg-gradient-to-br from-[#4B7B2A] to-[#343633] shadow-lg md:w-[40%] md:h-[750px] '  >
                    <ul>
                        {navlinks.map((x)=>{
                            return(
                                 <li key={x.id} className='py-5'>
                                <Link to={x.link} className='text-black font-bold text-[20px]'>{x.name}</Link>
                                {/* i just want to see */}
                            </li>
                            )
                           
                        })}
                    </ul>
                </div>
            )}
        </div>
      </div>
        
    </div>
  )
}

export default Navbar
