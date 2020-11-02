import React from "react"
import "./PreviewImage.scss";
import DefaultImage from "../../assets/defaultImage.jpg"
const PreviewImage = (props) => {
  return (
    <div className="preview-img-container">
      <img 
        src={props.img || DefaultImage} 
        alt={props.name || "default"}
        className="img-default"
      />
    </div>
  );
};

export default PreviewImage;