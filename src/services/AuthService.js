import axios from "axios"
import { config } from '../config/Constants';

const BASE_URL = config.url.API_URL + "/login";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
};


// Send information with body{ email, password }

export const  login = async (body) => {
  return axios.post(BASE_URL, body).then(
    (res) => {
      return res.data;
    }
  ).catch(
    (error) => {
      console.log("login error",error);
    }
  );
};


// Only verify if token exists, then verify is token 
// is still valid 

export const autoLogin = () => {
  return  localStorage.getItem("token");
};


// Call it when you want to log out 

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};