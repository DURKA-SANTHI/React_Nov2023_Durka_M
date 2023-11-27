/*import React from 'react';
import Layout from '../components/Layout/Layout';

const contact = () => {
  return (
    <Layout>
         <div className='contact' >
          <div className='contactcontain'>
            <h1>CONTACT US</h1>
            <p>If you have questions or comments regarding your reservations,the websites and<br></br> its functionality,our loyalty scheme, development or franchises,whether you are a customer or<br></br> a member of the pree ,please contact us.</p>
          </div>
        </div>
    </Layout>
  )
}

export default contact;*/
import React from "react";
import Layout from "./../components/Layout/Layout";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Typography,
  Container,Grid,Button,TextField

} from "@mui/material";

const Contact = () => {
  const galleryBoxStyle = {
    
    marginBottom: '20px',
    padding: '40px',
    textAlign:'center',
    color:'black',
    fontSize:'30px',
    backgroundColor:'white',
    maxWidth: '100%',
  

  };
  const imageStyle = {
   Height:'25px',
    borderRadius: '10px',
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
  };
  return (
    <Layout>
     <div className="contact">
       <Container style={{marginTop:"40px"}}> 
          <Grid container spacing={9}>
            {/* Box 1 */}
            <Grid item xs={12} md={6} >
              <Box sx={galleryBoxStyle}>
             
     
            <Typography variant="h5" color="text.primary" gutterBottom>
            <h2>GET IN TOUCH</h2>
            </Typography>
            <Typography color="text.secondary">
             <p style={{fontSize:"19px"}}>Delicio, 123 Main Street, Paris, UK.
             <br></br>
              Email: delicioatyourservice@gmail.com
          
              </p>
            </Typography>
            <br></br>
            <Typography>
              <p style={{fontSize:"19px",textAlign:"left"}}>
              Contact <br></br>
+33 123 456 7890
              </p>
            </Typography>
          
            <br></br>
            <Typography>
              <p style={{fontSize:"15px",textAlign:"left"}}>
              If you have questions or comments, please get a hold of us in whichever way is most convenient. Ask away.</p>
            </Typography>
          
            <br></br>
            <Typography>
              <p style={{fontSize:"15px",textAlign:"left"}}>
              You can give us a ring on There is no reasonable question that our team can not answer </p>
            </Typography>
           <br></br>
            <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
              </Box>
             
            </Grid>
            {/* Box 2 */}
            <Grid item xs={12} md={6}>
              <Box sx={galleryBoxStyle}>
              <Container maxWidth="md" sx={{ mt: 4 }}>
      
      
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          required
        />
        <TextField
          label="Enter you Comments"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
      </Container>
        </Box>
            </Grid>
            
          </Grid>
        
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;