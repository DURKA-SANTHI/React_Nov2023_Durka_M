import React from 'react';
import Layout from './../components/Layout/Layout';
import {Link} from 'react-router-dom';



const Home = () => {
  return (
    <Layout>
        <div className='home' >
          <div className='headercontain'>
            <h1>Welcome To Delicio........</h1>
            <p>Its Time to DineOut</p>
            <Link to='/book'>
            <button> RESERVE NOW</button>
            </Link>
          </div>
        </div>
    </Layout>
  );
}

export default Home;