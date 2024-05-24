import React from 'react'
import { devservice } from '../../Components/Data/Arrays';
import { useNavigate } from 'react-router-dom';

const Developserve = () => {
  const navigate = useNavigate()
  return (
     <div className="pt-5 pb-10 px-8 md:px-20 md:py-[4%] bg-black">
      <h1 className="mb-[3%] text-white text-[30px] md:text-[48px] font-extrabold">
        <span className="text-[#D3FF25] ">Development</span> Services
      </h1>
      
       <div className="flex flex-wrap gap-5 md:gap-10">
        {devservice.map((x) => {
          return (

            <div key={x.id} className="bg-gradient-to-bl from-[#D3FF25] to-[#333131B2] p-[2px]  rounded-xl w-[45%]">
                <div className="bg-[#1C1C1C] p-[5%] rounded-xl w-[100%] h-[100%]">
                    <h1 className="mb-[5%] text-white text-[20px] font-bold md:text-[30px]">{x.name}</h1>
              <p className="text-[#BCB2B2] text-[12px] md:text-[18px] w-[100%] md:w-[70%] mb-[5%]">
                {x.writeup}
              </p>
              <div className='flex items-center md:items-start gap-3 flex-wrap justify-center md:justify-start lg:gap-10'>
               <button className='bg-gradient-to-b  from-[#95B809] to-[#425204] px-4 py-2.5 rounded-3xl text-black text-[14px] md:text-lg hover:bg-white hover:text-black'>
                    {x.initialbutton}
                </button>
                <button className='bg-gradient-to-b  from-[#95B809] to-[#425204] px-4 py-2.5 rounded-3xl text-black text-[14px] md:text-lg hover:bg-white hover:text-black'>
                    {x.seccondbutton}
                </button>

              </div>
                </div>
              
            </div>
          );
        })}
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-3 md:gap-0 md:justify-between mt-[5%]'>
        <h1 className='font-bold text-white text-[20px]'>Have Any Other <span className='text-[#D3FF25] '> Tech Services </span> You Want Us To Work On?</h1>
         <button onClick={()=>navigate('/contact')} className='bg-[#D3FF25] px-4 py-2.5 rounded-3xl text-black text-[18px] md:text-lg'> contact us</button>
      </div>
    </div>
  )
}

export default Developserve
