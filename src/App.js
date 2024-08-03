import React from "react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./routes/Home.js"
import About from "./routes/About.js"
import Contact from "./routes/Contact.js"
import {Route, Routes} from "react-router-dom"
import { BrowserRouter, Switch, redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";



function App() {
  
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      
    </Routes>
    </>
  );
}

export default App;
