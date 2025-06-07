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
import AdamImg from "../assets/AdamImg.jpeg"
import SaaqibImg from "../assets/SaaqibImg.jpeg"

const MeetTheTeam = () => {
  return <div>
    <Navbar/>
    <div className='headerss'><h1>THE TEAM</h1></div>
    <div className='team-item'>
    <div className='rayirth'>
        <img src={RayImg} alt = "oops"/>
        <h1>Rayirth Dasgupta - Co-Founder and Coach</h1>
        <p>Hello! My name is Rayirth or Ray, and I am a sophomore at Skyline High School! I've been playing soccer for 10 years now, starting in the recreational level, and then moving to ISC Gunners, then Eastside, and then to my current club, Crossfire! Currently I play for Crossfire Premier 09 Academy ECNL. In my free time, other than playing soccer, I love being in the outdoors, going to the gym, and spending time with friends and family. I love all sports which is why I enjoy teaching younger kids to love sports too! I am looking forward to our upcoming camps! I will put a focus on teaching kids to have a good work-ethic and teaching them to learn how to motivate themselves.</p>
        </div>
        <div className='matthias'>
        <img src={MatthiasImg} alt = "oops"/>
        <h1>Matthias Rojas - Co-Founder and Coach</h1>
        <p>I’m Matthias Rojas a student currently attending skyline high school.  I enjoy playing sports like basketball, pickleball, and especially soccer. I play soccer for Western Washington Surf 08 EA. All of the sports have taught me valuable lessons about teamwork, communication, and perseverance, which I would like to pass on to the younger generation. These skills can not only help players during sports but ultimately throughout the journey of life.
        </p>
        </div>
        <div className='yechan'>
        <img src={YechanImg} alt = "oops"/>
        <h1>Yechan Park - Co-founder and Coach</h1>
        <p>What's up! I’ve been playing competitive soccer for over nine years, starting with Calgary Blizzard, one of the top youth clubs in Alberta, where I played for more than five years. After moving on from Blizzard, I continued to develop my skills with ISC Gunners Premier 09 A in the Elite Academy (EA) league and Bellevue XL. In addition to soccer, I have experience working with and mentoring children. I’ve taught swim lessons at my local pool and volunteered at a YMCA youth camp, giving me the opportunity to help guide and support young kids in both athletic and social environments. Through this nonprofit, I’m excited to give back to the community and help create opportunities for the next generation of young athletes to develop, grow, and find their passion for the game.</p>
        </div>
        <div className='andrew'>
        <img src={AndrewImg} alt = "oops"/>
        <h1>Andrew Wang - File Manager and Coach</h1>
        <p>Hey! My name is Andrew and I’m a sophomore at Skyline High School. I’ve been playing soccer for eleven years now, starting with Lil’ Kickers at Arena Sports! Later, I spent nine years playing for ISC Gunners before moving on to high school soccer. I hope to give back to this amazing sport by doing this, a sport that has taught me so much, and a sport that I hope will teach you so much as well. In my free time, I enjoy biking, robotics, and reading.</p>
        </div>
        <div className='ankit'>
        <img src={AnkitImg} alt = "oops"/>
        <h1>Ankit Kolagotla - Co-founder and Coach</h1>
        <p>Hi, I’m Ankit—a sophomore in high school at Skyline. I’ve been playing competitive soccer for almost 10 years and currently compete in the ECNL league on Snohomish United. Soccer has always been a huge part of my life, and I’ve gained a lot of experience working with kids through tutoring, coaching at camps, and volunteering. I love to share my passion and help make the sport more accessible, inclusive, and impactful for others.</p>
        </div>
        <div className='adam'>
        <img src={AdamImg} alt = "oops"/>
        <h1>Adam Shahpurwala - Coach</h1>
        <p>Hi! My name is Adam, and I’m a sophomore at Skyline High School. I’ve been playing soccer for 11 years and have been a goalkeeper for 9 years. I started out at ISC Gunners, then moved to Eastside where I currently play for the 09 ECRL team. I’ve also been a part of the Skyline varsity team for both of my high school years so far. I have a lot of experience working with kids, especially through helping train goalkeepers at Eastside. Outside of soccer, I love being outdoors and spending time with my friends. I’m excited for our upcoming camps and can’t wait to help young players grow their passion for the game!</p>
        </div>
        <div className='saaqib'>
        <img src={SaaqibImg} alt = "oops"/>
        <h1>Saaqib Parvez - Coach</h1>
        <p>My name is Saaqib and I’m currently a sophomore at Skyline High School. I’ve been playing soccer for several years now, starting with Gunners and now playing for Surf. Soccer has been a huge part of my life and has taught me important lessons about teamwork, leadership, and dedication, all qualities I'm excited to pass on to younger kinds through Kicks for Cause. Outside of soccer, I enjoy working with people and being active in my community. I’ve gained professional experience working at Cold Stone Creamery, where I’ve developed strong communication skills, responsibility, and a good work ethic. As part of Kick for Cause, I’m focused on being a positive role model, staying committed, and helping create a fun and supportive environment for the kids we work with. I’m proud to be part of a team that’s using the game of soccer to make a difference.</p>
        </div>
       

    </div>
    
    
    {/*<AboutContent/>*/}
    {/*<Footer/>*/}
  </div>
}

export default MeetTheTeam