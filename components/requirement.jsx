import './requirement.css';
import Passport from '../asests/passport2.jpg'
import { CardMedia} from '@mui/material';
 import React, { Component } from 'react';
import { Box} from '@mui/system';
import Appbar from './Appbar';
 class Requirement extends Component {
    render() { 
        return (
            <div>
                <Appbar/>
                <CardMedia component="img"image={Passport}  id="cc" />
                <Box id="requireback">
                <b><p className='reqtop' style={{marginTop:"2%"}}>BEFORE YOU FLY</p></b>
                <b><p className='reqtop1'>Visa and passport</p></b>
                <p className='reqtop2'>Remember, it's your responsibilities to carry the reguired documents.<br></br>Check the entry requirements for your upcoming trips before you travel.</p>
                <p className='reqtopc'>
                COVID-19 visa advice<br></br>
                Visit our COVID-19 hub for the latest information on visas and other travel requirements.<br></br>
                
                </p>
                <b><p className='reqtop3'>ENTRY REQUIREMENTS</p></b>
                
                <p className='reqtop4'>Check your Visa and Passport requirements</p>
                


                <p className='reqtop5'>Note: Since this information is sourced from an external provider, 
                    we are only able to show results in English. 
                    <br></br>
                    Information here is intended only as a guide and subject to change -
                    check with the relevant authorities for your destination countries.
                    <br></br> 
                    Holders of non-standard passports and travel documents may also have
                    different entry requirements
                </p>

                <p className='reqtop6'>
                <b>Document Validity:</b>
                Passports and other documents accepted for entry must be valid for a minimum of 6 months from the arrival date.<br></br>
                </p>

               
                </Box>
            </div>
        );
    }
 }
  
 export default Requirement;