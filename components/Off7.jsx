import React, { Component } from 'react';
import { Button, Card, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CircularProgress from '@mui/material/CircularProgress';
import "./Off.css";
import { Link } from 'react-router-dom';

class Off7 extends Component {
    
    render() { 
        return (
            <div>
                <div>
                    <Card id="grab30">
                        GRAB ON
                    </Card>
                </div><br></br>
                <div >
                    <Card id="copied30">
                    <List >
                        
                        <ListItem >
                            <ListItemAvatar >
                                <Avatar id="iconcolor30">
                                    <CheckIcon ></CheckIcon>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText id="text30">Code Successfully Copied!</ListItemText>
                        </ListItem>
                    </List>
                    Paste this code on checkout and carry the Shopping<br></br>
                       <button id="ccode30">ERTYUIO</button>
                       <br></br>
                       <div id="rotate30">
                       <CircularProgress disableShrink />
                       </div>
                       <div>
                       Opening Dragon
                       <br></br>
                       Continue...
                       </div>
                       <div><Button id="booknow30"><Link to="/Ticket" id="Bca">BOOK NOW</Link></Button></div>
                    </Card>
                    <div id="back30"><u>Go Back</u></div>

                </div>

            </div>
            
            
           
        );
    }
}
 
export default Off7;