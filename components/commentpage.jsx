import React from 'react';
import {Card, CardContent } from '@mui/material';
import Vedio3 from '../asests/video3.mp4';
import { useNavigate } from 'react-router-dom';
import Appbar from './Appbar';
import './commentpage.css';

function Feedback(){
   
        
        
        const navigate=useNavigate();
        function checkdata  (){
        let fr=document.getElementById("feedinput").value;
        if(fr===""){
            alert("please fill the feedback");
        }
        else{
            navigate('/Home');
        }
    }
        return (
           
            <div >
                <Appbar/>
                <div className='videoTag'>
                    <video  autoPlay loop  
                    style={{position:"absolute",
                    width:"100%",
                    height:"100%" ,
                    left:"50%",
                    top:"50%",
                    objectFit:"cover",
                    transform:"translate(-50%,-50%)",
                    zIndex:"-1",
                    marginTop:"0%"}}>
                         <source src={Vedio3} />
                    </video>   
                 
                </div>
                
                <div id="safesen" >
               
                <b><p className='feedtop1'>Feedback or complaints</p></b>
                <p className='feedtop2'>
                Use this form to make a complaint or to give us feedback on any of our products and services.
                </p>
                
                <Card id="feedbox8">
                    <CardContent>
                    <p><b>FEEDBACK OR COMPLAINT TYPE</b></p>
                    <p>
                    Help us to identify what kind of feedback or complaint you want to send.
                    If this is regarding an Dragon booking but the flight was with another airline
                     e.g. Qantas or flydubai, please select the third option below and include your ticket number in the comments.
                    </p>
                    <form>
                    <div>
                    <select id="feedinput1" required>
                        <option>Feedback or complient type</option>
                        <option>I would like to make a complaint about a past flight or service</option>
                        <option>I would like to give feedback about a past flight or service</option>
                        <option>I would like to five feedback about something else</option>
                    </select>
                    </div>
                    <br></br>
                    <div>
                        <p><b>Comments</b></p>
                        <input type="text" placeholder="Please don't insert special characters " id="feedinput" required></input>
                    </div><br></br>
                    <button id="feedbutton" onClick={checkdata}>Submit</button>
                    </form>
                    </CardContent>
                </Card>
            </div>
            </div>
        );
    }
export default Feedback;