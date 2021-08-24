import React from "react";

export const Previewfetch = (props) => {
  return (
    
      <div className="m-5">
        <button type="button" className="btn btn-danger" onClick={props.dlete}>Dlete</button>
        <h3 className="text-center">{props.title}</h3>
        <div>
        <p>{props.body} </p>
        </div>
      </div>
  
  );
};
