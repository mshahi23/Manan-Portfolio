import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className = 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] bg-opacity-20 text-white z-50'>
            
            <p className="hidden: md:flex text-3xl">Manan Shahi</p>
            
            <ul className="hidden md:flex text-3xl text-center">
                    <li className="hover:text-pink-600"><Link to="home" smooth={true} duration={700}>Home</Link></li>
                    <li className="hover:text-pink-600"><Link to="skills" smooth={true} duration={700}>Skills</Link></li>
                    <li className="hover:text-pink-600"><Link to="projects" smooth={true} duration={700}>Projects</Link></li>
            </ul>


            <div onClick={handleClick} className='md:hidden z-50'>
                {!nav ? <FaBars size={30} className="hover:text-pink-600"/> :  <FaTimes className="hover:text-pink-600"/>}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl hover:text-pink-600"><Link onClick={handleClick} to="home" smooth={true} duration={700}>Home</Link></li>
                <li className="py-6 text-4xl hover:text-pink-600"><Link onClick={handleClick} to="skills" smooth={true} duration={700}>Skills</Link></li>
                <li className="py-6 text-4xl hover:text-pink-600"><Link onClick={handleClick} to="projects" smooth={true} duration={700}>Projects</Link></li>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%]">
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-white' target="_blank" href="https://www.linkedin.com/in/manan-shahi/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-white' target="_blank" href="https://github.com/mshahi23">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#008000]'>
                        <a className='flex justify-between items-center w-full text-white' target="_blank" href="mailto:mshahi23@wooster.edu">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF0000]'>
                        <a className='flex justify-between items-center w-full text-white' target="_blank" href="https://drive.google.com/file/d/1qP1ScHSbsnkj5EnpJ9cmZ6RTuo6cYcB5/view?usp=sharing">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>

                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar