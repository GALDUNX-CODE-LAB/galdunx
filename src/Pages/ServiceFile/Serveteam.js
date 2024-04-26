import React from 'react'
import xright from '../../Components/Imagefile/xright.png'
import { Teamserve } from '../../Components/Data/Arrays'

const Serveteam = () => {
  return (
    <div className='py-5 px-8 md:px-20 md:py-[4%] bg-black relative'>
         <div className='absolute w-[100px] md:w-[250px] bottom-0 right-0 '>
        <img src={xright} alt='name'/>
      </div>
      
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap'>
    {
        Teamserve.map((x)=>{
            return(
            <div className='w-[100%] md:w-[25%] lg:w-[30%]  text-white text-left'>
                <img src={x.image}/>
                <h1 className='font-bold text-[24px] mb-3'>{x.name}</h1>
                <p className='text-[11px] md:text-sm lg:text-lg'>{x.writeup}</p>
            </div>
            )
          
        })
    }
    </div>
     
    </div>
  )
}

export default Serveteam
