import React from 'react'
import BookCard from '../BookCard/BookCard'
import AdminNavbar from '../Navbar/AdminNavbar'

const AllBooks = () => {
  return (
    <>
   
    <div><AdminNavbar/></div>
    <div className='bg-slate-300 px-7 py-3'>
    <div className='flex flex-wrap gap-9 p-4'>
    
    <div><BookCard/></div>
    <div><BookCard/></div>
    <div><BookCard/></div>
    </div>
    </div>
    
    </>
  )
}

export default AllBooks