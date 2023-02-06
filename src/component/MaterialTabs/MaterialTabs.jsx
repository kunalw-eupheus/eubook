import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
const MaterialTabs = () => {
    const [value,setValue]=useState(0);

    const handleChange=(event,newValue)=>{
        setValue(newValue);
    }
  return (
    <>
    <div className='w-full'>
    <Box sx={{ width: '100%'}}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" className=' '>
        <LinkTab label="EBOOK"  />
        <LinkTab label="ANSWER KEYS"  />
        <LinkTab label="WORKSHEETS"  />
      </Tabs>
    </Box>
    </div>
{value===0 && <div className='w-full '><iframe  src="https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+2/book+1/evs/ebook/index.html" className=" p-5 h-screen !w-full"/></div>}
{value===1 && <iframe src='https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+1/EVS+Book+1+Semester+1_updated.pdf'  className=" p-5 h-screen !w-full"/>}
</>
  )
}

export default MaterialTabs