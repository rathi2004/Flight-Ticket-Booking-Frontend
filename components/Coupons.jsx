import React, { Component } from 'react';
import { Stack,Box, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Army from'../asests/army-off.jpg';
import Child from'../asests/earlychild.png';
import Student from'../asests/student.png';
import NewUser from'../asests/newuser.jpg';
import Cristmas from'../asests/cristmas.jpg';
import Domestic from'../asests/domestic.png';
import Off10 from'../asests/off10.webp';
import Hot from '../asests/hot.jpg';
import './Coupon.css';

class Coupon extends Component {
  
    render() { 
        return (
        <Box flex={1}>
            
                <Stack sx={{marginTop:'20px'}} direction="row" spacing={2}>
                    
                <CardActionArea id="coupona">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="couponhead">
                                    ARMED FORCES
                                </Typography>
                                <Typography>
                                <CardMedia component="img"image={Army} alt="green iguana" id="armyi"/>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="couponinfo">
                                    Upto 50% discount made under Defency category
                                </Typography>
                                <Typography>
                                    <button id="couponbutton">BOOK NOW</button>
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea>
                <CardActionArea id="coupone">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="couponhead">
                                    EARLY CHILDHOOD
                                </Typography>
                                <Typography>
                                <CardMedia component="img"image={Child} alt="green iguana" id="childi"/>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="couponinfo">
                                    Upto 25% discount made FOR CHILDHOOD(UNDER 6)
                                </Typography>
                                <Typography>
                                    <button id="couponbutton">BOOK NOW</button>
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea>
                <CardActionArea id="coupons">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="couponhead">
                                    STUDENT
                                </Typography>
                                <Typography>
                                <CardMedia component="img"image={Student} alt="green iguana" id="childi"/>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="couponinfo">
                                    Student can enjoy upto 15% offer on their travel
                                </Typography>
                                <Typography>
                                    <button id="couponbutton">BOOK NOW</button>
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea>        
                </Stack>
                
                <Stack sx={{marginTop:'20px'}} direction="row" spacing={2}>
                    
                <CardActionArea id="couponn">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="couponhead">
                                    NEW USERS
                                </Typography>
                                <Typography>
                                <CardMedia component="img"image={NewUser} alt="green iguana" id="newi"/>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="couponinfo">
                                    12% offers for new users.
                                </Typography>
                                <Typography>
                                    <button id="couponbutton">BOOK NOW</button>
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea> 
                    <CardActionArea id="coupons">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="couponhead">
                                    CHRISTMAS SALE
                                </Typography>
                                <Typography>
                                <CardMedia component="img"image={Cristmas} alt="green iguana" id="childi"/>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="couponinfo">
                                    Amazing sales on flights
                                </Typography>
                                <Typography>
                                    <button id="couponbutton">BOOK NOW</button>
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea> 
                    <CardActionArea id="coupond">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="couponhead">
                                    DOMESTIC FLIGTHS
                                </Typography>
                                <Typography>
                                <CardMedia component="img"image={Domestic} alt="green iguana" id="domestici"/>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="couponinfo">
                                    Flat 40% off on all domestic flight.
                                </Typography>
                                <Typography>
                                    <button id="couponbutton">BOOK NOW</button>
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea> 
                    
                </Stack>

                <Stack sx={{marginTop:'20px'}} direction="row" spacing={2}>
                    
                <CardActionArea id="coupono">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="couponhead">
                                    10% OFF
                                </Typography>
                                <Typography>
                                <CardMedia component="img"image={Off10} alt="green iguana" id="childi"/>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="couponinfo">
                                    10% on all flight bookings for all fully vacinated guests
                                </Typography>
                                <Typography>
                                    <button id="couponbutton">BOOK NOW</button>
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea> 
                    <CardActionArea id="coupon10">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="couponhead">
                                    Upto Rs.10000off
                                </Typography>
                                <Typography>
                                
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="couponinfo">
                                    upto 10000 on all international flight bookings
                                </Typography>
                                <Typography>
                                    <button id="couponbutton">BOOK NOW</button>
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea> 
                    <CardActionArea id="couponh">
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div" id="couponhead">
                                    HOT DEAL
                                </Typography>
                                <Typography>
                                <CardMedia component="img"image={Hot} alt="green iguana" id="childi"/>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" id="couponinfo">
                                    Dragon Air business class flights avail at competitive prices.
                                </Typography>
                                <Typography>
                                    <button id="couponbutton">BOOK NOW</button>
                                </Typography>
                            </CardContent>
                            
                    </CardActionArea> 
                    
                </Stack>
        </Box>    
        
        );
    }
}

export default Coupon;