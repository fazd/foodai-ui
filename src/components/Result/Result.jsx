import React, {useState, useEffect} from "react"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DefaultImage from "../../assets/defaultImage.jpg";
import LinearProgress from '@material-ui/core/LinearProgress';
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
              <span>Cat 1: 0%</span>
              <BorderLinearProgress variant="determinate" value={80} />
            </div>
            <div className="result-cat">
              <span>Cat 2: 0% </span>
              <BorderLinearProgress variant="determinate" value={30} />
            </div>
            <div className="result-cat">
              <span>Cat 3: 0%</span>
                <BorderLinearProgress variant="determinate" value={60} />
            </div>
            <div className="result-cat">
              <span>Cat 4: 0%</span>
              <BorderLinearProgress variant="determinate" value={100} />
            </div>
            <div className="result-cat">
              <span>Cat 5: 0%</span>
              <BorderLinearProgress variant="determinate" value={1} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Result;