import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { ProductCard } from './components/molecules/ProductCard/ProductCard';
import {getAllProducts} from './features/Products/Products'
import { useSelector, useDispatch } from 'react-redux'
import {store} from './app/store'

function App() {
  const product = useSelector(state => state.products.productsList)
  const dispatch = useDispatch()  

  // MiddleWareFonction
  const exampleThunkFunction = () => {
    const stateBefore = product
    console.log(`Counter before: ${stateBefore}`)
    dispatch(getAllProducts())
    const stateAfter = product
    console.log(`Counter after: ${stateAfter}`)
  }
  
  
  

 
  return (
    
    <ThemeProvider theme={getTheme()}>
    
    <div className="App" onClick={() => exampleThunkFunction()}>
      Ganeshka toolkit : {product}
   
   
    <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
    <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
    <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
    <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
    </div> 
    </ThemeProvider>
  );
}

export default App;
//onClick={() => console.log("Liste des produits : ",getproducts())}