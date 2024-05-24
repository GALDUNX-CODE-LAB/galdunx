import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { worktools } from '../../Components/Data/Arrays'
import { GoArrowUpRight } from "react-icons/go";


const Tools = () => {
    const items = worktools.map((x)=>{
        return(
            <div key={x.id} className='bg-[#333B10] px-[15px] py-[15px] flex flex-col gap-10 ml-[10px]'>
                <div className='flex justify-between'>
                    <h2 className='w-[65%] text-white text-[18px] lg:text-[25px] text-left'>{x.name}</h2>
                    <img src={x.logo} alt={x.name} className='w-[55px] h-[55px] md:w-[75px] md:h-[75px]'/>
                </div>
                <h3 className='text-white text-left'>{x.writeup}</h3>
                <h2 className=' text-white text-[40px]'><GoArrowUpRight /></h2>

            </div>
        )
    })
    const responsive = {
        0:{
            items: 1
        },
        600:{
            items: 3
        }
    }
  return (
   <div className="py-5 px-8 md:px-20 md:py-[4%] flex-col text-center flex gap-3 items-center bg-black">
      <h1 className="text-[25px] md:text-[40px] md:w-[75%] lg:w-[60%]  text-white font-bold md:font-extrabold text-center">
       We Work With Only The Best Technologies
      </h1>
      
    <AliceCarousel
    mouseTracking
    infinite
    autoPlayInterval={1000}
    animationDuration={1000}
    disableButtonsControls
    disableDotsControls
    responsive={responsive}
    items={items}
    autoPlay/>
    </div>
  )
}

export default Tools
