import React, { useState, useContext } from "react";
import "./Register.scss";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import UserContext from "../../context/UserContext";

import * as RegisterService from "../../services/RegisterService";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const setAuthState = useContext(UserContext).setAuthState;
 

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

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
  const handlePasswordConfChange = (e) => {
    e.persist();
    setPasswordConf(e.currentTarget.value);
  }
  const handleWeightChange = (e) => {
    e.persist();
    setWeight(e.currentTarget.value);
  }
  const handleHeightChange = (e) => {
    e.persist();
    setHeight(e.currentTarget.value);
  }

  const validateEmail = () => {
    if (email === '') return true;
    return !(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email));
  }

  const handleRegister = () => {
    if(password === passwordConf && validateEmail &&
      height > 0 && weight > 0){
        const body = {
          "email": email,
          "password": password,
          //height: height,
          //weight: weight,
        };
        
        RegisterService.create(body).then(
          (response) => {
            if(response.access_token){
              setPassword('');
              setEmail('');
              setOpen(true);
              setTimeout( ()=>{
                props.history.push("/");
              }, 1500);
            }
          }
        );
    }
    
  }
  return (
    <div className="register-main-container">
      <div className="header">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <span>Registrarse</span>
      </div>
      <div className="fields">
        <TextField
          id="outlined-email-input"
          label="Email *"
          type="email"
          className="text-field start"
          autoComplete="current-email"
          variant="outlined"
          value={email}
          error={`${!(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email))}`}
          helperText={`${!(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email))? "Email incorrecto": ""}`}
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
        <TextField
          id="outlined-conf-password-input"
          label="Confirmar contraseña *"
          type="password"
          className="text-field"
          autoComplete="current-password"
          variant="outlined"
          value={passwordConf}
          error={password !== '' && password !== passwordConf}
          helperText={(password !== '' && password !== passwordConf) ? "Las contraseñas no coinciden" : "" }
          onChange={handlePasswordConfChange}
        />
        <div className="imc">
          <TextField
            id="outlined-height-input"
            label="Altura *"
            type="number"
            className="text-field double"
            variant="outlined"
            value={height}
            error={height < 0}
            helperText={height < 0 ? "Altura no puede ser menor que 0": ""}
            onChange={handleHeightChange}
          />
          <TextField
            id="outlined-weight-input"
            label="Peso *"
            type="number"
            className="text-field double"
            variant="outlined"
            value={weight}
            error={weight < 0}
            helperText={weight < 0 ? "Peso no puede ser menor que 0": ""}

            onChange={handleWeightChange}
          />
        </div>
        <Button
          variant="contained" 
          className="btn-login"
          onClick={handleRegister}
        >
          Registrarse
        </Button>
        <div className="messages">
          <Link className="link right" to="login">
            <span>Tienes cuenta? Inicia sesión</span>
          </Link>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Registro existoso
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;
