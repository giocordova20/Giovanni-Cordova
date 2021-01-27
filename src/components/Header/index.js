import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"


function Header(props) {
  return (
      <Jumbotron className="animate__animated animate__fadeIn" style={{ background: "rgb(233, 236, 239, .6)", marginTop: "2rem"}}>
          {props.children}
      </Jumbotron>
  );
}

export default Header;