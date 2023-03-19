import NavBar from './NavBar';
const Projects = ({theme, setTheme}) =>{
    return(
        <body>
        <NavBar theme = {theme} setTheme={setTheme}/>
        <div className='content'></div>
        <div className="Footer" onClick={()=>navigator.clipboard.writeText("weclawski.artur@gmail.com")}>weclawski.artur@gmail.com</div>
      </body>
    )
}

export default Projects;