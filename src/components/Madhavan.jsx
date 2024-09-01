import React from 'react'
import maddyImage from '../assests/maddy-image.JPG'


const Madhavan = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={maddyImage} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hove:scale-105'/>
            <h1 className='text- 4xl font-bold'>
                I am {""}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>MADHAVAN G</span>
                , FRONT END DEVELOPER
            </h1>
            <p className='mt-4 text-1g text-blue-300'>I Specialize in building modern and responsive web application</p>

            <div className='mt-8 space-x-4'>
                <button className='bg-gradient-to-r from-green-400 to-blue-600 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact with me</button>
                <button href = "../assests/Madhavan G Resume.pdf" className='bg-gradient-to-r from-violet-500 to-orange-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' >Resume</button>
            </div>


    </div>
  )
}

export default Madhavan