import React from 'react' 
import {data} from "../assets/Data.js";

const Projects = () => {

  const project = data;

  return (
    <div name='projects' className='w-full h-full'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <h1 className= 'text-7xl md:text-8xl font-bold text-white text-center mt-16 md:mt-44'>Projects</h1>
        <p className='text-3xl text-white text-center mt-20'>I do not have many projects currently, but I am actively working towards growing my portfolio.</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

          {project.map((item, index) => (
            <div key={index}
                 style={{backgroundImage: `url(${item.image})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md
                            flex justify-center text-center items-center mx-auto content-div'>
              
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-black tracking-wider'>
                  {item.name}
                </span>
                <div className='pt-8 text-center'>
                  <a href={item.github} target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects