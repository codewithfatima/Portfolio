import React , {useState} from 'react'
import project3 from '../../assets/project3.png';
import Project6 from '../../assets/Project6.png';
import Project5 from '../../assets/Project5.png';
import Project7 from '../../assets/Project7.png';
import project1 from '../../assets/project1.png';
import Project4 from '../../assets/Project4.png';
import Project8 from '../../assets/Project8.png';
import Project9 from '../../assets/Project9.png';
import Project10 from '../../assets/Project10.png';
import { motion } from "framer-motion";
import { fadeUp } from "../../variants";
import './project.css';

const project = () => {
  const[activeTab ,setActiveTab] = useState('all');

  const data=[
    {
      id:1,
      image:Project5,
      title:' Using Tailwindcss',
       category: 'back',
      github:"https://github.com/codewithfatima/PlantWebsite",
      demo:'https://plantwebsite-pwg9.onrender.com'
    },
    {
      id:2,
      image:Project8,
      title:'MERN Quiz Website',
       category: 'back',
      github:"https://github.com/codewithfatima/Quiz-App",
      demo:'https://quiz-app-1-f9lg.onrender.com'
     
    },
    {
      id:3,
      image:Project6,
      title:'Coffee Shop Website',
       category: 'front',
      github:"https://github.com",
      demo:'https://dribble.com/shots/16673715-'
    },
    {
      id:4,
      image: Project10,
      title:'E-Commerence Website',
      category: 'back',
      github:"https://github.com/codewithfatima/E-Commerce-Website",
      demo:'https://dribble.com/shots/16673715-'
     
    },
     {
      id:5,
      image:project3,
      title:'Parallax Website',
       category: 'front',
      github:"https://github.com/codewithfatima/Parallax-Website",
      demo:'https://dribble.com/shots/16673715-'
     
    },
    {
      id:6,
      image:Project7,
      title:'Memory Game',
       category: 'front',
      github:"https://github.com/codewithfatima/Memory-Game",
      demo:'https://codewithfatima.github.io/Memory-Game/'
    },
    {
      id:7, 
      image: Project4,
      title:'Calculator Using JavaScript',
       category: 'front',
      github:"https://github.com/codewithfatima/CalculatorUsingJavaSscript",
      demo:'https://codewithfatima.github.io/CalculatorUsingJavaSscript/'
    },
    {
      id:8,
      image:project1,
      title:'Tic-Tac-Toe Game',
       category: 'front',
      github:"https://github.com/codewithfatima/Tic-Tac-Toe-Game",
      demo:'https://codewithfatima.github.io/Tic-Tac-Toe-Game/'
    },
    {
      id:10, 
      image: Project9,
      title:'MERN To-Do-List',
       category: 'back',
      github:"https://github.com/codewithfatima/MERN-TO-DO-LIST/tree/main/Todolist",
      demo:'https://mern-to-do-list-f22f.onrender.com'
    },
    {
      id:9, 
      image: Project9,
      title:' Doctor Booking Website ',
       category: 'back',
      github:"https://github.com/codewithfatima/MERN-TO-DO-LIST/tree/main/Todolist",
      demo:'https://mern-to-do-list-f22f.onrender.com'
    },
    {
      id:11, 
      image: Project9,
      title:'Mern Task Managemengt',
       category: 'back',
      github:"https://github.com/codewithfatima/MERN-TO-DO-LIST/tree/main/Todolist",
      demo:'https://mern-to-do-list-f22f.onrender.com'
    },
   
  ]


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
    <section id='portfolio'>
      <motion.h5
      variants ={fadeIn('up' , 0.2)}
      initial = "hidden"
      whileInView = "show"
      viewport = {{once : false , amount : 0.2}}
      >My Recent Work</motion.h5>

      <motion.h2
      class="font-jost"
      variants={fadeIn('up', 0.3)}
      initial = "hidden"
      whileInView = "show"
       viewport={{ once: false, amount: 0.2 }}
      >Porjects</motion.h2>
     
     <div className='tabs flex justify-center align-center'>
      <button  onClick={()=> setActiveTab('all' )} className={`btz activeTab === 'all' ? 'active' : ''`}>ALL</button>
      <button  onClick={()=> setActiveTab('front')} className={`btz activeTab === 'front' ? 'active' : '' `}>Front-End</button>
      <button  onClick={() => setActiveTab('back')} className={`btz activeTab === 'back' ? 'active' : '' `}>Back-End</button>
     </div>
     
      <motion.div 
       variants={fadeIn('up', 0.2)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.2 }}
      className="container portfolio__container">

        {
          data.filter(project => activeTab === 'all' || project.category === activeTab)
          .map(({id, image, title, github,demo}) => { 
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
            </article>
            )
          })
        }

      </motion.div>
    </section>
  )
}

export default project;


