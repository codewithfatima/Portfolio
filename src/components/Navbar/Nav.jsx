import React from 'react'
import {AiOutlineHome}  from 'react-icons/ai'
import {AiOutlineUser}  from 'react-icons/ai'
import {BiBook}  from 'react-icons/bi'
import {RiServiceLine}  from 'react-icons/ri'
import {BiMessageSquareDetail}  from 'react-icons/bi'
import './nav.css'
import { useState } from 'react'

const Nav=()=>{

    const [activeNav , setActiveNav] = useState('#')
    return(
        <nav>
        <a href="#"  onClick={() =>setActiveNav('#')} className={activeNav === '#' ? 'active' :''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' :''}><AiOutlineUser/></a>
        <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' :''}><BiBook/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' :''}><RiServiceLine/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :''}><BiMessageSquareDetail /></a>
        </nav>
    )

}


export default Nav;

