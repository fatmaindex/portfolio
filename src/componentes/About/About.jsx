import React ,{useEffect} from 'react'
import './About.scss'
import {ReactComponent as AboutImg} from './../../Assets/undraw_online_resume_re_ru7s.svg'
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function About() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with desired settings
  }, []);
  return (
   <section className=' About container section' id='aboutSec'>
    <h1 className='aboutTitle'>about <span>me</span></h1>
    <div className="content">
        <div className="leftDiv"data-aos="fade-right">
            <h2>Fatma Gamal</h2>
            <h1>  <Typewriter
            words={['Front-end developer', 'React.js developer',  'Computer engineering student']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2500}
           
          /></h1>
            <div className="info"><p>I'm studying Computers engineering at Al-Azhar University.</p>
           <p> I'm a passionate, self-taught developer with front-end experience. </p>
       <p>   Constantly looking for new challenges that allow me to expand my knowledge and improve my skills.</p> 
          <p>Combining creativity and technical knowledge, I am committed to delivering high-quality solutions that meet customer needs. </p> 
            </div>

        </div>
        <div className="rightDiv" data-aos="fade-left">
            <AboutImg/>
        </div>
    </div>
   </section>
  )
}

export default About
