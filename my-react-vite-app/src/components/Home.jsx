import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BiEnvelope } from 'react-icons/bi';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white px-4 text-center">
      <span className="bg-emerald-500 text-white-500 px-4 py-1 rounded-full text-sm mb-4 font-bold mt-20 ">Full-Stack Developer</span>

      {/* <h1 className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fadeIn animation-delay-0">
        Hello, I'm <span className="text-emerald-400">Fatima Naeem</span>.
      </h1> */}

      <h2 className="text-3xl md:text-5xl font-bold mb-6 opacity-0 animate-fadeIn animation-delay-500">I build scalable full-stack web applications.</h2>
      <p className="text-lg max-w-[80%] text-gray-400 mb-6 opacity-0 animate-fadeIn animation-delay-1000">
       Full Stack Developer specializing in MERN and .NET technologies. I build secure, scalable, and responsive web applications with clean architecture, RESTful APIs, and modern UI/UX practices.
      </p>

      <div className="flex gap-4 mb-8 opacity-0 animate-fadeIn animation-delay-1500">
        <Link to="/projects" className="bg-emerald-500 hover:bg-slate-600 text-white px-6 py-2 rounded-full">View My Work</Link>
        <Link to="/contact" className="border border-gray-400 text-white px-6 py-2 rounded-full hover:bg-emerald-700">Contact Me</Link>
      </div>

      <div className="flex gap-4 justify-center mt-5 opacity-0 animate-fadeIn animation-delay-1000">
        {/* GitHub */}
        <a href="https://github.com/codewithfatima" target="_blank" rel="noopener noreferrer"
          className="bg-neutral-800 text-emerald-400 px-4 py-4 rounded-full transition duration-300 ease-in-out hover:bg-emerald-500 hover:text-white hover:scale-110">
          <FaGithub className="w-5 h-5" />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/fatimanaeem32/" target="_blank" rel="noopener noreferrer"
          className="bg-neutral-800 text-emerald-400 px-4 py-4 rounded-full transition duration-300 ease-in-out hover:bg-emerald-500 hover:text-white hover:scale-110">
          <FaLinkedin className="w-5 h-5" />
        </a>

        {/* Twitter */}
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
          className="bg-neutral-800 text-emerald-400 px-4 py-4 rounded-full transition duration-300 ease-in-out hover:bg-emerald-500 hover:text-white hover:scale-110">
          <FaTwitter className="w-5 h-5" />
        </a>

        {/* Email */}
        <a href="mailto:fatima68.05.07@gmail.com"
          className="bg-neutral-800 text-emerald-400 p-4 rounded-full transition duration-300 ease-in-out hover:bg-emerald-500 hover:text-white hover:scale-110">
          <BiEnvelope className="w-5 h-5" />
        </a>
      </div>

    </section>
  );
};

export default Home;
