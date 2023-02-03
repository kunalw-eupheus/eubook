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
  
const VerticalTabs = () => {
    const [value,setValue]=useState(0);

    const handleChange=(event,newValue)=>{
        setValue(newValue);
    }
  return (
    <>
    
    <div>
    <Box sx={{ width: '100%' }}>
    <Tabs orientation='vertical' value={value} onChange={handleChange} aria-label="nav tabs example">
      <LinkTab label="Semester 1" href="" />
      <LinkTab label="Semester 2" href="/trash" />
      <LinkTab label="Semester 3" href="/spam" />
    </Tabs>
  </Box>
  </div>
</>
  )
}

export default VerticalTabs