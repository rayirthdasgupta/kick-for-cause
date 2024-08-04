import React from 'react'
import Navbar from '../components/Navbar.js';
//import Footer from '../components/Footer.js';
import HeroImg2 from '../components/HeroImg2.js';
import "../components/MeetTheTeamStyles.css"
import RayImg from "../assets/IMG_0834.jpg"
import EricImg from "../assets/ericimg.jpeg"
import MatthiasImg from "../assets/matthiasimg.jpeg"
import DaanishImg from "../assets/daanishimg.jpeg"

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
        <div className='daanish'>
        <img src={DaanishImg} alt = "oops"/>
        <h1>Daanish Syed</h1>
        <p>My name is Daanish and I love sports! I’ve been playing soccer since I was 8 but started competitively at 12. I am currently playing for Crossfire Premier but I used to play for ISC Gunners. I am a student at Skyline High School and I played for their Varsity Soccer team! I also enjoy swimming, cooking, and hanging out with friends.</p>
        </div>
        <div className='eric'>
        <img src={EricImg} alt = "oops"/>
        <h1>Eric LaRusso</h1>
        <p>Hi! My name is Eric and I am a student at Skyline High School and I have loved playing sports since the age of four. I have experience playing soccer for a variety of local clubs, including ISC Gunners, Eastside FC, and currently Crossfire B09 ECNL Academy. I also enjoy running track, playing football, and fishing.</p>
        </div>
       

    </div>
    
    
    {/*<AboutContent/>*/}
    {/*<Footer/>*/}
  </div>
}

export default MeetTheTeam