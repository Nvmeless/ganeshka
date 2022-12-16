import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { ProductList } from './components/organisms/ProductList/ProductList';

function App() {
  
  return (
    
    <ThemeProvider theme={getTheme()}>
    
    <div className="App">
      Ganeshka toolkit
   
    <ProductList></ProductList>
    </div> 
    </ThemeProvider>
  );
}

export default App;
//onClick={() => console.log("Liste des produits : ",getproducts())}