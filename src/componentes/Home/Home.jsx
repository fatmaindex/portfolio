import React ,{useEffect} from 'react'
import "./Home.scss"
import { FaTelegramPlane } from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";
import { FaCodeFork } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
// import { ReactComponent as HomeImg } from './../../Assets/undraw_dev_focus_re_6iwt (1).svg'

import { Typewriter } from 'react-simple-typewriter'

import FatmaResume from  "./../../Assets/FatmaResume.pdf"
import FATMA from "./../../Assets/fata-removebg-preview.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// import PG from './../../Assets/cool-background.png'

function Home() {
    React.useEffect(() => {
        AOS.init({ duration: 2000 }); // Initialize AOS with desired settings
      }, []);
    return (
        <section className='Home container section'id='homeSec'>
            <div className="homeContent" data-aos="fade-right">
                <h3>Hello there</h3>
                <h2 className='myName'>I'am <span>Fatma</span> Gamal</h2>
                <h1>  <Typewriter
                    words={['Front-end developer', 'React.js developer', 'Computer engineering student']}
                    loop={Infinity}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}

                /></h1>
                <div className="btnsDiv">
                    <button className='cvBtn'><a href="./../../Assets/FatmaResume.pdf" download>Download CV</a></button>
                    <button className='starBtn'><FaCodeFork />
                        <FaStar /></button>
                </div>
                <div className="iconsDiv">
                <div className="iconDiv">
                        <a href="linkedin.com/in/fatma-gamal-98b297235"> <GrLinkedinOption className='icon' /></a>
                    </div>
                    <div className="iconDiv"><a href="https://github.com/fatmaindex/university.git"><ImGithub className='icon' /></a></div>

                    <div className="iconDiv">
                        <a href=""> <MdOutlineMailOutline className='icon' /></a>
                    </div>
                    <div className="iconDiv"><a href=""><FaTelegramPlane className='icon' /></a></div>
                  




                </div>


            </div>
            <div className="svgDiv" data-aos="fade-left">
                {/* <HomeImg /> */}
                {/* <img className="fatma" src={FATMA} alt="me" /> */}
                <div className="shape">  </div>
            </div>
        </section>
    )
}

export default Home
