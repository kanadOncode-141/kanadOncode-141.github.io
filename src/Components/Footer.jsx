
import React from 'react'
import { FaGithub, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import "./FooterStyle.css"

const Footer = () => {
  return (
    <div className='footer'>
         <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <SiGooglemaps size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Nadia, West Bengal</p>
                        <p>INDIA</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    +91 8926585563</h4>    
                </div>
                <div className='email'>
                    <h4><AiOutlineMail size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    kanad93cod@gmail.com</h4>    
                </div>
            </div>
            <div className='right'>
                <h4>About</h4>
                <p>I am a Profetional Full Stack Web Developer</p>
                <div className='social'>
                    
                    <a href='https://www.linkedin.com/in/kanad-baran-biswas-a73450231/' target="_blank" rel="noreferrer">
                        <FaLinkedin size={35} style={{color:"#fff", marginRight:"2rem"}}/>  
                    </a>

                    <a href='https://github.com/kanadOncode-141' target="_blank" rel="noreferrer">
                        <FaGithub size={35} style={{color:"#fff", marginRight:"2rem"}}/>
                    </a>
                    <a href='https://twitter.com/kanadbaranbiswa' target="_blank" rel="noreferrer">
                        <FaTwitter size={35} style={{color:"#fff", marginRight:"2rem"}}/>
                    </a>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Footer;