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

        <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center items-center w-full h-full'>
          
          <h1 className= 'text-7xl md:text-8xl font-bold text-white text-center mt-10 -mb-16 sm:-mb-28 md:-mb-36 lg:-mb-42'>About</h1>

          <img className='mx-auto scale-50 lg:scale-60 border-4 border-white rounded-full z-0'  src = {Manan} alt = "Manan Portrait"></img>
          
          <h1 className='text-4xl md:text-5xl font-bold text-white  text-center mb-10 -mt-16 sm:-mt-28 md:-mt-36 lg:-mt-42'>
            Hi, I'm Manan Shahi!
          </h1>

          <p className=' xxs:text-2xl md:text-3xl text-white py-4 text-center'>
            I'm a recent graduate who is looking for opprtunities in software development and data science. I mostly have experience 
            in frontend developement and data analysis but I am eager to explore diverse opportunities within the field and showcase my versatility and adaptability. Please feel free to contact me if you are interested or have any questions.
          </p>

          <ul className='flex flex-wrap justify-center mt-10 items-center'>
            <li className='px-1.5 sm:px-4'>
              <button className='border-white border-4 px-4 py-2 sm:px-6 sm:py-3 my-2 items-center rounded-full hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 text-white' target="_blank" href="https://www.linkedin.com/in/manan-shahi/">
                <p className='hidden lg:flex text-3xl'>LinkedIn</p><FaLinkedin size={40}/>
                </a>
              </button>
            </li>
            <li className='px-1.5 sm:px-4'>
              <button className='border-white border-4 px-4 py-2 sm:px-6 sm:py-3 my-2 items-center rounded-full hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 text-white' target="_blank" href="https://github.com/mshahi23">
                <p className='hidden lg:flex text-3xl'>GitHub</p> <FaGithub size={40}/>
                </a>
              </button>
            </li>
            <li className='px-1.5 sm:px-4'>
              <button className='border-white border-4 px-4 py-2 sm:px-6 sm:py-3 my-2 items-center rounded-full hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 text-white' target="_blank" href="mailto:mshahi23@wooster.edu">
                <p className='hidden lg:flex text-3xl'>Email</p>  <HiOutlineMail className="lg:flex justify-between" size={40}/>
                </a>
              </button>
            </li>
            <li className='px-1.5 sm:px-4'>
              <button className='border-white border-4 px-4 py-2 sm:px-6 sm:py-3 my-2 items-center rounded-full hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 w-full text-white' target="_blank" href="https://drive.google.com/file/d/1ZyX7PfwIKxTH9tZb1eOFhHL96_L-AGXQ/view?usp=sharing">
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