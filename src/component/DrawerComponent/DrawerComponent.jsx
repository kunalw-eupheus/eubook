import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';


const DrawerComponent = () => {
    const[Open,setOpen]=useState(false);
  return (
    <>
    <Drawer open={Open} onClose={()=>setOpen(false)}>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemText>
                        Home
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText>
                        WishList
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemText>
                        All Books
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
    </Drawer>
    <IconButton sx={{marginLeft:'auto',color:'white'}}>
<MenuIcon onClick={()=>setOpen(!Open)}/>
    </IconButton>
    </>
  )
}

export default DrawerComponent