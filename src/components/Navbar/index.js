import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

    // const [aboutWorkLink, setAboutWork] = useState("");
    const [aboutWorkLink, setAboutWork] = useState({ path: "", label: ""});
    const [aboutWorkTitle, setAboutWorkTitle] = useState("");

 
    // function AboutWorkLink (){
    //     if (window.location.pathname === "/"){
    //         return "/mywork"
    //     } else if (window.location.pathname === "mywork") {
    //         return "/"
    //     }
    // }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <Link className="navbar-brand" to="/">
        Pupster
      </Link> */}
      <div>
        <ul className="navbar-nav">
          <li className="nav-item"
            //    onClick={() => setAboutWork(window.location.pathname === "/" ? "mywork" : "/")} > 
               onClick={() => setAboutWork(window.location.pathname === "/" ? "mywork" : "/")} > 
            <Link
              to={aboutWorkLink}
            //   className={ window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              {/* My Work */}
              {window.location.pathname === "/" ? "My Work" : "About Me"}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="https://github.com/giocordova20"
            //   className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              GitHub
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="https://www.linkedin.com/in/giovanni-cordova-aa40b94/"
            //   className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
