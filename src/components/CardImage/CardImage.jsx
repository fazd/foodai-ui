import React from "react";
import "./CardImage.scss";
import Default from "../../assets/defaultImage.jpg";
const CardImage = (props) => {
  return(
    <div className="card-image-container">
      <img src={Default} alt=""/>
      
    </div>
  );
};

export default CardImage;
