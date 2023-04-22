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
import HomeIcon from './homeicon';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CardMedia from '@mui/material/CardMedia';
import Coupongirl from '../asests/coupongirl.webp';
import './sample.css';
import './Hotel.css';

function DrawerAppBar() {
  

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
      
      <div>
      <div style={{marginTop:"4.4%", position:"absolute"}}>
        <CardMedia component="img"image={Coupongirl}/>
        </div>
        <div className='picoffer'>
          <p id="offer1">FLY WITH OFFER</p>
          <b><p id="offer2">Dragon Air special offers</p></b>
          <p id="offer3">
          Browse our current offers below or log into your Dragon Air<br></br> to see all the offers available for your tier. </p>
        </div>
                
                <Box  sx={{
                marginLeft:30,
                marginRight:30,
               
              }}>

            <Stack direction="column" spacing={2} style={{marginTop: "46%"}}>

            <Card>
                <Stack direction="row" spacing={20} id="couponstack1">
                <Typography id="coupontypo">
                    <div id="couponoff">
                        <b>50% OFF</b>
                    </div>
                    <div id="couponoff2">
                        Armed Fources offer-Upto 50% discount made under Defency category
                    </div>
                </Typography>
                <Typography>
                    <div  id="tickcol">
                        <CheckCircleOutlineIcon/>Verified
                    </div>
                    <button id="couponbtn3"><Link to="/Off1" id="ca">Show Coupon Code</Link></button>
                </Typography>

                </Stack>
            </Card>
            <Card>
                <Stack direction="row" spacing={20} id="couponstack1">
                <Typography id="coupontypo">
                    <div id="couponoff">
                        <b>25% OFF</b>
                    </div>
                    <div id="couponoff2">
                        Early Childhood offer-Upto 25% discount made for Early Childhood(Under 6)
                    </div>
                    <div id="couponline">
                        
                    </div>
                </Typography>
                <Typography>
                    <div  id="tickcol">
                        <CheckCircleOutlineIcon/>Verified
                    </div>
                    <button id="couponbtn3"><Link to="/Off2" id="ca">Show Coupon Code</Link></button>
                </Typography>

                </Stack>
            </Card>
            <Card>
                <Stack direction="row" spacing={20} id="couponstack1">
                <Typography id="coupontypo">
                    <div id="couponoff">
                        <b>15% OFF</b>
                    </div>
                    <div id="couponoff2">
                        Student can enjoy Upto 15% offer on their travel
                    </div>
                    <div id="couponline">
                        
                    </div>
                </Typography>
                <Typography>
                    <div  id="tickcol">
                        <CheckCircleOutlineIcon/>Verified
                    </div>
                    <button id="couponbtn3"><Link to="/Off3" id="ca">Show Coupon Code</Link></button>
                </Typography>

                </Stack>
            </Card>
            <Card>
                <Stack direction="row" spacing={20} id="couponstack1">
                <Typography id="coupontypo">
                    <div id="couponoff">
                        <b>20% OFF</b>
                    </div>
                    <div id="couponoff2">
                        12% offers for new Users.
                    </div>
                    <div id="couponline">
                        
                    </div>
                </Typography>
                <Typography>
                    <div  id="tickcol">
                        <CheckCircleOutlineIcon/>Verified
                    </div>
                    <button id="couponbtn3"><Link to="/Off4" id="ca">Show Coupon Code</Link></button>
                </Typography>

                </Stack>
            </Card>
            <Card>
                <Stack direction="row" spacing={20} id="couponstack1">
                <Typography id="coupontypo">
                    <div id="couponoff">
                        <b>10% OFF</b>
                    </div>
                    <div id="couponoff2">
                        Amazing sales on flights
                    </div>
                    <div id="couponline">
                        
                    </div>
                </Typography>
                <Typography>
                    <div  id="tickcol">
                        <CheckCircleOutlineIcon/>Verified
                    </div>
                    <button id="couponbtn3"><Link to="/Off5" id="ca">Show Coupon Code</Link></button>
                </Typography>

                </Stack>
            </Card>
            <Card>
                <Stack direction="row" spacing={20} id="couponstack1">
                <Typography id="coupontypo">
                    <div id="couponoff">
                        <b>40% OFF</b>
                    </div>
                    <div id="couponoff2">
                        Domestic Flight offer-Flat 40% off on all domestic flight.
                    </div>
                    <div id="couponline">
                        
                    </div>
                </Typography>
                <Typography>
                    <div  id="tickcol">
                        <CheckCircleOutlineIcon/>Verified
                    </div>
                    <button id="couponbtn3"><Link to="/Off6" id="ca">Show Coupon Code</Link></button>
                </Typography>

                </Stack>
            </Card>
            <Card>
                <Stack direction="row" spacing={20} id="couponstack1">
                <Typography id="coupontypo">
                    <div id="couponoff">
                        <b>10% OFF</b>
                    </div>
                    <div id="couponoff2">
                    Vacinated Guests offer-10% on all flight bookings for all fully vacinated guests
                    </div>
                    <div id="couponline">
                        
                    </div>
                </Typography>
                <Typography>
                    <div  id="tickcol">
                        <CheckCircleOutlineIcon/>Verified
                    </div>
                    <button id="couponbtn3"><Link to="/Off7" id="ca">Show Coupon Code</Link></button>
                </Typography>

                </Stack>
            </Card>
            <Card>
                <Stack direction="row" spacing={20} id="couponstack1">
                <Typography id="coupontypo">
                    <div id="couponoff">
                        <b> Rs.10000 OFF</b>
                    </div>
                    <div id="couponoff2">
                        IFB offer-upto 10000 on all international flight bookings
                    </div>
                    <div id="couponline">
                        
                    </div>
                </Typography>
                <Typography>
                    <div  id="tickcol">
                        <CheckCircleOutlineIcon/>Verified
                    </div>
                    <button id="couponbtn3"><Link to="/Off8" id="ca">Show Coupon Code</Link></button>
                </Typography>

                </Stack>
            </Card>
            <Card>
                <Stack direction="row" spacing={20} id="couponstack1">
                <Typography id="coupontypo">
                    <div id="couponoff">
                        <b>HOT DEAL</b>
                    </div>
                    <div id="couponoff2">
                        Offer- Dragon Air business class flights avail at competitive prices.
                    </div>
                    <div id="couponline">
                        
                    </div>
                </Typography>
                <Typography>
                    <div  id="tickcol">
                        <CheckCircleOutlineIcon/>Verified
                    </div>
                    <button id="couponbtn3"><Link to="/Off9" id="ca">Show Coupon Code</Link></button>
                </Typography>

                </Stack>
            </Card>
            <Card>
                <Stack direction="row" spacing={20} id="couponstack1">
                <Typography id="coupontypo">
                    <div id="couponoff">
                        <b>FLAT 10% OFF</b>
                    </div>
                    <div id="couponoff2">
                    Festive Time Fares offer-FLAT 10% OFF Festive Time Fares
                    </div>
                    <div id="couponline">
                        
                    </div>
                </Typography>
                <Typography>
                    <div  id="tickcol">
                        <CheckCircleOutlineIcon/>Verified
                    </div>
                    <button id="couponbtn3"><Link to="/Off10" id="ca">Show Coupon Code</Link></button>
                </Typography>

                </Stack>
            </Card>
            
             
            </Stack>
                </Box>
            </div>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
