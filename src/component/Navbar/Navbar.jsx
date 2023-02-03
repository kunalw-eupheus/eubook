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



export default function Navbar() {

  const[value,setValue]=React.useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  
  
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
      <MenuItem onClick={handleMenuClose}>
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
            <img src={eupheus_logo} className="mr-2 w-[150px] bg-white"/>
            </div>
            {/* <div>
           <Stack direction='row' spacing={2} alignItems='end'>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>WishList</Button>
            <Button color='inherit'>All Books</Button>
            </Stack> 
            </div> */}
             {isMatch?(<DrawerComponent/>):(<>
            <Tabs sx={{marginLeft:'auto'}}  indicatorColor="secondary"  value={value} onChange={(e,value)=>setValue(value)}>
              <Tab label='Home'/>
              <Tab label='WishList'/>
              <Tab label='All Books'/>
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
