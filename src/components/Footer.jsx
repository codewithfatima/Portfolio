import React from "react";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { Link } from "react-router-dom";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];


const socialLinks = [
  {
    icon: <FaGithub />,
    link: "https://github.com/codewithfatima",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/fatimanaeem32",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:fatima68.05.07@gmail.com",
  },
];


const socialStyle =
  "w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xl hover:bg-emerald-500 hover:text-white hover:-translate-y-2 transition";



const Footer = () => {

  return (

    <footer className="relative bg-[#020617] border-t border-white/10 text-gray-400 py-12 px-6 overflow-hidden">


      {/* Glow */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-emerald-500/20 blur-[100px] rounded-full" />



      <div className="max-w-6xl mx-auto text-center relative">


        <h2 className="text-3xl font-bold text-white">
          Fatima <span className="text-emerald-400">Naeem</span>
        </h2>


        <p className="mt-4 max-w-xl mx-auto text-gray-400">
          Full Stack Developer building scalable, secure and modern
          web applications using MERN Stack and .NET technologies.
        </p>




        {/* Navigation */}

        <div className="flex justify-center flex-wrap gap-8 mt-8 text-sm">

          {navLinks.map((item) => (

            <Link
              key={item.path}
              to={item.path}
              className="hover:text-emerald-400 transition"
            >
              {item.name}
            </Link>

          ))}

        </div>





        {/* Social Icons */}

        <div className="flex justify-center gap-5 mt-8">

          {socialLinks.map((item, index) => (

            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={socialStyle}
            >
              {item.icon}
            </a>

          ))}

        </div>





        {/* Copyright */}

        <div className="mt-10 pt-6 border-t border-white/10 text-sm">

          <p>
            © {new Date().getFullYear()} Fatima Naeem. All rights reserved.
          </p>


          <p className="mt-2 text-gray-500">
            Built with ❤️ using React & Tailwind CSS
          </p>

        </div>


      </div>


    </footer>

  );

};


export default Footer;