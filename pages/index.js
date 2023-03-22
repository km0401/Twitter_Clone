import Head from 'next/head'
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import styles from '../styles/Home.module.css'
import AppBar from '../src/components/appBar';
import TweetCard from '../src/page-components/tweetCard';
import NavbarButtonComponent from '../src/components/navbarButtonComponent';
import Container from "@mui/material/Container";
import Card from '../src/page-components/card';
import Tweets from '../src/page-components/tweets';

export default function Home() {
  return (
    <div style={{backgroundColor:"#15202B"}}>
      <AppBar className={styles.appbar}/>
      <Container>
      <Grid container sx={{marginTop:"50px"}}>
      <Grid item lg={3} md={3} sm={2} xs={2} sx={{position:"sticky"}}><NavbarButtonComponent/></Grid>
      <Grid 
      item lg={6} md={6} sm={10} xs={10} 
      sx={{borderRight:"0.1px solid #989fa6", borderLeft:"0.1px solid #989fa6", padding:"0 10px"}}>
      <TweetCard/>
      <Tweets/>
      </Grid>
      <Grid item lg={3} md={3} sm={2} xs={2} sx={{paddingLeft:"30px"}}><Card/></Grid>
      </Grid>
      </Container>
      
    </div>
  )
}
