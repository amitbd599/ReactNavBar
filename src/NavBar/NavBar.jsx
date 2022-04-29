import React from 'react';
import './CSS/Navbar.css'
const NavBar = () => {
  return (
    <div>
      <header>
        <a href='#' className="logo">Logo</a>
        <input type="checkbox" id='menuBar' />
        <label htmlFor="menuBar">Menu</label>
        <nav className='mainNavBar'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Page +</a>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Service +</a>
                <ul>
                  <li><a href="#">HTML</a></li>
                  <li><a href="#">CSS</a></li>
                  <li><a href="#">JavaScript</a></li>
                </ul>
              </li>
            </ul>
            </li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;