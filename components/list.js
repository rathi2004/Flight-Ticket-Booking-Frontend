import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import FlightIcon from '@mui/icons-material/Flight';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import PlaceIcon from '@mui/icons-material/Place';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ExploreIcon from '@mui/icons-material/Explore';
import HelpIcon from '@mui/icons-material/Help';
class Icon extends Component {
    state = {  } 
    render() { 
        return (
            <List sx={{paddingTop:'5%', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <LocalGroceryStoreOutlinedIcon color='action'/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='My Trip'/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <FlightIcon color='action'/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Plan your Trip'/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <CardGiftcardOutlinedIcon color='action'/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Coupons'/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <PlaceIcon color='action'/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Choose Place'/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <FavoriteIcon color='action'/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Wishlist'/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <AirplaneTicketIcon color='action'/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Tickets'/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <ExploreIcon color='action'/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Explore'/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <HelpIcon color='action'/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Help'/>
            </ListItem>
        </List>
        );
    }
}
export default Icon;