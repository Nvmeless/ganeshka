import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store, fetchProducts } from "../../../app/store";
import "./AddMenu.css";
import { AddMerchantForm } from "../AddMerchantForm/AddMerchantForm";
import { AddProductForm } from "../AddProductForm/AddPoductForm";

export function AddMenu() {
  return (
    <>
      <div className="add-menu">
        <AddMerchantForm></AddMerchantForm>
        <AddProductForm></AddProductForm>
      </div>
    </>
  );
}
