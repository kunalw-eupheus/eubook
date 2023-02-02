import React from 'react'
import Navbar from '../Navbar/Navbar';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import BookCard from '../BookCard/BookCard';
import MaterialTabs from '../MaterialTabs/MaterialTabs';

const View= () => {
  return (
    <>
   <div><Navbar/></div>
   <div className='w-full  p-2 shadow-sm shadow-slate-200 px-6 '>
    <div className='text-blue-500'> DashBoard</div>
    <div><Breadcrumb/></div>
    </div>
    <div className='bg-slate-300 px-7 py-3 h-screen'>
    <div className='bg-white h-screen'>
        <div className='p-4'>My Study Material</div>
        <div className='px-3'> <MaterialTabs/></div>
        <div className='border-stone-300 '>
        <div className='h-screen p-3'><iframe  src='https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+1/EVS+Book+1+Semester+1_updated.pdf' height={700} width={1150} className="ml-[150px] py-5"/></div>
       </div>
    </div>
    </div>

</>
    
  )
}

export default View