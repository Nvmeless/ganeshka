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
import React from 'react';

export const FirstTry = () => {

  const [page, setPage] = React.useState(10);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

    return (
        <Table>
        <TableContainer>
          <TableHead primary>
          <TableRow>
            {
              headerFakeData.map((el) => {
              return  <TableCell scope="col">
                        <TableSortLabel name={el.name}>{el.icon} {el.label}</TableSortLabel>
                      </TableCell>
              })
            }
            </TableRow>
          </TableHead>
          <TableBody>
          {
            dummybodydata.slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage).map((el) => {
              return <TableRow>
                  <TableCell scope="col">{el.name}</TableCell>
                  <TableCell scope="col">{el.quantity}</TableCell>
                  <TableCell scope="col">{el.season}</TableCell>
                </TableRow>
              })
          }
          </TableBody>
          <TableFooter>
            <TablePagination page={page} onPageChange={setPage} count={dummybodydata.length}></TablePagination>
          </TableFooter>
          </TableContainer>
        </Table>
    )
}