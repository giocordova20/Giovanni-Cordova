import React from "react";

function Row(props) {
  console.log({props})
  return <div className="row">{props.children} style={props.style}</div>;
}

export default Row;
