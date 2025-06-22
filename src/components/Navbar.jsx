import React from 'react';
// import './Navbar.css'; 
import logo from "../../src/assets/Netflix-Logo.wine.png"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 py-3 w-100">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Netflix Logo" height="50" />
        </a>
        <div className="d-flex align-items-center gap-4">
          <ul className="navbar-nav flex-row gap-3">
            <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">TV Shows</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Movies</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Latest</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">My List</a></li>
          </ul>
          <button className="btn btn-danger">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
