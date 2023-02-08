import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import AdminNavbar from '../Navbar/AdminNavbar';
import { Button } from '@mui/material';
import ListView from './ListView';

const Users = () => {
    return (
        <>
<div><AdminNavbar/></div>
<div className='flex justify-between'>
<div className='p-3'>
    <div>Users</div>
    <div><Breadcrumb/></div>
    </div>
    <div className='flex p-3 '>
    <div><Button variant="text">List View</Button></div>
    <div><Button variant="text">Add</Button></div>
    </div>
    </div>
    <div><ListView/></div>
  </>
    )
}
export default Users