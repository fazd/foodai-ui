import React, { useState } from "react"
import { withStyles } from '@material-ui/core/styles';
import DefaultImage from "../../assets/defaultImage.jpg";
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { CircularProgressbar } from 'react-circular-progressbar';

import * as ImageService from "../../services/ImageService";


import 'react-circular-progressbar/dist/styles.css';
import "./Result.scss"



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);



const Result = (props) => {
  const [checked, setChecked] = useState({
    One: false,
    Two: false,
    Three: false,
    Four: false,
    Five: false,
    Six: false,
    Seven: false,
  });
  
  const order = ["Carne", "Pollo", "Arroz", "Pasta", "Pure", "Salmon", "Ensalada"]

  const [categories, setCategories] = useState([]);
  const [estimation, setEstimation] = useState(false);
  const [total, setTotal] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChangeOne = (event) => {
    //event.persist();
    if(checked.One){
      setChecked({...checked, One: false});
    }
    else{
      setChecked({...checked, One: true});
    }
  };

  const handleChangeTwo = (event) => {
    event.persist();
    if(checked.Two){
      setChecked({...checked, Two: false});
    }
    else{
      setChecked({...checked, Two: true});
    }
  };

  const handleChangeThree = (event) => {
    event.persist();
    if(checked.Three){
      setChecked({...checked, Three: false});
    }
    else{
      setChecked({...checked, Three: true});
    }
  };

  const handleChangeFour = (event) => {
    event.persist();
    if(checked.Four){
      setChecked({...checked, Four: false});
    }
    else{
      setChecked({...checked, Four: true});
    }
  };

  const handleChangeFive = (event) => {
    event.persist();
    if(checked.Five){
      setChecked({...checked, Five: false});
    }
    else{
      setChecked({...checked, Five: true});
    }
  };

  const handleChangeSix = (event) => {
    event.persist();
    if(checked.Six){
      setChecked({...checked, Six: false});
    }
    else{
      setChecked({...checked, Six: true});
    }
  };

  const handleChangeSeven = (event) => {
    event.persist();
    if(checked.Seven){
      setChecked({...checked, Seven: false});
    }
    else{
      setChecked({...checked, Seven: true});
    }
  };

  const handleEstimate = () => {
    let categoriesAux = [];
    if(checked.One){
      categoriesAux.push(order[0]);
    }
    if(checked.Two){
      categoriesAux.push(order[1]);
    }
    if(checked.Three){
      categoriesAux.push(order[2]);
    }
    if(checked.Four){
      categoriesAux.push(order[3]);
    }
    if(checked.Five){
      categoriesAux.push(order[4]);
    }
    if(checked.Six){
      categoriesAux.push(order[5]);
    }
    if(checked.Seven){
      categoriesAux.push(order[6]);
    }
    setCategories(categoriesAux);
    
    if(categoriesAux.length <= 0){
      setOpen(true);
    }
    else{
      const formData = new FormData();
      formData.append("check",categoriesAux );
      ImageService.getEstimation(formData).then(
        (response) => {
          console.log(response);
          setTotal(response);
        } 
      );
  
      setEstimation(true);
    }
  }



  return(
    <div className="result-main-container">
      <div className="header">
        <span>Imagen: {props.img ? props.img.name : 'undefined'} </span>
      </div>
      <div className="body">
        <div className="img-zone">
          <img src={props.img || DefaultImage} alt=""/>
        </div>
        <div className="results">
          <div className="result-header">
            <span>
              Categorias
            </span>
          </div>
          <div className="result-table">            
            <div className="result-cat">
              <div className="bar">
                <span>{'Carne: '+props.estimation.carne.toFixed(3)}%</span>
                <BorderLinearProgress variant="determinate" value={props.estimation.carne} />
              </div>
              <div className="check">
                <Checkbox
                  checked={checked.One}
                  onClick={handleChangeOne}
                  name="one"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
            </div>
            <div className="result-cat">
              <div className="bar">
                <span>{'Pollo: '+props.estimation.pollo.toFixed(3)}%</span>
                <BorderLinearProgress variant="determinate" value={props.estimation.pollo} />
              </div>
              <div className="check">
                <Checkbox
                  checked={checked.Two}
                  name="two"
                  onClick={handleChangeTwo}
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
            </div>
            <div className="result-cat">
              <div className="bar">
                <span>{'Arroz: '+props.estimation.arroz.toFixed(3)}%</span>
                <BorderLinearProgress variant="determinate" value={props.estimation.arroz} />
              </div>
              <div className="check">
                <Checkbox
                  checked={checked.Three}
                  onClick={handleChangeThree}
                  name="three"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
            </div>
            <div className="result-cat">
              <div className="bar">
                <span>{'Pasta: '+props.estimation.pasta.toFixed(3)}%</span>
                <BorderLinearProgress variant="determinate" value={props.estimation.pasta} />
              </div>
              <div className="check">
                <Checkbox
                  checked={checked.Four}
                  onClick={handleChangeFour}
                  name="four"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
            </div>
            <div className="result-cat">
              <div className="bar">
                <span>{'Pure: '+props.estimation.pure.toFixed(3)}%</span>
                <BorderLinearProgress variant="determinate" value={props.estimation.pure} />
              </div>
              <div className="check">
                <Checkbox
                  checked={checked.Five}
                  onClick={handleChangeFive}
                  name="five"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
            </div>
            <div className="result-cat">
              <div className="bar">
                <span>{'Salmon: '+props.estimation.salmon.toFixed(3)}%</span>
                <BorderLinearProgress variant="determinate" value={props.estimation.salmon} />
              </div>
              <div className="check">
                <Checkbox
                  checked={checked.Six}
                  onClick={handleChangeSix}
                  name="five"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
            </div>
            <div className="result-cat">
              <div className="bar">
                <span>{'Ensalada: '+props.estimation.ensalada.toFixed(3)}%</span>
                <BorderLinearProgress variant="determinate" value={props.estimation.ensalada} />
              </div>
              <div className="check">
                <Checkbox
                  checked={checked.Seven}
                  onClick={handleChangeSeven}
                  name="five"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
            </div>
          </div>
          <div className="btn-group">
            <Button
              variant="contained" 
              className="btn-upload"
            >
              Guardar imagen
            </Button>
            <Button
              variant="contained" 
              className="btn-upload"
              onClick={handleEstimate}
            >
              Estimar calorias
            </Button>
          </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Selecciona al menos una Categoria
          </Alert>
        </Snackbar>
      </div>
      {estimation ? 
        <div id="prediction">
          <div id="text">
            <h2>Resultados:</h2>
            <p>
              Dentro de la imagen se encuentra:
              <ul>
                {
                  categories.map( (category,index) => {
                    return (
                    <li key={index}><strong>{category}</strong> con una cantidad calorica de {0}</li>
                    );
                  })
                }
              </ul>
              Para un total de {total} calorias en una porción.
            </p>
          </div>
          <div className="cicr-prog">
            <CircularProgressbar value={total} text={`${total} Cal`} className="circ-bar" />
          </div>
        </div> 
      : null }
    </div>
  )
};

export default Result;