import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./Appbar.scss"
import LogoWords from "../../assets/logo-words.png";
import * as UserService from "../../services/AuthService";
import UserContext from "../../context/UserContext";


const Appbar = () => {

  const setAuthState = useContext(UserContext).setAuthState;
  const authedUser = useContext(UserContext).authState;

  const handleLogout = () => {
    UserService.logout();
    setAuthState({ user: null, reported: true });
    console.log(authedUser);
    window.location.href = '/';
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
          authedUser.user ? 
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
          !authedUser.user ?   
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
