import React from 'react';
import {language, software} from '../assets/Data.js';

const Skills = () => {
  
  const lang = language;
  const soft = software;

  return (
    <div name='skills' className='w-full h-full bg-black'>

      {/* Skills */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center w-full h-full'>
          
          <h1 className= 'text-7xl md:text-8xl font-bold text-white text-center mt-16 md:mt-32'>Skills</h1>
          <h2 className='text-white mt-10 text-4xl lg:text-6xl font-semibold text-center'>Programming Languages</h2>

          <div className='w-full flex flex-wrap gap-10 items-center justify-center mt-10'>
            
            {lang.map((skills, index) => (
              <div key={index} className='flex gap-4 shadow-lg py-2 px-6 bg-[#04133e] 
              rounded-full items-center hover:animate-bounce ease-in-out duration-300'>
                <div className='w-32 h-32'>
                  <img src={skills.icon} className='w-full h-full rounded-full'/>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex items-center justify-between'>
                    <p className='text-lg font-semibold text-white'>{skills.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className='text-white mt-10 text-4xl lg:text-6xl font-semibold text-center'>Software</h2>
          <div className='w-full flex flex-wrap gap-10 items-center justify-center mt-10'>
            
            {soft.map((software, index) => (
              <div key={index} className='flex gap-4 shadow-lg py-2 px-6 bg-[#04133e] 
              rounded-full items-center hover:animate-bounce ease-in-out duration-300'>
                <div className='w-32 h-32'>
                  <img src={software.icon} className='w-full h-full rounded-full'/>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex items-center justify-between'>
                    <p className='text-lg font-semibold text-white'>{software.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
    </div>
  )
}

export default Skills