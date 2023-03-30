
import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { store, fetchProducts } from '../../../app/store';
import "./ProductList.css";
import { CardProduct } from "../../atoms/CardProduct/CardProduct";

export function ProductList() {

  const dispatch = useDispatch()
  const product = useSelector(state => state.products.productsList)
  const productStatus = useSelector(state => state.products.status)

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts())
    }
  }, [productStatus, dispatch])

  const generateProductCards = (productPram) => {
        
    if (!productPram[0]) return <p>On load</p>
    return productPram[0].map(prod => {
        return <CardProduct urlPhoto="" key={prod.id} nom={prod.productname} description={prod.description} prix={prod.price}></CardProduct>
    })
}

  return (
    <>
      <div className="shop-list" onLoad={() => store.dispatch(fetchProducts())}>
    {generateProductCards(product)} 
      </div>
    </>
  );
}
