import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DiMongodb } from "react-icons/di";
import { FaMobileScreen, FaReact, FaDatabase } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { PiBracketsAngleBold } from "react-icons/pi";
import { SiDotnet, SiExpress } from "react-icons/si";

const About = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto text-white overflow-hidden">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About <span className="text-emerald-400">Me</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Let me introduce myself and what I do
        </p>
        <span className="block h-1 w-16 bg-emerald-400 mx-auto mt-4 rounded-lg"></span>
      </motion.div>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Bio Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-6 leading-snug">
            A passionate Full-Stack Developer with a keen eye for detail
          </h2>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            A Full-Stack Developer with a strong focus on building scalable,
            secure, and user-friendly applications. I specialize{" "}
            <span className="text-emerald-400 font-medium">
              in both MERN stack and .NET technologies,
            </span>{" "}
            giving me the flexibility to work across modern web and enterprise
            environments.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            I have hands-on experience developing responsive frontends with
            React and building robust backends{" "}
            <span className="text-emerald-400 font-medium">
              using Node.js, Express, and ASP.NET.
            </span>{" "}
            I’ve also worked on authentication systems, RESTful APIs, and
            database management using MongoDB and SQL Server.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Beyond development, I bring experience in testing and quality
            assurance, ensuring applications are reliable, stable, and
            production-ready. I’m comfortable working in collaborative
            environments{" "}
            <span className="text-emerald-400 font-medium">
              using Git, Agile practices, and Azure DevOps.
            </span>
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
            I enjoy solving real-world problems, writing clean and maintainable
            code,{" "}
            <span className="text-emerald-400 font-medium">
              and continuously improving my skills to stay aligned with modern development practices.
            </span>
          </p>

          <Link
            to="/contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full px-8 py-4 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105"
          >
            Let’s Connect →
          </Link>
        </motion.div>

        {/* Right Side: Tech Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6"
        >
          {[
            { icon: <SiDotnet className="text-purple-400 text-4xl mb-3" />, name: ".Net", color: "text-blue-300" },
            { icon: <FaDatabase className="text-blue-400 text-4xl mb-3" />, name: "SQL", color: "text-blue-300" },
            { icon: <SiExpress className="text-gray-300 text-4xl mb-3" />, name: "Express", color: "text-blue-300" },
            { icon: <DiMongodb className="text-green-500 text-4xl mb-3" />, name: "MongoDB", color: "text-green-500" },
            { icon: <FaReact className="text-cyan-400 text-4xl mb-3" />, name: "React", color: "text-blue-300" },
            { icon: <FaMobileScreen className="text-blue-400 text-4xl mb-3" />, name: "Responsive", color: "text-blue-400" },
            { icon: <IoLogoJavascript className="text-yellow-400 text-4xl mb-3" />, name: "JavaScript", color: "text-yellow-500" },
            { icon: <PiBracketsAngleBold className="text-purple-400 text-4xl mb-3" />, name: "Code", color: "text-purple-300" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-emerald-500/20 hover:border-emerald-400"
            >
              {item.icon}
              <span className={`font-medium ${item.color}`}>{item.name}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;