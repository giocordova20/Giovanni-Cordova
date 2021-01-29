import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

    const [aboutWorkLink, setAboutWork] = useState("/mywork");

  return (
    // <nav className="navbar navbar-expand-lg  navbar-light">
      <div>
        <ul className="nav">
          <li className="nav-item"
               onClick={() => setAboutWork(window.location.pathname === "/mywork" ? "/" : "/mywork")} > 
            <Link
              to={aboutWorkLink}
            >
              {window.location.pathname === "/" ? "My Work " : "About Me "}
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
    // </nav>
  );
}

export default Navbar;
