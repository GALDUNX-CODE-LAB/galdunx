import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { navlinks } from '../Data/Arrays';
import galdlogo from '../Imagefile/galdunX Logo.png'

const Navbar = () => {
  const [open, setopen] = useState(false)

  const togglenavbar = () => {
    setopen(!open)
  }
  return (
    <div className="fixed z-[100] w-[98%] md:w-[95%] lg:w-full mt-5">
      <div className='flex sticky bg-transparent border-gray-700 border text-white container mx-auto rounded-full justify-between items-center  py-3 md:py-4 px-5  z-10 w-full top-[10px] right-0 backdrop-blur-lg md:px-15 lg:px-20 shadow-lg'>
        <div>
          <div className="w-[100px] md:w-[120px]">
           
            <img src={galdlogo} alt="Galdun" className='block'/>
          </div>
        </div>
        <div className=' flex gap-3 md:gap-7'>
          <button className='px-3 py-2 md:py-2.5 rounded-3xl bg-white  text-black font-semibold text-[13px] md:text-sm' >Start a project</button>
          <button className='inline-block font-extrabold text-[25px] text-white' onClick={togglenavbar}> {open ? <FaTimes /> : <FaBarsStaggered className='font-extrabold' />} </button>

          <div>
            {open && (
              <div className='fixed top-0 right-0 z-[-1] flex flex-col justify-center items-center w-full h-[450px] p-12 bg-neutral-950  shadow-lg md:w-[40%] md:h-[750px] '  >
                <ul>
                  {navlinks.map((x) => {
                    return (
                      <li key={x.id} className='py-5'>
                        <NavLink to={x.link} className={({isActive}) =>(isActive ? 'active' : 'link')} onClick={togglenavbar}>{x.name}</NavLink>
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
    </div>
  )
}

export default Navbar