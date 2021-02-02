import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

    const [aboutWorkLink, setAboutWork] = useState("/mywork");

  return (
      <div>
        <ul className="nav" style={{marginBottom: "2rem"}}>
          <li className="nav-item"> 
            <Link
              to="/"
            >
              About Me
            </Link>
          </li>

          <li className="nav-item"
               onClick={() => setAboutWork(window.location.pathname === "/mywork" ? "/" : "/mywork")} > 
            <Link
              to={aboutWorkLink}
            >
              My Work
            </Link>
          </li>

          <li className="nav-item">
            <a href="https://github.com/giocordova20" target="_blank" rel="noreferrer">GitHub</a>
          </li>

          <li className="nav-item" >
            <a href="https://www.linkedin.com/in/giovanni-cordova-aa40b94/" rel="noreferrer" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
  );
}

export default Navbar;
