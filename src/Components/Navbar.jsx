import "./NavbarStyle.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"
import  { FaBars, FaTimes }  from "react-icons/fa";
import Resume from "../assets/Kanad/KanadResume.pdf"


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = ()=>{
        setClick(!click);
    }

    const [color, setColor] = useState(false);
    
    const changeColor = () =>{
        if(window.scrollY >= 1){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor )

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Kanad.</h1>
        </Link>

        <ul className={click ?"nav-menu hip" :"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <a href={Resume} target=" " download ={"Kanad baran biswas Reusme"}>
                    Resume
                </a>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                <FaTimes size={30} style={{color: "#fff"}} />
            ):
             <FaBars size={30} style={{color: "#fff"}} />
            }
        </div>
    </div>
  )
}

export default Navbar