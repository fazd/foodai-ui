import axios from "axios"
import {config} from "../config/Constants";

const BASE_URL = config.url.API_URL + "/upload-image";
const LOAD_URL = config.url.API_URL + "/load-images";

export const uploadImage = async (body) => {
  return (
    axios.post(
      BASE_URL, body
    ).then(
      (response) => {
        console.log(response);
        return response;
      }
    ).catch(error => {
      console.log(error);
      return error;
    })
  );
};


export const sendSelectedImage = async (body) => {
  return (
    axios.post(LOAD_URL, body).then(
      (response) => {
        return response;
      }
    ).catch(error => {
      return error;
    }
    )
  );
};