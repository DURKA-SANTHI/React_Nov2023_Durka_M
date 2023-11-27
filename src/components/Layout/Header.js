import React,{useState} from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import { AppBar ,Box, Divider, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link as RouterLink } from 'react-router-dom';


const Header = () => {
  const[mobileopen,setMobileopen]=useState(false)
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle =()=>{
    setMobileopen(!mobileopen)
  }

  const drawer =(
    <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
      <Typography color={"gold"} variant='h4' component="div" sx={{flexGrow: 1 ,my : 2}}>
                <RestaurantMenuIcon />
                  Delicio</Typography>
                  <Divider/>
              
                    <ul className='mobilenav'>
                      <li>
                        <Link to={'/home'}>Home</Link>
                      </li>
                      <li>
                        <Link to={'/book'}>Book</Link>
                      </li>
                      <li>
                        <Link to={'/about'}>About</Link>
                      </li>
                      <li>
                        <Link to={'/contact'}>Contact</Link>
                      </li>
                      <li>
                        <Link to={'/login'}>Log Out</Link>
                      </li>
                      <li>
                        <Link to={'/profile'}>My Profile</Link>
                      </li>
  
                    </ul>
                
    </Box>

  );
  return (
    <div>
        <Box>
          <AppBar component={'nav'} sx={{bgcolor:"black"}}>
            <Toolbar>
              <IconButton color="inherit" aria-label='open drawer' edge='start'
              sx={{ mr:2,display:{sm:'none'}}}
              onClick={handleDrawerToggle}>
                <MenuIcon/>
              </IconButton>
               <Typography color={"gold"} variant='h4' component="div" sx={{flexGrow: 1 }}>
                <RestaurantMenuIcon />
                  Delicio</Typography>
                  <Box sx={{display:{xs:'none', sm:'block'}}}>
                    <ul className='nav'>
                      <li>
                        <Link to={'/home'}>Home</Link>
                      </li>
                      <li>
                        <Link to={'/book'}>Book</Link>
                      </li>
                      <li>
                        <Link to={'/about'}>About</Link>
                      </li>
                      <li>
                        <Link to={'/contact'}>Contact</Link>
                      </li>
                      <li>
                        <Link to={'/login'}>Login</Link>
                      </li>
                      <li>
                      {auth && (
            <div>
              <IconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{bgcolor:"gold"}}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                <MenuItem onClick={handleClose} component={RouterLink} to="/Registration">Log Out</MenuItem>
              </Menu>
            </div>
          )}
                      </li>
  
                    </ul>
                  </Box>
            </Toolbar>
          </AppBar>
          <Box component='nav'>
            <Drawer variant='temporary' open={mobileopen} onClose={handleDrawerToggle}
            
            sx={{display:{xs:'block',sm:'none'}, "& .MuiDrawer-paper" : {boxSizing:'border-box',width:'240px'} }}>
              {drawer}
            </Drawer>

          </Box>
          <Box>

          <Toolbar/>
          </Box>
        </Box>
    </div>
  );
}

export default Header;