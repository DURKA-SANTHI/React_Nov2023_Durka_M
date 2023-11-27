import React from 'react';
import Layout from './../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <div className='about'>
        <Box>
          <h1>
             About us...
          </h1>
          <p>Welcome to [Restaurant Name], where culinary excellence meets unparalleled hospitality. Nestled in the heart of [City/Town], our restaurant is a haven for food enthusiasts seeking an unforgettable dining experience. At [Restaurant Name], we take pride in offering a diverse menu crafted with passion and precision, featuring a fusion of flavors that celebrate both local and international culinary traditions. Our dedicated team of chefs, committed to using the freshest, highest-quality ingredients, creates dishes that tantalize the taste buds and leave a lasting impression. Beyond our delectable cuisine, we invite you to savor the warm and inviting ambiance that defines our establishment. Whether you're celebrating a special occasion, hosting a business dinner, or simply craving an exceptional meal, our commitment to exceptional service ensures that every visit to [Restaurant Name] is a celebration of good food, great company, and memorable moments. Join us, and let us elevate your dining experience to new heights.</p>
        </Box>
        </div>
    </Layout>
  )
}

export default About;