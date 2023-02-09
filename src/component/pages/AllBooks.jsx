import React from 'react';
import Navbar from '../Navbar/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb/Breadcrumb';




const AllBooks = () => {
 
const navigate=useNavigate();
    const handleView=()=>{
      navigate('/dashboard/view') ;
    }

    function createData(bookname,sem,sub,classname){
        return { bookname, sem, sub, classname};
      }
      
      const rows = [
        createData('Nectar-1', 'sem2', 'english',2  ),
        createData('Nectar-2', 'sem3', 'hindi', 3),
        createData('Nectar-3', 'sem4', 'Maths', 4),
        createData('Nectar-4', 'sem5', 'SST', 7),
        createData('Nectar-5', 'sem6', 'Science',8),
      ];
      
  return (
    <>
    <div className=''>
    <div><Navbar/></div>
    <div className='p-3'>
        <div>All Books</div>
        <div><Breadcrumb/></div>
    </div>
    <div className='p-3 mt-5 shadow-lg shadow-white '>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead className='!bg-slate-400'>
          <TableRow>
            <TableCell className='!font-black'>Book_Name</TableCell>
            <TableCell align="right" className='!font-black'>Semester</TableCell>
            <TableCell align="right" className='!font-black'>Subject</TableCell>
            <TableCell align="right" className='!font-black'>class</TableCell>
            <TableCell align="right" className='!font-black'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.bookname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.bookname}
              </TableCell>
              <TableCell align="right">{row.sem}</TableCell>
              <TableCell align="right">{row.sub}</TableCell>
              <TableCell align="right">{row.classname}</TableCell>
              <TableCell align="right">
                <VisibilityIcon onClick={handleView}/>&nbsp;&nbsp;&nbsp;
                <DeleteRoundedIcon/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
</div>
    </>
  )
}

export default AllBooks