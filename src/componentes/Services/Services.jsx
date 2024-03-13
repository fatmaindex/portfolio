import React, { useEffect } from 'react'
import "./Services.scss"
import { FaReact } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactComponent as Img1 } from './../../Assets/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_m6dn.svg'
import { ReactComponent as Img2 } from './../../Assets/icon-front (1).svg'
import { ReactComponent as Img3 } from './../../Assets/icon-app-design.svg'

function Services() {
    React.useEffect(() => {
        AOS.init({ duration: 2000 }); // Initialize AOS with desired settings
    }, []);
    return (
        <section className='Services container section' id='servicesSec'>
            <h1 className='secTitle'>Services </h1>
            <div className="mainDiv">
                <div className="servicCard" data-aos='fade-up' data-aos-duratio='3000'>
                    <div className="iconDiv">
                        <FaReact className='icon' />
                    </div>

                    <div className='servicName'>
                        <h3 >Front-end development</h3>
                    </div>             
                    <div className="servic">
<p>
                       As a Front-end developer, I would love to develope any front-end application
                        using React and its libraries.
                        </p>
                    </div>
                </div>
                <div className="servicCard" data-aos='fade-up' data-aos-duratio='4000'>
                    <div className="iconDiv">
                        <Img2 />

                    </div>
                    <div className='servicName'>
                        <h3 >Responsiv</h3>

                    </div>          
                        <div className="servic">
                   <p>
                            As a Front-end developer, I would love to develope any front-end application
                            using React and its libraries.
                            </p>
                    </div>
                </div>
                <div className="servicCard" data-aos='fade-up' data-aos-duratio='5000'>

                    <div className="iconDiv">
                        <Img3 />
                    </div>

                    <div className='servicName'>
                        <h3 > Animation</h3>
                    </div>

                    <div className="servic">
                         <p>
                        I create interactions that convey a feeling of modernity,
                        in addition to attracting the user's attention.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
