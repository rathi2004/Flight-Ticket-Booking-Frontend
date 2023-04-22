import './health.css';
import Seat from '../asests/seat3.jpg'
import React, { Component } from 'react';
import { AppBar, CardMedia} from '@mui/material';
import { Box, Stack} from '@mui/system';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import {Typography } from '@mui/material';
import Appbar from './Appbar';

class Health extends Component { 
    render() { 
        return (
            <div>
                <Appbar/>
                <CardMedia component="img"image={Seat}  id="cc1" />
                <Box id="healthf">
                <b><p className='seattop' style={{marginTop:"2%"}}>BEFORE YOU FLY</p></b>
                <b><p className='seattop1'>Travel Health</p></b>
                <p className='seattop2'>
                    
                Prepare for a safe and comfortable journey<br></br>
                 with our health tips and advice, and learn about our medical and accessible<br></br>
                  travel services.
                </p>
                <p className='seattop3'>*This information is provided as general advice. For specific medical advice, please contact your doctor.</p>
                
                    
                    <Stack  direction="row" spacing={3}>
                    <CardActionArea id="health1">
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" id="seatbox1">
                                Before You Leave
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="healthinfo">
                                Plan ahead with health advice on vaccines, medication, and travelling during pregnency or with a baby.
                                You may also need to complete a medical form.
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActionArea id="health2">
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" id="seatbox1">
                                During Your Flight
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="healthinfo">
                                How stay comfortable when you're on board,  
                                        including some inflight exercises and what to
                                        do if you feel unwell.
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    
                    <CardActionArea id="health3">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="seatbox1">
                                    After You Arrive
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="healthinfo">
                                    Check out our tips on statying healthy after your flight, including tacking insect bites, beating jet lag 
                                    and flying safely after scuba driving.
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea>
                    </Stack>
                    <br></br>
                    <Stack  direction="row" spacing={3}>
                    <CardActionArea id="health1">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="seatbox1">
                                    special diets
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="healthinfo">
                                    Have a look at the different special meals we serve for specific diets and how you can book one
                                    for your flight.You can also read allergy advice.
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActionArea id="health2">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="seatbox1">
                                    Accessible travel
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="healthinfo">
                                    plan a smmoth,safe and comfortable journey with our travel assistance
                                    and medical services
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea>
                    <CardActionArea id="health3">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="seatbox1">
                                    Health Vaccination Information
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="healthinfo">
                                    For the latest available information on health requirements in the countries on your Dragon Air itinerary,
                                    try this search tool.
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea>
                    </Stack>
                    <br></br>
                    <Stack  direction="row" spacing={3}>
                    <CardActionArea id="health1">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="seatbox1">
                                    Medical Information Form
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="healthinfo">
                                    If you have a health concern or you need assistance to travel,
                                    you may need to completethe MEDIF form to check if it's safe to fly or to arrange assistance.
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActionArea id="health2">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="seatbox1">
                                    Our Contact Details
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="healthinfo">
                                    Here's a list of contact details for our local offices around the world so you can get in touch
                                    with us if you have a question.
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea>
                    <CardActionArea id="health3">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="seatbox1">
                                    Health Vaccination Information
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="healthinfo">
                                    For the latest available information on health requirements in the countries on your Dragon Air itinerary,
                                    try this search tool.
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea>
                    </Stack>
                </Box>
                
            </div>
        );
    }
}
 
export default Health;