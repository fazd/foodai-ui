import React, { useState, useEffect } from "react"
import { withStyles } from '@material-ui/core/styles';
import DefaultImage from "../../assets/defaultImage.jpg";
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import { CircularProgressbar } from 'react-circular-progressbar';

import * as ImageService from "../../services/ImageService";


import 'react-circular-progressbar/dist/styles.css';
import "./Result.scss"


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
  });
  
  const [cat, setCat] = useState({
    Carne: 0,
    Pollo: 0,
    Arroz: 0,
    Pasta: 0,
    Pure: 0,
    Salmon: 0,
    Ensalada: 0,
  });
  
  const order = ["Carne", "Pollo", "Arroz", "Pasta", "Pure", "Salmon", "Ensalada"]

  const [categories, setCategories] = useState([]);
  const [estimation, setEstimation] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = props.estimation;
    setCategories({...cat, Carne: data.carne});
    setCategories({...cat, Pollo: data.pollo});
    setCategories({...cat, Arroz: data.arroz});
    setCategories({...cat, Pasta: data.pasta});
    setCategories({...cat, Pure: data.pure});
    setCategories({...cat, Salmon: data.salmon});
    setCategories({...cat, Ensalada: data.ensalada});
    console.log(data);
    console.log(cat);
  },[]);


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

  const handleEstimate = () => {
    let categoriesAux = [];
    if(checked.One){
      categoriesAux.push(data[0].category);
    }
    if(checked.Two){
      categoriesAux.push(data[1].category);
    }
    if(checked.Three){
      categoriesAux.push(data[2].category);
    }
    if(checked.Four){
      categoriesAux.push(data[3].category);
    }
    if(checked.Five){
      categoriesAux.push(data[4].category);
    }
    setCategories(categoriesAux);
    console.log(categories);
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

  const data = [
    {
      category: "carne",
      value: "80"
    },
    {
      category: "Pollo",
      value: "70"
    },
    {
      category: "Salmon",
      value: "80"
    },
    {
      category: "Puré de papa",
      value: "60"
    },
    {
      category: "Arroz",
      value: "50"
    },
  ];

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
                <span>{order[0]+': '+props.estimation.carne}%</span>
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
                <span>{order[1]+': '+props.estimation.pollo}%</span>
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
                <span>{order[2]+': '+props.estimation.arroz}%</span>
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
                <span>{order[3]+': '+props.estimation.pasta}%</span>
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
                <span>{order[4]+': '+props.estimation.pure}%</span>
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
                <span>{order[5]+': '+props.estimation.salmon}%</span>
                <BorderLinearProgress variant="determinate" value={props.estimation.salmon} />
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
                <span>{order[6]+': '+props.estimation.ensalada}%</span>
                <BorderLinearProgress variant="determinate" value={props.estimation.ensalada} />
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
      </div>
      {estimation ? 
        <div id="prediction">
          <div id="text">
            <h2>Resultados:</h2>
            <p>
              Dentro de la imagen se encuentra:
              <ul>
                {
                  categories.map( (category) => {
                    return (
                    <li><strong>{category}</strong> con una cantidad calorica de {0}</li>
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