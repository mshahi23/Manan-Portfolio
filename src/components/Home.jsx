import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Manan from '../assets/Manan.jpg';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <div name='home' className='w-full h-full bg-anim pt-24 md:pt-40'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center w-full h-full'>
          
          <h1 className= 'text-7xl md:text-8xl font-bold text-white text-center mt-10 -mb-20 sm:-mb-32 md:-mb-40 lg:-mb-42'>About</h1>

          <img className='mx-auto scale-50 lg:scale-60 border-4 border-white rounded-full z-0'  src = {Manan} alt = "Manan Portrait"></img>
          
          <h1 className='text-4xl md:text-5xl font-bold text-white  text-center mb-10 -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-42'>
            Hi, I'm Manan Shahi!
          </h1>

          <p className=' text-3xl text-white py-4 text-center'>
            I’m a full-stack developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused on
            building responsive full-stack web applications.
          </p>

          <ul className='flex justify-center mt-10'>
            <li>
              <button className='border-white border-4 px-4 py-2 sm:px-6 sm:py-3 my-2 items-center rounded-full hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 text-white' target="_blank" href="https://www.linkedin.com/in/manan-shahi/">
                <p className='hidden lg:flex text-3xl'>LinkedIn</p><FaLinkedin size={40}/>
                </a>
              </button>
            </li>
            <li>
              <button className='border-white border-4 px-4 py-2 sm:px-6 sm:py-3 my-2 items-center rounded-full hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 text-white' target="_blank" href="https://github.com/mshahi23">
                <p className='hidden lg:flex text-3xl'>GitHub</p> <FaGithub size={40}/>
                </a>
              </button>
            </li>
            <li>
              <button className='border-white border-4 px-4 py-2 sm:px-6 sm:py-3 my-2 items-center rounded-full hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 text-white' target="_blank" href="mailto:mshahi23@wooster.edu">
                <p className='hidden lg:flex text-3xl'>Email</p>  <HiOutlineMail className="lg:flex justify-between" size={40}/>
                </a>
              </button>
            </li>
            <li>
              <button className='border-white border-4 px-4 py-2 sm:px-6 sm:py-3 my-2 items-center rounded-full hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 w-full text-white' target="_blank" href="https://drive.google.com/file/d/1qP1ScHSbsnkj5EnpJ9cmZ6RTuo6cYcB5/view?usp=sharing">
                <p className='hidden lg:flex text-3xl'>Resume</p> <BsFillPersonLinesFill className='' size={40}/>
                </a>
              </button>
            </li>
          </ul>

        </div>
        <Skills/>
        <Projects/>
    </div>
  );
};

export default Home;