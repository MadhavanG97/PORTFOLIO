import React from 'react'
import BookStoreImage from './../assests/ECOM book project.png'
import SmallProjectImage from './../assests/Small projects.png'


const Project = [
            {
                id: 1,
                name: "Ecom Book Store",
                technologies: "React JS",
                image: BookStoreImage,
                github: "https://github.com/MadhavanG97/Maddy-books"
            },

            {
                id: 1,
                name: "Multiple Small Projects",
                technologies: "React JS",
                image: SmallProjectImage,
                github: "https://github.com/MadhavanG97/practice"
            }


]

const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10'>
                {Project.map(
                    (Project) => (
                        <div className='bg-gray-800 p-6 rounded-1g hover:shadow-1g transform transition-transform duration-300 hover-scale-105'>
                               <img src={Project.image} alt={Project.name} className='rounded-1g mb-4 w-full h-48 object-cover'/>
                               <h3 className='text-2xl font-bold mb-2'>{Project.name}</h3>
                               <p className='text-gray-400 mb-4'>{Project.technologies}</p>
                               <a href={Project.github} className='inline-block bg-gradient-to-r from-green-400 to-violet-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>GitHub</a>
                        </div>
                    )                )}

            </div>
        </div>
    </div>
  )
}

export default Projects