import React from 'react';
import './App.css';
import { TableContainer } from './components/atoms/TableContainer/TableContainer';
import { TableBody } from './components/atoms/TableBody/TableBody';
import { TableCell } from './components/atoms/TableCell/TableCell';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import TableHead from './components/atoms/TableHead/TableHead';

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

      <ThemeProvider theme={getTheme()}>

        <table>
          <TableHead primary>
            <tr>
              <th>
                test
              </th>
            </tr>
          </TableHead>
        </table>
        
      </ThemeProvider>
    </div>
  );
}

export default App;
