import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Banner from './Banner';
import AboutMe from './AboutMe';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
    <NavBar />
    <div className='content'>
      <Banner />
      <AboutMe />
    </div>
    <div className= 'content-2'>
      <a href="https://github.com/artur-weclawski" target="_blank"><FaGithub className='FaGithub'/></a>
      <a href="/my-page" target="_blank"><FaLinkedin className='FaLinkedin'/></a>
      <a href = "mailto: weclawski.artur@gmail.com"><SiMaildotru className='SiMaildotru'/></a>
    </div> 
    <footer onClick={()=>navigator.clipboard.writeText("weclawski.artur@gmail.com")}>
      <p className='footer-gt'>&gt;</p><p>weclawski.artur@gmail.com</p>
    </footer>
  </body>
  a
    </div>
  );
}

export default App;
