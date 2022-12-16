import React, { useState, useEffect } from 'react';
import commerce from './components/lib/commerce';

import './styles/scss/styles';

import Hero from './components/molecules/products/Hero';
import ProductsList from './components/molecules/products/ProductsList';

const App = () => {
  const [merchant, setMerchant] = useState({});
  const [products, setProducts] = useState([]);

  // Because React rendering can be triggered for many different reasons, 
  // it is best practice to wrap our commerce object method calls into a 
  // useEffect() hook. This hook acts as the replacment to componentWillMount() 
  // function when using class components. By leaving the second argument array 
  // empty, this method will run once before the initial render.
  useEffect(() => {
    fetchMerchantDetails();
    fetchProducts();
  }, []);

  /**
   * Fetch merchant details
   * https://commercejs.com/docs/sdk/full-sdk-reference#merchants
   */
  const fetchMerchantDetails = () => {
    commerce.merchants.about().then((merchant) => {
      setMerchant(merchant);
    }).catch((error) => {
      console.log('There was an error fetching the merchant details', error)
    });
  }

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  return (
    <div className="app">
      <Hero
        merchant={merchant}
      />
      <ProductsList 
        products={products}
      />
    </div>
  );
};

export default App;