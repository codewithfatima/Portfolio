import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa';
import { FaSnapchat } from "react-icons/fa6";
// import { FaGitHub } from 'react-icons/fa';

const Footer = () => {
  return (
   <footer>
    <div className="footer__socials">
      {/* <a href="https://Githb.com"><FaGitHub/></a> */}
      <a href="https://Linkedin.com"><FaLinkedin/></a>
      <a href="https://snapchat.com"><FaSnapchat /></a>
      {/* <a href="https://render.com"><FiInstagram/></a> */}
                                      
    </div>

    <div className="footer__copyright">
      <small>&copy; Fatima Naeem. All rights resvered. </small>
    </div>

   </footer>
  )
}

export default Footer