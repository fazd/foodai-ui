import React from "react";
import "./Appbar.scss"

const Appbar = () => {
  return (
    <div className="appbar-main-container">
      <div className="container">
        <div className="logo">
          Here goes the logo
        </div>
        <div className="card-page">
          Inicio
        </div>
        <div className="card-page">
          Mis recetas
        </div>
        <div className="card-page">
          Sobre el algoritmo
        </div>
        <div className="card-page">
          Demo
        </div>
        <div className="corner">
          <div className="card-page">
            Entrar
          </div>
          <div className="card-page">
            Registro
          </div>
        </div>

      </div>
    </div>
  );
};

export default Appbar;
