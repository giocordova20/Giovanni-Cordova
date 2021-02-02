// import React from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import "./style.css"


// function Header(props) {
//   return (
//       <Jumbotron className="animate__animated animate__fadeIn" style={{ background: "rgb(233, 236, 239, .6)", marginTop: "2rem"}}>
//           {props.children}
//       </Jumbotron>
//   );
// }


import React from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css"

function Header(props) {
  
  console.log("header props: ", props);

  return (
      // <div className="jumbotron animate__animated animate__fadeIn" style={{ background: "rgb(233, 236, 239, .6)", marginTop: "2rem"}}>
      <div className={props.className} style={props.style}>
          {props.children}
      </div>
  );
}


export default Header;