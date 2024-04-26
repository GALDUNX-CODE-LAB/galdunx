import React from 'react'
import { think } from '../../Components/Data/Arrays'

const Envisionpage = () => {
  return (
    <div className='py-5 px-8 md:px-20 md:py-[4%] bg-black flex flex-wrap justify-center md:justify-between'>
      {
        think.map((x)=>{
            return (
                <div key={x.id} className='flex flex-col items-center py-[10px] px-[10px] w-[45%] md:w-[30%] text-center border-r-0 md:border-r-[2px] last:border-r-0'>
                <img src={x.image} alt={x.name} className='w-[100%] h-[120px] md:h-[300px] block'/>
                <h1 className='text-white text-[20x] md:text-[27px] font-bold lg:text-[30px] w-[100%] mb-2 md:w-[70%] text-center'>{x.name}</h1>
                <p className='text-white w-[100%] md:w-[70%] text-[12px] lg:text-lg '>{x.writeup}</p>
            </div>
            )
            
        })
      }
    </div>
  )
}

export default Envisionpage
