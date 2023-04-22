import {  CardMedia, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import './Confirm.css';
import Map from '../asests/map1.jpg' ;
import tick from '../asests/tick.png';
import { Link } from 'react-router-dom';
function Confirmpage(){
    return(
        <div>

            <CardMedia component="img" image={Map} className='imgmap'/>
        <div className='movecenter'>
            <div className='wordmap'>
               <p className="pop"> TICKET CONFIRMATION!!!</p>
                    <marquee>

                    <Typography gutterBottom variant='h5' >Thanks for Your Booking with us</Typography>
                   
                    </marquee>
                    <div className='im'>
                        <CardMedia component="img" image={tick} className='img'/>
                    </div>
                    <div id="belowconfirm" >
                        <div className='pur'>
                            <p>Your Booking has been Confirmed</p>
                        </div>
                        <div className='sen'>
                            <p>We received your  payment successfully . Now we will send your booked ticket details to your coresponding mail id.</p>
                            <p>FYI: Proper company Invoice already sent to your email address.</p>
                            <p>You Will be Redirected To Home Page In:</p>
                            <p>00.30 Seconds!</p>
                            <CircularProgress disableShrink />
                        </div>
                        <div>
                            <button className='go'><Link to="/Home" id="ca">Go Home</Link></button>
                        </div>
                    </div>
                </div>
       </div>  
        </div>
    )
}
export default Confirmpage;