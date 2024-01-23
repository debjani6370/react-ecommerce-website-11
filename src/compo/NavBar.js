
import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar=()=> {
  
      return (
        <div className="navbar">
        <div className="navbar-brand">Style Corner</div>
        <div className="nav-links">
          <a className="nav-link"> <Link to="/">Home</Link> </a>
          <a className="nav-link"  ><Link to="/prd">Product</Link></a>
          <a className="nav-link" >Contact</a>
        </div>
        <div className="search-bar">
          {/* <button className="login-btn"><Link to="/adminhomepage">Admin</Link></button> */}
          <a className="login-btn"><Link to="/adminhomepage">Admin</Link></a>

        </div>
      </div>


      





  );



  
}

export default NavBar



