import React, {useState} from "react"
import "./ImageUploader.scss";
import Button from "@material-ui/core/Button";
import PreviewImagesList from "../PreviewImagesList/PreviewImagesList";
import Result from "../Result/Result";
import DefaultPhoto from "../../assets/defaultImage.jpg";

const ImageUploader = (props) => {

  const [image, setImg] = useState('');
  const [phase, setPhase] = useState(0);
  const [imageList, setImageList] = useState([]);

  const handleFile = (event) => {
    console.log(event.target.files[0]);
    setImg(URL.createObjectURL(event.target.files[0]));
    console.log(image);
  } 

  const handleSubmit = () =>{
    // Fetch database 
    setPhase(1);
  }

  const handleImageList = (data) =>{
    setImageList(data);
    //Fetch database
    setPhase(2);
  }

  return (
    <div className="main-img-uploader-container">
      <div className="btn-gr">
        <input 
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={handleFile}
        />
        <label htmlFor="contained-button-file">
          <Button 
            variant="contained" 
            className="btn-upload" 
            component="span"  
          >
            Upload
          </Button>
        </label>      
      </div>

      {
        phase === 0 ? 
        <>
          <div className="im-preview">
            <img src={image || DefaultPhoto} alt="preview"/>
            <Button
              variant="contained" 
              className="btn-upload mar" 
              onClick={handleSubmit}
              active={image}
            >
              Continuar
            </Button>
          </div>
        </>
        : ( phase === 1 ? 
          <PreviewImagesList next={handleImageList} />
          : (
            <Result img={image}/> 
          )
        )}


    </div>

  );
};

export default ImageUploader;