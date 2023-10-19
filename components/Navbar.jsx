import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo ">
          <h2>What  <span className='life'>life</span> Is Like</h2>
          <p>by anshika bhardwaj </p>

        </div>
        
        <div>
        <ul className="nav-links">
        
          <NavLink className={"nav-link"} to={"/about"}>About</NavLink>
          <NavLink className={"nav-link"} to={"/fashion"}>Fashion</NavLink>
          <NavLink className={"nav-link"} to={"/beauty"}>beauty</NavLink>
          <NavLink className={"nav-link"} to={"/living"}>Living</NavLink>
          <NavLink className={"nav-link"} to={"/contact"}>Contact</NavLink>
          
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
          
          
          

