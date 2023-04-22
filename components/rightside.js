import React, { Component } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box } from '@mui/material';

class Right extends Component {
    state = {  } 
    render() { 
        return (
           <Box flex={1}>
                <Box sx={{ width: 500, height: 500, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.place} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
           </Box>
        );
    }
}
const itemData = [
    {
      img: 'https://www.bing.com/th?id=OIP.xcX_gmu1argDDE9Insd9aQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2',
      place: 'Taj Mahal',
    },
    {
        img: 'https://discoveryouritaly.com/wp-content/uploads/2017/05/Colosseum-in-Rome-Italy.jpg',
      
      place: 'Rome',
    },
    {
      img: 'https://th.bing.com/th/id/R.1d313ef24627fd8970f7fd2d5b67e725?rik=V64VutAcQgSzKw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-_Xolwb8Wkyc%2fU7eutFEubbI%2fAAAAAAAAAG8%2fgapeDXUyUkI%2fs1600%2froopkund-trek-trekkers-at-roopkund.jpg&ehk=UNlI01lsrkKt48li3rLlMK8m%2fb2ykywgrFyGXfgdhf0%3d&risl=&pid=ImgRaw&r=0',
      
      place: 'Manali',
    },
    {
      img: 'https://www.ideasonstage.com/img/news/pyramid-principle.jpg',
      
      place: 'Egypt',
    },
    {
      img: 'https://th.bing.com/th/id/R.5d26f0a3aadce4ac5a1d6aa6b94191a0?rik=Re6WH1d420OrdA&riu=http%3a%2f%2fwww.hotelnewsme.com%2fwp-content%2fuploads%2f2016%2f08%2fturkey-country.jpg&ehk=pppVugkatyEbF3CAk%2fgjGpDldryuYIaN%2fEfiP7S3doY%3d&risl=&pid=ImgRaw&r=0',
      
      place: 'Turkey',
    },
    {
      img: 'https://cdn.emiratesnbd.com/en/assets/images/prop_home_top_banner_en.jpg',
      
      place: 'Dubai',
    },
    {
      img: 'https://th.bing.com/th/id/R.01e8469b24d63e12efb9ba8b0afcd41d?rik=mnesw6jq7XsqbQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f36300000%2fParis-image-paris-36331154-1024-680.jpg&ehk=%2fHtkd3gLqTha4Ct42nA55%2br1WHQmhhH6yWSGFdtmuOk%3d&risl=&pid=ImgRaw&r=0',
      
      place: 'Paris',
    },
    {
      img: 'https://th.bing.com/th/id/R.1e31176051bd158dbbc964c934396156?rik=gf39P%2fJXo2S2Sg&riu=http%3a%2f%2ffcl-media.s3-website-us-east-1.amazonaws.com%2fAU%2fFC%2fFlight_klview.jpg&ehk=E5Qv61uyQ9d%2bjCeRCB2E6Afcd1k90QN1XCTmvWg6xIY%3d&risl=&pid=ImgRaw&r=0',
      
      place: 'Malaysia',
    },
    
    {
      img: 'https://th.bing.com/th/id/R.88fa7b52d535c1f910e9165a516558d9?rik=5dBsIPDGeA%2bQOg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-HCJkZwvg4JU%2fU3jWDyX3e6I%2fAAAAAAAAFR8%2faeIpszJ00Pk%2fs1600%2fstatue-of-liberty.jpg&ehk=I3Qk%2bLYTPdrW6bY5VzCav%2bTp6d9x465DxIYzIA20bH0%3d&risl=&pid=ImgRaw&r=0',
      
      place: 'New York',
    },
    {
      img: 'https://images.movehub.com/wp-content/uploads/2017/10/14114507/Singapore-2.jpg',
      
      place: 'Singapore',
    },
    {
      img: 'https://www.planetware.com/wpimages/2018/09/china-attractions-leshan-giant-buddha.jpg-.jpg',
      
      place: 'China',
    },
  ];
 
export default Right;