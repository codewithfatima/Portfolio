import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSnapchat } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-6 text-center">
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a
          href="https://github.com/codewithfatima"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/fatimanaeem32"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://snapchat.com/add/fatoomm26"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition"
        >
          <FaSnapchat />
        </a>
      </div>

      <div className="text-center mt-4">
        <p className="text-md text-gray-300 font-bold ">
          &copy; {new Date().getFullYear()} Fatima Naeem. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
