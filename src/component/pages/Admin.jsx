import React from 'react';
import AdminNavbar from '../Navbar/AdminNavbar';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import AdminCard from '../AdminCard/AdminCard';

const Admin = () => {
  return (
<>
    <div><AdminNavbar/></div>
    <div className='p-4'>
    <div>ADMIN PANEL</div>
    <div><Breadcrumb/></div>
    </div>
    <div className='bg-slate-300 px-7 py-3'>
    <div className='flex justify-center'>
        <AdminCard/>
        </div>
    </div>
    </>
  )
}

export default Admin