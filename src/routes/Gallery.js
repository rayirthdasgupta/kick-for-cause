import React from 'react';
import '../components/Gallery.css'; // create this file next
import Img1 from "../assets/camp1.jpeg"
import Img2 from "../assets/camp2.jpeg"
import Img3 from "../assets/camp3.jpeg"
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
        
        
        
      </div>
    </div>
  </div>;
    
};

export default Gallery;
