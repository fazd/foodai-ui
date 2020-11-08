import React, { useState } from "react"
import { withStyles } from '@material-ui/core/styles';
import DefaultImage from "../../assets/defaultImage.jpg";
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import { CircularProgressbar } from 'react-circular-progressbar';

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
  
  const [categories, setCategories] = useState([]);

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
                <span>{data[0].category+': '+data[0].value}%</span>
                <BorderLinearProgress variant="determinate" value={data[0].value} />
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
                <span>{data[1].category+': '+data[1].value}%</span>
                <BorderLinearProgress variant="determinate" value={data[1].value} />
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
                <span>{data[2].category+': '+data[2].value}%</span>
                <BorderLinearProgress variant="determinate" value={data[2].value} />
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
                <span>{data[3].category+': '+data[3].value}%</span>
                <BorderLinearProgress variant="determinate" value={data[3].value} />
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
                <span>{data[4].category+': '+data[4].value}%</span>
                <BorderLinearProgress variant="determinate" value={data[4].value} />
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
      <div className="prediction">
        <div className="text">
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
            Para un total de {0} calorias en una porción.
          </p>
        </div>
        <div className="cicr-prog">
          <CircularProgressbar value={80} text={`${60} Cal`} className="circ-bar" />
        </div>
      </div>
    </div>
  )
};

export default Result;