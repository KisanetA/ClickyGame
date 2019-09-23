import React from "react";
import "./style.css";

const PictureCard= props =>( 
    <div className="image" onClick={()=> props.clickCount(props.id)}>
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
      
    </div>
  );
 

export default PictureCard;
