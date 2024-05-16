import React from 'react'
import ximage from '../../Components/Imagefile/Union.png'

const Contform = () => {
  return (
      <div className="bg-[#d9d9d90c] text-center pt-5 pb-5 md:pb-[15%] px-8 relative ring-gray-600 ring-1 md:px-20 md:py-[4%]  rounded-3xl">
      <div className="absolute top-[-3%] left-15 opacity-5 md:opacity-[4]">
            <img src={ximage}/>
        </div>
         <div className="absolute bottom-[10%] right-3 opacity-5 md:opacity-[4]">
            <img src={ximage}/>
        </div>

        <div className='text-center flex justify-center flex-col items-center'>
            <h1 className="text-[30px] md:text-[40px]  text-[#D3FF25] mb-[1%] font-bold md:font-extrabold text-center">
          Get in Touch
        </h1>
            <p className='text-white text-center text-sm w-[100%] md:w-[70%]'>
                Drop us a message using the form below, and one of our friendly team members will get back to you as soon as possible. We're here to assist you every step of the way, and we're committed to providing you with the personalized attention and support you deserve.
            </p>
        </div>
        <div className='items-center flex justify-center'>
            <form className='w-[100%] md:w-[70%] mt-[3%] '>
            <input type='email' className='text-white font-bold p-[5px] w-[100%] ring-[2px] ring-[#B9DE2C] outline-none bg-transparent rounded-md mb-[2%] ' placeholder='Email:'/>
            <input type='text' className='text-white font-bold p-[5px] w-[100%] ring-[2px] ring-[#B9DE2C] outline-none bg-transparent rounded-md mb-[2%]' placeholder='Name:'/>
            <input type='number' className='text-white font-bold p-[5px] w-[100%] ring-[2px] ring-[#B9DE2C] outline-none bg-transparent rounded-md mb-[2%]' placeholder='Number:'/>
            <textarea name='comments' id='comments' rows='4' cols='4' placeholder='Message:' className='text-white font-bold p-[5px] w-[100%] ring-[2px] ring-[#B9DE2C] outline-none bg-transparent rounded-md mb-[3%]'></textarea>
               <button className='text-white font-bold bg-gradient-to-b  from-[#95B809] to-[#425204] px-[25px] py-[10px] rounded-2xl hover:bg-[#B9DE2C] hover:font-bold'>Submit</button>
        </form>
        </div>
        

    </div>
  )
}

export default Contform
