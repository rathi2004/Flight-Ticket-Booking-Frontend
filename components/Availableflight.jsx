import Item from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AirlinesIcon from '@mui/icons-material/Airlines';
import './Availableflight.css';
import { Link } from 'react-router-dom';
import './schedule.css';
import { AppBar } from '@mui/material';

const Availableflight = () => {
    return(
        <div>
            <Stack direction="row" id="availback">
            <div><Link to="/Ticket" id='ca'><ArrowBackIcon/></Link></div>

            <div className="head7">
                Dragon Air                              
            </div>
            </Stack>
            <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1000,
          height: 130,
          marginLeft: 33
        },
      }}
    >
      <Paper elevation={10} >
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 100,
          height: 85,
        },
      }}
    >
      <Paper elevation={0} ><div class="aa"><div className="text2">BOM</div><div className="text">04:15</div></div></Paper>
      <Paper elevation={0} ><div class="aa2">15 hrs 40 mins<div><FlightTakeoffIcon/></div><div>1 stop, 1 connection</div></div></Paper>
      <Paper elevation={0} ><div class="aa">ABJ<div className="text3">14:25</div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">A380<div className="text4">EK501</div></div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">B777<div className="text4">EK787</div></div></div></Paper>
      <Paper elevation={0} ><div><div className="text7">Business from<div className="text5">INR 201,651<div className="text9">Morderate</div></div></div></div></Paper>
      <Paper elevation={0} ><div className="btn1"><button className="btn2"><Link to="/Confirm" id="ca">Book Now</Link></button></div></Paper>
    </Box>
      </Paper>
      <Paper elevation={10} >
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 100,
          height: 85,
        },
      }}
    >
      <Paper elevation={0} ><div class="aa"><div className="text2">BOM</div><div className="text">22:00</div></div></Paper>
      <Paper elevation={0} ><div class="aa2">21 hrs 55 mins<div><FlightTakeoffIcon/></div><div>1 stop, 1 connection</div></div></Paper>
      <Paper elevation={0} ><div class="aa">ABJ<div className="text3">14:25</div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">A380<div className="text4">EK501</div></div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">B777<div className="text4">EK787</div></div></div></Paper>
      <Paper elevation={0} ><div><div className="text7">First from<div className="text5">INR 323,939<div className="text6">Premium</div></div></div></div></Paper>
      <Paper elevation={0} ><div className="btn1"><button className="btn2"><Link to="/Confirm" id="ca">Book Now</Link></button></div></Paper>
      
    </Box>
      </Paper>
      <Paper elevation={10} >
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 100,
          height: 85,
        },
      }}
    >
      <Paper elevation={0} ><div class="aa"><div className="text2">BOM</div><div className="text">19:10</div></div></Paper>
      <Paper elevation={0} ><div class="aa2">24 hrs 45 mins<div><FlightTakeoffIcon/></div><div>1 stop, 1 connection</div></div></Paper>
      <Paper elevation={0} ><div class="aa">ABJ<div className="text3">14:25</div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">A380<div className="text4">EK501</div></div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">B777<div className="text4">EK787</div></div></div></Paper>
      <Paper elevation={0} ><div><div className="text7">Economy from<div className="text5">INR 60,356<div className="text8">Lowest price</div></div></div></div></Paper>
      <Paper elevation={0} ><div className="btn1"><button className="btn2"><Link to="/Confirm" id="ca">Book Now</Link></button></div></Paper>
      
    </Box>
      </Paper>
      <Paper elevation={10} >
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 100,
          height: 85,
        },
      }}
    >
      <Paper elevation={0} ><div class="aa"><div className="text2">BOM</div><div className="text">15:30</div></div></Paper>
      <Paper elevation={0} ><div class="aa2">28 hrs 25 mins<div><FlightTakeoffIcon/></div><div>1 stop, 1 connection</div></div></Paper>
      <Paper elevation={0} ><div class="aa">ABJ<div className="text3">14:25</div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">A380<div className="text4">EK501</div></div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">B777<div className="text4">EK787</div></div></div></Paper>
      <Paper elevation={0} ><div><div className="text7">Business from<div className="text5">INR 384,374<div className="text9">Morderate</div></div></div></div></Paper>
      <Paper elevation={0} ><div className="btn1"><button className="btn2"><Link to="/Confirm" id="ca">Book Now</Link></button></div></Paper>
      
    </Box>
      </Paper>
      <Paper elevation={10} >
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 100,
          height: 85,
        },
      }}
    >
      <Paper elevation={0} ><div class="aa"><div className="text2">BOM</div><div className="text">10:05</div></div></Paper>
      <Paper elevation={0} ><div class="aa2">33 hrs 30 mins<div><FlightTakeoffIcon/></div><div>1 stop, 1 connection</div></div></Paper>
      <Paper elevation={0} ><div class="aa">ABJ<div className="text3">14:25</div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">A380<div className="text4">EK501</div></div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">B777<div className="text4">EK787</div></div></div></Paper>
      <Paper elevation={0} ><div><div className="text7">Economy from<div className="text5">INR 65,835<div className="text8">Lowest price</div></div></div></div></Paper>
      <Paper elevation={0} ><div className="btn1"><button className="btn2"><Link to="/Confirm" id="ca">Book Now</Link></button></div></Paper>
    </Box>
      </Paper>
      <Paper elevation={10} >
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 100,
          height: 85,
        },
      }}
    >
      <Paper elevation={0} ><div class="aa"><div className="text2">BOM</div><div className="text">03:30</div></div></Paper>
      <Paper elevation={0} ><div class="aa2">11 hrs 40 mins<div><FlightTakeoffIcon/></div><div>1 connection</div></div></Paper>
      <Paper elevation={0} ><div class="aa">ABJ<div className="text3">12:40</div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">A380<div className="text4">EK501</div></div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">B777<div className="text4">EK787</div></div></div></Paper>
      <Paper elevation={0} ><div><div className="text7">First from<div className="text5">INR 372,345<div className="text6">Premium</div></div></div></div></Paper>
      <Paper elevation={0} ><div className="btn1"><button className="btn2"><Link to="/Confirm" id="ca">Book Now</Link></button></div></Paper>
      
    </Box>
      </Paper>
      <Paper elevation={10} >
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 100,
          height: 85,
        },
      }}
    >
      <Paper elevation={0} ><div class="aa"><div className="text2">BOM</div><div className="text">21:45</div></div></Paper>
      <Paper elevation={0} ><div class="aa2">17 hrs 25 mins<div><FlightTakeoffIcon/></div><div>1 connection</div></div></Paper>
      <Paper elevation={0} ><div class="aa">ABJ<div className="text3">12:40</div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">A380<div className="text4">EK501</div></div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">B777<div className="text4">EK787</div></div></div></Paper>
      <Paper elevation={0} ><div><div className="text7">First from<div className="text5">INR 374,536<div className="text6">Premium</div></div></div></div></Paper>
      <Paper elevation={0} ><div className="btn1"><button className="btn2"><Link to="/Confirm" id="ca">Book Now</Link></button></div></Paper>
      
      
    </Box>
      </Paper>
      <Paper elevation={10} >
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 100,
          height: 85,
        },
      }}
    >
      <Paper elevation={0} ><div class="aa"><div className="text2">BOM</div><div className="text">20:30</div></div></Paper>
      <Paper elevation={0} ><div class="aa2">17 hrs 25 mins<div><FlightTakeoffIcon/></div><div>1 connection</div></div></Paper>
      <Paper elevation={0} ><div class="aa">ABJ<div className="text3">12:40</div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">A380<div className="text4">EK501</div></div></div></Paper>
      <Paper elevation={0} ><div class="aa3"><AirlinesIcon/><div className="text4">B777<div className="text4">EK787</div></div></div></Paper>
      <Paper elevation={0} ><div><div className="text7">Economy from<div className="text5">INR 54,353<div className="text8">Lowest price</div></div></div></div></Paper>
      <Paper elevation={0} ><div className="btn1"><button className="btn2"><Link to="/Confirm" id="ca">Book Now</Link></button></div></Paper>
     
    </Box>
      </Paper>
      
    </Box>
    </div>
    )
}

export default Availableflight;