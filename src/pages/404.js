import React from 'react';
import Layout from '../components/Layout';
import SlideShow from '../components/SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/oops.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};


const NotFoundPage = () => (
  <Layout darkText>
    <h1>Oops</h1>
    <p>This part of the site doesn't exist!</p>
    <SlideShow settings={settings} />
  </Layout>
);

export default NotFoundPage;
