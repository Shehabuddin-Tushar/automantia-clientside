import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button, Grid, MenuItem } from '@mui/material';
import Dashboardhome from './Dashboardhome/Dashboardhome';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddIcon from '@mui/icons-material/Add';
import ShopIcon from '@mui/icons-material/Shop';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StoreIcon from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ArticleIcon from '@mui/icons-material/Article';
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import DashboardAdmin from './DashboardAdmin/DashboardAdmin';

import Addproduct from './Addproduct/Addproduct';
import Pay from './Pay/Pay';
import useAuth from '../../hooks/useAuth';
import Myorders from './Myorders/Myorders';
import Addreview from './Addreview/Addreview';
import Manageallorders from './ManageAllorders/Manageallorders';
import Manageproduct from './Manageproduct/Manageproduct';
const drawerWidth = 240;

function Dashboard(props) {
        const { window } = props;
        const [mobileOpen, setMobileOpen] = React.useState(false);
        const {Logout,user}=useAuth();
        const[myrole,setMyrole]=useState();
 
       const [databaseuser,setDatabaseuser]=useState({});
       const useremail=user.email;
        useEffect(()=>{
          fetch(`https://desolate-atoll-64898.herokuapp.com/userfind/${user.email}`).then(res=>res.json()).then(data=>{
            setDatabaseuser(data);
            setMyrole(data.role==="admin"?true:false)
          
          })
        },[useremail,myrole])

       
      
        
  const history=useHistory();
  const gotologin=()=>{
      history.push("/login")
  }

  const logout=()=>{
    Logout();
    history.push("/login")
  }
  
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
       
     
      
      <List sx={{bgcolor:"#ffc800",height:"100vh"}}>
          <MenuItem>
            <ListItemIcon>
               <ShopIcon/>
            </ListItemIcon>
             <NavLink to="/products" activeStyle={{ color:'red' }} style={{color:"#000",marginTop:"0px",padding:"10px 15px",textDecoration:"none"}}>All products</NavLink>
          </MenuItem>
          <Divider />


          <MenuItem>
            <ListItemIcon>
               <AdminPanelSettingsIcon/>
            </ListItemIcon>
             <NavLink to={`${url}`} activeStyle={{ color:'red' }} style={{color:"#000",marginTop:"0px",padding:"10px 15px",textDecoration:"none"}}>Dashboard</NavLink>
          </MenuItem>

        
        
          {myrole && <MenuItem>
            <ListItemIcon>
               <SupervisorAccountIcon/>
            </ListItemIcon>
             <NavLink to={`${url}/makeadmin`} activeStyle={{ color:'red' }} style={{color:"#000",marginTop:"0px",padding:"10px 15px",textDecoration:"none"}}>Make Admin</NavLink>
          </MenuItem>}

          {myrole && <MenuItem>
            <ListItemIcon>
               <ManageAccountsIcon/>
            </ListItemIcon>
             <NavLink to={`${url}/manageorder`} activeStyle={{ color:'red' }} style={{color:"#000",marginTop:"0px",padding:"10px 15px",textDecoration:"none"}}>Manage All order</NavLink>
          </MenuItem>}

          {myrole && <MenuItem>
            <ListItemIcon>
               <AddIcon/>
            </ListItemIcon>
             <NavLink to={`${url}/addproduct`} activeStyle={{ color:'red' }} style={{color:"#000",marginTop:"0px",padding:"10px 15px",textDecoration:"none"}}>Add Product</NavLink>
          </MenuItem>}

          {myrole && <MenuItem>
            <ListItemIcon>
               <ArticleIcon/>
            </ListItemIcon>
             <NavLink to={`${url}/manageproduct`} activeStyle={{ color:'red' }} style={{color:"#000",marginTop:"0px",padding:"10px 15px",textDecoration:"none"}}>Manage product</NavLink>
          </MenuItem>}

          <Divider />

         
          {user.email && <MenuItem>
            <ListItemIcon>
               <AccountBalanceIcon/>
            </ListItemIcon>
             <NavLink to={`${url}/pay`} activeStyle={{ color:'red' }} style={{color:"#000",marginTop:"0px",padding:"10px 15px",textDecoration:"none"}}>Payment</NavLink>
          </MenuItem>}

          {user.email && <MenuItem>
            <ListItemIcon>
               <StoreIcon/>
            </ListItemIcon>
             <NavLink to={`${url}/myorders`} activeStyle={{ color:'red' }} style={{color:"#000",marginTop:"0px",padding:"10px 15px",textDecoration:"none"}}>My orders</NavLink>
          </MenuItem>}

          {user.email && <MenuItem>
            <ListItemIcon>
               <AddIcon/>
            </ListItemIcon>
             <NavLink to={`${url}/addreview`} activeStyle={{ color:'red' }} style={{color:"#000",marginTop:"0px",padding:"10px 15px",textDecoration:"none"}}>Add Review</NavLink>
          </MenuItem>}

          <MenuItem>
            <ListItemIcon>
            {user.email?<LoginIcon/>:<LogoutIcon/>}
            </ListItemIcon>

            {user.email?<Button  onClick={logout} style={{color:"#000",marginTop:"0px",padding:"10px 15px",textDecoration:"none"}}>Logout</Button>:<Button  onClick={gotologin} style={{color:"#000",marginTop:"0px",padding:"10px 15px",textDecoration:"none"}}>LogIn</Button>}
          </MenuItem>
          
       </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },bgcolor:"#ffc800",height:"72px"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Automantia Dashboard == [{user.displayName}]
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>
            <Route exact path={path}>
                <Dashboardhome/>
            </Route>
            
            <Route path={`${path}/makeadmin`}>
               <DashboardAdmin/>
            </Route>
            <Route path={`${path}/addproduct`}>
               <Addproduct/>
            </Route>
            <Route path={`${path}/pay`}>
               <Pay/>
            </Route>

            <Route path={`${path}/myorders`}>
               <Myorders/>
            </Route>

            <Route path={`${path}/addreview`}>
               <Addreview/>
            </Route>

            <Route path={`${path}/manageorder`}>
               <Manageallorders/>
            </Route>

            <Route path={`${path}/manageproduct`}>
               <Manageproduct/>
            </Route>

      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
