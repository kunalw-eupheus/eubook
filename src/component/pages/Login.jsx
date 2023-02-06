import React from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import eupheus_logo from "../../assets/eupheus_logo.png";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Box from '@mui/material/Box'; 
import LockIcon from '@mui/icons-material/Lock'; 
import { useNavigate } from 'react-router-dom';
import LoginCover from "../../assets/LoginCover.png";

const Login = () => {
const navigate= useNavigate();

  const handleclick=()=>{
    navigate('/dashboard');
  }
  return (
    <div className='flex justify-center items-center h-screen ' style={{backgroundImage:`url(${LoginCover})`} }>
        <div className='flex flex-col gap-2 w-[60%] sm:w-[30%]  p-5 shadow-xl shadow-slate-400 bg-white rounded-sm   '>
           <div>
            <img src={eupheus_logo} classname="w-[5%]" alt="img"></img>
            </div>
           
           {/* <div className='flex '>
           <TextField id="standard-basic" label="Email" variant="standard" className='!w-full' />
           <div></div><MailOutlinedIcon/>
           </div> */}
          
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <TextField id="input-with-sx" label="Email" variant="standard"  className='!w-full'/>
        <MailOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <TextField id="input-with-sx" label="Password" variant="standard"  className='!w-full'/>
        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      </Box>
           <div>
            </div>
           {/* <TextField id="standard-basic" label="Password" variant="standard" className='!w-full' />
           </div> */}
           <Button variant="contained" className='!w-full !mt-3' onClick={handleclick}>SIGN IN</Button>
           {/* <div className='flex justify-center '>
           <div>Don't have an account? 
            </div>
            <div className='text-blue-600 '>Sign Up </div>
        </div> */}
        </div>
        
    </div>
  )
}

export default Login