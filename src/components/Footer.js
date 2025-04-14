import "./FooterStyles.css"

import React from 'react'
import {FaHome, FaPhone, FaMailBulk} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size = {20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Sammamish, Washington</p>

                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size = {20} style={{color: "#fff", marginRight: "2rem"}}/>
                425-738-2825</h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size = {20} style={{color: "#fff", marginRight: "2rem"}}/>
                kickforcausesportscamp@gmail.com</h4>
                
                </div>
            </div>
            <div className="right">
                <h4>About the camp</h4>
                <p>We love spreading the joy of soccer and teaching kids to enjoy training!</p>
                {/*<div className="social">
                <FaInstagram size = {30} style={{color: "#fff", marginRight: "1rem"}}/>
  </div>*/}
            </div>
        </div>
      
    </div>
  )
}

export default Footer