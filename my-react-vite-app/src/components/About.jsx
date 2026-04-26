import React from "react";
import { Link } from "react-router-dom";
import { DiMongodb } from "react-icons/di";
import { FaMobileScreen } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { PiBracketsAngleBold } from "react-icons/pi";
import { SiDotnet } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const About = () => {
  return (
    <div className="mt-18 mb-20 opacity-0 animate-fadeIn abnimation-delay-1000 text-center">
      <h1 className="text-3xl md:text-6xl font-bold text-emerald-400 mb-4 animation-fadeIn">
        About <span className="text-emerald-400">Me</span>{" "}
      </h1>
      <p className="text-gray-300 text-lg">
        Let me introduce myself and what I do
      </p>
      <span className="block h-1 w-16 bg-emerald-400 mx-auto mt-4 rounded-lg mb-20"></span>

      {/* left side */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-20 text-left  px-4 md:px-0">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl mt-10 font-bold text-emerald-400 mb-6">
            A passionate Full-Stack Developer with a keen eye for detail
          </h2>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            A Full-Stack Developer with a strong focus on building scalable,
            secure, and user-friendly applications. I specialize{" "}
            <span className="text-emerald-400">
              in both MERN stack and .NET technologie ,
            </span>
            giving me the flexibility to work across modern web and enterprise
            environments.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            I have hands-on experience developing responsive frontends with
            React and building robust backends
            <span className="text-emerald-400">
              using Node.js, Express, and ASP.NET MVC.
            </span>{" "}
            I’ve also worked on authentication systems, RESTful APIs, and
            database management using MongoDB and SQL Server.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Beyond development, I bring experience in testing and quality
            assurance, ensuring applications are reliable, stable, and
            production-ready. I’m comfortable working in collaborative
            environments  <span className="text-emerald-400"> using Git, Agile practices, and Azure DevOps.
         </span>
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            I enjoy solving real-world problems, writing clean and maintainable
            code, <span className="text-emerald-400"> and continuously improving my skills to stay aligned with
            modern development practices.</span>
          </p>

          <button
            className="bg-emerald-500 text-white rounded-full px-6 py-2 cursor-pointer transition duration-300 ease-in-out 
          hover:scale-105 hover:shadow-lg hover:bg-emerald-600"
          >
            <Link to='/contact'>Let’s Connect →</Link>
          </button>
        </div>

        {/* rightside */}

        <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6  my-auto ">
         <div className="flex flex-col  items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
            <SiDotnet className="text-purple-500 text-5xl mb-2" />
            <span className="text-blue-300">.Net</span>
          </div>

           <div className="flex flex-col  items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
           <FaDatabase className="text-blue-400 text-5xl mb-2" />
            <span className="text-blue-300">SQL</span>
          </div>

            <div className="flex flex-col  items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
<SiExpress className="text-gray-300 text-5xl mb-2" />
            <span className="text-blue-300">Express</span>
          </div>

          <div className="flex flex-col items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
            <DiMongodb className="text-green-500 text-5xl mb-2" />
            <span className="text-green-500">MongoDB</span>
          </div>

          <div className="flex flex-col  items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
            <FaReact className="text-cyan-400 text-5xl mb-2" />
            <span className="text-blue-300">React</span>
          </div>

          <div className="flex flex-col items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
            <FaMobileScreen className="text-blue-400 text-5xl mb-2" />
            <span className="text-blue-400">Responsive</span>
          </div>

          <div className="flex flex-col items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
            <IoLogoJavascript className="text-yellow-400 text-5xl mb-2" />
            <span className="text-yellow-500">JavaScript</span>
          </div>

          <div className="flex flex-col items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
            <PiBracketsAngleBold className="text-purple-400 text-5xl mb-2" />
            <span className="text-purple-300">Code</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
