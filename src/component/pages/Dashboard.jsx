import React from 'react'
import Navbar from '../Navbar/Navbar';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import BookCard from '../BookCard/BookCard';

const Dashboard = () => {
  return (
    <>
   <div><Navbar/></div>
   <div className='w-full  p-2 shadow-sm shadow-slate-200 px-6 '>
    <div className='text-blue-500'> DashBoard</div>
    <div><Breadcrumb/></div>
    </div>
    <div className='bg-slate-300 px-7 py-3'>
    <div className='  flex flex-wrap gap-9 p-4 '>
      
    <div><BookCard/></div>
    <div><BookCard/></div>
    <div><BookCard/></div>
    <div><BookCard/></div>
    <div><BookCard/></div>
    <div><BookCard/></div>
    <div><BookCard/></div>
    </div>
    </div>

</>
    
  )
}

export default Dashboard