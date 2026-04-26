import React from 'react';

import reactIcon from '../assets/react.svg';
import tailwindIcon from '../assets/tailwindcss.svg';
import reduxIcon from '../assets/redux.svg';
import nodeIcon from '../assets/nodejs.svg';
import expressIcon from '../assets/express.svg';
import mongoIcon from '../assets/mongodb.svg';
import firebaseIcon from '../assets/firebase.svg';
import gitIcon from '../assets/git.svg';
import dockerIcon from '../assets/docker.svg';
import figmaIcon from '../assets/figma.svg';
import vscodeIcon from '../assets/vscode.svg';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: reactIcon },
      { name: 'Tailwind CSS', icon: tailwindIcon },
      { name: 'Redux', icon: reduxIcon },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: nodeIcon },
      { name: 'Express', icon: expressIcon },
      { name: 'MongoDB', icon: mongoIcon },
      { name: 'Firebase', icon: firebaseIcon },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: gitIcon },
      { name: 'Docker', icon: dockerIcon },
      { name: 'Figma', icon: figmaIcon },
      { name: 'VS Code', icon: vscodeIcon },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6  text-white text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-emerald-400 mb-4">My Tech Stack</h1>
      <p className="text-gray-300 text-lg">Technologies I work with</p>
      <span className="block h-1 w-16 bg-emerald-400 mx-auto mt-4 rounded-lg mb-16"></span>

      <div className="max-w-6xl mx-auto space-y-16">
        {skills.map((section, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-emerald-300 mb-8">{section.category}</h3>
            <div className="flex justify-center flex-wrap gap-8">
              {section.items.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 bg-[#1e293b] p-5 rounded-lg shadow-md hover:scale-105 transition"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-sm text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
