import React from 'react';
import { Button, TextField } from '@mui/material';
import AdminNavbar from '../Navbar/AdminNavbar';
import * as Yup from 'yup';
import { useFormik } from "formik";

 const AddInfo = () => {
  const schema = Yup.object().shape({
    FirstName: Yup.string().min(3).required(),
    LastName: Yup.string().min(3).required(),
    Email:Yup.string().min(10,'invalid Email').required(),
    RollNo:Yup.string().min(1, 'Enter valid roll no' ).required(),
    Class:Yup.string().min(1).required(),
    Mob:Yup.string().min(10,'Enter valid mobile number' ).required(),
    Address:Yup.string().min(5,'Enter valid address').required(),
  });
  const handleOnSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    console.log(values);
    };
    
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email:"",
      RollNo:"",
      Class:"",
      Mob:"",
      Address:"",
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  
  return (
   
    <>
    <AdminNavbar/>
    <div className='flex flex-col justify-center border-2 border-slate-400 w-[30%] py-5 mt-7 ml-6 p-2'>
    <div className="text-slate-400 !text-lg">Basic Information</div>
      <form >
      
        <label className="!mt-4" >First Name<span className='text-red-600'>*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField  name="FirstName" variant='outlined' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.FirstName} size="small" className='!w-[60%]'></TextField><br></br>
        {formik.touched.FirstName && formik.errors.FirstName ? (
         <div className='!text-red-600 '>{formik.errors.FirstName}</div>
       ) : null}
        <label className=''>Last Name<span className='text-red-600'>*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField name="LastName" variant='outlined' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.LastName} size="small" className='!w-[60%] !mt-2'></TextField><br></br>
        {formik.touched.LastName && formik.errors.LastName ? (
         <div>{formik.errors.LastName}</div>
       ) : null}
        <label>Email<span className='text-red-600'>*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField name="Email" variant='outlined' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Email} size="small" className='!w-[60%] !mt-2'></TextField><br></br>
        {formik.touched.Email && formik.errors.Email ? (
         <div>{formik.errors.Email}</div>
       ) : null}
        <label>Roll No<span className='text-red-600'>*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField name="RollNo" variant='outlined' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.RollNo} size="small" className='!w-[60%] !mt-2'></TextField><br></br>
        {formik.touched.RollNo && formik.errors.RollNo ? (
         <div>{formik.errors.RollNo}</div>
       ) : null}
        <label>Class <span className='text-red-600' >*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField name="Class" variant='outlined' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Class} size="small" className='!w-[60%] !mt-2'></TextField><br></br>
        {formik.touched.Class && formik.errors.Class ? (
         <div>{formik.errors.Class}</div>
       ) : null}
         <label>Mobile No<span className='text-red-600'>*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField name="Mob" variant='outlined' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Mob} size="small" className='!w-[60%] !mt-2'></TextField><br></br>
        {formik.touched.Mob && formik.errors.Mob ? (
         <div>{formik.errors.Mob}</div>
       ) : null}
        <label>Address<span className='text-red-600'>*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField name="Address" variant='outlined' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Address} size="small" className='!w-[60%] !mt-2'></TextField><br></br>
        {formik.touched.Address && formik.errors.Address? (
         <div className='text-red-600 ml-4'>{formik.errors.Address}</div>
       ) : null}
        <div className='flex justify-center mt-6'>
        <Button variant='contained' className='' onClick={formik.handleSubmit}>Submit</Button>
        </div>
      </form>
    </div>
    </>
  )
}
export default AddInfo;