import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import AdminNavbar from '../Navbar/AdminNavbar';
import { Button } from '@mui/material';
import ListView from './ListView';
import DataTable from './DataTable';
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate= useNavigate();
    const handleClickAdd=()=>{
        navigate('/admin/addInfo');
    }
    return (
        <>
<div><AdminNavbar/></div>
<div className='flex justify-between'>
<div className='p-3'>
    <div>Users</div>
    <div><Breadcrumb/></div>
    </div>
    <div className='flex p-3 '>
    {/* <div><Button variant="text">List View</Button></div> */}
    <div><Button variant="text" onClick={handleClickAdd}>Add Users</Button></div>
    </div>
    </div>
    <div><DataTable/></div>
  </>
    )
}
export default Users