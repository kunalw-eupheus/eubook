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
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="EBOOK" href="https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+2/book+1/evs/ebook/index.html" />
        <LinkTab label="ANSWER KEYS" href="/trash" />
        <LinkTab label="WORKSHEETS" href="/spam" />
      </Tabs>
    </Box>
    <div>
    {/* <Box sx={{ width: '100%' }}>
    <Tabs orientation='vertical' value={value} onChange={handleChange} aria-label="nav tabs example">
      <LinkTab label="EBOOK" href="https://eupheus-perfectice.s3.ap-south-1.amazonaws.com/E+-Book/Nectar+Semester+2/book+1/evs/ebook/index.html" />
      <LinkTab label="ANSWER KEYS" href="/trash" />
      <LinkTab label="WORKSHEETS" href="/spam" />
    </Tabs>
  </Box> */}
  </div>
</>
  )
}

export default MaterialTabs