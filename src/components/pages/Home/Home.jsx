import "./Home.css";
import { BottomNavBar } from "../../molecules/BottomNavBar/BottomNavBar";
import { MerchantMap } from "../../organisms/MerchantMap/MerchantMap";
import { ProductList } from "../../molecules/ProductList/ProductList";
import { AddMenu } from "../../organisms/AddMenu/AddMenu";
import Quagga from 'quagga';
import { Button } from "@mui/material"
import React, { useState, useEffect } from "react";

export function Home() {
  const [displayed, setDisplayed] = useState("shop");
  const currentUrl = window.location.pathname;

  console.log(currentUrl);

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
          {currentUrl === "/panier" && <AddMenu className="add-menu" />}
        <Button onClick={() => {
      
          navigator.mediaDevices.getUserMedia({ video: true })
          .then(() => {
            Quagga.init({
              inputStream : {
                  name : "Live",
                  type : "LiveStream",
                  target: document.querySelector('.text'), 
                  constraints: {
                     width: 520,
                     height: 400,                  
                     facingMode: "environment"  //"environment" for back camera, "user" front camera
                     }    
              },
              decoder : {
                  readers : ["ean_reader"]
              }
              }, function(err) {
                  if (err) {
                      console.log(err);
                      return
                  }
                  console.log("Initialization finished. Ready to start");
                  Quagga.start();
                  Quagga.onDetected((data) => {
                    alert("Code barre : "+data.codeResult.code);
                  })
              });
            
          })
          .catch((err) => {
            console.log(err.name + ": " + err.message);
          })          

                }} variant="contained" color="primary" style={{ width: "200px", margin: "5px" }}>
                    QrCode
                </Button>
           <div className="text">Du texte 1</div>
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
