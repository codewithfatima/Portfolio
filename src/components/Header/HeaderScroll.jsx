import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderScroll= () =>{
  return(
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/fatimanaeem32/" target="_blank"><BsLinkedin/></a>
       <a href="https://github.com/codewithfatima" target="_blank"><FaGithub/></a>
       <a href="https://www.upwork.com/freelancers/~0110ab61d7979ee53d" target="_blank"><FiDribbble/></a>
    </div>
  )

}


export default HeaderScroll