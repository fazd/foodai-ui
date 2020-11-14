import React, { useState } from "react";
import "./Login.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import * as LoginService from "../../services/AuthService";

import {Link} from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleEmailChange = (e) => {
    e.persist();
    setEmail(e.currentTarget.value);
  }
  
  const handlePasswordChange = (e) => {
    e.persist();
    setPassword(e.currentTarget.value);
  }


  const handleLogin = () => {
    console.log(email);
    console.log(password);
    const body = {
      "email": email,
      "password": password,
    };

    LoginService.login(body).then(
      (response) => {
        console.log(response);
      }
    )

    //setPassword('');
    //setEmail('');
  }
  return (
    <div className="login-main-container">
      <div className="header">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <span>Iniciar sesión</span>
      </div>
      <div className="fields">
        <TextField
          id="outlined-email-input"
          label="Email *"
          type="email"
          className="text-field"
          autoComplete="current-email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          id="outlined-password-input"
          label="Contraseña *"
          type="password"
          className="text-field"
          autoComplete="current-password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          variant="contained" 
          className="btn-login"
          onClick={handleLogin}
        >
          Iniciar sesión
        </Button>
        <div className="messages">
          <Link className="link" to="passwordRecovery">
            <span>Olvidaste la contraseña?</span>
          </Link>
          <Link className="link right" to="register">
            <span>No tienes cuenta? Registrate</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
