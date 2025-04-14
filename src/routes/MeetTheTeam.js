import React from 'react'
import Navbar from '../components/Navbar.js';
//import Footer from '../components/Footer.js';
//import HeroImg2 from '../components/HeroImg2.js';
import "../components/MeetTheTeamStyles.css"
import RayImg from "../assets/IMG_0834.jpg"
import AndrewImg from "../assets/AndrewImg.jpeg"
import MatthiasImg from "../assets/matthiasimg.jpeg"
import YechanImg from "../assets/YechanImg.jpeg"
import AnkitImg from "../assets/AnkitImg.jpeg"

const MeetTheTeam = () => {
  return <div>
    <Navbar/>
    <div className='headerss'><h1>THE TEAM</h1></div>
    <div className='team-item'>
    <div className='rayirth'>
        <img src={RayImg} alt = "oops"/>
        <h1>Rayirth Dasgupta</h1>
        <p>Hello! My name is Rayirth or Ray, and I am an incoming sophomore at Skyline High School! I've been playing soccer for 10 years now, starting in the recreational level, and then moving to ISC Gunners, then Eastside, and then to my current club, Crossfire! Currently I play for Crossfire Premier 09 Academy ECNL. In my free time, other than playing soccer, I love being in the outdoors, going to the gym, and spending time with friends and family. I love all sports which is why I enjoy teaching younger kids to love sports too! I am looking forward to our upcoming camps! I will put a focus on teaching kids to have a good work-ethic and teaching them to learn how to motivate themselves.</p>
        </div>
        <div className='matthias'>
        <img src={MatthiasImg} alt = "oops"/>
        <h1>Matthias Rojas</h1>
        <p>I’m Matthias Rojas a student currently attending skyline high school.  I enjoy playing sports like basketball, pickleball, and especially soccer. I play soccer for Western Washington Surf 08 EA. All of the sports have taught me valuable lessons about teamwork, communication, and perseverance, which I would like to pass on to the younger generation. These skills can not only help players during sports but ultimately throughout the journey of life.
        </p>
        </div>
        <div className='yechan'>
        <img src={YechanImg} alt = "oops"/>
        <h1>Yechan Park</h1>
        <p>What's up! I’ve been playing competitive soccer for over nine years, starting with Calgary Blizzard, one of the top youth clubs in Alberta, where I played for more than five years. After moving on from Blizzard, I continued to develop my skills with ISC Gunners Premier 09 A in the Elite Academy (EA) league and Bellevue XL. In addition to soccer, I have experience working with and mentoring children. I’ve taught swim lessons at my local pool and volunteered at a YMCA youth camp, giving me the opportunity to help guide and support young kids in both athletic and social environments. Through this nonprofit, I’m excited to give back to the community and help create opportunities for the next generation of young athletes to develop, grow, and find their passion for the game.</p>
        </div>
        <div className='andrew'>
        <img src={AndrewImg} alt = "oops"/>
        <h1>Andrew Wang</h1>
        <p>Hey! My name is Andrew and I’m a sophomore at Skyline High School. I’ve been playing soccer for eleven years now, starting with Lil’ Kickers at Arena Sports! Later, I spent nine years playing for ISC Gunners before moving on to high school soccer. I hope to give back to this amazing sport by doing this, a sport that has taught me so much, and a sport that I hope will teach you so much as well. In my free time, I enjoy biking, robotics, and reading.</p>
        </div>
        <div className='ankit'>
        <img src={AnkitImg} alt = "oops"/>
        <h1>Ankit Kolagotla</h1>
        <p>Hi, I’m Ankit—a sophomore in high school at Skyline. I’ve been playing competitive soccer for almost 10 years and currently compete in the ECNL league on Snohomish United. Soccer has always been a huge part of my life, and I’ve gained a lot of experience working with kids through tutoring, coaching at camps, and volunteering. I love to share my passion and help make the sport more accessible, inclusive, and impactful for others.</p>
        </div>
       

    </div>
    
    
    {/*<AboutContent/>*/}
    {/*<Footer/>*/}
  </div>
}

export default MeetTheTeam