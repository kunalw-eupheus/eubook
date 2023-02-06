import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


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
  const theme = useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));

    const [value,setValue]=useState(0);

    const handleChange=(event,newValue)=>{
        setValue(newValue);
    }
  return (
    <>
    
    <div>
    <Box sx={{ width: '100%' }}>
      {isMatch?(<>
    <Tabs orientation='horizontal' value={value} onChange={handleChange} aria-label="nav tabs example" max-width="">
      <LinkTab label="Semester 1" href="/sem1" />
      <LinkTab label="Semester 2" href="/sem2" />
      <LinkTab label="Semester 3" href="/sem3" />
    </Tabs>
    </>):(<> <Tabs orientation='vertical' value={value} onChange={handleChange} aria-label="nav tabs example">
      <LinkTab label="Semester 1" href="/sem1" />
      <LinkTab label="Semester 2" href="/sem2" />
      <LinkTab label="Semester 3" href="/sem3" />
    </Tabs></>)}
  </Box>
  </div>
</>
  )
}

export default VerticalTabs