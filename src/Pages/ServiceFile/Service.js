import React from 'react'
import ximage from '../../Components/Imagefile/xc.png'
import circle from '../../Components/Imagefile/Ellipse 14.png'
import Designservice from './Designservice'
import Thinkserve from './Thinkserve'
import Serveteam from './Serveteam'
import Developserve from './Developserve'
import Approachserve from './Approachserve'
const Service = () => {
  return (
    <>
        <div className='py-[10%]  lg:py-[11%] bg-black relative'>
         <div className='absolute w-[100px] md:w-[300px] bottom-0 left-0 '>
        <img src={ximage} alt='name'/>
      </div>
       <div className='absolute w-[100px] md:w-[300px] top-0 right-0 '>
        <img src={circle} alt='name' />
      </div>
      <h1 className='text-[30px] lg:text-[64px] font-bold text-white text-center  px-8 md:px-20 '>
        Giving You The Best Service From <span className='text-[#B9DE2C] '>Galdunx </span> We Assure You Satisaction
      </h1>
     
    </div>
    <Designservice/>
    <Thinkserve/>
    <Serveteam/>
    <Developserve/>
    <Approachserve/>
    </>
    
  )
}

export default Service
