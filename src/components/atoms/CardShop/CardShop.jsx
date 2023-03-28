import React from "react";
import "./CardShop.css";
import { Card } from "../Card/Card";

export const CardShop = ({ ...props }) => {
  const urlPhotoDefault =
    "https://notreepicerieconcept.com/wp-content/uploads/2022/04/picto-epicerie.png";
  const urlPinPos = "https://www.svgrepo.com/show/157852/location-pin.svg";

  return (
    <>
      <Card className="card">
        {/* {props.children} */}
        <div className="photo">
          <img
            src={props.urlPhoto ? props.urlPhoto : urlPhotoDefault}
            alt="boutique"
          />
        </div>
        <div className="titre">{props.nom}</div>
        <div className="description">{props.description}</div>
        <div className="distance">
          <img className="icone-position" src={urlPinPos} alt="pinPos" />
          <div className="distance-label">{props.distance}</div>
        </div>
      </Card>
    </>
  );
};
