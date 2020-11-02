import React from "react";
import { Link } from "react-router-dom";
import "./Appbar.scss"
import LogoWords from "../../assets/logo-words.png";

const Appbar = () => {
  return (
    <div className="appbar-main-container">
      <div className="flex container">
        <div className="flex logo">
          <Link to="/home">
            <img src={LogoWords} alt="brain-logo" width="250"/>
          </Link>
        </div>
        <Link className="flex card-page" to="/home#demo">
          Inicio
        </Link>
        <Link className="flex card-page" to="/recipes">
          Mis recetas
        </Link>
        <Link className="flex card-page" to="/home">
          Sobre el algoritmo
        </Link>
        <Link className="flex card-page" to="/home">
          Demo
        </Link>
        <Link className="corner flex card-page" to="/login">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
};

export default Appbar;
