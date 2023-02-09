import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';

function createData(First_Name, Last_Name,Mobile_Number, Email) {
  return { First_Name, Last_Name,Mobile_Number, Email};
}

const rows = [
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Jojo', 237, 9.0, 37, 4.3),
  createData('Bidiopta', 262, 16.0, 24, 6.0),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Anushriya', 'Chatterjee', 923040010, 'anu@gmail.com'),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Atul', 159, 6.0, 24, 4.0),
  createData('Ajay', 237, 9.0, 37, 4.3),
  createData('hiiii', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='!bg-slate-400'>
          <TableRow>
            <TableCell className='!font-black'>First_Name</TableCell>
            <TableCell align="right" className='!font-black' >Last_Name</TableCell>
            <TableCell align="right" className='!font-black'>Mobile_Number</TableCell>
            <TableCell align="right" className='!font-black'>Email</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          { (rowsPerPage>0 ?  rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage): rows).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.First_Name}
              </TableCell>
              <TableCell align="right">{row.Last_Name}</TableCell>
              <TableCell align="right">{row.Mobile_Number}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 41 * emptyRows }}>
              <TableRow colSpan={3} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
      component="div"
      count={rows.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </TableContainer>
  );
}
