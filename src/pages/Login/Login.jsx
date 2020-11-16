import React, { useState,useContext } from "react";
import "./Login.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import * as LoginService from "../../services/AuthService";
import UserContext from "../../context/UserContext";
import {Link} from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setAuthState = useContext(UserContext).setAuthState;
  const [open, setOpen] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


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
        if(response){
          localStorage.setItem("token", response.access_token);
          localStorage.setItem("user", body.email);
          setAuthState({user: email, reported: true});
          console.log(setAuthState.authState);
          window.location.href = '/';
        }
        else{
          setOpen(true);
          console.log("Login failed");
        }
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
          <Link className="link right" to="register">
            <span>No tienes cuenta? Registrate</span>
          </Link>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Error en usuario o Contraseña
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
