import React from "react";
import Button from "@material-ui/core/Button";
import "./Home.scss";
import Logo from "../../assets/logo-brain-2.svg";

const Home = () => {

  return (
    <div className="home-main-container">
      <div className="container" id="presentation">
        <div className="big-logo">
          <img src={Logo} alt="brain" height="250"/>
        </div>
        <div className="flex pres-body">
          <div className="text">
            Estimación de calorias a base de reconocimiento de imagenes
            usando deep learning
          </div>
          <Button variant="contained" className="btn-demo" >
              Probar nuestro demo
          </Button>
        </div>
      </div>
      {/* Here goes the about section */}
      <div className="container" id="section">
        <div className="big-logo">
          Here goes the bigLogo
        </div>
        <div className="text">
          Estimación de calorias a base de reconocimiento de imagenes
          usando deep learning
        </div>
        <Button variant="contained" className="btn-demo" >
            Probar nuestro demo
        </Button>
      </div>
      <div className="container" id="section">
        <div className="big-logo">
          Here goes the bigLogo
        </div>
        <div className="text">
          Estimación de calorias a base de reconocimiento de imagenes
          usando deep learning
        </div>
        <Button variant="contained" className="btn-demo" >
            Probar nuestro demo
        </Button>
      </div>
      <div className="container" id="section">
        <div className="big-logo">
          Here goes the bigLogo
        </div>
        <div className="text">
          Estimación de calorias a base de reconocimiento de imagenes
          usando deep learning
        </div>
        <Button variant="contained" className="btn-demo" >
            Probar nuestro demo
        </Button>
      </div>
    </div>
  );
};

export default Home;
