import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiDotnet,
} from "react-icons/si";
import { BiEnvelope } from "react-icons/bi";

const Home = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-[#0B0F19] text-white">
      {/* Background Blur Elements */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Text & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 font-semibold mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              👋 Full Stack Developer
            </motion.span>

            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Fatima
              </span>
            </h2>

            <h3 className="mt-5 text-3xl md:text-5xl font-bold text-gray-100">
              Building Modern
              <br />
              Web Applications.
            </h3>

            <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
              I specialize in building fast, scalable and secure web
              applications using the MERN Stack and .NET technologies.
              Passionate about clean architecture, responsive UI and
              creating seamless user experiences.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["React", "Node.js", "MongoDB", ".NET", "SQL Server"].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700 text-sm text-gray-300 shadow-sm cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-5 mt-10"
            >
              <Link
                to="/projects"
                className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 px-8 py-4 rounded-full font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="border border-gray-600 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 px-8 py-4 rounded-full font-semibold"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex gap-5 mt-12"
            >
              {[
                { href: "https://github.com/codewithfatima", icon: <FaGithub size={24} /> },
                { href: "https://www.linkedin.com/in/fatimanaeem32/", icon: <FaLinkedin size={24} /> },
                { href: "mailto:fatima68.05.07@gmail.com", icon: <BiEnvelope size={24} /> },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-2 shadow-md text-gray-300 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Profile Image & Floating Elements */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute w-80 h-80 bg-emerald-500 rounded-full blur-[120px] opacity-20"></div>

            {/* Profile Avatar Container with smooth hover effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative w-80 h-80 rounded-full p-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.3)]"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0B0F19]">
                <img
                  src="https://ui-avatars.com/api/?name=FN&background=10b981&color=fff&size=512"
                  alt="Fatima Naeem"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating Icons with subtle staggered floating animations */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-5 left-4 md:left-8 bg-slate-900/90 border border-slate-700 backdrop-blur-md p-4 rounded-2xl shadow-xl"
            >
              <FaReact className="text-cyan-400 text-3xl md:text-4xl" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 bg-slate-900/90 border border-slate-700 backdrop-blur-md p-4 rounded-2xl shadow-xl"
            >
              <FaNodeJs className="text-green-500 text-3xl md:text-4xl" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-20 right-2 md:right-5 bg-slate-900/90 border border-slate-700 backdrop-blur-md p-4 rounded-2xl shadow-xl"
            >
              <SiMongodb className="text-green-500 text-3xl md:text-4xl" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-10 right-2 md:right-5 bg-slate-900/90 border border-slate-700 backdrop-blur-md p-4 rounded-2xl shadow-xl"
            >
              <SiDotnet className="text-purple-400 text-3xl md:text-4xl" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-1/2 -left-2 md:-left-6 bg-slate-900/90 border border-slate-700 backdrop-blur-md p-4 rounded-2xl shadow-xl"
            >
              <SiExpress className="text-white text-3xl md:text-4xl" />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;