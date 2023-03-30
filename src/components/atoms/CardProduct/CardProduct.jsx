import React from "react";
import "./CardProduct.css";
import { Card } from "../Card/Card";

export const CardProduct = ({ ...props }) => {
  const urlPhotoDefault =
    "https://media.istockphoto.com/id/1200125752/fr/vectoriel/icône-de-la-ligne-produits-de-don-panier-dépicerie-avec-lillustration-de-vecteur-de-coeur.jpg?s=612x612&w=0&k=20&c=FzTmioSnaYz74DgwBd_BKIdfjSOwZVLRU8wQDJcTW6c=";

  return (
    <>
      <Card className="card">
        {/* {props.children} */}
        <div className="photo">
          <img
            src={
              props.urlPhoto && props.urlPhoto !== ".png"
                ? props.urlPhoto
                : urlPhotoDefault
            }
            alt="boutique"
          />
        </div>
        <div className="titre">{props.nom}</div>
        <div className="description">{props.description}</div>
        <div className="prix">{props.prix} €</div>
      </Card>
    </>
  );
};
