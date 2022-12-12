import "./HeroImgStyle.css"

import React from 'react'

import IntroImg from "../assets/intro-back.jpg"
import { Link } from "react-router-dom"
import ProfilePic from "../assets/Kanad/Kanad.jpeg"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt ="into-img"/>
        </div>

        <div className="content">
            <img src={ProfilePic} alt="kanad" className="Profile"/>
            <p>hi, I am Kanad baran Biswas</p>
            <h1>Full Stack Web Developer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg