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
        <a className="flex card-page" href="/home">
          Inicio
        </a>
        <a className="flex card-page" href="/recipes">
          Mis recetas
        </a>
        <a className="flex card-page" href="/home#algorithm">
          Sobre el algoritmo
        </a>
        <a className="flex card-page" href="/home#demo">
          Demo
        </a>
        <a className="corner flex card-page" href="/login">
          Iniciar sesión
        </a>
      </div>
    </div>
  );
};

export default Appbar;
