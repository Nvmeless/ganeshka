import { TableContainer } from '../atoms/TableContainer/TableContainer';
import { TableBody } from '../atoms/TableBody/TableBody';
import { TableCell } from '../atoms/TableCell/TableCell';
import { TableFooter } from '../atoms/TableFooter/TableFooter';
import { TableSortLabel } from '../atoms/TableSortLabel/TableSortLabel';
import { TableRow } from '../atoms/TableRow/TableRow';
import { Table } from '../atoms/Table/Table';
import TableHead from '../atoms/TableHead/TableHead';
import { TablePagination } from '../atoms/TablePagination/TablePagination';
import { dummybodydata, headerFakeData} from '../../data/fakedata';
import React, { useState } from 'react';

export const FirstTry = () => {

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

    
  function sortValues(orderBy, order) {
    return function(a, b) {
      if (a[orderBy] < b[orderBy])
        return (order === 'desc' ? 1 : -1);
      if (a[orderBy] > b[orderBy])
        return (order === 'desc' ? -1 : 1);
      return 0;
    };
  }

    const handleOrder = (key) => {
      setOrderBy(key);
      setOrder((order === 'asc' ? 'desc' : 'asc'));
    }
    return (
      <TableContainer>
        <Table>
          <TableHead primary>
            <TableRow>
              {
                headerFakeData.map((el) => {
                return  <TableCell>
                          <TableSortLabel 
                          changeOrder={() => handleOrder(el.name)}
                          name={el.name}
                          direction={(orderBy === el.name ? order : 'asc')}
                          >
                            {el.icon} {el.label}
                          </TableSortLabel>
                        </TableCell>
                })
              }
              </TableRow>
            </TableHead>
            <TableBody>
            {
              dummybodydata.sort(sortValues(orderBy, order)).slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage).map((el) => {
                return <TableRow>
                    <TableCell>{el.name}</TableCell>
                    <TableCell>{el.quantity}</TableCell>
                    <TableCell>{el.season}</TableCell>
                  </TableRow>
                })
            }
            </TableBody>
            <TableFooter>
              <TablePagination 
              showFirstButton 
              showLastButton 
              page={page} 
              onPageChange={setPage} 
              count={dummybodydata.length}
              ></TablePagination>
            </TableFooter>
          </Table>
        </TableContainer>

    )
}