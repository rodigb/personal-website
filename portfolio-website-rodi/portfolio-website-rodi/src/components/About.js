import React from 'react'
import './About.css'
import './Home.css'
import Avatar from './Avatar'
 
import { withIsVisible } from 'react-is-visible'
import  { FaHtml5,  FaJs, FaCss3, FaReact, FaCloud, FaDatabase, FaPython, FaGitAlt } from 'react-icons/fa'


function About() {



  return (
    <div className = 'about-page' id="about"> 
    <div className = "about-background"></div>

     
     
    <div className = "about-description">
      
    <h1 className="about-header"><span className="header-num">02. </span>About Me</h1>
    <div className="about-box">
      
      <div className="about-textarea">
      
      <p>Hey! I'm Rodi and I am a recent computer science graduate
        from the university of Loughborough. I am a full-stack web
        developer currently based in London.
      </p>

      <p>Technologies I've Worked With Recently</p>

      <div className="skills-grid">
      <div className="skill-icon"><h1><FaHtml5></FaHtml5></h1>
      <span className="tooltip">HTML</span>
      </div>
      <div className="skill-icon"><h1><FaJs></FaJs></h1>
      <span className="tooltip">JavaScript</span></div>
      
      <div className="skill-icon"><h1><FaCss3></FaCss3></h1>
      <span className="tooltip">CSS</span></div>
      <div className="skill-icon"><h1><FaReact></FaReact></h1>
      <span className="tooltip">ReactJS</span></div>
      <div className="skill-icon"><h1><FaCloud></FaCloud></h1>
      <span className="tooltip">GCP</span></div>
      <div className="skill-icon"><h1><FaDatabase></FaDatabase></h1>
      <span className="tooltip">SQL</span></div>
      <div className="skill-icon"><h1><FaPython></FaPython></h1>
      <span className="tooltip">Python</span></div>
      <div className="skill-icon"><h1><FaGitAlt></FaGitAlt></h1>
      <span className="tooltip">Git</span></div>
      
      
 
      
       

      </div> 
      </div>
      <div className="about-avatar-area">
    <div className="about-avatar">
    <Avatar></Avatar>
    
    </div>
    </div>

    </div>

      <div className = "about-images">
      



    </div>

 
    </div>
 
    </div>
    
  )
}

export default About