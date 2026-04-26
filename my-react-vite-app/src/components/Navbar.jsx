import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link , NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
<div className="fixed top-0 left-0 w-full z-50 bg-blue/80 backdrop-blur-md shadow-lg py-4 px-6 sm:px-10 lg:px-20 text-white">

      <div className='flex justify-between items-center'>
        {/* Logo */}
        <h1 className='text-white text-2xl font-bold'>
          <Link to='/'> <span className='text-emerald-400'>Fatima.</span></Link>
        </h1>

        {/* Desktop Nav */}
        <ul className='hidden md:flex gap-6 items-center'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'text-emerald-500 font-semibold  border-b-2 border-emerald-500 pb-1' : 'hover:text-emerald-500'
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? 'text-emerald-500 font-semibold  border-b-2 border-emerald-500 pb-1' : 'hover:text-emerald-500'
            }
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to='/project'
            className={({ isActive }) =>
              isActive ? 'text-emerald-500 font-semibold  border-b-2 border-emerald-500 pb-1' : 'hover:text-emerald-500'
            }
          >
            <li>Projects</li>
          </NavLink>

          <NavLink
            to='/tech'
            className={({ isActive }) =>
              isActive ? 'text-emerald-500 font-semibold  border-b-2 border-emerald-500 pb-1' : 'hover:text-emerald-500'
            }
          >
            <li>Tech Stack</li>
          </NavLink>

          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? 'text-emerald-500 font-semibold  border-b-2 border-emerald-500 pb-1' : 'hover:text-emerald-500'
            }
          >
            <li>Contact</li>
          </NavLink>
        </ul>

        <button className='hidden md:block bg-emerald-500 px-6 py-2 rounded-full transition duration-300 ease-in-out 
        hover:scale-105 hover:shadow-lg hover:bg-emerald-600'>Let's Talk</button>

        {/* Mobile Hamburger */}
        <div className='md:hidden' onClick={handleToggle}>
          <FaBars size={24} className='text-emerald-500 cursor-pointer' />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-black text-white z-50 transition-transform duration-500 ease-in-out 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <div className='flex justify-end mt-5 mr-5'>
          <IoCloseSharp size={25} className='text-emerald-500 cursor-pointer' onClick={handleToggle} />
        </div>

        <ul className='flex flex-col gap-6 mt-10 ml-6'>
          <Link to='/' onClick={handleToggle}><li className='hover:text-emerald-500'>Home</li></Link>
          <Link to='/about' onClick={handleToggle}><li className='hover:text-emerald-500'>About</li></Link>
          <Link to='/project' onClick={handleToggle}><li className='hover:text-emerald-500'>Projects</li></Link>
          <Link to='/tech' onClick={handleToggle}><li className='hover:text-emerald-500'>Tech Stack</li></Link>
          <Link to='/contact' onClick={handleToggle}><li className='hover:text-emerald-500'>Contact</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
