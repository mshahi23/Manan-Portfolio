import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Manan from '../assets/Manan.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full h-full bg-[#ADD8E6] pt-24 md:pt-40'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

      {/* About */}
        <div className='max-w-[1000px] mx-auto px-8 flex-col'>
          
          <section className= 'sticky text-7xl md:text-7xl font-bold text-black text-center'>About</section>

          <img className='mx-auto scale-50 border-4 border-black rounded-full -my-32 z-0'  src = {Manan} alt = "Manan Portrait"></img>
          
          <h1 className='text-4xl md:text-7xl font-bold text-black  text-center my-10'>
            Hi, I'm Manan Shahi!
          </h1>

          <p className=' text-3xl text-black py-4 justify-center text-left'>
            I’m a full-stack developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused on
            building responsive full-stack web applications.
          </p>

          <ul className='flex justify-center'>
            <li>
              <button className='border-black border-4 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 text-black' href="/">
                <p className='hidden lg:flex text-3xl'>LinkedIn</p><FaLinkedin size={40}/>
                </a>
              </button>
            </li>
            <li>
              <button className='border-black border-4 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 text-black' href="/">
                <p className='hidden lg:flex text-3xl'>GitHub</p> <FaGithub size={40}/>
                </a>
              </button>
            </li>
            <li>
              <button className='border-black border-4 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 text-black' href="/">
                <p className='hidden lg:flex text-3xl'>Email</p>  <HiOutlineMail className="lg:flex justify-between" size={40}/>
                </a>
              </button>
            </li>
            <li>
              <button className='border-black border-4 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600'>
                <a className='flex lg:space-x-4 w-full text-black' href="/">
                <p className='hidden lg:flex text-3xl'>Resume</p> <BsFillPersonLinesFill className='' size={40}/>
                </a>
              </button>
            </li>
          </ul>

        </div>
        
      </div>
    </div>
  );
};

export default Home;