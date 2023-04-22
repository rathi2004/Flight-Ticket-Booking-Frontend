import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import HomeIcon from './homeicon';
import { Stack } from '@mui/system';


function Appbar() {

    const [auth] = React.useState(true);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
  
    
    const handleMenu1 = (event) => {
      setAnchorEl1(event.currentTarget);
    };
  
    const handleClose1 = () => {
      setAnchorEl1(null);
    };
    const [anchorEl2, setAnchorEl2] = React.useState(null);
  
    
    const handleMenu2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
  
    const handleClose2 = () => {
      setAnchorEl2(null);
    };
    const [anchorEl3, setAnchorEl3] = React.useState(null);
  
    
    const handleMenu3 = (event) => {
      setAnchorEl3(event.currentTarget);
    };
  
    const handleClose3 = () => {
      setAnchorEl3(null);
    };
  return (
    <AppBar position="static" style={{backgroundColor:"#333"}}>
        <Toolbar>
      <Typography
           component="div"
           sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
           >
               <Link to="/Home" id="ca">
                   <HomeIcon/>  
                   HOME
               </Link>
         </Typography>
         <Typography>
           DRAGON AIR
         </Typography>
           <Stack direction="row" spacing={0}>  
         {auth && (
           <div>
             <IconButton
               size="large"
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleMenu1}
               color="inherit"
             >
               <Typography
          
           component="div" paddingLeft={45}
           sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
         >
          PLAN YOUR TRIP
         </Typography>
             </IconButton>
             <Menu
               id="menu-appbar"
               anchorEl={anchorEl1}
               anchorOrigin={{
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={Boolean(anchorEl1)}
               onClose={handleClose1}
             >
               <MenuItem onClick={handleClose1}><Link to="/Coupon" style={{color:"black",textDecoration:"none"}}>Coupon</Link></MenuItem>
               <MenuItem onClick={handleClose1}><Link to="/Ticket" style={{color:"black",textDecoration:"none"}}>Ticket</Link></MenuItem>
               <MenuItem onClick={handleClose1}><Link to="/Schedule" style={{color:"black",textDecoration:"none"}}>Schedule</Link></MenuItem>
             </Menu>
           </div>
         )}
         {auth && (
           <div>
             <IconButton
               size="large"
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleMenu2}
               color="inherit"
             >
               <Typography
           component="div"
           sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
         >
          SERVICES
         </Typography>
             </IconButton>
             <Menu
               id="menu-appbar"
               anchorEl={anchorEl2}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={Boolean(anchorEl2)}
               onClose={handleClose2}
             >
               <MenuItem onClick={handleClose2}><Link to="/Chauffer" style={{color:"black",textDecoration:"none"}}>Chauffer Drive</Link></MenuItem>
               <MenuItem onClick={handleClose2}><Link to="/Food" style={{color:"black",textDecoration:"none"}}>Food</Link></MenuItem>
               <MenuItem onClick={handleClose2}><Link to="/Hotel" style={{color:"black",textDecoration:"none"}}>Hotel</Link></MenuItem>
               <MenuItem onClick={handleClose2}><Link style={{color:"black",textDecoration:"none"}}>Laggage</Link></MenuItem>
             </Menu>
           </div>
         )}
         {auth && (
           <div>
             <IconButton
               size="large"
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleMenu3}
               color="inherit"
             >
               <Typography
           component="div"
           sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
         >
           HELP
         </Typography>
             </IconButton>
             <Menu
               id="menu-appbar"
               anchorEl={anchorEl3}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={Boolean(anchorEl3)}
               onClose={handleClose3}
             >
               <MenuItem onClick={handleClose3}><Link to="/Requirement" style={{color:"black",textDecoration:"none"}}>Visa and Passport</Link></MenuItem>
               <MenuItem onClick={handleClose3}><Link to="/Health" style={{color:"black",textDecoration:"none"}}>Travel Health</Link></MenuItem>
               <MenuItem onClick={handleClose3}><Link to="/Safety"style={{color:"black",textDecoration:"none"}}>Safety Info</Link></MenuItem>
               <MenuItem onClick={handleClose3}><Link to="/Feedback" style={{color:"black",textDecoration:"none"}}>Feedback</Link></MenuItem>
              
             </Menu>
           </div>
         )}
           </Stack>
       
         
       </Toolbar>
    </AppBar>
  );
}
export default Appbar;