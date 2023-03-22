import React from "react";
import NavBar from './NavBar';
import Banner from './Banner';
import AboutMe from './AboutMe';
import { FaLinkedin } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { BsGithub, BsFileEarmarkPerson} from "react-icons/bs"
import pdf from "./cv.pdf"

const HomePage = ({theme, setTheme}) => {
    return(
        <body>
        <NavBar theme = {theme} setTheme={setTheme}/>
        <div className='content'>
          <Banner />
          <AboutMe />
        </div>
        <div className= 'content-2'>
          <a href = "https://github.com/artur-weclawski" target="_blank"><BsGithub className='BsGithub'/></a>
          <a href = "/my-page" target="_blank"><FaLinkedin className='FaLinkedin'/></a>
          <a href = "mailto: weclawski.artur@gmail.com"><SiMaildotru className='SiMaildotru'/></a>
          <a href = {pdf}><BsFileEarmarkPerson className='BsFileEarmarkPerson'/></a>
        </div> 
        <div className="Footer" onClick={()=>navigator.clipboard.writeText("weclawski.artur@gmail.com")}>weclawski.artur@gmail.com</div>
      </body>
    )
}

export default HomePage;