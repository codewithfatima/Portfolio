import React from 'react'
import CTA from './CTA'
import './header.css'
import HeaderScroll from './HeaderScroll'
import { TypeAnimation } from 'react-type-animation'; 
import { motion } from "framer-motion";

const Header = () => {

  const fadeIn = (direction = 'up', delay = 0.3) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 20 : -20, // Moves the element up or down
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          delay: delay,
          duration: 0.6,
        },
      },
    };
  };


  return (
    <header>
      <motion.h4 
      variants ={fadeIn('up' , 0.2)}
      initial = "hidden"
      whileInView = "show"
      viewport = {{once : false , amount : 0.2}}
      className='head '>Fatima.</motion.h4>
      <div className="container header_container">
        <motion.h5 
        variants ={fadeIn('up' , 0.2)}
        initial = "hidden"
        whileInView = "show"
        viewport = {{once : false , amount : 0.2}}
        >Assalamualikum ! It's me </motion.h5>
        <motion.h1
        variants ={fadeIn('up' , 0.2)}
        initial = "hidden"
        whileInView = "show"
        viewport = {{once : false , amount : 0.2}}
        className='logo'>Fatima Naeem </motion.h1> <h5> I'm  a</h5>
        <div>
        <div className="type-animation-container">
         <TypeAnimation sequence={[
          'Mern Stack Developer',
          1000, 
          'Software Engineer',
          1000,
         ]}
         speed={50}
         repeat={Infinity}     
         />
         </div>
        </div>
        <motion.p
        variants ={fadeIn('down' , 0.2)}
        initial = "hidden"
        whileInView = "show"
        viewport = {{once : false , amount : 0.2}}
        className='font-poppins text-lg leading-relaxed text-gray-700'>Passionate MERN stack developer crafting dynamic web applications with MongoDB, Express, React, and Node.js. <br />
        Transforming ideas into seamless, full-stack solutions using the power of the MERN stack. <br />
        Expert in building scalable, high-performance applications that deliver a smooth user experience from front-end to back-end..</motion.p>
          <CTA />
          <HeaderScroll />
          <a href = "#contact" className='scroll__down'></a>
      </div>


    </header>
  )
}

export default Header;