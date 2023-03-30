import "./Home.css";
import { BottomNavBar } from "../../molecules/BottomNavBar/BottomNavBar";
import { ShopList } from "../../molecules/ShopList/ShopList";
import { ProductList } from "../../molecules/ProductList/ProductList";

import React, { useState, useEffect } from "react";

export function Home() {
  const [displayed, setDisplayed] = useState("shop");
  const [searchTerm, setSearchTerm] = useState("");

  let componentToDisplay;

  switch (displayed) {
    case "shop":
      componentToDisplay = <ShopList searchTerm={searchTerm} />;
      break;
    case "product":
      componentToDisplay = <ProductList searchTerm={searchTerm} />;
      break;
    default:
      componentToDisplay = <ShopList />;
      break;
  }

  useEffect(() => {
    console.log(displayed);
  }, [displayed]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

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
              placeholder="Chercher une boutique ou un produit..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="container mapOuListe">{componentToDisplay}</div>
          <div className="filter map-liste">
            {/* <button className="button filter">Map</button>
            <button className="button filter">Liste</button> */}
          </div>
        </div>
        <BottomNavBar></BottomNavBar>
      </div>
    </>
  );
}
