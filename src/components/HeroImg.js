import "./HeroImgStyles.css";

import React from 'react'
//import IntroImg from "../assets/intro-img.png"
import SmallImg from "../assets/3.png"
//import {Link} from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero"> 
      
      {/*<div className="content">*/}
      <div className="content">
      <body>
      <h1>What?</h1>
        <p>
          Here at the Kick for Cause Sports Camp, our team of 8 high school trainers teach kids attending the camp the fundamentals of soccer. We incorporate fun activities as well to keep the kids engaged and excited to improve! Our non-profit organization is dedicated to spreading the love of the beautiful game and all our proceeds are donated to improve field-conditions across Washington, making the game more accessible! All skill-levels are welcome and our coaches have lots of experience running these camps...
          </p>
          <h1>When?</h1>
            <p>Well... whenever you want! We train kids throughout the year, offering both private sessions, and group sessions. This summer, join us for our biggest project yet, where we will be holding 3-day camps every week from Tuesdays to Thursdays!</p>
          <h1>Where?</h1>
            <p>Locations may vary throughout Sammamish, but often sessions will be held at Klahanie Park, Beaver Lake Middle School, or Skyline High School.</p>
          <h2>
            Coming Soon...
          </h2>
          <p>
            Summer is almost here! More details regarding our summer camps will be released shortly. Send us a text or email to enroll your child. 
          </p>
          {/*<h1>For more information look at our About page!</h1>*/}
  

        </body>

      </div>
      <div className="into-img">
        <img className="full-screen" src={SmallImg} alt="IntroImg"/>
      </div>
        
        
        {/*<div>
            <Link to="/contact" className="btn">Contact</Link>
</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default HeroImg