const NavLinks = () => {
    return(
        <nav className="NavLinks">
        <ul>
            <li>
                <a href="/my-page" className="home-a"><p className='navbar-gt'>&gt;</p>Home</a>
            </li>
            <li>
                <a href="/my-page" className="projects-a"><p className='navbar-gt'>&gt;</p>Projects</a>
            </li>
        </ul>
        </nav>
    );
}

export default NavLinks;