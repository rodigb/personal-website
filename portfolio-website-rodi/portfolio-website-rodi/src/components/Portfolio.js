import React, { useEffect } from 'react'
import './Portfolio.css'
 
import 'react-tabs/style/react-tabs.css';
import PortfolioCard from './PortfolioCard'
import projectimage1 from './images/project1.png'
import projectimage2 from './images/project2.png'
import projectimage3 from './images/dtimelogo.png'
import projectimage4 from './images/project4.png'
import projectimage5 from './images/project3.png'
import projectimage6 from './images/project5.png'

import "aos/dist/aos.css"
import Aos from "aos";



function Portfolio() {

    useEffect(() => {
        Aos.init({duration:1000});
      })

  return (
    <div className = 'portfolio-page' id="work"> 
    <div className='portfolio-description'>
        <div className = 'portfolio-box'>
            <h1 className='portfolio-header'><span className="portfolio-num">03. </span>My Work</h1>
            
            <div className='projects-list'>


                <div data-aos="fade-right" className='project' >
                    <a className='project-image'>
                        <PortfolioCard img={projectimage2} 
                        title={"E-Commerce Website"}
                        desc={"E-Commerce peer-to-peer trading website, with live chat and messaging systems where users can create their accounts to upload products and list them for sale. Uses HTML, CSS, PHP and mySQL."}>

                        </PortfolioCard>
                    </a>
 
                    </div>
                <div data-aos="fade-left"  className='project'>
                    <a className='project-image'>
                    <PortfolioCard img={projectimage3} 
                        title={"Dtime Data Search Portal"}
                        desc={"During my time at Dtime, I helped develop a data search portal for querying, searching, filtering and downloading of public datasets via an API to form JSON objects using Python, JavaScript, HTML and CSS with a team using agile software development."}>
                            
                        </PortfolioCard>
                    </a>
                    </div>

                    <div data-aos="fade-right" className='project'>
                    <a className='project-image'>
                    <PortfolioCard img={projectimage1} 
                        title={"My Portfolio Website"}
                        desc={"This website was created to act as my online portoflio. Utilized ReactJS."}>
                            
                        </PortfolioCard>
                    </a>
                </div>

                <div data-aos="fade-left" className='project'>
                    <a className='project-image'>
                    <PortfolioCard img={projectimage6} 
                        title={"Gym Tracking App"}
                        desc={"Developed a mobile application that tracked gym progress such as lifts, with notifications and allows you to compare your lifts to strength standard levels. Utilized Java."}>
                            
                        </PortfolioCard>
                    </a>
                </div>

                
                <div data-aos="fade-right" className='project'>
                    <a className='project-image'>
                    <PortfolioCard img={projectimage5} 
                        title={"Navigation Application"}
                        desc={"A navigation application, where you can add roads, remove roads, add users and compute how much energy is required to reach the destination that utilizes OOP with Java."}>
                            
                        </PortfolioCard>
                    </a>
                </div>

                <div data-aos="fade-left" className='project'>
                    <a className='project-image'>
                    <PortfolioCard img={projectimage4} 
                        title={"Alarm Clock"}
                        desc={"Arduino programmed as an alarm clock / timer. You can set a timer, where the alarm will change colour to red when the time is reached. Can be snoozed or turned off. Utilized C++."}>
                            
                        </PortfolioCard>
                    </a>
                </div>

 
            </div>
        </div>
        </div>
    </div>
  )
}

export default Portfolio