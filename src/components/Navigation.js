import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/laplace.png";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <Link to="/header">
        Rodrigo <img src={logo} alt="logo" className="logo" /> Zuniga
        </Link>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li>
          {" "}
          <Link to="/header">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/services">Service</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/projects">My Projects </Link>
        </li>

        
      </ul>
      
    </nav>
    

    
    
    
  );
}