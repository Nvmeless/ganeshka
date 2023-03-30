import "./AddMenu.css";
import { AddMerchantForm } from "../../organisms/AddMerchantForm/AddMerchantForm";
import { AddProductForm } from "../../organisms/AddProductForm/AddPoductForm";
import { BottomNavBar } from "../../molecules/BottomNavBar/BottomNavBar";

import React, { useState, useEffect } from "react";

export function AddMenu() {
  const [displayedForm, setDisplayedForm] = useState("");

  return (
    <>
      <div className="page add-menu">
        <div className="main-container">
          <div className="choice">
            <button
              className="add product"
              onClick={() => setDisplayedForm("product")}
            >
              Ajouter un produit
            </button>
            <button
              className="add merchant"
              onClick={() => setDisplayedForm("merchant")}
            >
              Ajouter une boutique
            </button>
          </div>
          <div className="form add">
            {displayedForm === "merchant" && <AddMerchantForm />}
            {displayedForm === "product" && <AddProductForm />}
            {displayedForm ? (
              <button className="cancel" onClick={() => setDisplayedForm("")}>
                Annuler
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
        <BottomNavBar className="nav-bar"></BottomNavBar>
      </div>
    </>
  );
}
