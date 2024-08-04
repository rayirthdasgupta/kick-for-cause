import React from "react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./routes/Home.js"
import About from "./routes/About.js"
import Contact from "./routes/Contact.js"
import {Route, Routes} from "react-router-dom"
//import { BrowserRouter, Switch, redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MeetTheTeam from "./routes/MeetTheTeam.js";



function App() {
  
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path = "/team" element = {<MeetTheTeam/>} />
      
      
    </Routes>
    </>
  );
}

export default App;
