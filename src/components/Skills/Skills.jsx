import React, { useState } from 'react';
import { SKILLS } from '../../utils/data';
import SkillCard from '../SkillCard/SkillCard';
import SkillInfo from '../SkillCard/SkillInfo';
import { motion } from "framer-motion";
import './skills.css'

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  }

  const fadeIn = (direction = 'up', delay = 0.4) => {
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

  return (
    <>
      <section className='skills-container'>

      <motion.h5
          variants={fadeIn('up ', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >My Expert </motion.h5>
        <motion.h5
          variants={fadeIn('up ', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >Technical Proficiency</motion.h5>

        <div className="skills-content">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="skills">


            {SKILLS.map((item) => (
              <SkillCard
                key={item.title}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => handleSelectedSkill(item)}
              />
            ))}
            

          </motion.div>


          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            >
            <SkillInfo
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          </motion.div>

        </div>

      </section>
    </>
  );
};


export default Skills;
