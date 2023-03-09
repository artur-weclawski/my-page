import './Navigation.css';
const Navigation = () =>{
    return(
        <div className='navbar'>
        <div  className='navbar-icon'>
          
        <a href='/my-page'><i className="gg-terminal"></i></a>
        </div>
          <a href='/my-page' class='home-a active'><p class='navbar-gt'>&gt;</p>Home</a>
          <a href='/my-page' class='project-a'><p class='navbar-gt'>&gt;</p>Projects</a>
          <div className='dropdown'>
            <button  class='dropbtn'><i className='gg-menu'></i></button>
            <div class="dropdown-content" id="dropdown1">
              <a href='/my-page'><p class='navbar-gt'>&gt;</p>Home</a>
              <a href='/my-page'><p class='navbar-gt'>&gt;</p>Projects</a>
            </div>
          </div>
      </div>
    );
}

export default Navigation