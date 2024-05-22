import React from 'react'
import { successdiv } from '../../Components/Data/Arrays'
import AliceCarousel from 'react-alice-carousel'
import { FaArrowRight } from 'react-icons/fa'
import ximage from '../../Components/Imagefile/Union.png'

const Abousuccess = () => {

     const items = successdiv.map((x)=>{
        return(
            <div key={x.id} className='bg-[#d9d9d90c] relative text-white ml-10 my-7 ring-gray-600 ring-1 rounded-2xl text-center shadow-md p-[15px]'>
                
               <img src={x.image} alt={x.name} className='block w-[100%]'/>
               <h1 className='my-[3%] text-[20px] font-bold lg:text-[30px]'>{x.name}</h1>
               <p className='text-sm mb-[4%]' >{x.writeup}</p>
               <button className='bg-gradient-to-b from-[#95B809] to-[#425204] px-[15px] py-[10px] rounded-2xl hover:bg-[#D3FF25] hover:font-bold'>View service</button>

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
    <div className='py-5 px-8 md:px-20 md:py-[4%] text-center relative'>
         <div className="absolute top-[10%] left-15">
            <img src={ximage}/>
        </div>
         <div className="absolute bottom-[10%] right-3">
            <img src={ximage}/>
        </div>
        <h3 className='text-[#D3FF25] text-center'>
            Guarantee Success
        </h3>
     <h1 className="text-[30px] md:text-[40px]  text-white mb-[1%] font-bold md:font-extrabold text-center">
          What We Do
        </h1> 

         <AliceCarousel
    mouseTracking
    infinite
    autoPlayInterval={1500}
    animationDuration={1000}
    disableDotsControls
    responsive={responsive}
    items={items}
    autoPlay
    disableButtonsControls
    // renderNextButton={()=>{
    //     return <FaArrowRight className='abolute right-0 bottom-[50%]'/>
    // }}
    />
    </div>
  )
}

export default Abousuccess
