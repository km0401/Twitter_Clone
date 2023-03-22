import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Divider from '@mui/material/Divider';

const appBar = () => {
  return (
    
      <ThemeProvider
        theme={createTheme({
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
          },
        })}
      >
      
        <AppBar position="fixed" elevation="0" color="primary" sx={{fontFamily:"Roboto", padding:"5px"}}>
        <Container maxWidth="lg">
          <Grid container spacing={0} sx={{ width: "100%" }}>
            {/* <Hidden mdDown> */}
              <Grid item lg={3} md={3} sm={2} xs={2} sx={{ p: 1 }}>
                <Box
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  sx={{ cursor: "pointer"}}
                >
                  <TwitterIcon color="accent" />
                </Box>
              </Grid>
            {/* </Hidden> */}
            {/* <Divider orientation="vertical" flexItem sx={{backgroundColor:"#273340",  borderRightWidth: 1}}/> */}
            <Grid item lg={6} md={6} sm={10} xs={10} sx={{ p: 1, borderRight:"0.1px solid #989fa6", borderLeft:"0.1px solid #989fa6"}}>
              <Box
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{ cursor: "pointer" }}
              >
                <Box>Home</Box>
                <Box>
                  <AutoAwesomeOutlinedIcon/>
                </Box>
              </Box>
            </Grid>
            <Hidden mdDown>
            {/* <Divider orientation="vertical" flexItem sx={{backgroundColor:"#273340", borderRightWidth: 1}}/> */}
              <Grid item lg={3} md={3} sm={2} xs={2} sx={{ p: 1 }}>
                <Box
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  sx={{ cursor: "pointer", marginLeft:"0px"}}
                >
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "20px",
                      backgroundColor: "#273340",
                      marginLeft: "25px",
                      width: "85%"
                    }}
                  >
                    <Box
                      sx={{
                        padding: "0px 8px",
                        height: "100%",
                        position: "absolute",
                        pointerEvents: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <SearchIcon color="white"/>
                    </Box>
                    <InputBase
                      sx={{
                        padding: "1px 1px 0px 0px",
                        paddingLeft: "35px",
                        width: "100%",
                        '::placeholder': {color:"white"},
                        color:"white",
                        fontSize:"15px"
                      }}
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    ></InputBase>
                  </Box>
                </Box>
              </Grid>
            </Hidden>
          </Grid>
          </Container>
        </AppBar>
      </ThemeProvider>
    
  );
};

export default appBar;
