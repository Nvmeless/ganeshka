import "./ShopList.css";
import { Card } from "../../atoms/Card/Card";
import { CardShop } from "../../atoms/CardShop/CardShop";

import React, { useState, useEffect } from "react";

export function ShopList() {
  const [displayedShops, setDisplayedShops] = useState([]);

  const shops = [
    {
      nom: "L'épicerie fine",
      description: "petite boutique de produits saisonniers et locaux.",
      distance: "100 m",
      urlPhoto:
        "https://www.petitscommerces.fr/wp-content/uploads/2015/12/Epicerie-du-terroir-Epicerie-fine-75018-conserves-sardines-petitscommerces.fr_1-scaled.jpg",
    },
    {
      nom: "L'épicerie épaisse",
      description: "petite boutique de produits saisonniers et locaux.",
      distance: "120 m",
    },
    {
      nom: "L'épicerie frais",
      description: "petite boutique de produits saisonniers et locaux.",
      distance: "300 m",
    },
    {
      nom: "L'épicerie fine",
      description: "petite boutique de produits saisonniers et locaux.",
      distance: "100 m",
    },
    {
      nom: "L'épicerie épaisse",
      description: "petite boutique de produits saisonniers et locaux.",
      distance: "120 m",
    },
    {
      nom: "L'épicerie frais",
      description: "petite boutique de produits saisonniers et locaux.",
      distance: "300 m",
    },
  ];

  function displayTaches() {
    setDisplayedShops(shops);
  }

  useEffect(() => {
    displayTaches();
  });

  return (
    <>
      <div className="shop-list">
        {/* Je suis une liste de boutiques
        <CardShop></CardShop> */}
        {displayedShops.map((element, i) => {
          return (
            <CardShop
              key={i}
              nom={element.nom}
              description={element.description}
              distance={element.distance}
              urlPhoto={element.urlPhoto}
            ></CardShop>
          );
        })}
      </div>
    </>
  );
}
