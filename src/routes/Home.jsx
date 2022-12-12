import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg  from '../Components/HeroImg'
import Gitgraph from '../Github/Gitgraph'
import GitStats from '../Github/GitStats'
import "./HomeStyle.css";
import TechSkills from '../Github/TechSkills'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <div className='git'>
        <TechSkills/>
        <Gitgraph/>
        <h2>My Github Status</h2>
        <GitStats/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home