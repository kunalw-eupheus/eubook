import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 230 },
  { field: 'lastName', headerName: 'Last name', width: 230 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 190,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
{
    field:'Status',headerName:'Status',width:170
},
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,Status:'active'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,Status:'active' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,Status:'active' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,Status:'active' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null ,Status:'active'},
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 ,Status:'active'},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 ,Status:'active'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,Status:'active'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,Status:'active'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,Status:'active'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,Status:'active'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,Status:'active' },
];

export default function ListView() {
  return (
    <div style={{ height: 700, width: '100%' }}>
        {/* <Table> 
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        </Table> */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        
      />
    </div>
  );
}

