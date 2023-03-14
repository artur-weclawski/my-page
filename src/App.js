import './App.css';
import NavBar from './NavBar';
import Banner from './Banner';
import AboutMe from './AboutMe';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { ThemeContext } from './NavLinks';
import { useContext, useState } from 'react';
function App(){
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App" id={theme}>
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
    </div>
  );
}

export default App;
