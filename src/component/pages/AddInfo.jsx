import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import { Button } from '@mui/material';
 import TextField from '@mui/material/TextField';
 
 const AddInfo = () => {
   return (
     <Formik
       initialValues={{ firstName: '', lastName: '', email: '' }}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
      <div  className=''>
       <Form className=''>
        <h1 className='text-slate-400'>Basic Information</h1>
         <label htmlFor="firstName">First Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <TextField id="standard-basic" label="firstName" variant="standard" name='firstName' />
         <ErrorMessage name="firstName" /><br></br>
 
         <label htmlFor="lastName">Last Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <TextField id="standard-basic" label="lastName" variant="standard" name='lastName' />
         <ErrorMessage name="lastName" /><br></br>
 
         <label htmlFor="email">Email Address</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <TextField id="standard-basic" label="email" variant="standard" name='email' />
         <ErrorMessage name="email" /><br></br>
 
         {/* <button type="submit" >Submit</button> */}
         <Button variant="contained">Submit</Button>
       </Form>
       </div>
     </Formik>
   );
 };
export default AddInfo;