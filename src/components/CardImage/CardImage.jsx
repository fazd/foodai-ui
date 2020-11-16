import React from "react";
import "./CardImage.scss";
import Default from "../../assets/defaultImage.jpg";
const CardImage = (props) => {

  const handleInfo = () => {
    //setInfo(true);
  }

  return(
    <div className="card-image-container" onClick={handleInfo}>
      <img src={Default} alt=""/>
    </div>
  );
};

export default CardImage;
