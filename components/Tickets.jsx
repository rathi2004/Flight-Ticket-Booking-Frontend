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
import { RadioGroup, TextField } from '@mui/material';
import Lounge from '../asests/lounge.mp4';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {useNavigate } from 'react-router-dom';
import './Tickets.css';

function Tickets(){
  
    const navigate=useNavigate();


    function checkdata  (){
        

        
        let fr=document.getElementById("from").value;
        let to=document.getElementById("To").value;
        let dp=document.getElementById("departure").value;
        let rt=document.getElementById("return").value;
        let tk=document.getElementById("ticket").value;
        let cl=document.getElementById("class").value;
       
         if(fr===""){
            alert("please enter flying From");
        }
        
        else if(to===""){
            alert("please enter flying To");
        }
        else if(dp===""){
            alert("please enter Depature");
        }
        else if(rt===""){
            alert("please enter Returning");
        }
        else if(tk===""){
            alert("please select no of Ticket");
        }
        else if(cl===""){
            alert("please enter Class");
        }
        else{
            navigate('/Availableflights');
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
      
      <div>
           
          <div>
            
          <video  autoPlay loop  
              style={{position:"absolute",
              width:"100%",
              height:"50%" ,
              left:"13%",
              top:"50%",
              transform:"translate(-50%,-50%)",
              marginTop:"0%"}}>
              <source src={Lounge} />
          </video> 
          </div>
          
          
          <Stack paddingLeft={110} paddingTop={10} id="bookback">
                <p id="book1">BOOK</p>
                <p id="book2">Book Your Flight</p>
                <p id="book3">Search for Dragon flights and book online. See our routes and schedules, and discover more about the experience you can look forward to on board.</p>
                <form>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '35ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                    
                        <FormLabel id="tripcolor">Trip</FormLabel>    
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                        <Stack direction="row" spacing={1}>
                            <FormControlLabel value="female" control={<Radio />} label="RoundTrip" />
                            <FormControlLabel value="male" control={<Radio />} label="Oneway" />
                            <FormControlLabel value="other" control={<Radio />} label="Multiway" />
                        </Stack>
                        </RadioGroup>
                        <TextField type="text" helperText="Please enter flying from " label="Flying From" variant="outlined"  InputLabelProps={{shrink: true}} id="from" />
                        <TextField type="text" helperText="Please enter flying to" label="Flying To" variant="outlined"  InputLabelProps={{shrink: true}} id="To" />
                        <TextField type="date" helperText="Please select Departure date" label="Departure" variant="outlined"  InputLabelProps={{shrink: true}} id="departure" />
                        <TextField type="date" helperText="Please select Returning date" label="Returning" variant="outlined"  InputLabelProps={{shrink: true}} id="return" />
                        <TextField type="number" helperText="Please select no of tickets" label="No of tickets" variant="outlined"  InputLabelProps={{shrink: true}} id="ticket" />

                        <TextField
                        id="class"
                        select
                        label="Travel class"
                        defaultValue="EC"
                        helperText="Please select your class"
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value} >
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                        <button  id="ticbut" onClick={checkdata}>Show Flights</button>
                       
                  
                </Box>
                </form>
                
          </Stack>
           
        
      </div>
    </Box>
  );
}

Tickets.propTypes = {
  window: PropTypes.func,
};
const currencies = [
    {
        value: 'EC',
        label: 'Economy class',
    },
    {
        value: 'PEC',
        label: 'Premium-economy class ',
    },
    {
        value: 'BC',
        label: 'Business class',
    },
    {
        value: 'FC',
        label: 'First class',
    }
];

export default Tickets;
