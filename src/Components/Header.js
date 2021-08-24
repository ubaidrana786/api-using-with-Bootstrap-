import React from "react";
export default function Header(props) {
  const bg = {
    backgroundImage: 'url("Img/'+props.back+'")',
    // backgroundRepeat: "no-repeat",
    height: "600px",
    width: "100%",
    // marginTop: "-5rem",
  };
  return <div style={bg}></div>;
}
