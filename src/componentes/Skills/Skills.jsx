import React ,{useEffect}from 'react'
import "./Skills.scss"
import { SiVisualstudiocode } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

import { FaReact } from "react-icons/fa";

import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineCss } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";


import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

import AOS from 'aos';
import 'aos/dist/aos.css'; 


function Skills() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with desired settings
  }, []);
  return (
    <section className='Skills container section' id='skillsSec'>
        <h1 className='skillsTitle'>Profisional <span>Skillset</span></h1>
        <div className="skillsDiv">

        <div className="firstRow" data-aos="fade-up">
            <div className="skillCard">

            <FaBootstrap />

            </div>
            <div className="skillCard">
                
            <FaSass />

                </div>
                <div className="skillCard">
                <SiVisualstudiocode />


                </div>
                <div className="skillCard">
                
                <FaHtml5 />


                </div>

                <div className="skillCard">
                
                <TbBrandCpp />

                </div>
                <div className="skillCard">
                
                <SiPostman />


                </div>

 </div>
                <div className="secondRow" data-aos="fade-up">
                <div className="skillCard">
                
                <FaJava />

                </div>
                <div className="skillCard">
                
                <IoLogoGithub />

                </div>
                <div className="skillCard">
                <IoLogoJavascript />


                </div>
                <div className="skillCard">
                <FaReact />


                </div>
                <div className="skillCard">
                <MdOutlineCss/>

                </div>
                </div>
                </div>
    </section>
  )
}

export default Skills
