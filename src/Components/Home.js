import React from "react";

export default function Home(props) {
  return (
    <div className="container">
   
      <div className="m-5">
      {props.children}
      
      </div>
    </div>
  );
}
