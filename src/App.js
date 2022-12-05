import React from 'react';
import './App.css';
import { TableBody } from './components/atoms/TableBody/TableBody';
import { TableCell } from './components/atoms/TableCell/TableCell';

function App() {
  return (
    <div className="App">
      <TableBody>
        <TableCell align={'right'}>
          Test
        </TableCell>
      </TableBody>

    </div>
  );
}

export default App;
