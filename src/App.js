import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import TableHead from './components/organisms/TableHead/TableHead';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={getTheme()}>
        <table>
          <TableHead>
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
