import React from 'react';
import '../components/Gallery.css'; // create this file next
import Img1 from "../assets/camp1.jpeg";
import Img2 from "../assets/camp2.jpeg";
import Img3 from "../assets/camp3.jpeg";
import Img4 from "../assets/camp4.jpeg";
import Img5 from "../assets/camp5.jpeg";
import Img6 from "../assets/camp6.jpeg";
import Img7 from "../assets/camp7.jpeg";
import Img8 from "../assets/camp8.jpeg";
import Img9 from "../assets/camp9.jpeg";
import Img10 from "../assets/camp10.jpeg";
import Img11 from "../assets/camp11.jpeg";
import Img12 from "../assets/camp12.jpeg";
import Img13 from "../assets/camp13.jpeg";
import Navbar from '../components/Navbar.js';

const Gallery = () => {
  return <div>
    <Navbar/>
    <div className="gallery-container">
      <h1 className="gallery-title">Camp Photo Gallery</h1>
      <div className="gallery-grid">
        <div className='gallery-item'>
        <img src={Img1} alt="Camp 1" />
        </div>
        <div className='gallery-item'>
        <img src={Img2} alt="Camp 2" />
        </div>
        <div className='gallery-item'>
        <img src={Img3} alt="Camp 3" />
        </div>
        <div className='gallery-item'>
        <img src={Img4} alt="Camp 4" />
        </div>
        <div className='gallery-item'>
        <img src={Img5} alt="Camp 5" />
        </div>
        <div className='gallery-item'>
        <img src={Img6} alt="Camp 6" />
        </div>
        <div className='gallery-item'>
        <img src={Img7} alt="Camp 7" />
        </div>
        <div className='gallery-item'>
        <img src={Img8} alt="Camp 8" />
        </div>
        <div className='gallery-item'>
        <img src={Img9} alt="Camp 9" />
        </div>
        <div className='gallery-item'>
        <img src={Img10} alt="Camp 10" />
        </div>
        <div className='gallery-item'>
        <img src={Img11} alt="Camp 11" />
        </div>
        <div className='gallery-item'>
        <img src={Img12} alt="Camp 12" />
        </div>
        <div className='gallery-item'>
        <img src={Img13} alt="Camp 13" />
        </div>
        
        
      </div>
    </div>
  </div>;
    
};

export default Gallery;
