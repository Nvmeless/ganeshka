import { TableContainer } from '../atoms/TableContainer/TableContainer';
import { TableBody } from '../atoms/TableBody/TableBody';
import { TableCell } from '../atoms/TableCell/TableCell';
import { TableFooter } from '../atoms/TableFooter/TableFooter';
import { TableSortLabel } from '../atoms/TableSortLabel/TableSortLabel';
import { TableRow } from '../atoms/TableRow/TableRow';
import { Table } from '../atoms/Table/Table';
import TableHead from '../atoms/TableHead/TableHead';


export const FirstTry = () => {
    return (
        <Table>
        <TableContainer>
          <TableHead primary>
          <TableRow>
              <TableCell scope="col">
                <TableSortLabel>Col1</TableSortLabel>
              </TableCell>
              <TableCell scope="col">
                <TableSortLabel>Col2</TableSortLabel>
              </TableCell>
              <TableCell scope="col">
                <TableSortLabel>Col3</TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
              <TableCell scope="row">Row1</TableCell>
              <TableCell align={'center'}>
                    Test1
              </TableCell>
              <TableCell>
                  Test2
              </TableCell>
          </TableRow>
          <TableRow>
              <TableCell scope="row">Row2</TableCell>
              <TableCell align={'center'}>
                  Test3
              </TableCell>
              <TableCell>
                  Test4
              </TableCell>
          </TableRow>
          </TableBody>
          <TableFooter>
          </TableFooter>
          </TableContainer>
        </Table>
    )
}