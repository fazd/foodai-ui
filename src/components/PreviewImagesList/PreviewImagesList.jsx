import React, {useState, useEffect} from "react"
import "./PreviewImagesList.scss";
import PreviewImage from "../PreviewImage/PreviewImage"; 
import Button from "@material-ui/core/Button";
import Loader from "../Loader/Loader";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const PreviewImagesList = (props) =>{
  
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
    console.log(aux.length);
    if(aux.lenght <= 0){
      setDisabled(true);
    }else{
      setDisabled(false);
    }
    setSelectedPhotos(aux);

  }


  const handleSubmit = () =>{
    if(selectedPhotos.length === 0){
      setOpen(true);
    }
    else{
      console.log(selectedPhotos);
      props.next(selectedPhotos);

    }
  }

  return (
    <div className="preview-main-container">
      {
        props.loading ? 
          <Loader />
        :
          <>
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
              disabled={disabled}
            >
              Estimar
            </Button>

          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              Selecciona al menos una imagen
            </Alert>
          </Snackbar>
          </>
      }
    </div>
  );
};

export default PreviewImagesList;