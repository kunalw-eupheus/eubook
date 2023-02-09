import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import eupheus_logo from "../../assets/eupheus_logo.png";
import { Tab, Tabs } from '@mui/material';
import Person2Icon from '@mui/icons-material/Person2';
import PasswordIcon from '@mui/icons-material/Password';
import LogoutIcon from '@mui/icons-material/Logout';
import DrawerComponent from '../DrawerComponent/DrawerComponent';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';



export default function AdminNavbar() {

  const[value,setValue]=React.useState();
  const[Color,setColor]=React.useState(null)
  const theme = useTheme();
  console.log(theme);
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));

  
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const navigate=useNavigate();
  const logout=()=>{
    navigate('/');
  }
  const handleClickBooks=()=>{
    navigate('/all_books');
  }
  const handleClickAdmin=()=>{
    navigate('/admin');
  }

  const handleClickUser=()=>{
    setColor('inherit');
    navigate('/admin/users');
    
  }
  
  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Person2Icon/>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
        <PasswordIcon/>
        </IconButton>
        <p>Password Change</p>
      </MenuItem>
      <MenuItem onClick={logout}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LogoutIcon/>
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <div className=''>
            <img src={eupheus_logo} className="mr-2 w-[150px] bg-white" alt="logo"/>
            </div>
             {isMatch?(<DrawerComponent/>):(<>
            <Tabs sx={{marginLeft:'auto'}}  indicatorColor="inherit" textColor='inherit' value={value} onChange={(e,value)=>{setValue(value)}}>
              <Tab label='DashBoard' onClick={handleClickAdmin} />
              <Tab label='Users' onClick={handleClickUser}/>
              <Tab label='All Books' onClick={handleClickBooks}/>
              <Tab label='WishList'/>
            </Tabs>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </> )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      
    </Box>
    
  );
}
