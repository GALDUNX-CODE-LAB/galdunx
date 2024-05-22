import React from 'react'
// import image from '../../Components/background.svg'
import Swiperpage from './Essential'
import Essential from './Essential'
import Vision from './Vision'
import Homeservice from './Homeservice'
import Tools from './Tools'
import Calculation from './Calculation'
import Envisionpage from './Envisionpage'
// const image = 'https://assets-global.website-files.com/64350ccbd2c687494da08367/6437840810e84f02e12a08f2_background-grid.svg'
const Home = () => {
  return (
    <>
    <div className='flex-col md:flex-row flex justify-center md:justify-between items-center w-full pb-5 pt-[25%] px-8 md:px-20 md:pt-[13%] lg:py-[10%] gap-5 bg-gradient-to-bl from-[#4B7B2A] to-[#0C0F0A]' >
      <div className='w-[100%] md:w-[45%] flex items-center md:items-start justify-center flex-col gap-5 lg:gap-7 ' >
        <div className='text-[30px] lg:text-[40px]  font-extrabold'>
            <h1 className='text-white'>The <span className='text-[#D3FF25] font-bold'>Essential </span> Web Application Developers</h1>
        </div>
        <div className='text-[20px]  md:text-[25px] font-light'>
            <h3 className='text-white'>Whatever your idea or needs, we got the tools nd know how to build your custom solution from discovery to  development</h3>
        </div>
        <div className='flex  gap-10 '>
            <button className='bg-white shadow-lg rounded-3xl px-4 py-2.5 text-black text-[18px] md:text-lg hover:bg-[#D3FF25]'>see our work</button>
             <button className='bg-gradient-to-b  from-[#95B809] to-[#425204] px-4 py-2.5 rounded-3xl text-black text-[18px] md:text-lg'> contact us</button>
        </div>
      </div>
       <div className='md:w-[45%] w-[100%]'>gif div</div>
    </div>
    <Essential/>
    {/* <Vision/> */}
    <Homeservice/>
    <Tools/>
    <Calculation/>
    <Envisionpage/>
    </>
  )
}

export default Home
