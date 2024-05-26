import React from 'react'

const Newscont = () => {
  return (
    <div className='flex items-center justify-center'>
         <div className='bg-gradient-to-bl from-[#bade2c34] to-[#0c0f0a12] mt-[2%] w-[100%] md:w-[70%] md:mt-[-7%] shadow-lg text-center py-3 px-8 relative bg md:px-10 md:py-[2%]  rounded-3xl'>


   <div className='flex flex-col md:flex-row items-center justify-center md:justify-between '>
            <div className='text-white w-[100%] md:w-[45%] text-left'>
                <h1 className='font-bold mb-[2%]  text-white text-[18px] md:text-[20px] lg:text-[25px]'>Our Newsletters</h1>
                <p className='text-[15px] md:text-[18px]'>Discover the latest in design, innovation, and industry insights with Galdunx's newsletter. Stay informed, inspired, and connected with us! Subscribe now.</p>
            </div>
            <form className=' mt-[5%] md:mt-0'>
                <input className='w-[100%] p-[10px] rounded-2xl bg-[#666666] text-white outline-none ' placeholder='Email:'/>
                <button className='text-white font-bold bg-gradient-to-b mt-[3%]  from-[#95B809] to-[#425204] px-[25px] py-[10px] rounded-2xl hover:bg-[#D3FF25] hover:font-bold'>Submit</button>

            </form>
        </div>
    </div>
    </div>
   
  
  )
}

export default Newscont
