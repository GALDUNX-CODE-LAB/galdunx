import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { essential } from '../../Components/Data/Arrays'

const Essential = () => {
  return (
    <div className='py-5 px-8 md:px-20 md:py-[4%]  flex-col md:flex-row flex gap-10  items-center bg-black '>
      <div className='w-[100%] md:w-[25%] md:text-[40px] text-[30px]  font-extrabold text-white text-center flex-col flex justify-center items-center md:items-start gap-5'>
        <h1 className='text-center md:text-left'>Our Essential Process</h1>
        <button className='bg-[#B9DE2C] px-4 py-2.5 rounded-3xl text-white text-[20px] md:text-sm flex items-center gap-5 ' > Work With Us!<FaArrowRight/> </button>
         {/* <button className='bg-[#7a58ff] px-4 py-2.5 rounded-3xl text-white text-[25px] md:text-sm'> </button>÷ */}
      </div>
         <div className='w-[100%] md:w-[75%] flex items-center  py-3 px-3  flex-col gap-7  first'>
          {essential.map((x)=>{
              return(
                <div key={x.id} className='flex gap-10 w-full  text-gray-400 hover:text-white'>
                  <div className='p-[20px] h-[80px] rounded-full ring-4 items-center ring-gray-400 hover:ring-white shadow-md text-[40px]'>
                    {x.image}
                  </div>
                  <div className='gap-7'>
                     <div className='flex justify-between items-center'>
                      <button className='text-[22px] md:text-[30px] font-bold '>{x.name}</button>
                      <button>{x.id}</button>
                     </div>
                     <div className='text-[12px] md:text-lg'>
                      {x.writeup}
                     </div>
                  </div>
                 
                </div>
              )
          })}
         </div>
    </div>
  )
}

export default Essential
