import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {CardMedia, CardActions, CardContent } from '@mui/material';
import Hotel from '../asests/hotelreserve.webp';
import HomeIcon from './homeicon';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import Hoteltree from '../asests/hoteltree.webp';
import Hotelsis from '../asests/hotelsis.webp';
import TextField from '@mui/material/TextField';
import Playboy from '../asests/playboy.webp';
import Phone from '../asests/phone.jpg';
import './Hotel.css';
import {useNavigate } from 'react-router-dom';

function DrawerAppBar() {
  const navigate=useNavigate();


    function checkdata  (){
        
        let hoteldesti=document.getElementById("hoteldesti").value;
        let hotelcheckout=document.getElementById("hotelcheckout").value;     
        let hotelcheckin=document.getElementById("hotelcheckin").value;     
        if(hoteldesti===""){
            alert("please enter destination");
        }
        
        else if(hotelcheckout===""){
            alert("please chose check out date");
        }
        else if(hotelcheckin===""){
            alert("please choose check in date");
        }
        else{
            navigate('/Hotel');
        }
    }

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
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{backgroundColor:"#333"}}>
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
      
      <Box component="main" sx={{ p: 3 }}>
        <div style={{marginTop:"3%", position:"absolute"}}>
        <CardMedia component="img"image={Hotel}/>
        </div>
        <div className='pichotel'>
          <p id="trip5">PLANNING YOUR TRIP</p>
          <b><p id="trip6">Book or reserve a hotel</p></b>
          <p id="trip7">Book your stay before purchasing your flight, add it to your itinerary later through<br></br> Manage your booking or even make a reservation without booking a flight.</p>
        </div>
        <div className='Hotels'>
        <hr></hr>
        <p className='whyhotel'>Why should I book a hotel through Dragon Air? </p>
          <Stack direction="row" spacing={12}>
            
            <div>
              <Typography id="c1">
              
              <CardActions>
              <img width="200px" height="200px" src={Hoteltree} alt="e" id="circle"/>

              </CardActions><br></br>
                 Earn Skywards Miles on every booking 
              </Typography>

             
            </div>
            <div>
              <Typography id="c1">
              <CardActions>
                <img width="200px" height="200px" src={Playboy} alt="e" id="circle"/>
              </CardActions><br></br>
              Daily offers and rates to suit every budget
              </Typography>
            </div>
            <div>
               <Typography id="c1">
             <CardActions>
              <img width="200px" height="200px" src={Hotelsis} alt="e" id="circle"/>
             </CardActions><br></br>
               24/7 contact centre support,<br></br> available in 42 languages
               </Typography>
            </div>
            <div>
              <Typography id="c1">
            <CardActions>
              <img width="200px" height="200px" src={Phone} alt="e" id="circle"/>
            </CardActions><br></br>
              Friends checking online using<br></br> a laptop and a smart phone

              </Typography>
            </div>
          </Stack>
          <hr></hr>
        </div>

        <div className='pictypehotel'>
         
            
        <Card>
        <CardContent>
                <Link style={{color:" rgba(197, 15, 15, 0.996)"}} to="/">Log in to earn miles on your trips</Link>
                <form>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField type="text" label="Destination" variant="outlined"  InputLabelProps={{shrink: true,}} id="hoteldesti" />
                  <TextField type="date" label="check out" variant="outlined"  InputLabelProps={{shrink: true,}} id="hotelcheckout" />
                  <TextField type="date" label="check in" variant="outlined"  InputLabelProps={{shrink: true,}} id="hotelcheckin" />
                  <button  id="fhotel" onClick={checkdata}>Find hotels</button>
                  
                </Box>
                </form>

              
        </CardContent>
        </Card>
        </div>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
