import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {CardMedia, CardContent } from '@mui/material';
import HomeIcon from './homeicon';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import Truffle from '../asests/truffle.jpg';
import Trio from '../asests/VegTrio.jpg'
import Pannertikka from '../asests/pannertikka.jpg';
import Chapli from '../asests/Chapli.jpg';
import Pate from '../asests/pate.jpg';
import Kiddie from '../asests/kiddie.jpg';
import Cucu from '../asests/cucu.jpg';
import SanChick from '../asests/sanchick.jpg';
import Fortchochi from '../asests/fortchochi.jpg';
import Junglee from '../asests/junglee.jpg';
import NonVegTrio from '../asests/nonvegtrio.jpg';
import Cashew from '../asests/cashew.jpg';
import Musbug from '../asests/musbug.jpg';
import Chickbug from '../asests/chickbug.jpg';
import Dalmakani from '../asests/dalmakani.jpg';
import Shashi from '../asests/shashi.jpg';
import Butterchick from '../asests/butterchick.jpg';
import Vegbao from '../asests/vegbao.jpg';
import Nonvegbao from '../asests/nonvegbao.jpg';
import Wheatsalad from '../asests/wheatsalad.jpg';
import Pohasalad from '../asests/pohasalad.jpg';
import Applemeal from '../asests/applemeal.jpg';
import Mueslimeal from '../asests/mueslimeal.jpg'; 
import Confleks from '../asests/confleks.jpg';
import Sabudana from '../asests/Sabudana.jpg';
import Chickensalad from '../asests/Chickensalad.jpg';
import Couscous from '../asests/Couscous.jpg';
import Bhatti from '../asests/Bhatti.jpg';
import Poharice from '../asests/Poharice.jpg';
import VegBiriyani from '../asests/VegBiryani.jpg';
import Pannerrice from '../asests/Paneerrice.jpg';
import ChickenBiryani from '../asests/ChickenBiryani.jpg';
import Upma from '../asests/Upma.jpg';
import ChickenBiryani1 from '../asests/ChickenBiryani1.jpg';
import Cury from '../asests/Curyrice.jpg';
import Noodel from '../asests/Noodels.jpg';
import Sesame from '../asests/Sesame.jpg';
import Pannerbread from '../asests/pannerbread.jpg';
import Paratta from '../asests/paratta.jpg';
import Kebab from '../asests/kebab.webp';
import Pita from '../asests/pita.jpg';
import Somosa1 from '../asests/somosa1.jpg';
import Cutlet from '../asests/cutlet.jpg';
import Biscut from '../asests/biscut.jpg';
import FoodMain from '../asests/multicolormeal.jpg';
import Icecream from '../asests/icecream.webp';
import Serve from '../asests/serve.webp';
import First from '../asests/firstcomfort.webp';
import Emy from '../asests/emifood.jpg';
import './food.css';


function Food() {
  
  const [auth] = React.useState(true);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  
  const handleMenu1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  
  const handleMenu2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  
  const handleMenu3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{backgroundColor:"#333"}}>
        <Toolbar>
            <Typography
           
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                <Link to="/Home" id="ca">
                    <HomeIcon/>  
                    HOME
                </Link>
          </Typography>
          <Typography>
            DRAGON AIR
          </Typography>
            <Stack direction="row" spacing={0}>  
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu1}
                color="inherit"
              >
                <Typography
           
            component="div" paddingLeft={45}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           PLAN YOUR TRIP
          </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl1}
                anchorOrigin={{
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl1)}
                onClose={handleClose1}
              >
                <MenuItem onClick={handleClose1}><Link to="/Coupon" style={{color:"black",textDecoration:"none"}}>Coupon</Link></MenuItem>
                <MenuItem onClick={handleClose1}><Link to="/Ticket" style={{color:"black",textDecoration:"none"}}>Ticket</Link></MenuItem>
                <MenuItem onClick={handleClose1}><Link to="/Schedule" style={{color:"black",textDecoration:"none"}}>Schedule</Link></MenuItem>
              </Menu>
            </div>
          )}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu2}
                color="inherit"
              >
                <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           SERVICES
          </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl2}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                <MenuItem onClick={handleClose2}><Link to="/Chauffer" style={{color:"black",textDecoration:"none"}}>Chauffer Drive</Link></MenuItem>
                <MenuItem onClick={handleClose2}><Link to="/Food" style={{color:"black",textDecoration:"none"}}>Food</Link></MenuItem>
                <MenuItem onClick={handleClose2}><Link to="/Hotel" style={{color:"black",textDecoration:"none"}}>Hotel</Link></MenuItem>
                <MenuItem onClick={handleClose2}><Link style={{color:"black",textDecoration:"none"}}>Laggage</Link></MenuItem>
              </Menu>
            </div>
          )}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu3}
                color="inherit"
              >
                <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            HELP
          </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl3}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl3)}
                onClose={handleClose3}
              >
                <MenuItem onClick={handleClose3}><Link to="/Requirement" style={{color:"black",textDecoration:"none"}}>Visa and Passport</Link></MenuItem>
                <MenuItem onClick={handleClose3}><Link to="/Health" style={{color:"black",textDecoration:"none"}}>Travel Health</Link></MenuItem>
                <MenuItem onClick={handleClose3}><Link to="/Safety"style={{color:"black",textDecoration:"none"}}>Safety Info</Link></MenuItem>
                <MenuItem onClick={handleClose3}><Link to="/Feedback" style={{color:"black",textDecoration:"none"}}>Feedback</Link></MenuItem>
               
              </Menu>
            </div>
          )}
            </Stack>
        
          
        </Toolbar>
      </AppBar>
      <div id="foodall">
               
                    <CardMedia component="img"image={FoodMain} className="foodmain" style={{marginTop:"2px"}}/>
                    <article className='foodcontent'>
                        <p id="flybetter">FLY BETTER</p>
                        <div id="fc">
                            <p id="letspace">DINING AND WINE</p>
                            <b><p id="foodexp">Dragon Experience</p></b>
                            <p id="fooddin">Dining</p>
                            <p id="foodsent">Multicourse meals showcasing the flavors of your destination. Complimentary drinks throughout your flight. There’s always more for you to enjoy in Economy Class.
                            </p>
                        </div>
                    </article>
               
                    <div id="foodstack">
                    <Stack sx={{marginTop:'2px'}} direction="row" spacing={2}>
                    
                    <CardActionArea id="foodice">
                                <CardContent >
                                    
                                    <Typography>
                                    <CardMedia component="img"image={Icecream} alt="green iguana" />
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Make every moment special
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Find delicious reasons to celebrate on board when you travel with us on holidays and special occasions.
                                    </Typography>
                                </CardContent>
                                
                        </CardActionArea>
                    <CardActionArea id="foodice">
                                <CardContent >
                                    
                                    <Typography>
                                    <CardMedia component="img"image={Serve} alt="green iguana"/>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Raise a glass
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Relax with a full range of complimentary drinks, or toast your flight with Champagne for a small fee.
                                    </Typography>
                                </CardContent>
                                
                        </CardActionArea>
                    <CardActionArea id="foodice">
                                <CardContent >
                                    
                                    <Typography>
                                    <CardMedia component="img"image={First} alt="green iguana"/>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Make every moment special
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Sit back in confort and lose yourself in the latest flims and TV shows.
                                    </Typography>
                                </CardContent>
                                
                        </CardActionArea>
                    <CardActionArea id="foodice">
                                <CardContent >
                                    
                                    <Typography>
                                    <CardMedia component="img"image={Emy} alt="green iguana"/>
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Have a full plate
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Enjoy your choice of main served along with fresh fruits or a salad, as well as our sweet treat of the day.
                                    </Typography>
                                </CardContent>
                                
                        </CardActionArea>
                        </Stack>
                    </div>
                <div className='foodpic'>
                <p>
                    <p id="hungry">Hungry?</p>
                    Pre-book from an exclusive menu of delectable preparations of local hits 
                    from kitchens and streets around the world, specially created by the
                    chefs at our brand new Food Lab. Made today. Served today. Bon appétit!
                </p>

                <div >
                <Stack sx={{marginTop:'20px'}} direction="row" className='foodstack'>
                    <CardActionArea>
                        <CardMedia component="img"image={Truffle} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                           
                            Roast Potato Green Chili Truffle Oil Sandwich / 150 gm<br></br>
                            ₹500 / $7
                           
                           
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Pannertikka} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Paneer Tikka Sandwich / 200 gm<br></br>
                        ₹500 / $7
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Trio} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Veg Trio Sandwich / 140 gm<br></br>
                        ₹ 550 / $7
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Chapli} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Chapli Kebab Sandwich / 150 gm<br></br>
                        ₹600 / $8
                        </Typography>
                    </CardActionArea>
                </Stack>
                

                <Stack sx={{marginTop:'20px'}} direction="row" className='foodstack1'>
                    <CardActionArea>
                        <CardMedia component="img"image={Kiddie} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Kiddie Delight Veg / 110 gm<br></br>
                        ₹500 / $7
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Pate} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Mushroom Paté Sandwich / 150 gm<br></br>
                        ₹500 / $7
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={SanChick} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Coronation Chicken Sandwich / 150 gm<br></br>
                        ₹600 / $8
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Cucu} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Tomato Cucumber Cheese and Lettuce Sandwich / 200 gm<br></br>
                        ₹500 / $7
                        </Typography>
                    </CardActionArea>
                </Stack>
                <Stack sx={{marginTop:'20px'}} direction="row" className='foodstack1'>
                    <CardActionArea>
                        <CardMedia component="img"image={Fortchochi} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Fort Kochi Roast Chicken Sandwich / 150 gm<br></br>
                        ₹600 / $8
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Junglee} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Chicken Junglee Sandwich / 200 gm<br></br>
                        ₹600 / $8
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={NonVegTrio} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Non-Veg Trio Sandwich / 140 gm<br></br>
                        ₹ 600 / $8
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Cashew} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Cashew Nuts Salted / 50 gm<br></br>
                        ₹ 300 / $4
                        </Typography>
                    </CardActionArea>
                </Stack>
                <Stack sx={{marginTop:'20px'}} direction="row" className='foodstack1' id="Slider">
                    <CardActionArea>
                        <CardMedia component="img"image={Musbug} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Mushroom Galouti Slider / 110 gm<br></br>
                        ₹500 / $7
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Chickbug} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Chicken Galouti Slider / 110 gm<br></br>
                        ₹500 / $7
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Dalmakani} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Dal Makhani Mini Kulcha / 110 gm<br></br>
                        ₹450 / $6
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Shashi} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Shahi Paneer Mini Kulcha / 110 gm<br></br>
                        ₹450 / $6
                        </Typography>
                    </CardActionArea>
                </Stack>
                <Stack sx={{marginTop:'20px'}} direction="row" className='foodstack1'>
                <CardActionArea>
                        <CardMedia component="img"image={Butterchick} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Butter Chicken Mini Kulcha / 110 gm<br></br>
                        ₹450 / $6
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Vegbao} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Steamed Vegetable Bao / 80 gm<br></br>
                        ₹450 / $6
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Nonvegbao} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Steamed Chicken Bao / 80 gm<br></br>
                        ₹500 / $7
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Pohasalad} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Indori Poha Salad / 200 gm<br></br>
                        ₹450 / $6
                        </Typography>
                    </CardActionArea>
                </Stack>
                <Stack sx={{marginTop:'20px'}} direction="row" className='foodstack1'  id="Salad">
                <CardActionArea>
                        <CardMedia component="img"image={Wheatsalad} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Cracked Wheat Salad / 200 gm<br></br>
                        ₹600 / $8
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Applemeal} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Apple Oat Meal / 93 gm<br></br>
                        ₹350 / $4
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Mueslimeal} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Muesli With Yogurt / 220 gm<br></br>
                        ₹ 400 / $5
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Confleks} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Corn Flakes with Milk / 130 gm<br></br>
                        ₹350 / $5
                        </Typography>
                    </CardActionArea>
                </Stack>
                <Stack sx={{marginTop:'20px'}} direction="row" className='foodstack1'>
                <CardActionArea>
                        <CardMedia component="img"image={Sabudana} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Sabudana Khichdi / 78 gm<br></br>
                        ₹275 / $4
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Chickensalad} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Chicken Supreme Salad / 150 gm<br></br>
                        ₹ 400 / $6
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Couscous} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Couscous Falafel And Dried Fruit Salad / 200 gm<br></br>
                        ₹600 / $8
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Bhatti} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Paneer Bhatti Salad with Mint Chutney / 128 gm<br></br>
                        ₹450 / $7
                        </Typography>
                    </CardActionArea>
                </Stack>
                <Stack sx={{marginTop:'20px'}} direction="row" className='foodstack1' id="Rice">
                <CardActionArea>
                        <CardMedia component="img"image={ChickenBiryani} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Chicken Biryani / 180 gm<br></br>
                        ₹400 / $5
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={VegBiriyani} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Veg Biryani / 86 gm<br></br>
                        ₹300 / $4
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={ChickenBiryani1} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Chicken Biryani / 180 gm<br></br>
                        ₹600 / $8
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Poharice} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Poha / 85 gm<br></br>
                        ₹250 / $3
                        </Typography>
                    </CardActionArea>
                </Stack>
                <Stack sx={{marginTop:'20px'}} direction="row" className='foodstack1'>
                <CardActionArea>
                        <CardMedia component="img"image={Upma} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Rava Upma / 88 gm<br></br>
                        ₹300 / $4
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Pannerrice} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Paneer Butter Masala Rice / 79 gm<br></br>
                        ₹400 / $5
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Cury} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Chicken Curry Rice / 93 gm<br></br>
                        ₹400 / $5
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Noodel} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Zesty Chicken Noodles / 70 gm<br></br>
                        ₹350 / $4
                        </Typography>
                    </CardActionArea>
                </Stack>
                <Stack sx={{marginTop:'20px'}} direction="row" className='foodstack1'>
                <CardActionArea>
                        <CardMedia component="img"image={Sesame} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Sesame Chicken Rice Noodle Salad / 210 gm<br></br>
                        ₹600 / $8
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Pannerbread} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Homestyle Paneer with Multigrain Flatbread / 175 gm<br></br>
                        ₹600 / $8
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Paratta} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Fort Kochi Roast Chicken with Malabar Parotta / 175 gm<br></br>
                        ₹600 / $8
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Pita} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Two Dips with Baked Pita / 180 gm<br></br>
                        ₹550 / $7
                        </Typography>
                    </CardActionArea>
                </Stack>
                <Stack sx={{marginTop:'20px'}} direction="row" className='foodstack1' id="Snacks">
                <CardActionArea>
                        <CardMedia component="img"image={Kebab} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Hara Bhara Kebab / 100 gm<br></br>
                        ₹450 / $6
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Somosa1} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Aloo Mini Samosas / 100 gm<br></br>
                        ₹400 / $5
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Cutlet} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Park Street Chicken Cutlet / 100 gm<br></br>
                        ₹500 / $7
                        </Typography>
                    </CardActionArea>
                    <CardActionArea>
                        <CardMedia component="img"image={Biscut} id="foods1"/><br></br>
                        <Typography variant="body2" color="text.secondary" id="foods1" >
                        Chocolate Chip Cookies / 20 gm<br></br>
                        ₹200 / $3
                        </Typography>
                    </CardActionArea>
                </Stack>
                </div>
                </div>
            </div>
    
      
      
    </Box>
  );
}

Food.propTypes = {
  window: PropTypes.func,
};

export default Food;
