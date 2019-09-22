import React from "react";
import "./style.css";

function PictureCard(props) {
  return (
    <div className="image">
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
      
    </div>
  );
} 

export default PictureCard;
