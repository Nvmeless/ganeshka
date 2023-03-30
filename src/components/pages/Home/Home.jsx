import "./Home.css";
import { BottomNavBar } from "../../molecules/BottomNavBar/BottomNavBar";
import { MerchantMap } from "../../organisms/MerchantMap/MerchantMap";
import { ProductList } from "../../molecules/ProductList/ProductList";

import React, { useState, useEffect } from "react";

export function Home() {
  const [displayed, setDisplayed] = useState("shop");

  let componentToDisplay;

  switch (displayed) {
    case "shop":
      componentToDisplay = <MerchantMap />;
      break;
    case "product":
      componentToDisplay = <ProductList />;
      break;
    default:
      componentToDisplay = <MerchantMap />;
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
              className={
                displayed === "shop" ? "button filter active" : "button filter"
              }
              onClick={() => setDisplayed("shop")}
            >
              Boutiques
            </button>
            <button
              className={
                displayed === "product"
                  ? "button filter active"
                  : "button filter"
              }
              onClick={() => setDisplayed("product")}
            >
              Produit
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
              placeholder={
                displayed === "shop"
                  ? "Chercher une boutique... "
                  : "Chercher un produit..."
              }
            />
          </div>
          <div className="container mapOuListe">{componentToDisplay}</div>
          {/* <div className="filter map-liste">
            <button className="button filter">Map</button>
            <button className="button filter">Liste</button>
          </div> */}
        </div>
        <BottomNavBar className="nav-bar"></BottomNavBar>
      </div>
    </>
  );
}
