import React, {useState} from "react"
import "./ImageUploader.scss";
import Button from "@material-ui/core/Button";
import PreviewImagesList from "../PreviewImagesList/PreviewImagesList";
import Result from "../Result/Result";
import Loader from "../Loader/Loader";

import DefaultPhoto from "../../assets/defaultImage.jpg";
import * as ImageService from "../../services/ImageService";

const ImageUploader = (props) => {

  const [image, setImg] = useState('');
  const [imageFile, setImgFile] = useState('');
  const [phase, setPhase] = useState(0);
  const [imageList, setImageList] = useState([]);
  const [estimation, setEstimation] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleFile = (event) => {
    console.log(event.target.files[0]);
    setImgFile(event.target.files[0]);
    setImg(URL.createObjectURL(event.target.files[0]));
    console.log(image);
  } 

  const handleSubmit = () =>{
    const formData = new FormData();
    formData.append("image", imageFile);
    setLoading(true);
    ImageService.uploadImage(formData).then(
      (response) => {
        console.log(response);
        setImageList(response.data.result);
        setLoading(false);
        setPhase(1);
      }
    );

  }

  const handleImageList = (data) =>{
    const formData = new FormData();
    formData.append("image", data);
    setLoading(true);
    ImageService.sendSelectedImage(formData).then(
      (response) => {
        console.log(response);
        setEstimation(response);
        //setImageList(response.data.result);
        setLoading(false);
        setPhase(2);
      }
    );
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
            {loading ? 
              <Loader />
            :
            <>
              <img src={image || DefaultPhoto} alt="preview"/>
              <Button
                variant="contained" 
                className="btn-upload mar" 
                onClick={handleSubmit}
                active={image}
              >
                Continuar
              </Button>
            </>
            }
            
          </div>
        </>
        : ( phase === 1 ?  
            <PreviewImagesList key={imageList.length} loading={loading} imageList={imageList} next={handleImageList} />
          : (
            <Result img={image} estimation={estimation}/> 
          )
        )}


    </div>

  );
};

export default ImageUploader;