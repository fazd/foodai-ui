import React, {useState, useEffect} from "react"
import "./PreviewImagesList.scss";
import PreviewImage from "../PreviewImage/PreviewImage"; 
import Button from "@material-ui/core/Button";


const PreviewImagesList = (props) =>{
  
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() =>{
    setPhotos(props.imageList);
    console.log(props.imageList);
  }, []);

  const handlePhotosUpdate = (data) =>{
    let aux = selectedPhotos;
    const idx = aux.findIndex(dt => dt === data);
    if(idx !== -1){
      aux.splice(idx,1);
    }
    else{
      aux.push(data);
    }
    setSelectedPhotos(aux);
  }


  const handleSubmit = () =>{
    console.log(selectedPhotos);
    props.next(selectedPhotos);
  }

  return (
    <div className="preview-main-container">
      <div className="images">
        {
          photos.map( (photo) =>  {
            return(
              <PreviewImage key={photo.name} name={photo.name} photo={photo.img} selectCall={handlePhotosUpdate} />
            );
          })
        }
      </div>
      <div className="btn-place">
        <Button
          variant="contained" 
          className="btn-phase" 
          component="span" 
          onClick={handleSubmit}
        >
          Estimar
        </Button>

      </div>
      
    </div>
  );
};

export default PreviewImagesList;