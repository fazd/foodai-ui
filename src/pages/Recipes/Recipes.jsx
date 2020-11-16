import React from "react";
import CardImage from "../../components/CardImage/CardImage";

import "./Recipes.scss";

const Recipes = () => {

  return (
    <div className="recipes-main-container">
     <h1 className="title">Mis recetas</h1>
      <div className="container">
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
        <CardImage />
        <CardImage />

      </div>
    </div>
  );

};

export default Recipes;