import React from "react";
import NavBar from './NavBar';
import Banner from './Banner';
import AboutMe from './AboutMe';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
const HomePage = ({theme, setTheme}) => {
    return(
        <body>
        <NavBar theme = {theme} setTheme={setTheme}/>
        <div className='content'>
          <Banner />
          <AboutMe />
        </div>
        <div className= 'content-2'>
          <a href="https://github.com/artur-weclawski" target="_blank"><FaGithub className='FaGithub'/></a>
          <a href="/my-page" target="_blank"><FaLinkedin className='FaLinkedin'/></a>
          <a href = "mailto: weclawski.artur@gmail.com"><SiMaildotru className='SiMaildotru'/></a>
        </div> 
        <div className="Footer" onClick={()=>navigator.clipboard.writeText("weclawski.artur@gmail.com")}>weclawski.artur@gmail.com</div>
      </body>
    )
}

export default HomePage;