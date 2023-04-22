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
import { CardContent } from '@mui/material';
import HomeIcon from './homeicon';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import './chauffer.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';



function Chauffer() {
  


  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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

            <div >
                <Stack sx={{marginTop:'4.4%'}} direction='column' spacing={1} paddingLeft="16%" paddingRight="16%">
                    <Stack>
                        <div id="seati">
                            <div id="seatq">
                                THE DRAGON EXPERIENCE
                                <p id="seatq1">CHAUFFER DRIVE</p>
                            </div>
                        </div>
                    </Stack>
                    <Stack id="seattext">
                        <CardContent>
                            <Typography gutterBottom variant="body2" component="div" id="seathead">
                                Fly First Class or Business Class and We'll drive for you from the Airport
                            </Typography>
                            <Typography variant="body2" color="text.secondary" id="seats">
                                Chaffeur-driver is available in nearly all our destinations.
                                The safety and wellbeing of all our customers and our drivers is our highest priority.
                                And the interior is sanitised after every trip, including buckles, handles, buttons,switches and blinds.<br></br>
                                The car is completely cleaned and disinfected from the start of every driver's duty.
                            </Typography>
                            <div>
                                <Button variant="contained" onClick={handleClickOpen} id="seatbutton">
                                    Choose Place
                                </Button>
                                <BootstrapDialog onClose={handleClose} open={open}>

                                    <BootstrapDialogTitle id="dialoghead" onClose={handleClose}>
                                        <b>Allow us to help you reach your destination</b> 
                                    </BootstrapDialogTitle>
                                    <DialogContent dividers>
                                        <table id="dialogtab">

                                        <tr>
                                            <label id="dialoglable">Drop Off</label>
                                        </tr>
                                        <tr>
                                            <input className='dialogone'  type="text" placeholder="DESTINATION" required/>
                                        </tr>
                                        <tr>
                                            <label id="dialoglable">Service</label>
                                        </tr>
                                        <tr>
                                            <select className='dialogone'>
                                                <option>SELECT</option>
                                                <option>Regular</option>
                                                <option>Premiem</option>
                                                <option>Luxury</option>
                                            </select>
                                        </tr>
                                        </table>
                                            
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>
                                        CONFRIM
                                        </Button>
                                    </DialogActions>
                                </BootstrapDialog>
                            </div>
                        </CardContent>
                    </Stack>
                </Stack>
            </div>
        
    </Box>
    
  );
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

Chauffer.propTypes = {
  window: PropTypes.func,
};

export default Chauffer;
