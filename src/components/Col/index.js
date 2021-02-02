import React from "react";

function Col(props) {
    console.log("Col props: ", props)
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  const styling=props.style

  return <div className={size} style={styling}>{props.children}</div>;
}

export default Col;
