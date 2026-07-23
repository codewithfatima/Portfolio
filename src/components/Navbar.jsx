import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";


const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/project" },
  { name: "Tech Stack", path: "/tech" },
  { name: "Contact", path: "/contact" },
];


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (


    <nav className="
fixed
top-0
left-0
w-full
z-50
px-4
md:px-10
py-3
">

      <div className="max-w-7xl mx-auto bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl px-6 py-3 flex justify-between items-center">


        {/* Logo */}

        <Link to="/" className="text-2xl font-bold tracking-wide">
          <span className="text-white">FN</span>
          <span className="text-emerald-400">.</span>
        </Link>



        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => (

            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition duration-300 ${isActive
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-emerald-400"
                }`
              }
            >
              {link.name}
            </NavLink>

          ))}

        </div>




        {/* Desktop Button */}

        <Link
          to="/contact"
          className="hidden md:block bg-emerald-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-600 hover:scale-105 transition shadow-lg shadow-emerald-500/20"
        >
          Let's Talk →
        </Link>




        {/* Mobile Button */}

        <button
          className="md:hidden text-emerald-400"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={25} />
        </button>


      </div>





      {/* Mobile Menu */}

      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-slate-950/95 backdrop-blur-xl border-l border-white/10 transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >


        <div className="flex justify-end p-6">

          <button onClick={() => setIsOpen(false)}>

            <IoCloseSharp
              size={30}
              className="text-emerald-400"
            />

          </button>

        </div>



        <div className="flex flex-col gap-8 px-8 mt-10">

          {links.map((link) => (

            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-xl text-gray-300 hover:text-emerald-400 transition"
            >
              {link.name}
            </Link>

          ))}



          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-emerald-500 text-center py-3 rounded-full font-semibold"
          >
            Let's Talk
          </Link>


        </div>


      </div>


    </nav>

  );
};


export default Navbar;