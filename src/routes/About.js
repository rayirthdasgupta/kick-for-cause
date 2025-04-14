import React from 'react'
import Navbar from '../components/Navbar.js';
//import Footer from '../components/Footer.js';
import HeroImg2 from '../components/HeroImg2.js';

const About = () => {
  return <div>
    <Navbar/>
    
    <HeroImg2 heading = "ABOUT US." text="
    We are a non-profit! So far, we have raised $3,000 and all our proceeds continue to go towards improving field-conditions across Washington to increase accessibility for under-funded communities! At the Kick for Cause Sports Camp, your kids get quality soccer training from our well experienced trainers. While camp attendees will recieve focused training, there will also be fun activities spread throughout the camp to ensure the kids have a blast! Learn about our trainers in the 'Meet The Team' section!"/>
    {/*<AboutContent/>*/}
    {/*<Footer/>*/}
  </div>
}

export default About