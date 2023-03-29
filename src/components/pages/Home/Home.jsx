import "./Home.css";
import { BottomNavBar } from "../../molecules/BottomNavBar/BottomNavBar";
import { ShopList } from "../../molecules/ShopList/ShopList";
import { ProductList } from "../../molecules/ProductList/ProductList";

import React, { useState, useEffect } from "react";

export function Home() {
  let productOrShop = "shop";

  const [displayed, setDisplayed] = useState("shop");

  let componentToDisplay;

  switch (displayed) {
    case "shop":
      componentToDisplay = <ShopList />;
      break;
    case "product":
      componentToDisplay = <ProductList />;
      break;
    default:
      componentToDisplay = <ShopList />;
      break;
  }

  useEffect(() => {
    console.log(displayed);
  }, [displayed]);

  return (
    <>
      <div className="page">
        <div className="main-container">
          <div className="filter produit-boutique">
            <button
              className="button filter"
              onClick={() => setDisplayed("product")}
            >
              Produit
            </button>
            <button
              className="button filter"
              onClick={() => setDisplayed("shop")}
            >
              Boutiques
            </button>
          </div>
          <div className="search-bar">
            <label for="search">
              <i class="fa fa-search" aria-hidden="true"></i>
            </label>
            <input
              id="search"
              name="search"
              type="search"
              list="searchHelper"
              placeholder="Type an acronym or name to Search..."
            />
          </div>
          <div className="container mapOuListe">{componentToDisplay}</div>
          <div className="filter map-liste">
            <button className="button filter">Map</button>
            <button className="button filter">Liste</button>
          </div>
        </div>
        <BottomNavBar></BottomNavBar>
      </div>
    </>
  );
}
