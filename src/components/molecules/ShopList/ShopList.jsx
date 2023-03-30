import "./ShopList.css";
import { CardShop } from "../../atoms/CardShop/CardShop";

import React, { useState, useEffect } from "react";

export function ShopList(...props) {
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

  useEffect(() => {
    let filteredShops = shops;
    if (props.searchTerm) {
      filteredShops = shops.filter((shops) => {
        return shops.nom.toLowerCase().includes(props.searchTerm.toLowerCase());
      }, []);
    }

    setDisplayedShops(filteredShops);
  }, [props.searchTerm]);

  return (
    <>
      <div className="shop-list">
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
