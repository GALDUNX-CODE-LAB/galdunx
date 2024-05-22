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
        <div className='pb-5 pt-[25%] md:pt-[13%] lg:py-[10%] bg-black relative'>
         <div className='absolute w-[100px] md:w-[300px] bottom-0 left-0 '>
        <img src={ximage} alt='name'/>
      </div>
       <div className='absolute w-[100px] md:w-[300px] top-0 right-0 '>
        <img src={circle} alt='name' />
      </div>
      <h1 className='text-[26px] lg:text-[64px] font-bold text-white text-center  px-8 md:px-20 '>
        Giving You The Best Service From <span className='text-[#D3FF25] '>Galdunx </span> We Assure You Satisaction
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
