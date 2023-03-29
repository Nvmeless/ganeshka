import "./ProductList.css";
import { CardProduct } from "../../atoms/CardProduct/CardProduct";

import React, { useState, useEffect } from "react";

export function ProductList() {
  const [displayedProduct, setDisplayedProduct] = useState([]);

  const product = [
    {
      productname: "Vin rouge",
      location: {
        Location_type: "Point",
        Location_coordinates: ["-83.97", "50.77"],
      },
      description: "Un super vin rouge",
      price: "7,5",
      produceradress: "125 rue des lylas",
      productimg: ".png",
    },
    {
      productname: "Vin rouge",
      location: {
        Location_type: "Point",
        Location_coordinates: ["-83.97", "50.77"],
      },
      description: "Un super vin rouge",
      price: "7,5",
      produceradress: "125 rue des lylas",
      productimg: ".png",
    },
    {
      productname: "Vin rouge",
      location: {
        Location_type: "Point",
        Location_coordinates: ["-83.97", "50.77"],
      },
      description: "Un super vin rouge",
      price: "7,5",
      produceradress: "125 rue des lylas",
      productimg: ".png",
    },
    {
      productname: "Vin rouge",
      location: {
        Location_type: "Point",
        Location_coordinates: ["-83.97", "50.77"],
      },
      description: "Un super vin rouge",
      price: "7,5",
      produceradress: "125 rue des lylas",
      productimg: ".png",
    },
  ];

  useEffect(() => {
    setDisplayedProduct(product);
  }, []);

  return (
    <>
      <div className="shop-list">
        {displayedProduct.map((element, i) => {
          return (
            <CardProduct
              key={i}
              nom={element.productname}
              description={element.description}
              prix={element.price}
              urlPhoto={element.productimg}
            ></CardProduct>
          );
        })}
      </div>
    </>
  );
}
