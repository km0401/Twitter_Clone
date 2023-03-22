import React from 'react'
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Hidden } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from 'next/dist/client/image';

const card = () => {
  return (
    <div>
        {/* <Box sx={{borderRadius:"30px", width:"200px", backgroundColor:"#232C37"}}>
        <Box></Box>
        </Box> */}
        <Hidden mdDown>
        <Card elevation={0} sx={{ minWidth: 275, backgroundColor:"#232C37", borderRadius:"30px", padding:"5px"}}>
            <CardContent>
            <Typography sx={{ fontSize: 20, fontWeight:"600"}} color="white" gutterBottom>
          What's happening?
        </Typography>

        <Grid container spacing={12}>
        <Grid item>
        <Typography sx={{ fontSize: 13 }} color="#989fa6" gutterBottom>
          India National News Live
        </Typography>
        <Typography sx={{ fontSize: 15, fontWeight:"600" }} color="white" gutterBottom>
          Agneepath Scheme Protests Arson Continue
        </Typography>
        </Grid>
        {/* <Grid item><Image src="https://pbs.twimg.com/media/FVcZo0KUsAAKNXV?format=png&name=240x240" width="50px" height="50px"/></Grid> */}
        </Grid>
        
        <Grid container spacing={12}>
        <Grid item>
        <Typography sx={{ fontSize: 13 }} color="#989fa6" gutterBottom>
          Trending in India
        </Typography>
        </Grid>
        <Grid item><MoreHorizIcon sx={{color:"#989fa6"}}/></Grid>
        </Grid>
        <Typography sx={{ fontSize: 15, fontWeight:"600" }} color="white" gutterBottom>
          #UpBoard
        </Typography>
        

        <Grid container spacing={12}>
        <Grid item>
        <Typography sx={{ fontSize: 13 }} color="#989fa6" gutterBottom>
          Politics . Trending
        </Typography>
        </Grid>
        <Grid item><MoreHorizIcon sx={{color:"#989fa6"}}/></Grid>
        </Grid>
        <Typography sx={{ fontSize: 15, fontWeight:"600" }} color="white" gutterBottom>
        #pavagadhtemple
        </Typography>
        
        

        <Grid container spacing={12}>
        <Grid item>
        <Typography sx={{ fontSize: 13 }} color="#989fa6" gutterBottom>
          Events . Trending
        </Typography>
        </Grid>
        <Grid item><MoreHorizIcon sx={{color:"#989fa6"}}/></Grid>
        </Grid>
        <Typography sx={{ fontSize: 15, fontWeight:"600" }} color="white" gutterBottom>
        #YogaDay🧘
        </Typography>
        <Typography sx={{ fontSize: 13 }} color="#989fa6" gutterBottom>
        Trending with #InternationalDayofYoga🧘
        </Typography>
        
        
        
        
            </CardContent>
           
        </Card>
        </Hidden>
    </div>
  )
}

export default card

