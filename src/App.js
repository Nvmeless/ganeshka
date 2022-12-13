import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import { ProductCard } from './components/molecules/ProductCard/ProductCard';

function App() {
  return (
    
    <ThemeProvider theme={getTheme()}>
    <div className="App">
      Ganeshka toolkit
    </div>

    <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
    <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
    <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
    <ProductCard src="./logo192.png" title="Super produit" description="Une description de ouf" checkpointDistance="200m"></ProductCard>
    
    </ThemeProvider>
  );
}

export default App;
