import "./ProjectCardStyle.css";
import pro1 from "../assets/fab_bag.JPG";
import pro2 from "../assets/SugarCosmetics.JPG";
import pro3 from "../assets/Zee5.JPG";

import React from 'react';
import { FaRegPaperPlane } from "react-icons/fa";
import { GoOctoface } from "react-icons/go";

const ProjectCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            
            {/* project one "fab bag"*/}
            <div className="card">
                <h2>Fab Bag</h2>
                <img src={pro1} alt="project1"/>
                <div className="bt">
                    <a className="anc" href="https://github.com/nilamkhose2001/courageous-bee-260.git">
                        <GoOctoface/>CodeBase
                    </a>
                    <a className="anc" href="https://sunny-macaron-712b25.netlify.app/">
                        <FaRegPaperPlane/> Go Live
                    </a>
                </div>
            </div>

            {/* Project tow "sugar cosmetics"*/}
            <div className="card">
                <h2>SugarCosmetics</h2>
                <img src={pro2} alt="project2"/>
                <div className="bt">
                    <a className="anc" href="https://github.com/Sirajuddin135/sugarCosmetics.git">
                        <GoOctoface/>CodeBase
                    </a>
                    <a className="anc" href="https://magnificent-cajeta-cee871.netlify.app">
                        <FaRegPaperPlane/> Go Live
                    </a>
                </div>
            </div>
            
            {/* Project three "zee5"*/}
            <div className="card">
                <h2>Zee5</h2>
                <img src={pro3} alt="project3"/>
                <div className="bt">
                    <a className="anc" href="https://github.com/kriti4666/ZEE-5-Project.git">
                        <GoOctoface/>CodeBase
                    </a>
                    <a className="anc" href="https://zee5clone.netlify.app">
                        <FaRegPaperPlane/> Go Live
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;