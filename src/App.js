import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import Commerce from '@chec/commerce.js';

function App() {
  // creation de notre instance commerce
  const commerce = new Commerce('pk_test_49104637cd5730bad2a0d52cc7f38c2ed5927e9f0368e', true);

  return (
    <ThemeProvider theme={getTheme()}>
    <div className="App">
        {/* Passer l'instance commerce en props si on veut l'utiliser dans un composant */}
    </div>
    </ThemeProvider>
  );
}

export default App;
