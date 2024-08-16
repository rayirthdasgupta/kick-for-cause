import React from 'react';
import Navbar from '../components/Navbar.js';
import HeroImg from '../components/HeroImg.js';
import Footer from '../components/Footer.js';
import DonationCounter from '../components/DonationCounter.js';



const Home = () => {
    return (
        <div>
            
            
        <Navbar/>
        <DonationCounter />   
        <HeroImg/>
        <Footer/>
        </div>
    )
};

export default Home;