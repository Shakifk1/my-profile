import * as React from 'react'
import "./Intro.css"
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { Link } from 'react-scroll'
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode?"white":""}}>hy! I Am</span>
          <span>Md Shakif Quaraishi</span>
          <span>Frontend Develover with High Level of Experiance in Web Designing and Development Producting the Quality Work</span>
        </div>
        <Link spy={true} to="Contact" smooth={true}><button className="button i-button">Hire Me</button></Link>
        <div className="i-icons">
          <a href="https://github.com/Shakifk1" target='_blank' rel="noreferrer"><img src={Github} alt="404" /></a>
          <a href="https://www.linkedin.com/in/md-shakif-quaraishi/" target='_blank' rel="noreferrer"><img src={Linkedin} alt="404" /></a>
          <a href="https://www.instagram.com/shakifk1/" target='_blank' rel="noreferrer"><img src={Instagram} alt="404" /></a>
        </div>

      </div>
      <div className="i-right">
        <img src={Vector1} alt="404" />
        <img src={Vector2} alt="404" />
        <img src={boy} alt="404" />
        <img className='coolEmoji' src={glassesimoji} alt="404" />
        <div style={{top:"4%",left:"68%"}}className='floating-div'>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{top:"18rem",left:"0rem"}} className='floating-div'>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* blur divs */}
        <div className="blur" style={{background:"rgb(238 210 255"}}></div>
        <div className="blur" style={{background:"#C1F5FF",top:"17rem",width:"21rem",height:"11rem",left:"-9rem"}}></div>
      </div>
    </div>
  )
}

export default Intro