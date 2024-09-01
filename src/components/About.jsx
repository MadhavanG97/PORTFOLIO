import React from 'react'
import AboutImage from '../assests/About-image.jpg'

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 1g:px-24'>
                <h1 className='text-4xl font-bold text-center mb-12'>About me</h1>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt='' className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                      <div className='flex-1'> 
                    <p className='text-1g mb-8'> I'm a passionate Front End Developer specializing in React.js, Tailwind CSS, and React Router. I have a strong foundation in web development and enjoy creating clean, responsive, and user-friendly interfaces. I'm continuously learning and experimenting with new technologies to refine my craft. My focus is on building and improving web applications, always striving to deliver high-quality work.</p>
                       <div className='space-y-4'>
                        <div className='flex-items-cenetr'>
                            <label htmlFor='htmlandcss' className='w-12/12'>HTML</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>

                            </div>

                        </div>
                        <div className='flex-items-cenetr'>
                            <label htmlFor='htmlandcss' className='w-12/12'>TailWind CSS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>

                            </div>

                        </div>
                        <div className='flex-items-cenetr'>
                            <label htmlFor='htmlandcss' className='w-12/12'>React JS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>

                            </div>

                        </div>

                       </div>
                       

                       </div>
                       
                </div>
            </div>
        </div>
    )
}

export default About;