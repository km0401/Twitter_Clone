import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Box } from '@mui/material';
import TweetImage from "/public/image/1.jpg";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import FastForwardIcon from '@mui/icons-material/FastForward';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import UploadIcon from '@mui/icons-material/Upload';

const tweets = () => {
  return (
    <div>
        <Container sx={{padding:"10px", borderBottom:"0.1px solid #989fa6", paddingBottom:"20px"}}>
        <Grid container spacing ={2}>
        <Grid item>
        <Typography sx={{ fontSize: 14, fontWeight:"600" }} color="#989fa6" gutterBottom>
          Trending in India 
        </Typography>
        </Grid>
        <Grid item>
        <Typography sx={{ fontSize: 14, fontWeight:"600"  }} color="#1D9BF0">See more</Typography>
        </Grid>
        </Grid>
        
        <Grid container>
            <Grid item md={2}>
            <Avatar alt="Alvin" src={TweetImage} />
            </Grid>
            <Grid item md={10}>
            <Grid container spacing={2}>
            <Grid item>
            <Box sx={{display:"flex", flexDirection:"row"}}>
            <Typography sx={{margin:"1px 4px 3px 0px", color:"white", fontWeight:"600"}}>Alvin</Typography>
            <Typography sx={{margin:"1px 5px 3px 2px", color:"#989fa6"}}>@sondesix</Typography>
            <Typography sx={{margin:"1px 5px 3px 2px", color:"#989fa6"}}>20h</Typography>
            </Box>
             <Box ml={8}/>
            <Box sx={{color:"white", fontWeight:"400"}}>Just a reminder that Samsung and Google have Android phones, but Android phones are not only from Samsung and Google.</Box>
            </Grid>
            {/* <Grid item><MoreHorizIcon sx={{color:"#989fa6"}}/></Grid> */}
            </Grid>
            </Grid>
            
        </Grid>

        <Grid container spacing={5} sx={{marginLeft:"30px"}}>
        <Grid item><Checkbox icon={<ChatOutlinedIcon sx={{color:"white"}}/>} checkedIcon={<ChatIcon sx={{color:"white"}}/>} /></Grid>
        <Grid item><Checkbox icon={<FastForwardOutlinedIcon sx={{color:"white"}}/>} checkedIcon={<FastForwardIcon sx={{color:"white"}}/>} /></Grid>
            <Grid item><Checkbox icon={<FavoriteBorder sx={{color:"white"}}/>} checkedIcon={<Favorite sx={{color:"white"}} />} /></Grid>
            <Grid item><Checkbox icon={<UploadOutlinedIcon sx={{color:"white"}}/>} checkedIcon={<UploadIcon sx={{color:"white"}}/>} /></Grid>
        </Grid>
        </Container>


        


    </div>
  )
}

export default tweets