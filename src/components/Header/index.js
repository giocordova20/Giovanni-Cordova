import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"


function Header(props) {
  return (
      <Jumbotron className="animate__animated animate__fadeIn">
          {props.children}
      </Jumbotron>

    // <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    //   {props.children}
    // </div>
  );
}

export default Header;