import React from 'react';
 import ReactDOM from 'react-dom';
 import { Formik, Form, useField } from 'formik';
 import * as Yup from 'yup';
 
 const MyTextInput = ({ label, ...props }) => {
   
   const [field, meta] = useField(props);
   return (
     <>
       <label htmlFor={props.id || props.name} className="text-slate-700 mr-4 ">{label}*</label>
       <input name="text-input" {...field} {...props}  className="border-2 border-black"/>
       {meta.touched && meta.error ? (
         <div name="error" className='text-red-500 ml-[6%]'>{meta.error}*</div>
       ): null}
     </>
   );
 };
 

 const MyCheckbox = ({ children, ...props }) => {
   // React treats radios and checkbox inputs differently other input types, select, and textarea.
   // Formik does this too! When you specify `type` to useField(), it will
   // return the correct bag of props for you -- a `checked` prop will be included
   // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
   const [field, meta] = useField({ ...props, type: 'checkbox' });
   return (
     <div>
       <label className="checkbox-input">
         <input type="checkbox" {...field} {...props} />
         {children}
       </label>
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };
 
 const MySelect = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <div>
       <label htmlFor={props.id || props.name}>{label}</label>
       <select {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };
 
 // And now we can use these
 const BasicInfoForm = () => {
   return (
     <>
       <Formik
         initialValues={{
           firstName: '',
           lastName: '',
           email: '',
           acceptedTerms: false, // added for our checkbox
           jobType: '', // added for our select
         }}
         validationSchema={Yup.object({
           firstName: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
           lastName: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
           email: Yup.string()
             .email('Invalid email address')
             .required('Required'),
           acceptedTerms: Yup.boolean()
             .required('Required')
             .oneOf([true], 'You must accept the terms and conditions.'),
           jobType: Yup.string()
             .oneOf(
               ['designer', 'development', 'product', 'other'],
               'Invalid Job Type'
             )
             .required('Required'),
         })}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
           }, 400);
         }}
       >
        <div className=''>
        <div className=''>
         <Form className='border-2 border-black w-[60%]'>
           <MyTextInput
             label="First Name"
             name="firstName"
             type="text"
             placeholder="Jane"
             className=""
           /><br></br>
 
           <MyTextInput
             label="Last Name"
             name="lastName"
             type="text"
             placeholder="Enter your Last Name"
           /><br></br>
 
           <MyTextInput
             label="Email Address"
             name="email"
             type="email"
             placeholder="jane@formik.com"
           /><br></br>
 
           <MySelect label="Job Type" name="jobType">
             <option value="">Select a job type</option>
             <option value="designer">Designer</option>
             <option value="development">Developer</option>
             <option value="product">Product Manager</option>
             <option value="other">Other</option>
           </MySelect>
 
           <MyCheckbox name="acceptedTerms">
             I accept the terms and conditions
           </MyCheckbox>
 
           <button type="submit">Submit</button>
         </Form>
         </div>
         </div>
       </Formik>
     </>
   );
 };
 export default BasicInfoForm;