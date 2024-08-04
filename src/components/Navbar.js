import "./NavbarStyles.css"

import React, {useState} from 'react'
import {Link} from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";
//import { useSelector } from "react-redux";


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        } else{
            setColor(false)
        }
    };
    window.addEventListener("scroll", changeColor);
    //const {cartTotalQuantity} = useSelector(state => state.cart)
  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Kick for Cause</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/team">Meet The Team</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}
            }/>) : (<FaBars size={20} style={{color: "#fff"}
        }/>)}
            
            
        </div>

    </div>
  )
}

export default Navbar
