import './Navigation.css';
import NavLinks from './NavLinks';
const Navigation = () =>{
    return(
      <div className='Navigation'>
        <div  className='Navigation-icon'>
          <a href='/my-page'><i className="gg-terminal"></i></a>
        </div>
        <NavLinks />
      </div>
    );
}

export default Navigation