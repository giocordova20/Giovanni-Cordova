import React from "react";

function Row(props) {
  console.log({props})
  return <div className="row" style={props.style}>{props.children} </div>;
}

export default Row;
