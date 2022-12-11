import React from 'react';
import './App.css';
import { TableContainer } from './components/atoms/TableContainer/TableContainer';
import { TableBody } from './components/atoms/TableBody/TableBody';
import { TableCell } from './components/atoms/TableCell/TableCell';

function App() {
  return (
    <div className="App">
      <TableContainer>
      </TableContainer>
      <TableBody>
        <TableCell align={'right'}>
          Test
        </TableCell>
      </TableBody>

    </div>
  );
}

export default App;
