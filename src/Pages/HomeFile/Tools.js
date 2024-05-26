import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { worktools } from '../../Components/Data/Arrays'
import { GoArrowUpRight } from "react-icons/go";


const Tools = () => {
    const items = worktools.map((x)=>{
        return(
            <div key={x.id} className='bg-transparent  py-[15px] flex flex-col items-center gap-5 '>
                <div className='w-[100%] h-[55px] md:w-[40%] md:h-[75px]'>
                  
                    <img src={x.logo} alt={x.name} className='w-[100%] h-[100%] block'/>
                </div>
                

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
