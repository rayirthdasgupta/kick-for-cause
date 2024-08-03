import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro-img.png"
import SmallImg from "../assets/ERDM Sports (11).png"
import {Link} from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero"> 
      <div className="into-img">
        <img className="full-screen" src={SmallImg} alt="IntroImg"/>
      </div>
      {/*<div className="content">*/}
      <div className="content">
      <body>
      <h1>What, Where, When?</h1>
        <p>
          Here at the Kick for Cause Sports Camp, our 4 high school trainers teach kids attending the camp the fundamentals of sports like soccer and football. We incoorporate fun activities as well to help kids love sports! We hold two-week camps throughout the summer and hold trainings almost every weekend during the school year! Locations may vary throughout Sammamish, but often sessions will be held at Klahanie Park.
          </p>
          <h2>
            Coming Soon...
          </h2>
          <p>
            Our first camp will be held from August 5th to August 15th on weekdays excluding August 9th! All proceeds of this camp will be donated to UNICEF and Red Cross! The cost for enrollment is $200 for the whole camp!
          </p>
          {/*<h1>For more information look at our About page!</h1>*/}
  

        </body>

      </div>
        
        
        {/*<div>
            <Link to="/contact" className="btn">Contact</Link>
</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default HeroImg