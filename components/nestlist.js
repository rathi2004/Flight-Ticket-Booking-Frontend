import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import FlightIcon from '@mui/icons-material/Flight';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ExploreIcon from '@mui/icons-material/Explore';
import HelpIcon from '@mui/icons-material/Help';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PinDropIcon from '@mui/icons-material/PinDrop';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import InfoIcon from '@mui/icons-material/Info';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FeedbackIcon from '@mui/icons-material/Feedback';

export default function NestedList() {
    
    const [openPlace, setOpenPlace] = React.useState(false);
    const navigate=useNavigate();

    const handleClickPlace = () => {
        setOpenPlace(!openPlace);
    }
    
    const [openHelp, setOpenHelp] = React.useState(false);
    const handleClickHelp = () => {
        setOpenHelp(!openHelp);
    }
    const [openTrip, setOpenTrip] = React.useState(false);

    const handleClickTrip = () => {
        setOpenTrip(!openTrip);
  };

  const ticket =() =>{
        navigate('/Ticket');
  }
  const coupon =() =>{
        navigate('/Coupon');
  }
  const chaufferDrive =() =>{
        navigate('/Chauffer');
  }
  const Visa =() =>{
        navigate('/Requirement');
  }
  const Health =() =>{
        navigate('/Health');
  }
  const Laggage =() =>{
        navigate('/Laggage');
  }
  const Food =() =>{
        navigate('/Food');
  }
  const  Safety=() =>{
        navigate('/Safety');
  }
  const  feedback=() =>{
        navigate('/Feedback');
  }
  const  Schedule=() =>{
        navigate('/Schedule');
  }
  const  Hotel=() =>{
        navigate('/Hotel');
  }



  return (
    <Box flex={1}>
         <p style={{fontSize:"21px",paddingLeft:"19%",fontStyle:"italic",color:"black",backgroundColor:"ghostWhite"}}>Ticket Booking System</p>
            <List
      sx={{width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         
        </ListSubheader>
      }
    >
    <ListItemButton>
        <ListItemIcon>
            <LocalGroceryStoreOutlinedIcon color='action'/>
            </ListItemIcon>
            <ListItemText primary='My Trip'/>
        </ListItemButton>
        <ListItemButton onClick={handleClickPlace}>
            <ListItemIcon>
                <MiscellaneousServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {openPlace ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
            <Collapse in={openPlace} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PinDropIcon/>
            </ListItemIcon>
            <ListItemText primary="Chauffer Drive" onClick={chaufferDrive} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <RestaurantMenuIcon/>
            </ListItemIcon>
            <ListItemText primary="Food" onClick={Food} />
          </ListItemButton>
          <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <HelpIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Hotel" onClick={Hotel}  />
                </ListItemButton>
            </List>
          <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <HelpIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Laggage" onClick={Laggage}  />
                </ListItemButton>
            </List>
        </List>
            </Collapse>
        <ListItemButton onClick={handleClickTrip}>
            <ListItemIcon>
                <FlightIcon />
            </ListItemIcon>
        <ListItemText primary="Plan Your Trip" />
        {openTrip ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openTrip} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <CardGiftcardOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Coupons" onClick={coupon} />
                </ListItemButton>
            </List>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <AirplaneTicketIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tickets" onClick={ticket}/>
                </ListItemButton>
            </List>  
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <ExploreIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Schedule" onClick={Schedule} />
                </ListItemButton>
            </List>
      </Collapse>
        <ListItemButton onClick={handleClickHelp}>
            <ListItemIcon>
            <HelpIcon/>
            </ListItemIcon>
        <ListItemText primary="Help" />
        {openTrip ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openHelp} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <InfoIcon/>
            </ListItemIcon>
            <ListItemText primary="Visa and Passport" onClick={Visa}/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <MedicalInformationIcon/>
            </ListItemIcon>
            <ListItemText primary="Travel Health" onClick={Health} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <HealthAndSafetyIcon/>
            </ListItemIcon>
            <ListItemText primary="Safety Info" onClick={Safety} />
          </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <FeedbackIcon />
                    </ListItemIcon>
                    <ListItemText primary="Feedback" onClick={feedback} />
                </ListItemButton>
            </List>
      </Collapse>
    </List>
    </Box>
    
  );
}