import React from 'react'
import Navbar from '../components/Navbar.js';
//import Footer from '../components/Footer.js';
import HeroImg2 from '../components/HeroImg2.js';

const About = () => {
  return <div>
    <Navbar/>
    
    <HeroImg2 heading = "ABOUT US." text="We LOVE sports.
    We are a non-profit! All proceeds go to UNICEF and Red Cross! At the Kick for Cause Sports Camp, your kids get quality training for many sports but mostly soccer. While camp attendees will recieve training for sports, there will also be fun activities at the end! Learn about the camp leaders in the 'Meet The Team' section!"/>
    {/*<AboutContent/>*/}
    {/*<Footer/>*/}
  </div>
}

export default About