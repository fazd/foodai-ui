import React, {useEffect, useState} from "react";
import "./CardImage.scss";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import * as ImageService from "../../services/ImageService";


const CardImage = (props) => {

  const [image, setImage]= useState();
  const [open, setOpen] = React.useState(false);
  const [total, setTotal] = useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let aux = props.img.img;
    aux = aux.replaceAll("\n","");
    setImage(aux);
    const formData = new FormData();
    formData.append("check",props.cat);  
    ImageService.getEstimation(formData).then(
      (response) => {
        console.log(response);
        setTotal(response);
    });

  },[props.img, props.cat]);

  const handleInfo = () => {
    setOpen(true);
  };

  return(
    <div className="card-image-container">
      <img src={"data:image/jpeg;base64,"+image} alt={props.name} onClick={handleInfo} />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Información Calorica"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Este plato de comida contiene:
            <ul>
              {
                props.cat.map(cat => {
                  return (
                    <li key={cat} >{cat}</li>
                  );
                })
              }
            </ul>
            Con un total de {total} calorias.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
};

export default CardImage;
