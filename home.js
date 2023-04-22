import React, { Component } from 'react';
import { Stack,Box } from '@mui/material';
import Web from './components/button'; 
import NestedList from './components/nestlist';
import Image from './components/img';
import Right from './components/rightside';
import './components/home.css';

class Image1 extends Component {
  
    render() { 
        return (
        <Box flex={1}>
            <Web/>
                <Stack sx={{marginTop:'20px'}} direction="row" spacing={2}>
                <NestedList/>
                <Image/>  
                <Right/>
                </Stack><br></br>
                <div className='down'>
                    <div id="first">Your Wings already exist,all you have to do is Fly</div>
                    <div id="sec">It is trusted brand for domestic as well as international flying</div>
                    <div id="sec">Clear Tip offers a quick, convenient way to make Dragon Air online bookings</div>
                    <div id="last">Book Your Flight Today !!!...</div>
                </div>
                
        </Box>    
        
        );
    }
}
 
export default Image1;