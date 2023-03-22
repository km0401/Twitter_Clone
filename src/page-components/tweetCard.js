import React from 'react'
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, IconButton, Container } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const theme = createTheme({      
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: "#15202B",
    },
    secondary: {
      main: "#1D9BF0",
    },
    accent:{
      main:"#fffff"
    }
  }
});

const tweetCard = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Container sx={{borderBottom:"0.1px solid #989fa6", paddingBottom:"20px"}}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
        <AccountCircleIcon sx={{ color: 'white', mr: 1, my: 0.5, fontSize:"44px" }} />
        <InputBase
        sx={{ ml: 1, mb:"10px", flex: 1, fontSize:"17px", '::placeholder': {color:"white"}, color:"white"}}
        placeholder="What's happening?"/>
      </Box>
      <Box sx={{ display: 'flex', justifyContent:"space-between", margin:"2px"}}>
      <Box sx={{ display: 'flex'}}>
      <Box mr={5}/>
      <IconButton sx={{color:"#1D9BF0", ':hover':{backgroundColor:"#556678"}}}><ImageIcon/></IconButton>
        <IconButton sx={{color:"#1D9BF0", ':hover':{backgroundColor:"#556678"}}}><GifBoxIcon/></IconButton>
        <IconButton sx={{color:"#1D9BF0", ':hover':{backgroundColor:"#556678"}}}><PollIcon/></IconButton>
        <IconButton sx={{color:"#1D9BF0", ':hover':{backgroundColor:"#556678"}}}><EmojiEmotionsOutlinedIcon/></IconButton>
        <IconButton sx={{color:"#1D9BF0", ':hover':{backgroundColor:"#556678"}}}><CalendarMonthOutlinedIcon/></IconButton>
        <IconButton sx={{color:"#1D9BF0", ':hover':{backgroundColor:"#556678"}}}><LocationOnOutlinedIcon/></IconButton>
      </Box>
        <Button size='large' sx={{ padding:"7px 10px", mb: 0.3, backgroundColor:"#1D9BF0", color:"white", fontSize:"13px", fontWeight:"400", borderRadius:"20px", alignSelf:"flex-end", margin:"0 10px"}}>Tweet</Button>
      </Box>
      </Container>
      </ThemeProvider>
    </div>
  )
}

export default tweetCard