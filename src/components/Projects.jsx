import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import Project10 from '../../src/assets/Project10.jpg';
import Project11 from '../../src/assets/Project11.png';
import Project13 from '../../src/assets/Project13.png';
import Project5 from '../../src/assets/Project5.png';
import Project8 from '../../src/assets/Project8.png';
import Crud from '../../src/assets/Crud.png';
import Number from '../../src/assets/Number.png';
import Login from '../../src/assets/Login.png';
import Tic from '../../src/assets/Tic.png';
import Memory from '../../src/assets/Memory.png';
import Master from '../../src/assets/Master.png';
import Landing from '../../src/assets/Landing.png';
import Project18 from '../../src/assets/Project18.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

Most of your code looks great, but there are a few **minor typos, case-sensitivity mismatches, and swapped links** that might cause bugs when filtering or displaying your projects.

Here are the issues found:

1. **Case Mismatch:** Category `'React'` (Item 4) has a capital **R**, while your tab label is lowercase `'react'`. Filtering might fail unless normalized.
2. **Missing Tab Category:** Items 11 and 14 use `category: 'front'`, but `'front'` is not defined in your `tabLabels`.
3. **Incorrect Title:** Project 11 has the title set to `'html-css-js'` instead of `'Memory Game'`.
4. **Swapped/Incorrect Links:**
* **Project 5 (Angular Todo):** The `github` property points to a Render deployment URL, and the `demo` points to the MasterMind game.
* **Project 14 (Weather Website):** The `demo` property points to a GitHub repository instead of a live link.



Here is the cleaned and corrected version of your `projects` array:

```javascript
  const projects = [
    {
      id: 1,
      image: Project11,
      title: 'Sidra Company Website',
      category: 'mern',
      github: 'https://github.com/codewithfatima/E-Commerce-Website',
      demo: 'https://www.sidra-kw.com/',
      tech: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 2,
      image: Project10,
      title: 'E-Commerce Website',
      category: 'net',
      github: 'https://github.com/codewithfatima/ECommerce-Website-In-Net',
      demo: 'https://e-commerce-website-0irp.onrender.com/',
      tech: ['Net', 'WebApi', 'MVC', 'SQL']
    },
    {
      id: 3,
      image: Project8,
      title: 'MERN Quiz Website',
      category: 'mern',
      github: 'https://github.com/codewithfatima/Quiz-App',
      demo: 'https://quiz-app-1-f9lg.onrender.com',
      tech: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      id: 4,
      image: Project5,
      title: 'Fully React Tailwindcss website',
      category: 'react',
      github: 'https://github.com/codewithfatima/PlantWebsite',
      demo: 'https://plantwebsite-pwg9.onrender.com/',
      tech: ['Tailwind css', 'React']
    },
    {
      id: 5,
      image: Project18,
      title: 'Angular Todo',
      category: 'angular',
      github: 'https://github.com/codewithfatima/Angular-To-do',
      demo: 'https://angular-to-do.onrender.com/',
      tech: ['Angular', 'Tailwind CSS']
    },
    {
      id: 6,
      image: Project10,
      title: 'E-Commerce Website',
      category: 'mern',
      github: 'https://github.com/codewithfatima/E-Commerce-Website',
      demo: 'https://e-commerce-website-0irp.onrender.com/',
      tech: ['React', 'Tailwindcss']
    },
    {
      id: 7,
      image: Crud,
      title: 'Basic Crud application',
      category: 'mern',
      github: 'https://github.com/codewithfatima/CRUD-USING-MERN',
      demo: 'https://mern-to-do-list-f22f.onrender.com/',
      tech: ['React', 'Node', 'Express']
    },
    {
      id: 8,
      image: Number,
      title: 'Number guessing Game',
      category: 'html-css-js',
      github: 'https://github.com/codewithfatima/NumberGuessingGame',
      demo: 'https://codewithfatima.github.io/NumberGuessingGame/',
      tech: ['HTML', 'CSS', 'Javascript']
    },
    {
      id: 9,
      image: Login,
      title: 'Login Form',
      category: 'html-css-js',
      github: 'https://github.com/codewithfatima/LoginAndSignUpForm',
      demo: 'https://codewithfatima.github.io/LoginAndSignUpForm/',
      tech: ['HTML', 'CSS']
    },
    {
      id: 10,
      image: Tic,
      title: 'Tic-Tac-Toe Game',
      category: 'html-css-js',
      github: 'https://github.com/codewithfatima/Tic-Tac-Toe-Game',
      demo: 'https://codewithfatima.github.io/Tic-Tac-Toe-Game/',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 11,
      image: Memory,
      title: 'Memory Game',
      category: 'html-css-js',
      github: 'https://github.com/codewithfatima/Memory-Game',
      demo: 'https://codewithfatima.github.io/Memory-Game/',
      tech: ['HTML', 'CSS', 'Javascript']
    },
    {
      id: 12,
      image: Landing,
      title: 'Landing Page',
      category: 'react',
      github: 'https://github.com/codewithfatima/BuggcyAssignment',
      demo: 'https://codewithfatima.github.io/BuggcyAssignment/',
      tech: ['React', 'TailwindCSS', 'React-Router']
    },
    {
      id: 13,
      image: Master,
      title: 'MasterMind Game',
      category: 'html-css-js',
      github: 'https://github.com/codewithfatima/MasterMindGame',
      demo: 'https://codewithfatima.github.io/MasterMindGame/',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 14,
      image: Project13,
      title: 'Weather Website',
      category: 'angular',
      github: 'https://github.com/codewithfatima/Weather-App',
      demo: 'https://weather-app-demo-link.com', // Replace with actual live demo if available
      tech: ['Tailwindcss', 'Angular']
    },
  ];



Would you like me to help you write the filter function logic for these project categories next?
  const tabs = ['all', 'react', 'mern', 'html-css-js', 'angular' , '.Net / AspNet Core'];
  return (
    <section id='portfolio' className="py-16 px-5 bg-[#0f172a] text-white">
      {/* Heading */}
      <motion.h3
        className="text-emerald-400 text-xl text-center"
        variants={cardAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        My Recent Work
      </motion.h3>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        variants={cardAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        My Projects
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {tabs.map((tab) => (
  <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={`px-4 py-2 rounded-full border border-emerald-400 text-sm transition 
      ${activeTab === tab
        ? 'bg-emerald-400 text-[#0f172a] font-bold'
        : 'text-emerald-400 hover:bg-emerald-500 hover:text-black'
      }`}
  >
    {tabLabels[tab]}
  </button>
))}
      </div>



      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects
          .filter((project) => activeTab === 'all' || project.category === activeTab)
          .map(({ id, image, title, github, demo, tech }, index) => (
            <motion.article
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2
              }}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              key={id}
              className="
  bg-gradient-to-br 
  from-[#1e293b] 
  to-[#0f172a]
  p-5 
  rounded-2xl
  border
  border-emerald-500/20
  shadow-xl
  hover:shadow-emerald-500/20
  transition
  "
            >
              <div className="overflow-hidden rounded-md mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">{title}</h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tech?.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-emerald-400 text-[#0f172a] rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm bg-gray-800 text-white px-4 py-2 border-2 border-emerald-400 rounded hover:bg-emerald-400 hover:text-[#0f172a] transition"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm bg-emerald-400 text-[#0f172a] px-4 py-2  rounded font-semibold hover:bg-white hover:text-black transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
      </div>
    </section>
  );
};

export default Projects;
