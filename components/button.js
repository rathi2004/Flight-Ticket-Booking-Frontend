import React, { Component } from 'react';
import HomeIcon from './homeicon';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'; 
class Web extends Component {
    render() { 
        return (
            <Box>
            <AppBar position="static">
              <Toolbar>
                <HomeIcon/>  
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Home
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,paddingLeft:"1%"}}>
                  DRAGON AIR
                </Typography>
                <Typography>
                  <Link to="/"><span style={{color:"white",textDecoration:"none"}}>LOGOUT</span></Link>
                </Typography>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  sx={{ width: 40,height: 40 }}/>
              </Toolbar>
            </AppBar>
          </Box>
        );
    }
}
export default Web;