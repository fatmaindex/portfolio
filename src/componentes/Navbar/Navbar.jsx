import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import "./Navbar.scss"
import { IoCloseSharp } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from 'react-scroll';
import {ReactComponent as Logo} from './../../Assets/fatmalogo.svg'




function Navbar() {
    const [nav, setnav] = useState("nav");

    const showNav = () => {
        setnav("nav active");
    };
    const hideNav = () => {
        setnav("nav ");
    };

    return (
        <header className='Navbar container'>
            <div className="logoDiv">
                <Logo />
            </div>
            <div className={nav}>
                <IoCloseSharp className='closeicon' onClick={hideNav} />

                <li><Link   smooth={true} duration={500} to="homeSec">Home</Link></li>

                <li><Link   smooth={true} offset={-30} duration={500} to="aboutSec">About</Link></li>
                <li><Link   smooth={true} offset={-50} duration={500} to="projectsSec">Projects</Link></li>
                <li><Link   smooth={true} offset={-50} duration={500} to="skillsSec">Skills</Link></li>
                <li><Link   smooth={true} offset={-50} duration={500} to="servicesSec">Services</Link></li>
                <li><Link   smooth={true} offset={-50} duration={500} to="contactSec">Contact </Link></li>
                <button className='cvBtn'><a href="./../../Assets/FatmaResume.pdf" download>Download CV</a></button>

            </div>
            <VscThreeBars className='barsIcon' onClick={showNav} />


        </header>
    )
}

export default Navbar
