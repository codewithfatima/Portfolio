import React from 'react';
import './SkillCard.css'
import { motion } from 'framer-motion';

const SkillCard = ({title ,iconUrl,  isActive, onClick}) => {

  const slideInFromRight = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 40,
            damping: 25,
            mass: 1,
            delay: 0.3,
        },
    },
};

const fadeIn = (direction, duration = 0.5) => {
  return {
      hidden: {
          opacity: 0,
          y: direction === 'up' ? -50 : 50,
      },
      show: {
          opacity: 1,
          y: 0,
          transition: {
              type: 'spring',
              stiffness: 100,
              damping: 25,
              delay: duration, // Delay for staggered animations
          },
      },
  };
};



  return (
    <>
    <motion.div 
    //  className="w-full lg:w-1/2"
     initial={{ x: -200, opacity: 0 }}
     whileInView={{ x: 0, opacity: 1 }}
     transition={{ duration: 0.8 }}
     viewport={{ once: false, amount: 0.2 }}
    className={` w-full lg:w-1/2 skills-card ${isActive ? "active" : ""}`}
    onClick={()=>onClick()}>

      <span className='titl'>{title}</span>
    
    </motion.div>    
   </>
  );
};

export default SkillCard;