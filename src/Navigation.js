import NavLinks from './NavLinks';
const Navigation = ({theme, setTheme}) =>{

    return(
      <div className='Navigation'>
        <div  className='Navigation-icon'>
          <a href='/my-page'><i className="gg-terminal"></i></a>
        </div>
        <NavLinks theme={theme} setTheme={setTheme}/>
      </div>
    );
}

export default Navigation