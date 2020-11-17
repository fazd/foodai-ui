import React, { useEffect, useState } from "react";
import CardImage from "../../components/CardImage/CardImage";
import * as ImageService from "../../services/ImageService";
import Loader from "../../components/Loader/Loader";

import "./Recipes.scss";

const Recipes = () => {

  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect( () => {
    const body = {
      "user": localStorage.getItem("user")
    };
    ImageService.getImages(body).then(
      (response) => {
        setImages(response);
        console.log(response);
        setLoading(false);

      }
    );
  },[]);

  return (
    <div className="recipes-main-container">
      {
        loading ? 
          <Loader />
        :
        <>
          <h1 className="title">Mis recetas</h1>
            <div className="container">
              {
                images.map( image => {
                  return (
                    <CardImage key={image.name} img={image.image} name={image.name} cat={image.cat} />
                  )
                })
              }
              {/* <CardImage />
              <CardImage />
              <CardImage />
              <CardImage />
              <CardImage />
              <CardImage />
              <CardImage />
              <CardImage />
              <CardImage />
              <CardImage />
              <CardImage />
              <CardImage />
              <CardImage />
              <CardImage /> */}
            </div>
        </>
      
      }
    </div>
  );

};

export default Recipes;