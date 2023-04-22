import React, { Component } from 'react';
import Seat from '../asests/seat3.jpg'
import ReactPlayer from 'react-player';
import { Stack} from '@mui/system';
import { CardMedia, Typography} from '@mui/material';
import {Card} from '@mui/material';
import Appbar from './Appbar';
import './vedio.css';


class Vedios extends Component {
    render() { 
        return (
                <div>
                    <Appbar/>
                            <CardMedia component="img"image={Seat}  id="gifback" />
                            <div id="safesen">
                            <b><p className='seattop' style={{marginTop:"1%"}}>TRAVEL SUPPORT</p></b>
                            <b><p className='seattop1'>Travel safety</p></b>
                            <p className='seattop22'>
                    
                            You can feel confident about your wellbeing when you fly with us.<br></br> Find out about the measures we’re taking to keep you safe and protected at every step of your journey.
                            </p>
                            <br></br>
                            </div>
                        
                            <Stack direction="row" spacing={2}  id="vedio1">
                                <div>
                                    <Card>
                                    <ReactPlayer controls url="https://www.youtube.com/watch?v=VTU8hdMb8hE">
                                </ReactPlayer>
                                <Typography id="Safty">
                                Travel safely from door to door
                                </Typography>
                                <Typography id="Safty7"><br></br>
                                Follow the journey through our enhanced safety and disinfection measures at the airport <br></br>and  on your flight.Your health and safety comes first, all the way to your destination.
                                </Typography>

                                    </Card>
                                </div>
                                <div>
                                    <Card>
                                    <ReactPlayer controls url="https://www.youtube.com/watch?v=zagDN0PpRog&t=4s">
                                </ReactPlayer>
                                <Typography id="Safty">
                                Take a breath of fresh air
                                </Typography>
                                <Typography id="Safty7"><br></br>
                                    Find out how the cabin air stays clean and fresh throughout your flight.<br></br> Advanced HEPA filters remove 99.97% of viruses, germs and allergens.
                                </Typography>

                                    </Card>
                                </div>
                            </Stack>
                           
                </div>
        );
    }
}
 
export default Vedios;