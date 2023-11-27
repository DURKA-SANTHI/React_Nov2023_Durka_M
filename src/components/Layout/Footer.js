import React from 'react';
import {Box, Typography,} from '@mui/material';
import {Container } from '@mui/material';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
    const imageStyle = {
      maxWidth: '100%',
     Height:'25px',
      borderRadius: '10px',
    };
   
    const gallerySectionStyle1 = {
      backgroundColor: 'white', 
      padding: '10px',
      color:'white',
      textAlign: 'center',
      marginBottom: '70px',
      marginTop:'5px'
      
      
    };
  
    const galleryBoxStyle = {
      
      marginBottom: '20px',
      padding: '10px',
      textAlign:'center',
      color:'black',
      fontSize:'30px'
    
  
    };
  return (
    <>
        <div>
          <br></br>
          <br></br>
          <br></br>
        <Box sx={gallerySectionStyle1} id="about" >
        <Container style={{backgroundColor:"grey"}}>
          
        <Typography >
          <h1 >We've been serving people for a long time</h1>
          <p style={{marginTop:"20px"}}>Dineplan is one  of the world’s best restaurants . </p>
         <p style={{marginTop:"20px"}}>Over 2,000 people's use Dineplan everyday to streamline their reservations, drive traffic through their doors, and save time and money. We are only happy if they are happy.</p>
        </Typography>
          
        <Box sx={{padding:"20px"}}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Box >
                <Typography variant="body2" color="inherit">
                <p style={{fontSize:"30px", color:"black"}}>12,000+</p>
                 <p>
                 RESTAURANT CLIENTS </p>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box >
                <Typography variant="body2" color="inherit">
                <p style={{fontSize:"30px", color:"black"}}>7+</p>
                  <p>CUISINE</p>
                </Typography>
              </Box>
            </Grid>
        
            <Grid item xs={12} md={4}>
              <Box >
                <Typography variant="body2" color="inherit">
                 <p style={{fontSize:"30px", color:"black"}}>10,000</p>
                 <p>
                 BOOKINGS PER DAY </p>
                </Typography>
              </Box>
            </Grid>
       
            <Grid item xs={12} md={4}>
              <Box >
              
                <Typography variant="body2" color="inherit">
                <p style={{fontSize:"30px", color:"black"}}>500,000</p>
                  <p>DINEPLAN GUEST PROFILES</p>
                </Typography>
              </Box>
            </Grid>
      
            <Grid item xs={12} md={4}>
              <Box >
                <Typography variant="body2" color="inherit">
                <p style={{fontSize:"30px", color:"black"}}>95%</p>
                  <p>CLIENT SATISFACTION SCORE</p>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box >
                <Typography variant="body2" color="inherit">
                <p style={{fontSize:"30px", color:"black"}}>2,500,000</p>
                  <p>COVERS PER MONTH</p>
                </Typography>  
              </Box>
            </Grid>
          
          </Grid>
        </Container>
      </Box>
        </Container>
      </Box>
    
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
    <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are Delicio company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Paris, Eruope
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: delicioatyourservice@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        
    </Container>
    </Box>
    </div>
        
    </>
  );
}

export default Footer;