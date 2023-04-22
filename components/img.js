import Flight from '../asests/flight.jpg';
import MessageIcon from '@mui/icons-material/Message';
import Card from '@mui/material/Card';
import { Box, Typography,Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
const Image = () => {
        return (
            <Box flex={2}>
            <Card>
                    <CardActionArea>
                            <CardMedia component="img" height="358" width="200" image={Flight} alt="green iguana"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Dragon Air
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Dragon Air, the National carrier of India, offers connections to over 70 
                                    International and Domestic destinations for your travel plane 
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <Box flex={1}>
                        <Box sx={{'& > legend': { mt: 2 }}}>
                            <Stack sx={{marginTop:'5px'}} direction="row" spacing={2} paddingLeft="40%" alignItems="center">  
                                <FavoriteIcon />
                                <Rating/>
                                <ShareIcon/>
                                <MessageIcon/>
                            </Stack>
                        </Box>
                    </Box>    
                </Card>
            </Box>
        );
    
}
 
export default Image;