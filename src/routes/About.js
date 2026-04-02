import React from 'react'
// import React from 'react'
import Navbar from '../components/Navbar.js';
import '../components/HeroImgStyles.css';
import Footer from '../components/Footer.js';

const Card = ({ icon, title, description }) => (
  <div className="card">
    <div className="card-icon">{icon}</div>
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  </div>
)

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="hero bg-gray-100 py-16 hero-about">
        <div className="content max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-white mb-8">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon="🤝"
              title="Who We Are"
              description={
                "Kicks for Cause is a youth-led nonprofit run by high school soccer players that uses the game to give back to the community. We offer affordable training sessions ($35 for 1.5 hours) coached by competitive players from ECNL and MLS Next levels."
              }
            />
            <Card
              icon="🎁"
              title="Our Mission"
              description={
                "All proceeds go toward donating soccer equipment to under-resourced schools. So far, we’ve donated more than $1,500 worth of equipment to schools in the Tacoma area."
              }
            />
            <Card
              icon="📍"
              title="Sessions & Locations"
              description={
                "Session times and locations are flexible and take place at fields across Issaquah. Our goal is to provide quality training while helping more kids get the chance to play."
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About