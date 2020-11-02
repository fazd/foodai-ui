import React from "react"
import "./ImageUploader.scss";
import Button from "@material-ui/core/Button";
import PreviewImagesList from "../PreviewImagesList/PreviewImagesList";

const ImageUploader = (props) => {
  return (
    <div className="main-img-uploader-container">
      <div className="btn-gr">
        <input 
          accept="image/*"
          id="contained-button-file"
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" className="btn-upload" component="span">
            Upload
          </Button>
        </label>      
      </div>
      <PreviewImagesList />
    </div>

  );
};

export default ImageUploader;