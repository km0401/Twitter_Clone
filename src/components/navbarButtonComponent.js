import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid } from "@mui/material";

const theme = createTheme({      
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

const demo = [
  {
    title: "Home",
    icon: <HomeIcon sx={{ color: "white"}}/>,
  },
  {
    title: "Explore",
    icon: <TagIcon sx={{ color: "white"}}/>,
  },
  {
    title: "Notifications",
    icon: <NotificationsIcon sx={{ color: "white"}}/>,
  },
  {
    title: "Messages",
    icon: <MailIcon sx={{ color: "white"}}/>,
  },
  {
    title: "Bookmarks",
    icon: <BookmarksIcon sx={{ color: "white"}}/>,
  },
  {
    title: "Lists",
    icon: <ListAltIcon sx={{ color: "white"}}/>,
  },
  {
    title: "Profile",
    icon: <PersonOutlineIcon sx={{ color: "white"}}/>,
  },
  {
    title: "More",
    icon: <MoreHorizIcon sx={{ color: "white"}}/>,
  }
];

const navbarButtonComponent = () => {
  return (
    <div>
    {/* <Container> */}
    <ThemeProvider theme={theme}>
      {demo.map((each) => (
        <Box>
          <Button
            sx={{ mb: 0.3, color:"white", fontSize:"15px", fontWeight:"400", borderRadius:"17px"}}
            startIcon={each.icon}
            br={{ md: 10, xs: "50%" }}
            size='large'>
            <Hidden mdDown>{each.title}</Hidden>
          </Button>
          
          
          </Box>
      ))}
      <Hidden mdDown>
      <Button size='large' sx={{ padding:"7px 70px", mb: 0.3, backgroundColor:"#1D9BF0", color:"white", fontSize:"15px", fontWeight:"400", borderRadius:"20px"}}>Tweet</Button>
      </Hidden>
      <Hidden mdUp>
      <IconButton sx={{ backgroundColor:"#1D9BF0"}}>
            <AutoFixHighIcon sx={{color:"white"}} />
          </IconButton>
          </Hidden>
          
          <Grid container sx={{marginTop:"80px"}}>
          <Grid item>
          <AccountCircleIcon sx={{color:"white", fontSize:"35px"}}/>
          </Grid>
          <Hidden mdDown>
          <Box sx={{display:"flex", flexDirection:"column"}}>
          <Grid item sx={{fontSize:"13px", color:"white", fontWeight:"600", margin:"0 20px 10px 5px"}}>Khushi Mahawar
          <Box sx={{fontSize:"12px", color:"#7D8A96", fontWeight:"600"}}>@KhushiMahawar4</Box>
          </Grid>
          </Box>
          
          <Grid item>
            <IconButton><MoreHorizIcon sx={{color:"white"}}/></IconButton>
          </Grid>
          </Hidden>
          </Grid>
          </ThemeProvider>
          {/* </Container> */}
    </div>
  );
};

export default navbarButtonComponent;
