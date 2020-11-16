import axios from "axios"
import {config} from "../config/Constants";

const BASE_URL = config.url.API_URL + "/upload-image";
const LOAD_URL = config.url.API_URL + "/load-images";
const ESTIMATION_URL = config.url.API_URL + "/calories-estimation";
const SAVE_URL = config.url.API_URL + "/save-food-image";
const GET_IMGS_URL = config.url.API_URL + "/get-images";



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
        return response.data.result[0];
      }
    ).catch(error => {
      return error;
    }
    )
  );
};


export const getEstimation = async (body) => {
  return(
    axios.post(ESTIMATION_URL, body).then(
      (response) => {
        return response.data.result;
      }
    ).catch (error => {
      return error;
    })
  );
};

export const saveImage = async (body) => {
  return(
    axios.post(SAVE_URL, body).then(
      (response) => {
        return response.data;
      }
    ).catch (error => {
      return error;
    })
  );
};


export const getImages = async (body) => {
  return(
    axios.post(GET_IMGS_URL, body).then(
      (response) => {
        return response.data;
      }
    ).catch (error => {
      return error;
    })
  );
};