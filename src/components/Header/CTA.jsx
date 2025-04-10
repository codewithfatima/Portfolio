import React from 'react';
import  CV from '../../assets/cv.pdf';
import { motion } from "framer-motion";
import './header.css';

const CTA = () => {

  const fadeIn = (direction = 'up', delay = 0.3) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 20 : -20, 
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
    <div>
      <div className="cta">
        <motion.a href={CV} download  variants ={fadeIn('up' , 0.2)}
            initial = "hidden"
            whileInView = "show"
            viewport = {{once : false , amount : 0.2}} className='btn'>Download CV </motion.a>
        <a href="#contact" className='btn-primary'>Let's Talk</a>
      </div>
    </div>
  )
}

export default CTA
