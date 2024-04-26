import React from 'react'
import { visionarray } from '../../Components/Data/Arrays'

const Vision = () => {
  return (
    <div className='py-5 px-8 md:px-20 md:py-[4%] flex-col md:flex-row flex justify-center md:justify-between items-center bg-[#7a58ff] '>
      {
        visionarray.map((x)=>{
            return (
                <div key={x.id} className='flex flex-col items-center gap-7 p-[15px] w-[100%] md:w-[30%] rounded-xl text-white hover:shadow-lg hover:bg-[#9d86ff]'>
                    <button className='text-[150px] font-extrabold '>
                        {x.image}
                    </button>
                    <h2 className='text-[30px] '>{x.name}</h2>
                    <div className='text-[20px]'>
                        {x.writeup}
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Vision
