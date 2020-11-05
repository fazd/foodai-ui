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
      console.log("res from login", res);
      return res;
    }
  ).catch(
    (error) => {
      console.log("login error",error);
    }
  );
};


// Only verify if token exists, then verify is token 
// is still valid 

export const autoLogin = async () => {
  const token = localStorage.getItem("token");
  if(token){
    return await axios.post(
      "/check/"+BASE_URL,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ).then(
      (response) => {
        console.log(response);
        return response;
      }
    );
  }
};


// Call it when you want to log out 

export const logout = () => {
  localStorage.removeItem("token");
};