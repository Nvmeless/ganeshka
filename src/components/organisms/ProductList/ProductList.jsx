import React from 'react';
import { useSelector} from 'react-redux'
import {ProductCard} from '../../molecules/ProductCard/ProductCard'
import { store, fetchProducts } from '../../../app/store';


export const ProductList = ({...props}) => {
    
    const product = useSelector(state => state.products.productsList)
    
    

    if ( product[0]) console.log(product[0][0])
    
    const generateProductCards = () => {
        return product[0].map(prod => {
            return <ProductCard src="./logo192.png" title={prod.name} description={prod.description} checkpointDistance="200m"></ProductCard>
        })
    }
    
    return(
        <div onLoad={() => store.dispatch(fetchProducts())}>
          {generateProductCards()} 
        {/* <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
        <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
        <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
        <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
    */}
        </div> 
    )

}