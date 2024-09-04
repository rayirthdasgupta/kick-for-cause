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
          Here at the Kick for Cause Sports Camp, our 4 high school trainers teach kids attending the camp the fundamentals of sports like soccer and football. We incoorporate fun activities as well to help kids love sports!
          </p>
          <h1>When?</h1>
            <p>We hold two-week camps throughout the summer and hold trainings almost every weekend during the school year!</p>
          <h1>Where?</h1>
            <p>Locations may vary throughout Sammamish, but often sessions will be held at Klahanie Park.</p>
          <h2>
            Coming Soon...
          </h2>
          <p>
            Summer is over! Throughout the school year we will be holding sessions on weekends for $20. Send us a text or email to enroll your child. All donations we recieve from this camp will be donated to UNICEF!
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