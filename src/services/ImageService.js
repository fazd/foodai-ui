import axios from "axios"
import {config} from "../config/Constants";

const BASE_URL = config.url.API_URL + "/upload-image";

export const uploadImage = async (body) => {
  console.log(body);
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