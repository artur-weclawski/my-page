import NavBar from './NavBar';
import Slider from './Slider';
import './Projects.css'
const Projects = ({theme, setTheme}) =>{
  const slides = [{url: "", title: "image-1"},
                  {url: "", title: "image-2"},
                  {url: "", title: "image-3"}]
    return(
        <body>
        <NavBar theme = {theme} setTheme={setTheme}/>
        <div className='content'>
          <div className='slider'>
          <Slider slides={slides}/>
          </div>
        </div>
        <div className="Footer" onClick={()=>navigator.clipboard.writeText("weclawski.artur@gmail.com")}>weclawski.artur@gmail.com</div>
      </body>
    )
}

export default Projects;