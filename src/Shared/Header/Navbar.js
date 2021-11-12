import React,{useState,useEffect} from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
function Navbar() {
       const [anchorEl, setAnchorEl] = React.useState(null);
        const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
      
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        
        const {user,Logout}=useAuth();

        
        
      
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
      
        const menuId = 'primary-search-account-menu';
        
        const renderMenu = (
         
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
           
          </Menu>
        );
      
        const mobileMenuId = 'primary-search-account-menu-mobile';
        const renderMobileMenu = (
          <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
          >
            {user.displayName && 
            <MenuItem>
               <Typography sx={{color:"green"}}>{user.displayName}</Typography>
            </MenuItem>
            }
            <MenuItem>
           
               <NavLink to="/" style={{textDecoration:"none",color:"#000",fontWeight:"bold",padding:"5px 15px"}}>Home</NavLink>
            </MenuItem>
             
            <MenuItem>
               <NavLink to="/products" style={{textDecoration:"none",color:"#000",fontWeight:"bold",padding:"5px 15px"}}>Products</NavLink>
            </MenuItem>
            {user.email &&
             <MenuItem>
               <NavLink to="/dashboard" style={{textDecoration:"none",color:"#000",fontWeight:"bold",padding:"5px 15px"}}>Dashboard</NavLink>
             </MenuItem>
             }
             <MenuItem>
           
               {user.email?<Button onClick={Logout}  style={{textDecoration:"none",color:"#000",fontWeight:"bold",fontSize:"18px",padding:"0px 15px"}}>Log out</Button>:<NavLink to="/dashboard" style={{textDecoration:"none",color:"#000",fontWeight:"bold",padding:"5px 15px"}}>Dashboard</NavLink>}
             </MenuItem>

            
            

           
            
          </Menu>
        );
    return (
        <div>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{bgcolor:"#000"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <DirectionsCarIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
            <NavLink to="/" style={{color:"#fff",textDecoration:"none"}}>AutoMantia</NavLink>
          </Typography>
          <Search sx={{ display: { xs: 'none', sm: 'none',md:"block" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
             <Typography sx={{padding:"0px 0px",color:"#fff",fontSize:"20px"}}>{user.displayName && user.displayName}</Typography>
             <NavLink exact to="/" activeStyle={{ color:'yellow' }} style={{textDecoration:"none", fontSize:"20px",color:"#fff",fontWeight:"bold",padding:"0px 15px"}}>Home</NavLink>
             <NavLink to="/products" activeStyle={{ color:'yellow' }} style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"bold",padding:"0px 15px"}}>Products</NavLink>
             
             
             {user.email && <NavLink to="/dashboard" activeStyle={{ color:'red' }} style={{textDecoration:"none",color:"#fff",fontWeight:"bold",fontSize:"20px",padding:"0px 15px"}}>Dashboard</NavLink>}
             {
               user.email?<Button onClick={Logout}  style={{textDecoration:"none",color:"#fff",fontWeight:"bold",fontSize:"18px",padding:"0px 15px"}}>Log out</Button>:
             
               <NavLink to="/login" activeStyle={{ color:'red' }} style={{textDecoration:"none",color:"#fff",fontWeight:"bold",fontSize:"20px",padding:"0px 15px"}}>Login</NavLink>
             } 

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
        </div>
    )
}

export default Navbar
