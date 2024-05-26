import React from 'react'
import Contform from './Contform'
import Eclipse from '../../Components/Imagefile/Ellipse 2.png'
import Eclipse2 from '../../Components/Imagefile/Ellipse 6.png'
import Newscont from './Newscont'

const Contact = () => {
  return (
    <div className='bg-[#1C1C1C] py-[3%] text-center'>
         <div className="absolute top-[40%] right-0">
            <img src={Eclipse}/>
        </div>
        <div className="absolute bottom-[20%] left-0">
            <img src={Eclipse2}/>
        </div>
       <div className="text-center flex flex-col justify-center items-center pb-5 pt-[25%] px-8 md:px-20  md:py-[10%]  ">
        <h1 className="text-[30px] md:text-[40px]  text-[#D3FF25] mb-[1%] font-bold md:font-extrabold text-center">
          Contact Us
        </h1>
        <p className='text-white w-[100] md:w-[70%] text-[15px] md:text-[18px] text-center'>
            Have questions or ready to start your project? Reach out to us today! Our team at Galdunx is here to 
assist you every step of the way. Whether you're looking to discuss a potential collaboration, need support 
with an ongoing project, or simply want to learn more about our services, we're just a click away. Drop us a message, 
and let's begin transforming your digital vision into reality.
        </p>
      </div>
      <Contform/>
      <Newscont/>
    </div>
  )
}

export default Contact
