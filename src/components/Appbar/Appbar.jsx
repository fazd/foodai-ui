import React from "react";
import { Link } from "react-router-dom";
import "./Appbar.scss"
import LogoWords from "../../assets/logo-words.png";
import * as UserService from "../../services/AuthService";


const Appbar = () => {

  const authedUser = true;


  const handleLogout = () => {
    UserService.logout();
  }


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
        {
          authedUser ? 
          <a className="flex card-page" href="/recipes">
            Mis recetas
          </a>
          : null
        }
        <a className="flex card-page" href="/home#algorithm">
          Sobre el algoritmo
        </a>
        <a className="flex card-page" href="/home#demo">
          Demo
        </a>
        {
          !authedUser ?   
          <a className="corner flex card-page" href="/login">
            Iniciar sesión
          </a>
          :
          <div className="corner flex card-page" onClick={handleLogout}>
            Cerrar sesión
          </div>
        }
      </div>
    </div>
  );
};

export default Appbar;
