import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {ProductCard} from '../../molecules/ProductCard/ProductCard'
import { store, fetchProducts } from '../../../app/store';


export const ProductList = ({...props}) => {
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
            return <ProductCard src="./logo192.png" key={prod.name+prod.id} id={prod.id} title={prod.name} like={prod.numberLike} description={prod.description} price={prod.price} checkpointDistance="200m"></ProductCard>
        })
    }
    
    return(
        <div onLoad={() => store.dispatch(fetchProducts())}>
          {generateProductCards(product)} 
        </div> 
    )

}