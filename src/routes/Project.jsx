import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import ProjectCard from '../Components/ProjectCard'

const Project = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading = "Projects" text ="Here, I Have Shown my Project works"/>
        <ProjectCard/>
        <Footer/>
    </div>
  )
}

export default Project