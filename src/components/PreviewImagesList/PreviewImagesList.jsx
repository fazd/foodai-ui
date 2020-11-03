import React, {useState, useEffect} from "react"
import "./PreviewImagesList.scss";
import PreviewImage from "../PreviewImage/PreviewImage"; 
import DefaultImage from "../../assets/defaultImage.jpg";
import Button from "@material-ui/core/Button";


const PreviewImagesList = (props) =>{
  
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [photos, setPhotos] = useState([]);

  const infoPrueba = [
    { id: "0", img: DefaultImage},
    { id: "1", img: DefaultImage},
    { id: "2", img: DefaultImage},
    { id: "3", img: DefaultImage},
    { id: "4", img: DefaultImage},
    { id: "5", img: DefaultImage},
    { id: "6", img: DefaultImage},
    { id: "7", img: DefaultImage},
    { id: "8", img: DefaultImage},
    { id: "9", img: DefaultImage},
    { id: "10", img: DefaultImage},
    { id: "11", img: DefaultImage},
    { id: "12", img: DefaultImage},
    { id: "13", img: DefaultImage},
    { id: "14", img: DefaultImage},
    { id: "15", img: DefaultImage},
    { id: "16", img: DefaultImage},
    { id: "17", img: DefaultImage},
    { id: "18", img: DefaultImage},
    { id: "19", img: DefaultImage},
    { id: "20", img: DefaultImage},
    { id: "21", img: DefaultImage},
    { id: "22", img: DefaultImage},
    { id: "23", img: DefaultImage},
    { id: "24", img: DefaultImage},
  ];


  useEffect(() =>{
    setPhotos(infoPrueba);
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
    props.next(selectedPhotos);
  }

  return (
    <div className="preview-main-container">
      <div className="images">
        {
          photos.map( (photo) =>  {
            return(
              <PreviewImage key={photo.id} photo={photo} selectCall={handlePhotosUpdate} />
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