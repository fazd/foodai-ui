import React, {useState} from "react"
import "./PreviewImage.scss";
import DefaultImage from "../../assets/defaultImage.jpg"
import Tooltip from '@material-ui/core/Tooltip';
import Check from "../../assets/done-24px.svg";

const PreviewImage = (props) => {
  
  const [selected, setSelected] = useState(false);
  
  const handleSelection = (e) => {
    setSelected(!selected);
  }

  return (
    <div className={`preview-img-container ${selected ? 'pressed': ''}`} onClick={handleSelection}>
      <Tooltip onClick={handleSelection} className="selection" title="Add" aria-label="add">
        <div className={selected ? "selected" : "not-selected"}>
          {
          selected ?
            <img src={Check} alt="done" height="25"/>
          : null}
        </div>
      </Tooltip>
      <img 
        src={props.img || DefaultImage} 
        alt={props.name || "default"}
        className="img-default"
      />
    </div>
  );
};

export default PreviewImage;