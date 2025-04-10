import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi';
import { motion } from "framer-motion";;
import { fadeUp } from "../../variants";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";

const Services = () => {

  const fadeIn = (direction = 'left', delay = 0.9) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === 'down' ? 20 : -20, 
      },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          delay: delay,
          duration: 0.6,
        },
      },
    };
  }

  return (
    <section id='services'>
    <motion.h5
    variants ={fadeIn ('left'  , 0.3 )}
     initial ="hidden"
     whileInView ="show"
     viewport ={{once : false , amount : 0.3}}
    >What I offer</motion.h5>
    <motion.h2
    variants ={fadeIn ('left'  , 0.3 )}
    initial ="hidden"
    whileInView ="show"
    viewport ={{once : false , amount : 0.3}}
    >Services</motion.h2>

    <motion.div
     variants={fadeIn('up', 0.3)}
     initial="hidden"
     whileInView="show"
     viewport={{ once: false, amount: 0.5 }}
    className="container services__content">
     <article className="service">
         <h3 className='heading'>Mern Stack Development</h3>
         <p className='para'>Build scalable and dynamic web applications using MERN.
            Custom, responsive designs for optimal user experiences across all devices.</p>
      <div className='img'>
       <FaLaptopCode />
       </div>
     </article>

     
     <motion.article variants={fadeIn('up', 0.5)} className="service">
     <article className="service">
       <h3 className="heading">Responsive Design</h3>
         <p className='para'>Crafting visually appealing and user-friendly designs that
            adapt seamlessly to any device, ensuring an optimal browsing 
            experience on all screen sizes.</p>
       <div className="img">
          <FaMobileAlt />
       </div>
      </article>   
     </motion.article>

     <motion.article variants={fadeIn('up', 0.5)} className="service">
     <article className="service">
       <h3 className="heading">Problem Solving</h3>
         <p className='para'>Providing innovative solutions to complex challenges,
            optimizing performance, and ensuring efficient results
            through creative problem-solving techniques.</p>
       <div className="img">
          <MdSyncProblem />
       </div>
      </article>   
     </motion.article>

    </motion.div>
   </section>
 
  )
}

export default Services;
